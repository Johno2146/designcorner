#!/usr/bin/env bash
# Build the TanStack Start app and export a fully static, self-contained copy
# into ./xneelo/ — ready to upload to a plain static host (Xneelo public_html,
# or any nginx/Apache site) with no Node.js runtime required.
#
# How it works: TanStack Start (this version) has no SSG preset, so we build the
# SSR app normally, render every route through a render server, and save each
# page's HTML. Sub-pages are saved as <route>/index.html (directory index), so
# the site's clean links (/services, /portfolio, ...) work verbatim on any
# static host — no href rewriting needed. All client assets (assets/, images)
# are copied from dist/client alongside, and all asset paths in the HTML are
# root-relative, so the result is a self-contained static web root.
#
# Single-bundle build: the build below uses vite.static.config.ts, which makes
# Vite inline every dynamic import (the router's per-route chunks) into ONE
# entry JS file. Every page's HTML therefore references exactly one script (+
# CSS) and there are ZERO tiny per-route chunk files — immune to the
# "Failed to fetch dynamically imported module" failure seen on the live
# host, where two small chunks returned Apache 500. The default `bun run
# build` (vite.config.ts, code-split) is UNTOUCHED for the SSR preview.
#
# The render server is a dedicated one (render-server.ts on 127.0.0.1:3100),
# NOT serve.ts — serve.ts force-takes :3000 and must keep serving the platform
# preview. The export never touches :3000.
#
# Usage:  bash ./static-export.sh     (assumes `bun install` already done)
# Output: ./xneelo/  (its CONTENTS are what you upload to public_html)
set -euo pipefail
cd "$(dirname "$0")"

OUT="xneelo"
ROUTES=(services portfolio pricing testimonials about contact)
RENDER_PORT="${STATIC_EXPORT_PORT:-3100}"
RENDER_URL="http://127.0.0.1:${RENDER_PORT}"

echo "==> Building the app with the single-bundle static config (vite.static.config.ts)..."
bun run build --config vite.static.config.ts

echo "==> Starting the dedicated render server on ${RENDER_URL} ..."
pkill -f 'render-server.ts' 2>/dev/null || true
sleep 1
nohup bun run render-server.ts >/tmp/static-export-render.log 2>&1 &
SERVER_PID=$!
for _ in $(seq 1 30); do
  curl -sf --max-time 2 "${RENDER_URL}/" >/dev/null 2>&1 && break
  sleep 0.5
done
if ! curl -sf --max-time 2 "${RENDER_URL}/" >/dev/null 2>&1; then
  echo "!! Render server failed to start — see /tmp/static-export-render.log"
  kill "$SERVER_PID" 2>/dev/null || true
  exit 1
fi

echo "==> Prerendering pages into ${OUT}/ ..."
# Keep the host-required SEO files even though we regenerate the folder
# wholesale (they are not produced by the build):
SRC_SITEMAP="${OUT}/sitemap.xml"
SRC_ROBOTS="${OUT}/robots.txt"
TMP_SITEMAP="$(mktemp)"
TMP_ROBOTS="$(mktemp)"
cp "$SRC_SITEMAP" "$TMP_SITEMAP"
cp "$SRC_ROBOTS" "$TMP_ROBOTS"

rm -rf "$OUT"
mkdir -p "$OUT"

fetch_page() { # $1 = path  $2 = output file (already has its dir)
  # No -f: keep the body even for error statuses (e.g. the 404 probe).
  curl -s --max-time 30 "${RENDER_URL}/$1" > "$2"
}

fetch_page "" "$OUT/index.html"
for r in "${ROUTES[@]}"; do
  mkdir -p "$OUT/$r"
  fetch_page "$r" "$OUT/$r/index.html"
done

echo "==> Copying client assets (assets/, images) alongside the HTML..."
cp -a dist/client/. "$OUT/"

# Restore the host-required SEO files:
cp "$TMP_SITEMAP" "$OUT/sitemap.xml"
cp "$TMP_ROBOTS" "$OUT/robots.txt"
rm -f "$TMP_SITEMAP" "$TMP_ROBOTS"

# Custom 404 page (Apache/LiteSpeed shared hosts honour a top-level 404.html),
# styled with the app's own stylesheet so it matches the rest of the site.
CSS_FILE="$(ls dist/client/assets/app-*.css 2>/dev/null | head -1 | xargs -n1 basename 2>/dev/null || echo '')"
cat > "$OUT/404.html" <<EOF
<!DOCTYPE html><html lang="en-ZA"><head>
<meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Page not found — Design Corner</title>
<link rel="stylesheet" href="/assets/${CSS_FILE}"/>
<link rel="preload" as="image" href="/logo.png"/>
<style>body{background:linear-gradient(135deg,#0b1f3a 0%,#0e2a52 55%,#16356b 100%);min-height:100vh}</style>
</head><body class="flex min-h-dvh flex-col">
<main class="flex flex-1 flex-col items-center justify-center px-4 text-center" style="min-height:100vh">
  <img src="/logo.png" alt="Design Corner" width="132" height="100" class="h-20 w-auto"/>
  <p class="mt-8 text-7xl font-bold tracking-tight text-accent-400">404</p>
  <h1 class="mt-3 text-2xl font-bold text-white">Page not found</h1>
  <p class="mt-3 max-w-md text-gray-300">The page you're looking for doesn't exist or has moved.</p>
  <nav class="mt-8 flex flex-wrap items-center justify-center gap-4">
    <a href="/" class="rounded-lg bg-accent-800 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-900">Back to home</a>
    <a href="/contact" class="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 ring-1 ring-navy-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-50">Contact us</a>
  </nav>
</main>
</body></html>
EOF

echo "==> Stopping the render server (preview on :3000 untouched)."
kill "$SERVER_PID" 2>/dev/null || true
sleep 1

echo "==> Done. Upload the CONTENTS of ${OUT}/ to your host's public_html."
echo "    (single entry JS: $(ls "$OUT"/assets/index-*.js 2>/dev/null | wc -l | xargs) file(s))"
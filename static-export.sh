#!/usr/bin/env bash
# Build the TanStack Start app and export a fully static, self-contained copy
# into ./xneelo/ — ready to upload to a plain static host (Xneelo public_html,
# or any nginx/Apache site) with no Node.js runtime required.
#
# How it works: TanStack Start (this version) has no SSG preset, so we build the
# SSR app normally, render every route through the SSR server, and save each
# page's HTML. Sub-pages are saved as <route>/index.html (directory index), so
# the site's clean links (/services, /portfolio, ...) work verbatim on any
# static host — no href rewriting needed. All client assets (assets/, images)
# are copied from dist/client alongside, and all asset paths in the HTML are
# root-relative, so the result is a self-contained static web root.
#
# Usage:  bash ./static-export.sh     (assumes `bun install` already done)
# Output: ./xneelo/  (its CONTENTS are what you upload to public_html)
set -euo pipefail
cd "$(dirname "$0")"

OUT="xneelo"
ROUTES=(services portfolio pricing testimonials about contact)
PORT=3000

echo "==> Building the app (bun run build)..."
bun run build >/dev/null

# Restart the SSR render server: TanStack embeds per-build uid timestamps into
# the client chunks, so every `vite build` yields NEW asset filenames. The HTML
# must be rendered by a server running THIS build, or the HTML and the copied
# dist/client assets will reference different files (404s on a static host).
pkill -f 'bun run serve.ts' 2>/dev/null || true
sleep 1
nohup bun run serve.ts >/tmp/static-export-serve.log 2>&1 &
SERVER_PID=$!
for _ in $(seq 1 30); do
  curl -sf --max-time 2 "http://localhost:${PORT}/" >/dev/null 2>&1 && break
  sleep 0.5
done
STARTED_BY_US=1

echo "==> Prerendering pages into ${OUT}/ ..."
rm -rf "$OUT"
mkdir -p "$OUT"

fetch_page() { # $1 = path  $2 = output file (already has its dir)
  # No -f: keep the body even for error statuses (e.g. the 404 probe).
  curl -s --max-time 30 "http://localhost:${PORT}/$1" > "$2"
}

fetch_page "" "$OUT/index.html"
for r in "${ROUTES[@]}"; do
  mkdir -p "$OUT/$r"
  fetch_page "$r" "$OUT/$r/index.html"
done

echo "==> Copying client assets (assets/, images) alongside the HTML..."
cp -a dist/client/. "$OUT/"

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

echo "==> Done. Upload the CONTENTS of ${OUT}/ to your host's public_html."
# Restore the platform preview server exactly as it was: after rendering, start
# a fresh serve.ts so the preview keeps working on :3000.
echo "==> Restarting the platform preview server on :${PORT}."
kill "$SERVER_PID" 2>/dev/null || true
sleep 1
nohup bun run serve.ts >>/tmp/static-export-serve.log 2>&1 &
sleep 2
curl -sf --max-time 5 "http://localhost:${PORT}/" >/dev/null 2>&1 \
  && echo "==> Preview server back up on :3000." \
  || echo "!! Preview server check failed — see /tmp/static-export-serve.log"
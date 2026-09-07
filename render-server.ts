// Static-export render server (used ONLY by static-export.sh).
//
// serve.ts is deliberately pinned to :3000 and force-takes the port, which is
// exactly what the platform preview needs — but the static export must NOT
// touch that server. This file is a non-disruptive twin: it imports the same
// built SSR handler from dist/server, serves the same dist/client assets, and
// binds ONLY 127.0.0.1:<port> (default 3100). The export script starts it
// AFTER `vite build` (per-build asset hashes) and kills it when done, so the
// preview on :3000 is never touched.
import handler from "./dist/server/server.js";

const PORT = Number(process.env.STATIC_EXPORT_PORT ?? 3100);
const CLIENT_DIR = `${import.meta.dir}/dist/client`;

const server = Bun.serve({
  port: PORT,
  hostname: "127.0.0.1",
  async fetch(req) {
    const { pathname } = new URL(req.url);
    // Serve built client assets directly (same policy as serve.ts); everything
    // else goes through the SSR handler which renders the full HTML.
    if (pathname !== "/") {
      const file = Bun.file(CLIENT_DIR + pathname);
      if (await file.exists()) return new Response(file);
    }
    return (handler as { fetch: (r: Request) => Response | Promise<Response> }).fetch(req);
  },
});

console.log(`static-export render server on http://127.0.0.1:${String(PORT)}`);
console.log(`(pid ${String(process.pid)} — do not run this against the :3000 preview)`);
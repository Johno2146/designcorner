// Static-export build config (used ONLY by static-export.sh).
//
// The default `bun run build` (vite.config.ts) keeps TanStack Start's normal
// code-split output — every route becomes its own JS chunk and the browser
// loads them with dynamic import(). That is fine for the SSR preview, but on
// plain static hosts (Xneelo/Apache) every extra chunk is another file that
// can fail to load — the live site hit exactly that (two tiny chunks returned
// Apache 500, breaking client-side navigation with "Failed to fetch
// dynamically imported module").
//
// This config produces ONE entry JS bundle instead: all route modules are
// inlined into the single entry (inlineDynamicImports), no manualChunks, no
// sourcemaps. Every page's HTML then references the single entry script (+
// CSS) only — zero dynamic chunks, so that class of failure cannot happen.
//
// Do NOT modify vite.config.ts; the platform preview keeps the code-split
// build untouched. Rebuild the export with:  bash ./static-export.sh
import { defineConfig } from "vite";
import baseConfig from "./vite.config";

export default defineConfig({
  ...baseConfig,
  build: {
    ...baseConfig.build,
    // No sourcemaps in the shipped bundle — smaller and one less file class.
    sourcemap: false,
    rollupOptions: {
      ...baseConfig.build?.rollupOptions,
      output: {
        ...(baseConfig.build?.rollupOptions as { output?: Record<string, unknown> })?.output,
        // Inline every dynamic import (the router's per-route chunks) into the
        // single entry so only one JS file is emitted for the whole site.
        inlineDynamicImports: true,
        // Disable any chunk splitting/grouping — one output file per env.
        manualChunks: undefined,
      },
    },
  },
});
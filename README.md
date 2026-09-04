# Design Corner — Website

This repository contains the complete source code for the **Design Corner**
website (a multi-page marketing site for the Design Corner web design &
development business in George, South Africa), **plus** a ready-to-upload
static build of the whole site.

The site has 7 pages: **Home**, **Services**, **Portfolio**, **Pricing**,
**Testimonials**, **About** and **Contact**, styled in navy + orange, fully
mobile-first, with a working contact form (leads go to Formspree).

---

## What's in this repo

| Path | What it is | Do you need it? |
| --- | --- | --- |
| `xneelo/` | **The finished website.** HTML, CSS, JS and images — everything a web host needs to show the site. | ✅ **Yes — this is what you upload.** |
| `src/`, `public/`, `package.json`, `bun.lock`, `vite.config.ts`, … | The source code the site is built from (TanStack Start / React / Tailwind). | Only if a developer needs to edit the site. |
| `static-export.sh` | The script that rebuilds the `xneelo/` folder from the source. | Only for developers. |
| `SITE.md` | Framework notes for developers. | Only for developers. |

---

## How to put the site on Xneelo (the simple way)

You only need the **`xneelo/` folder** — it is a fully static website that runs
on any standard web host with **no special software** (no Node.js, no database).

1. **Download this repository** as a ZIP (green *Code* button → *Download ZIP*)
   and unzip it.
2. Open the unzipped folder and go into the **`xneelo`** folder.
3. **Upload the *contents* of the `xneelo` folder** into your hosting
   account's **`public_html`** folder (the folder your domain points at on
   Xneelo). Use Xneelo's file manager or any FTP program (for example
   FileZilla) — drag the *contents* (`index.html`, `assets/`, `about/`,
   `services/`, `contact/`, …), not the `xneelo` folder itself.
   - If `public_html` already contains the default Xneelo placeholder page,
     replace/delete those files first.
4. That's it. Your domain now shows the Design Corner site. If your domain was
   set up recently, give DNS a few minutes to catch up.

The contact form needs **no setup**: it sends messages to the Design Corner
Formspree inbox over the public internet, just like any normal form on a
static site.

---

## For developers: rebuilding the site after a change

The `xneelo/` folder is generated from the source. After editing the source
(under `src/`), rebuild it with:

```bash
bun install          # first time only
bash ./static-export.sh
```

What the script does: builds the app (`bun run build`), starts the site
server, renders every page to plain HTML (saved as `index.html`,
`services/index.html`, `portfolio/index.html`, etc.), copies all CSS, JS and
images alongside, and adds a matching `404.html`. The result lands in
`xneelo/` — upload its contents to `public_html` as described above.

> Note: it is normal for the asset filenames inside `assets/` to change with
> every rebuild (they are version-hashed). Just replace the whole contents of
> `public_html` with the new `xneelo/` contents.

Daily development still uses the normal commands — `bun run dev` for
hot-reload and `bun run build` / `bun run start` for the SSR site served on
port 3000. The static export is a separate step; the Xneelo folder is the
only thing the static host needs.
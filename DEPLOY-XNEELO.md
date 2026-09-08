# Re-upload the site to Xneelo (fix for broken images)

Use these steps if some images on the live site are broken (for example the
Services page cards). The website files themselves are fine — this almost
always means one or two files on the server were uploaded incompletely or
with the wrong permissions. A fresh, clean re-upload fixes it.

## What you need

- The `xneelo` folder from this repository (download the repo as a ZIP from
  GitHub: green **Code** button → **Download ZIP**, unzip it, open the
  `xneelo` folder). That folder **is** the whole website.
- Access to your Xneelo hosting account (konsoleH → **File Manager**, or an
  FTP program such as FileZilla).

## Steps (do them in this order)

1. **Delete everything inside `public_html`.**
   In File Manager, open the `public_html` folder, select ALL files and
   folders inside it, and delete them. (Do not delete `public_html` itself —
   just its contents.) Starting clean is important: it removes any half-
   uploaded or wrongly-permissioned copies left over from before.

2. **Upload the FULL contents of the `xneelo` folder, fresh.**
   Upload *everything* inside `xneelo` — `index.html`, the folders `about/`,
   `services/`, `portfolio/`, `pricing/`, `testimonials/`, `contact/`,
   `assets/`, all the `.webp` images, `logo.png`, `sitemap.xml`,
   `robots.txt` and `404.html` — into the now-empty `public_html`.
   Upload the *contents*, not the `xneelo` folder itself: `index.html` must
   sit directly inside `public_html`.
   - If your FTP program asks about overwriting, there should be nothing to
     overwrite (you emptied the folder in step 1).
   - Wait until every file has finished uploading before testing — a file
     that is still uploading will look broken.

3. **Set permissions: all files 644, all folders 755.**
   This is the most likely cause of the broken images, so do not skip it.
   - In Xneelo File Manager: select everything inside `public_html`,
     choose **Permissions** (right-click → Change Permissions), and set
     files to **644** and folders to **755**. (In FileZilla: right-click the
     `public_html` contents → **File permissions**, enter **644**, tick
     **Recurse into subdirectories → Files only**, OK — then repeat with
     **755** and **Directories only**.)
   - Every image (`.webp`, `.png`) must be **644**. A file with wrong
     permissions shows as an error even though it is really there.

4. **Hard refresh your browser.**
   Press **Ctrl + Shift + R** (Windows) or **Cmd + Shift + R** (Mac) on the
   Services page, or test in a private/incognito window. This makes sure you
   see the new files, not a cached copy of the broken page.

## How to check it worked

Open each of these addresses in your browser — every one should show the
image (HTTP 200), not an error page:

- https://designcorner.co.za/card-design.webp
- https://designcorner.co.za/card-dev.webp
- https://designcorner.co.za/card-ecom.webp
- https://designcorner.co.za/card-seo.webp
- https://designcorner.co.za/card-server.webp
- https://designcorner.co.za/logo.png

Then open https://designcorner.co.za/services — all five service cards
should show their pictures.

## Compare file sizes (optional, but conclusive)

If an image still fails after the steps above, compare its size on the
server (shown in File Manager) with the correct sizes below. A smaller size
on the server means the upload was cut short — delete that file and upload
it again on its own, then re-set it to 644.

| File | Correct size (bytes) |
| --- | --- |
| card-design.webp | 143920 |
| card-dev.webp | 114784 |
| card-ecom.webp | 83934 |
| card-fast.webp | 60950 |
| card-local.webp | 29570 |
| card-mobile.webp | 23186 |
| card-money.webp | 22370 |
| card-seo.webp | 66710 |
| card-server.webp | 187422 |
| portfolio-ssproc.webp | 58488 |
| portfolio-ktps.webp | 68816 |
| portfolio-domy.webp | 42552 |
| logo.png | 28371 |

## If it still fails after all of the above

The files are verified good in this repository, so a remaining error is
server-side (host security rules blocking specific files). Contact Xneelo
support and tell them: "Three WebP images in public_html return HTTP 500
while identical sibling files return 200; files are 644, re-uploaded fresh,
byte sizes verified." They can check the Apache error log for the exact
cause.

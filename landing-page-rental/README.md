# Standalone Camera & Equipment Rental Landing Page

This folder is a **self-contained ads landing page** for **camera & equipment rental**,
meant to be deployed as its **own independent Vercel project** with a clean public URL
(e.g. `https://neelam-camera-rental.vercel.app` or a subdomain like `rentals.neelam.in`) —
separate from the main website and from the live-event landing page.

## Files
- `index.html` — the landing page (references `logo.png` / `favicon.png` relatively)
- `logo.png`, `favicon.png`, `apple-touch-icon.png` — brand assets
- `package.json` — copies the static files into `dist/` on build

## Deploy as a separate Vercel project
1. Vercel Dashboard → **Add New… → Project**.
2. Import the **same GitHub repo** (`neelam-films-website`).
3. In the setup screen:
   - **Root Directory:** click *Edit* → choose **`landing-page-rental`**
   - **Framework Preset:** **Other**
   - Build Command: `npm run build` · Output Directory: `dist` (or leave both empty — it's static)
4. **Deploy**.
5. **Settings → Deployment Protection → Vercel Authentication = Disabled** so anyone can open it.
6. (Optional) Add a custom domain, e.g. `rentals.neelam.in`, via a CNAME in your DNS
   (same process used for `events.neelam.in`).

## Photos
Real gear photos load from the Unsplash CDN in production. If any single image ever fails
to load, it gracefully falls back to an on-brand gradient tile with an icon + label — so the
page never shows a broken image. To use your **own** product photos, replace the
`https://images.unsplash.com/...` URLs in `index.html` with your image URLs (or drop the
files in this folder and reference them relatively, e.g. `src="cam1.jpg"`).

## Google Sheet
The lead form posts to the **same** Apps Script endpoint as the other pages
(`SHEET_ENDPOINT` near the bottom of `index.html`), tagged with
`source: "Camera Rental Landing Page"` so rental leads are easy to spot in the sheet.

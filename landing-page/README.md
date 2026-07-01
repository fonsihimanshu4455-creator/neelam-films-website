# Standalone Live-Event Landing Page

This folder contains **only** the live-event landing page (`index.html`) so it can
be deployed as its **own independent Vercel project** with a clean public root URL
(e.g. `https://neelam-live-events.vercel.app`) — separate from the main website.

## Deploy as a separate Vercel project

1. Vercel Dashboard → **Add New… → Project**.
2. Import the **same GitHub repo** (`neelam-films-website`).
3. In the setup screen:
   - **Root Directory:** click *Edit* → choose **`landing-page`**
   - **Framework Preset:** **Other**
   - Build Command / Output: leave empty (it's a single static file)
4. **Deploy**.
5. (Optional) Rename the project / add a domain so the URL reads nicely, e.g.
   `neelam-live-events.vercel.app`.
6. Make sure **Settings → Deployment Protection → Vercel Authentication = Disabled**
   so anyone can open it.

Now the **root** of that project (`https://<project>.vercel.app`) shows ONLY the
landing page — perfect for ads.

## Google Sheet

Same as the main one: paste your Apps Script `/exec` URL into
`var SHEET_ENDPOINT = "";` near the top of `index.html`
(see ../GOOGLE-SHEET-SETUP.md). Edit this file **and** `public/live-events.html`
if you want both copies connected.

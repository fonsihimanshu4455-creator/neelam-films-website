# Connect the Live-Event form to a Google Sheet

The landing page at **`/live-events`** posts every enquiry to a Google Sheet
through a Google Apps Script web app. Because this needs **your Google
account**, these final two steps have to be done by you (they take ~3 min).
Everything else is already wired.

## Steps

1. **Create a Google Sheet** (any blank sheet). Name it e.g. `Neelam Live Leads`.
2. In that sheet: **Extensions → Apps Script**.
3. Delete the default code, then **paste the whole contents of
   `google-apps-script/Code.gs`** from this repo. Click **Save**.
4. **Deploy → New deployment**.
   - Click the gear ⚙ → **Web app**.
   - **Execute as:** `Me`
   - **Who has access:** `Anyone`
   - Click **Deploy**, authorise when prompted.
5. Copy the **Web app URL** (it ends with `/exec`).
6. Open **`public/live-events.html`**, find near the top of the `<script>`:
   ```js
   var SHEET_ENDPOINT = "";
   ```
   and paste your URL:
   ```js
   var SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfy…/exec";
   ```
7. Commit & redeploy (Vercel auto-deploys on push).

## Test

- Open your `/exec` URL in a browser → you should see
  `{"ok":true,"message":"Neelam Films lead endpoint is live."}`
- Submit the form on `/live-events` → a new row (Timestamp, Name, Phone,
  Event Type, Event Detail, Source) should appear in the **Leads** tab.

## Notes

- The form still works without the endpoint — it always opens WhatsApp with the
  enquiry pre-filled. The Sheet logging is the extra layer.
- The fetch uses `mode:"no-cors"`, so the browser won't show the response; that's
  expected. The row still gets written.
- To change columns, edit `HEADERS` and the `appendRow([...])` order in `Code.gs`.

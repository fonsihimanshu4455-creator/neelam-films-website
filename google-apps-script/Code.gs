/**
 * Neelam Films — Live Event Landing Page → Google Sheet
 * ------------------------------------------------------
 * This Apps Script receives each form submission from /live-events
 * and appends a new row to the bound Google Sheet.
 *
 * SETUP (see ../GOOGLE-SHEET-SETUP.md for the full walkthrough):
 *   1. Create a Google Sheet.
 *   2. Extensions → Apps Script.  Paste this whole file.
 *   3. Deploy → New deployment → type "Web app".
 *        - Execute as: Me
 *        - Who has access: Anyone
 *   4. Copy the Web-app URL (ends with /exec).
 *   5. Paste it into  public/live-events.html  →  var SHEET_ENDPOINT = "…";
 */

var SHEET_NAME = 'Leads';
var HEADERS = ['Timestamp', 'Name', 'Phone', 'Event Type', 'Event Detail', 'Source'];

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

function doPost(e) {
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try { data = JSON.parse(e.postData.contents); }
      catch (parseErr) { data = (e.parameter || {}); }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var sheet = getSheet_();
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.phone || '',
      data.eventType || '',
      data.eventDetail || '',
      data.source || 'Live Event Landing Page'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/** Quick browser test: open the /exec URL to confirm the script is live. */
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: 'Neelam Films lead endpoint is live.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

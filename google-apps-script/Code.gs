/**
 * Neelam Films — Lead capture → Google Sheet
 * ------------------------------------------------------
 * Receives form submissions from ALL sources (live-event landing page,
 * camera-rental landing page and the main website contact form) and writes
 * each one into the bound Google Sheet.
 *
 * This version writes by COLUMN NAME (not position), so:
 *   - Email & Message get their own columns.
 *   - Any missing column is created automatically.
 *   - Your manually-added columns (e.g. "Status") are never disturbed.
 *   - Existing rows are left exactly as they are.
 *
 * SETUP / UPDATE:
 *   1. Open your Google Sheet → Extensions → Apps Script.
 *   2. Replace everything with this file → Save.
 *   3. Deploy → Manage deployments → (edit the existing Web app) →
 *        Version: "New version" → Deploy.
 *      The /exec URL stays the SAME — no website change needed.
 */

var SHEET_NAME = 'Leads';

// Column headers in the order they should first appear.
var COLUMNS = ['Timestamp', 'Name', 'Phone', 'Email', 'Event Type', 'Event Detail', 'Message', 'Source'];

// Maps incoming JSON keys -> the sheet column header they belong under.
var FIELD_TO_COLUMN = {
  timestamp: 'Timestamp',
  name: 'Name',
  phone: 'Phone',
  email: 'Email',
  eventType: 'Event Type',
  eventDetail: 'Event Detail',
  message: 'Message',
  source: 'Source'
};

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS);
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight('bold');
  }
  return sheet;
}

/** Returns { header: columnIndex } for the current header row, adding any missing required columns. */
function getHeaderMap_(sheet) {
  var lastCol = Math.max(1, sheet.getLastColumn());
  var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  var map = {};
  headers.forEach(function (h, i) { if (h !== '' && h != null) map[String(h).trim()] = i + 1; });

  // Add any required column that doesn't exist yet (appended at the end).
  COLUMNS.forEach(function (col) {
    if (!map[col]) {
      var newIndex = sheet.getLastColumn() + 1;
      sheet.getRange(1, newIndex).setValue(col).setFontWeight('bold');
      map[col] = newIndex;
    }
  });
  return map;
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
    var headerMap = getHeaderMap_(sheet);

    // Build a row array sized to the current number of columns.
    var width = sheet.getLastColumn();
    var row = new Array(width).fill('');

    // Always stamp a timestamp.
    if (!data.timestamp) data.timestamp = new Date().toISOString();
    if (!data.source) data.source = 'Website';

    Object.keys(FIELD_TO_COLUMN).forEach(function (field) {
      var header = FIELD_TO_COLUMN[field];
      var colIndex = headerMap[header];
      if (colIndex && data[field] != null && data[field] !== '') {
        row[colIndex - 1] = data[field];
      }
    });

    sheet.appendRow(row);

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

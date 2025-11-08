/**
 * @file Code.js
 * @description Main entry point for the Nijjara ERP web application.
 * This file handles the web app initialization, HTML file inclusion,
 * and serves as the primary interface for the frontend.
 */

// --------------------------------------------------------------------------
// --- WEB APP ENTRY POINT ---
// --------------------------------------------------------------------------

/**
 * The doGet() function is automatically called when a user accesses the
 * web app URL. This is the entry point for the entire application.
 *
 * @param {Object} e - Event object containing request parameters.
 * @returns {HtmlOutput} The main HTML page (App.html) for the SPA.
 */
function doGet(e) {
  try {
    logInfo_('doGet', 'Web app accessed. Loading main application.');
    
    // Create and return the main HTML output
    const template = HtmlService.createTemplateFromFile('App');
    const htmlOutput = template.evaluate()
      .setTitle('Nijjara ERP')
      .setFaviconUrl('https://www.gstatic.com/images/branding/product/1x/sheets_48dp.png')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
    
    return htmlOutput;
    
  } catch (error) {
    logError_('doGet', 'Failed to load web app', error);
    
    // Return a user-friendly error page
    return HtmlService.createHtmlOutput(`
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>خطأ - Nijjara ERP</title>
          <style>
            body {
              font-family: 'Cairo', sans-serif;
              background: #1a1a1a;
              color: #e0e0e0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              text-align: center;
            }
            .error-container {
              padding: 2rem;
              max-width: 500px;
            }
            h1 { color: #ff5252; }
            p { margin: 1rem 0; }
            code {
              background: #2a2a2a;
              padding: 0.5rem;
              border-radius: 4px;
              display: block;
              margin: 1rem 0;
              text-align: left;
              direction: ltr;
            }
          </style>
        </head>
        <body>
          <div class="error-container">
            <h1>⚠️ خطأ في تحميل التطبيق</h1>
            <p>عذراً، حدث خطأ أثناء تحميل نظام Nijjara ERP.</p>
            <p>يرجى الاتصال بمسؤول النظام أو المحاولة مرة أخرى لاحقاً.</p>
            <code>${error.message}</code>
          </div>
        </body>
      </html>
    `).setTitle('خطأ - Nijjara ERP');
  }
}

// --------------------------------------------------------------------------
// --- HTML INCLUSION HELPER ---
// --------------------------------------------------------------------------

/**
 * Server-side helper function to include HTML files within other HTML files.
 * This is used to modularize the frontend code (CSS, JS, etc.).
 *
 * Usage in HTML: <?!= include('CSS') ?>
 *
 * @param {string} filename - The name of the HTML file to include (without .html extension).
 * @returns {string} The contents of the HTML file as a string.
 */
function include(filename) {
  try {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
  } catch (error) {
    logError_('include', `Failed to include file: ${filename}`, error);
    return `<!-- ERROR: Could not include ${filename}.html -->`;
  }
}

// --------------------------------------------------------------------------
// --- SYSTEM INFORMATION ---
// --------------------------------------------------------------------------

/**
 * Returns basic system information for debugging and monitoring.
 * This can be called from the client to verify system status.
 *
 * @returns {Object} System information object.
 */
function getSystemInfo() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const user = Session.getActiveUser().getEmail();
    
    const info = {
      success: true,
      spreadsheetName: ss.getName(),
      spreadsheetId: ss.getId(),
      currentUser: user || 'UNKNOWN',
      timestamp: new Date().toISOString(),
      timezone: ss.getSpreadsheetTimeZone(),
      locale: ss.getSpreadsheetLocale()
    };
    
    logInfo_('getSystemInfo', `System info requested by: ${user}`);
    return info;
    
  } catch (error) {
    logError_('getSystemInfo', 'Failed to retrieve system information', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// --------------------------------------------------------------------------
// --- SYSTEM TEST FUNCTION ---
// --------------------------------------------------------------------------

/**
 * Test function to verify that the core system components are working.
 * Run this from the Apps Script editor to verify Phase 1 setup.
 *
 * @returns {Object} Test results object.
 */
function testSystem() {
  const results = {
    timestamp: new Date().toISOString(),
    tests: [],
    success: true
  };
  
  try {
    // Test 1: Spreadsheet Access
    try {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      results.tests.push({
        name: 'Spreadsheet Access',
        status: 'PASS',
        message: `Connected to: ${ss.getName()}`
      });
    } catch (e) {
      results.tests.push({
        name: 'Spreadsheet Access',
        status: 'FAIL',
        message: e.message
      });
      results.success = false;
    }
    
    // Test 2: Logging System
    try {
      logInfo_('testSystem', 'Testing logging system');
      results.tests.push({
        name: 'Logging System',
        status: 'PASS',
        message: 'Logging functions are operational'
      });
    } catch (e) {
      results.tests.push({
        name: 'Logging System',
        status: 'FAIL',
        message: e.message
      });
      results.success = false;
    }
    
    // Test 3: Password System
    try {
      const testPass = 'Test@1234';
      const { hash, salt } = hashPassword_(testPass);
      const isValid = checkPassword_(testPass, hash, salt);
      
      if (isValid) {
        results.tests.push({
          name: 'Password System',
          status: 'PASS',
          message: 'Password hashing and verification working'
        });
      } else {
        throw new Error('Password verification failed');
      }
    } catch (e) {
      results.tests.push({
        name: 'Password System',
        status: 'FAIL',
        message: e.message
      });
      results.success = false;
    }
    
    // Test 4: Check for Critical Sheets
    try {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const criticalSheets = ['SYS_Users', 'SYS_Roles', 'HRM_Employees', 'SYS_Error_Log'];
      const missingSheets = [];
      
      criticalSheets.forEach(sheetName => {
        if (!ss.getSheetByName(sheetName)) {
          missingSheets.push(sheetName);
        }
      });
      
      if (missingSheets.length === 0) {
        results.tests.push({
          name: 'Critical Sheets',
          status: 'PASS',
          message: 'All critical sheets exist'
        });
      } else {
        results.tests.push({
          name: 'Critical Sheets',
          status: 'WARN',
          message: `Missing sheets: ${missingSheets.join(', ')}`
        });
      }
    } catch (e) {
      results.tests.push({
        name: 'Critical Sheets',
        status: 'FAIL',
        message: e.message
      });
    }
    
    // Log overall results
    const summary = `Test completed: ${results.tests.filter(t => t.status === 'PASS').length}/${results.tests.length} passed`;
    logInfo_('testSystem', summary);
    
    return results;
    
  } catch (error) {
    logError_('testSystem', 'System test failed', error);
    results.success = false;
    results.error = error.message;
    return results;
  }
}

// --------------------------------------------------------------------------
// --- UTILITY FUNCTIONS ---
// --------------------------------------------------------------------------

/**
 * Helper function to get the current timestamp in a consistent format.
 * @returns {string} ISO 8601 formatted timestamp.
 */
function getCurrentTimestamp_() {
  return new Date().toISOString();
}

/**
 * Helper function to get the current user's email.
 * @returns {string} User email or 'SYSTEM' if not available.
 */
function getCurrentUser_() {
  const email = Session.getActiveUser().getEmail();
  return email || 'SYSTEM';
}

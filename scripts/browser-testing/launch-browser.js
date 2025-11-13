/**
 * Browser Testing Environment Launcher
 * Provides shared browser instance for agent testing
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const LOG_FILE = path.join(__dirname, '..', '..', 'logs', 'browser-testing.log');

// Ensure logs directory exists
const logsDir = path.dirname(LOG_FILE);
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Logger utility
function log(level, message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${level}] ${message}\n`;
  console.log(logEntry.trim());
  fs.appendFileSync(LOG_FILE, logEntry);
}

// Get MIME type for files
function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
  };
  return mimeTypes[ext] || 'application/octet-stream';
}

// Create HTTP server
const server = http.createServer((req, res) => {
  log('INFO', 'Request: ' + req.method + ' ' + req.url);

  // Parse URL
  let filePath = req.url === '/' ? '/preview.html' : req.url;
  filePath = path.join(__dirname, '..', '..', filePath);

  // Security: prevent directory traversal
  const rootDir = path.join(__dirname, '..', '..');
  if (!filePath.startsWith(rootDir)) {
    log('WARN', 'Directory traversal attempt: ' + req.url);
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  // Serve file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        log('WARN', `File not found: ${filePath}`);
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        log('ERROR', `Server error: ${err.message}`);
        res.writeHead(500);
        res.end('500 Internal Server Error');
      }
      return;
    }

    const mimeType = getMimeType(filePath);
    res.writeHead(200, {
      'Content-Type': mimeType,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Origin': '*',
    });
    res.end(data);
    log('INFO', 'Served: ' + filePath + ' (' + mimeType + ')');
  });
});

// Start server
server.listen(PORT, () => {
  log('INFO', 'Browser testing server started on http://localhost:' + PORT);
  log('INFO', 'Agent access enabled - shared browser instance available');
  console.log('\n===========================================');
  console.log('🌐 Browser Testing Environment Active');
  console.log('===========================================');
  console.log('URL: http://localhost:' + PORT);
  console.log('Logs: ' + LOG_FILE);
  console.log('\nPress Ctrl+C to stop the server');
  console.log('===========================================\n');
});

// Handle shutdown
process.on('SIGINT', () => {
  log('INFO', 'Shutting down browser testing server');
  server.close(() => {
    log('INFO', 'Server closed');
    process.exit(0);
  });
});

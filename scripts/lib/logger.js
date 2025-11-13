const fs = require('fs');
const path = require('path');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function createLogger(name = 'actions') {
  const root = path.resolve(__dirname, '..', '..');
  const logsDir = path.join(root, 'logs');
  ensureDir(logsDir);
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const file = path.join(logsDir, `${name}-${stamp}.log`);
  return {
    info: (msg) => {
      const line = `[${new Date().toISOString()}] ${msg}`;
      fs.appendFileSync(file, line + '\n');
      if (process.env.CI !== 'true') console.log(line);
    },
    error: (msg) => {
      const line = `[${new Date().toISOString()}] ERROR ${msg}`;
      fs.appendFileSync(file, line + '\n');
      console.error(line);
    },
    file,
  };
}

module.exports = { createLogger };

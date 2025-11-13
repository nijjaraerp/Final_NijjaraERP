#!/usr/bin/env node
/*
Updates hard-coded local folder references inside .vscode/settings.json
and other files to the current workspace path.
*/
const fs = require('fs');
const path = require('path');
const { createLogger } = require('./lib/logger');

const log = createLogger('fix-paths');
const root = path.resolve(__dirname, '..');

function replaceInFile(file, patterns) {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  const before = content;
  for (const [regex, repl] of patterns) content = content.replace(regex, repl);
  if (content !== before) {
    fs.writeFileSync(file, content, 'utf8');
    log.info(`Updated paths in ${path.relative(root, file)}`);
  } else {
    log.info(`No path changes needed in ${path.relative(root, file)}`);
  }
}

(function main(){
  const escaped = root.replace(/\\/g, '\\\\');
  const patterns = [
    [/c:\\\\Users\\\\moham\\\\MK_Work\\\\[^"\\]+/g, escaped]
  ];
  replaceInFile(path.join(root, '.vscode', 'settings.json'), patterns);
})();

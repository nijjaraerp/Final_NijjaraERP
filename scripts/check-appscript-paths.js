#!/usr/bin/env node
/**
 * Ensures App Script-related files being pushed/committed are ONLY inside ./main
 * Blocks pushes that include .js/.html/appsscript.json outside of ./main.
 */
const { execSync } = require('child_process');

function getStagedFiles() {
  const out = execSync('git diff --cached --name-only', { encoding: 'utf8' });
  return out.split(/\r?\n/).filter(Boolean);
}

function isAppScriptFile(path) {
  return (
    /\.js$/i.test(path) ||
    /\.html$/i.test(path) ||
    /appsscript\.json$/i.test(path)
  );
}

function main() {
  const files = getStagedFiles();
  const violations = files.filter((p) => {
    if (!isAppScriptFile(p)) return false;
    // Allow only files under main/
    return !p.startsWith('main/');
  });

  if (violations.length) {
    console.error('\n❌ Pre-push check failed: App Script files must reside in ./main only.');
    console.error('The following staged files violate the rule:');
    violations.forEach((v) => console.error(' - ' + v));
    console.error('\nFix by moving files to ./main or unstage them.');
    process.exit(1);
  } else {
    console.log('✅ App Script file location check passed.');
  }
}

main();


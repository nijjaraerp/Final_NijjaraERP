#!/usr/bin/env node
/* Performs basic project health checks and micro-benchmarks */
require('dotenv').config();
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { createLogger } = require('./lib/logger');

const log = createLogger('health');

function safeExec(cmd) {
  try { return execSync(cmd, { stdio: 'pipe' }).toString().trim(); }
  catch (e) { return `ERR: ${e.message}`; }
}

function fileSizeMB(p) {
  try { const s = fs.statSync(p).size; return (s / (1024*1024)).toFixed(2); } catch { return '0.00'; }
}

function run() {
  log.info('Health check started');

  log.info(`Node: ${safeExec('node -v')}`);
  log.info(`npm: ${safeExec('npm -v')}`);
  log.info(`git: ${safeExec('git --version')}`);
  log.info(`clasp: ${safeExec('npx -y @google/clasp --version')}`);

  const root = path.resolve(__dirname, '..');
  const mainDir = path.join(root, 'main');
  const nodeModules = path.join(root, 'node_modules');

  log.info(`main/ folder size (MB): ${fileSizeMB(mainDir)}`);
  log.info(`node_modules/ present: ${fs.existsSync(nodeModules)}`);

  // Lint sample (non-blocking)
  log.info('Running ESLint (non-blocking sample)...');
  const lintOut = safeExec('npx eslint main --ext .js,.html');
  log.info(lintOut.split('\n').slice(0, 20).join('\n'));

  // Prettier check sample
  log.info('Running Prettier check (non-blocking sample)...');
  const fmtOut = safeExec('npx prettier --check .');
  log.info(fmtOut.split('\n').slice(0, 20).join('\n'));

  // Env sanity
  const requiredEnv = ['GITHUB_OWNER','GITHUB_REPO'];
  const missing = requiredEnv.filter((k) => !process.env[k]);
  if (missing.length) {
    log.error(`Missing env vars: ${missing.join(', ')}`);
  } else {
    log.info('All required env vars present.');
  }

  log.info('Health check completed');
  console.log(`\nHealth log written to: ${log.file}`);
}

run();

#!/usr/bin/env node
/*
End-to-end pipeline:
- Read plain text (arg file, arg text, or stdin)
- Transform via tools/nlp
- Validate; if invalid, write a clarification request
- Create queued task JSON under ./queue/pending
- Forward to agent deploy.ps1 with -TaskPath
- Print paths to stdout
*/
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { toStructuredTask, validate, makeChecklist } = require('../tools/nlp/index');
const { createLogger } = require('./lib/logger');

const log = createLogger('pipeline');
const root = path.resolve(__dirname, '..');
const queueDir = path.join(root, 'queue');
const pendingDir = path.join(queueDir, 'pending');
const clarifyDir = path.join(queueDir, 'clarifications');

for (const d of [queueDir, pendingDir, clarifyDir])
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });

function readInput() {
  const args = process.argv.slice(2);
  if (args.length > 0) {
    // Join all args to reconstruct paths with spaces (e.g., "Setup Task 1.1.md")
    let candidate = args.join(' ').trim();
    // Strip wrapping quotes if present
    if (
      (candidate.startsWith('"') && candidate.endsWith('"')) ||
      (candidate.startsWith("'") && candidate.endsWith("'"))
    ) {
      candidate = candidate.slice(1, -1);
    }
    const normalized = path.normalize(candidate);
    if (fs.existsSync(normalized)) {
      return fs.readFileSync(normalized, 'utf8');
    }
    // Not a file: treat as inline text
    return candidate;
  }
  // read stdin
  try {
    return fs.readFileSync(0, 'utf8');
  } catch {
    return '';
  }
}

function makeId() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

function adjustPrompt(task) {
  // Basic prompt templating for an agent
  return [
    `Title: ${task.title}`,
    '',
    'Description:',
    task.description,
    '',
    'Acceptance Criteria:',
    ...(task.acceptanceCriteria || []).map((a) => `- ${a}`),
    '',
    'Components:',
    ...(task.components || []).map((c) => `- ${c}`),
    '',
    'Dependencies:',
    ...(task.dependencies || []).map((d) => `- ${d}`),
    '',
    'Risks:',
    ...(task.risks || []).map((r) => `- ${r}`),
  ].join('\n');
}

(function main() {
  const input = readInput().trim();
  if (!input) {
    console.error('No input provided. Pass a file path or text, or pipe content.');
    process.exit(1);
  }

  const task = toStructuredTask(input);
  const validation = validate(task);
  const checklist = makeChecklist(task);

  const payload = { task, validation, checklist, agentPrompt: adjustPrompt(task) };

  const id = makeId();
  let outFile;

  if (!validation.ok) {
    outFile = path.join(clarifyDir, `clarify-${id}.json`);
    fs.writeFileSync(outFile, JSON.stringify(payload, null, 2));
    log.info(`Validation failed. Clarification file written: ${outFile}`);
    console.log(
      JSON.stringify(
        { status: 'needs-clarification', file: outFile, errors: validation.errors },
        null,
        2
      )
    );
    process.exit(0);
  }

  outFile = path.join(pendingDir, `task-${id}.json`);
  fs.writeFileSync(outFile, JSON.stringify(payload, null, 2));
  log.info(`Task queued: ${outFile}`);

  // Forward to agent (PowerShell)
  const psScript = path.join(root, 'scripts', 'agents', 'deploy.ps1');
  const ps = spawnSync('pwsh', ['-NoProfile', '-File', psScript, '-TaskPath', outFile], {
    encoding: 'utf8',
  });
  if (ps.error) log.error(`Agent invoke failed: ${ps.error.message}`);
  const stdout = (ps.stdout || '').trim();
  const stderr = (ps.stderr || '').trim();
  if (stdout) log.info(`Agent stdout: ${stdout}`);
  if (stderr) log.error(`Agent stderr: ${stderr}`);

  console.log(JSON.stringify({ status: 'queued', file: outFile, agent: stdout }, null, 2));
})();

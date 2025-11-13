#!/usr/bin/env node
require('dotenv').config();
const fs = require('fs');
const { toStructuredTask, validate, makeChecklist } = require('./index');

function readStdinSync() {
  const BUFSIZE = 256;
  const buf = Buffer.alloc(BUFSIZE);
  let data = '';
  let bytesRead = 0;
  try {
    while ((bytesRead = fs.readSync(0, buf, 0, BUFSIZE, null)) > 0) {
      data += buf.toString('utf8', 0, bytesRead);
    }
  } catch (e) { /* ignore */ }
  return data;
}

const arg = process.argv[2];
let text = '';
if (arg && fs.existsSync(arg)) text = fs.readFileSync(arg, 'utf8');
else if (arg) text = arg;
else text = readStdinSync();

const task = toStructuredTask(text);
const result = validate(task);
const checklist = makeChecklist(task);

const output = { task, validation: result, checklist };
console.log(JSON.stringify(output, null, 2));

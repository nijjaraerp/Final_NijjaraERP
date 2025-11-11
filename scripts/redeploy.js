#!/usr/bin/env node
/*
 Redeploy an existing Google Apps Script Web App deployment while keeping the same URL.

 Usage (PowerShell on Windows):
   $env:DEPLOY_ID = "<your-deployment-id>"
   node scripts/redeploy.js

 The script will:
 1) Create a new version (clasp version)
 2) Redeploy the existing deployment to the new version (clasp deploy -i <DEPLOY_ID>)
 3) Output the Web App URL for that deployment (clasp web -i <DEPLOY_ID> --no-open)
*/

const { execSync } = require('child_process');

function sh(cmd) {
  return execSync(cmd, { stdio: 'inherit' });
}

function now() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

const deployId = process.env.DEPLOY_ID;
if (!deployId) {
  console.error("ERROR: DEPLOY_ID env var is not set.\n\n" +
    "Find your existing deployment id via:\n" +
    "  npx clasp deployments\n\n" +
    "Then set it before running this script (PowerShell):\n" +
    "  $env:DEPLOY_ID = '<id>'\n" +
    "  node scripts/redeploy.js\n");
  process.exit(1);
}

const stamp = now();
console.log(`Creating new version and redeploying deployment ${deployId} at ${stamp}...`);

// 1) Create version (some clasp versions don't support -m)
try {
  sh(`npx clasp version -m "Release ${stamp}"`);
} catch {
  sh(`npx clasp version`);
}

// 2) Redeploy to existing deployment id (keeps the same Web App URL)
sh(`npx clasp deploy -i ${deployId} -d "Redeploy ${stamp}"`);

// 3) Show the Web App URL for this deployment (without opening the browser)
console.log("To view the Web App URL, run: npx clasp deployments and copy the Web App link for the deployment ID.");

console.log("Done.");

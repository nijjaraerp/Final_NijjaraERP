# Troubleshooting

## Common issues

- Clasp not logged in
  - Run `npx @google/clasp login`
- Push blocked by pre-check
  - The pre-check ensures Apps Script files (.js/.html/appsscript.json) live under `main/`.
  - Move files accordingly or unstage.
- VS Code sluggish
  - The workspace excludes heavy folders. Ensure `files.watcherExclude` covers `node_modules`, etc.
- ESLint errors in Apps Script files
  - Some global variables come from Apps Script runtime. We disable `no-undef` globally and enable `googleappsscript` env.

## Logs
- Node scripts write to `./logs/*`. Include these when reporting issues.

## Remote access (PowerShell)
- Use `scripts/secure-remote-access.ps1 -Enable` to enable PSRemoting securely.
- Use `-Disable` to turn it off.


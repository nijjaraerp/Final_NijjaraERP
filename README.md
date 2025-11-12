# Nijjara ERP

## Overview
Nijjara ERP is a Google Apps Script project that powers core enterprise workflows for Nijjara Company.

## Folder Structure Convention
- All Apps Script server code and HTML templates live exclusively in `./main`.
- No `.js` or `.html` or `appsscript.json` files may exist outside `./main`.

```
root/
  .clasp.json            # rootDir set to ./main, filePushOrder limited to main
  main/                  # ONLY source of truth for Apps Script
    appsscript.json
    Code.js
    Auth.js
    ...other backend modules...
    Login.html
    NijjaraOS.html
    Dashboard.html
```

## Clasp Configuration
`.clasp.json` is configured with:
- `rootDir: "./main"`
- `filePushOrder` limited to files inside `main`

## Workflow Safeguards
- Husky `pre-push` hook blocks pushes that include script files outside `main`.
- Automated check script: `scripts/check-appscript-paths.js`.

## Baseline and Branching
- Official recovery baseline: Version 61 (`v61-baseline` tag)
- Create development branches from the baseline: `git checkout -b feature/frontend-stabilization v61-baseline`

## Frontend Stabilization Plan
1. Restore navigation after login (redirect to `?page=dashboard`) – implemented in `Login.html`.
2. Incrementally adopt new dark theme in `NijjaraOS.html` while preserving backend APIs.
3. Keep `doGet` session guard intact and serve only `main` templates.
4. Add comprehensive UI tests (Playwright smoke and routing tests).


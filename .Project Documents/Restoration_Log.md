# Nijjara ERP — Restoration & Rollback Log

Date: 2025-11-11
Owner: System Restoration Task

## 1) Objective
- Restore the system to the last known working state from deployment #61.
- Investigate changes made after #61 that caused Login page and main Orb interface issues.
- Document loading and initialization problems.
- Implement a rollback preserving all data.
- After stability, proceed with planned modules and sub-modules with thorough testing and detailed logging.

## 2) Discovery — Deployment #61
- Using `npx clasp deployments`, we identified the target deployment:
  - Deployment ID: `@61`
  - Entry in list: `AKfycbziw1gdhoXJRpSUUt1cuwqCMHbZRpdE3Eh58C3pDCoMBB7qviglLwpSSkoMCJEGjVoi @61`
- This is the baseline “last known working” deployment referenced by the user.

## 3) Symptoms Observed Post-#61
- Login Page:
  - Intermittent default route not landing on Login (suspected misrouting via `doGet` in `Code.js`).
  - Occasional broken authentication flow when `google.script.run.authenticateUser` is called (timing/order of initialization).
- Orb Interface (Home Screen):
  - Regression in `frontend/NijjaraOS.html` due to merge conflicts and incomplete content restoration.
  - Debug auto-open logic interfering with compact mode on some local previews.

## 4) Root Cause Leads (from code review and history)
- `frontend/NijjaraOS.html` had merge markers and missing sections until restored; later redesigned per new plan.
- Several WIP commits after #61 (see `git log`) introduced unstable UI behavior and toggles.
- Router and default view logic in `Code.js` may route to OS instead of Login by default in certain configurations.

## 5) Data Preservation Considerations
- Backend data lives in Google Workspace (Sheets/Drive, Apps Script Script/Project Properties). Rolling back code does not delete data.
- To ensure safety:
  - Export critical Sheets (Users, Permissions, HRM datasets) before redeploy.
  - Verify `SYS_Users`, `SYS_Permissions`, and audit log structures remain compatible.
  - If schema changes occurred post-#61, run a compatibility script to map fields to pre-#61 format.

## 6) Rollback Procedure (keep the same Web App URL)
Prereqs: Ensure `clasp login` is done on the machine.

1. Identify the deployment ID for the production Web App URL:
   - `npx clasp deployments` → choose the deployment matching production URL. Target is `@61`.
2. Restore local code to the stable commit (matching #61):
   - Option A — Git checkout (preferred): checkout/tag the commit that matches the code used for @61 (if tagged or documented).
   - Option B — Manual restore: use the current repo but revert any post-#61 changes that affect routing/login/UI; confirm with smoke tests.
3. Push code to Apps Script:
   - `npm run push` (which runs `clasp push --force`).
4. Create a new version from this stable code:
   - `npx clasp version -m "Rollback to #61 stable"`
5. Redeploy the existing deployment ID (keeps the same Web App URL):
   - `npx clasp deploy -i 61 -d "Rollback to #61 stable"`
   - If needed, specify the version number: `npx clasp deploy -i 61 -V <versionNumber>`
6. Verify URL:
   - `npx clasp deployments` → confirm `@61` points to the rollback version.
   - Open the Web App URL and run smoke tests (Login, Galaxy hub load, module drawer interactions).

Notes:
- Alternatively, use `scripts/redeploy.js` with `$env:DEPLOY_ID = "61"` and run it to create a version and redeploy to the same ID.

## 7) Smoke Tests (post-rollback)
- Login:
  - Loads default Login view; no auto-redirect to OS.
  - Valid credentials authenticate; invalid shows error.
  - Browser console clean (no 404/JS errors), network panel shows `google.script.run` calls succeed.
- Home (Orb / Galaxy):
  - Page loads with compact mode unless debug flag is set.
  - No missing asset errors; animations start without blocking.

## 8) New Home Screen Implementation (Post-Stability)
- Implemented Galaxy hub with four orbiting “Sun” modules: HR, System, Finance, Projects.
- Sub-modules (“Planets”) reveal on hover, orbiting around their module.
- Premium glass aesthetic, glossy highlights, faint connecting orbit ring, deep dark blue textured background.
- Maintained debug compatibility (`data-debug` + safe JS read) and added HUD for status.
- Local preview opened; no browser errors observed.

## 9) Change Log (local repo)
- Commit: UI redesign & configuration adjustments.
- MCP VS Code settings updated to enable filesystem, shell, git, puppeteer servers for local tooling.
- Merge conflicts in `frontend/NijjaraOS.html` resolved earlier; latest design implemented and previewed.

## 10) Next Steps
- Execute rollback (requires Apps Script creds) to `@61` stable version code and redeploy to keep URL.
- Tag stable commit: `git tag deployment-61-stable` for future references.
- Comprehensive tests per module:
  - HR: Employees, Attendance, Leave, Deductions.
  - System: Users, Permissions, Documents.
  - Finance & Projects: per diagrams in `.Project Documents/*_Module_Diagram.md`.
- Instrument detailed logging via `Logging.js` (server) and scoped console logging (client) with prefixes for each module.

## 11) Troubleshooting Appendix
- If `clasp deployments` fails: run `clasp login` and ensure `.clasp.json` exists (project is linked).
- Puppeteer sandbox/Chrome issues on Windows: run Chromium with `--no-sandbox` if needed in local automation.
- If Login view still misroutes: verify `doGet(e)` in `Code.js` enforces Login default unless valid session.

---
This document will be updated with every restoration step, verification result, and subsequent module implementation checkpoint.


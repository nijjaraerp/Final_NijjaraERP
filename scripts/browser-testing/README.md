# Browser Testing Scripts

This directory contains the comprehensive browser testing environment for Nijjara ERP.

## Files

### `launch-browser.js`
HTTP server that provides a shared browser instance for agent testing.
- **Port:** 8080
- **Features:** Real-time file serving, CORS enabled, comprehensive logging
- **Logs:** `logs/browser-testing.log`

### `agent-protocol.js`
Standardized communication protocol for agent status reporting.
- **Task Status:** complete, partial, failed
- **Format:** Structured status reports with single-line next steps
- **Logs:** `logs/agent-protocol.log`

### `deployment-reporter.js`
Detailed reporting for deployments and execution flow tracking.
- **Deployment Reports:** Timestamped with full step-by-step documentation
- **Execution Flow:** Frontend and backend event tracking
- **Output:** `logs/deployment-reports/`

### `version-control.js`
Automated version control workflow with validation.
- **Validation:** ESLint, health checks, path verification
- **GitHub Sync:** Stage, commit, pull, push with conflict detection
- **Apps Script:** Push main folder only via clasp
- **Reports:** Full deployment reports with timestamps

## Usage

### Start Browser Testing Server
```powershell
npm run test:start
```

### Run Full Deployment
```powershell
npm run test:deploy
```

### Validate Only
```powershell
npm run test:validate
```

### Generate Status Report
```powershell
npm run test:status
```

## Integration

These scripts are integrated with:
- VS Code Tasks (`.vscode/tasks.json`)
- NPM Scripts (`package.json`)
- Git Hooks (`.husky/pre-push`)
- CLI Interface (`scripts/test-cli.js`)

## Documentation

See `docs/BROWSER_TESTING.md` for complete user guide.

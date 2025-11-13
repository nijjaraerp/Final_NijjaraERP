# Browser Testing Environment - User Guide

## Overview

This comprehensive browser testing environment provides VS Code agents with real-time access to test and interact with the Nijjara ERP system. It includes automated deployment, validation, and standardized reporting protocols.

## Quick Start

### 1. Start Browser Testing Server

```powershell
npm run test:start
```

Or use VS Code Task: **Start Browser Testing Server** (Ctrl+Shift+P → Tasks: Run Task)

**Access URL:** http://localhost:8080

### 2. Open Browser Preview

Run VS Code Task: **Open Browser Preview**

Or manually navigate to: http://localhost:8080/preview.html

### 3. Deploy with Validation

```powershell
npm run test:deploy
```

Or use VS Code Task: **Automated Deploy with Validation**

---

## Core Features

### 🌐 Shared Browser Instance

All agents can access the same browser environment when provided with an updated URL. The server runs on **port 8080** and serves files with:
- Real-time file watching
- No caching (always fresh content)
- CORS enabled for testing

**Files Served:**
- `/preview.html` - Main preview page
- `/preview-dashboard.html` - Dashboard preview
- All static assets (CSS, JS, images)

### 📊 Agent Communication Protocol

All task status reporting follows this standardized format:

```
=== AGENT STATUS REPORT ===
Agent: agent-name
Session: session-2025-11-13T...
Timestamp: 2025-11-13T...

--- Task Status ---
task1: complete
task2: partial
task3: failed (Connection timeout)

--- Next Steps ---
Test login button response after API fix

===========================
```

**Task Status Values:**
- `complete` - Task finished successfully
- `partial` - Task partially completed, requires follow-up
- `failed` - Task could not be completed

**Generate Status Report:**
```powershell
npm run test:status
```

### 🧪 Testing Recommendations

System adjustments are always provided in plain English:

```
=== TESTING RECOMMENDATIONS ===
1. Test login button response
2. Verify data saves after form submission
3. Check error handling for invalid inputs
4. Validate navigation between modules
5. Test real-time updates in dashboard
================================
```

### 🔄 Version Control Automation

After every task completion, the system automatically:

1. **Validates code quality**
   - Runs ESLint
   - Executes health checks
   - Verifies Apps Script paths

2. **Syncs with GitHub**
   - Stages all changes
   - Creates timestamped commit
   - Pulls latest changes
   - Detects and reports merge conflicts
   - Pushes to `origin main`

3. **Deploys to Apps Script**
   - Pushes only `main/` folder files
   - Uses `clasp push --force`
   - Retrieves deployment information

**Run Automated Deployment:**
```powershell
npm run test:deploy
```

**Run Validation Only:**
```powershell
npm run test:validate
```

### 📝 Debugging and Deployment Reporting

Every deployment generates a detailed report:

```markdown
# Deployment Report
## Deployment ID: 2025-11-13T12-30-45-123Z

### Timeline
- Start Time: 2025-11-13T12:30:45.123Z
- End Time: 2025-11-13T12:32:15.456Z
- Duration: 90.33s

---

## Deployment Process

### Step 1: ✅ SUCCESS: Starting pre-push validation
**Timestamp:** 2025-11-13T12:30:45.200Z

### Step 2: ✅ SUCCESS: ESLint passed - no syntax errors
**Timestamp:** 2025-11-13T12:30:48.500Z
**Details:**
...

### Step 3: ✅ SUCCESS: Pushed to GitHub
**Timestamp:** 2025-11-13T12:31:30.789Z
**Details:**
Branch: feature/frontend-stabilization
...
```

**Location:** `logs/deployment-reports/deployment-[timestamp].md`

### 📈 Execution Flow Tracking

Track complete execution flow from frontend to backend:

```markdown
# Execution Flow Report
## Flow ID: 2025-11-13T12-35-00-000Z

### Event 1: Frontend - Button Click
**Timestamp:** 2025-11-13T12:35:01.123Z
**Element:** `#login-button`
**Data:**
{
  "userId": "user123",
  "action": "login"
}

### Event 2: Backend - Authentication
**Timestamp:** 2025-11-13T12:35:01.456Z
**Function:** `authenticateUser`
**Data:**
{
  "status": "success",
  "sessionId": "sess_xyz"
}
```

**Location:** `logs/deployment-reports/execution-flow-[timestamp].md`

---

## Available Commands

### NPM Scripts

| Command                 | Description                     |
| ----------------------- | ------------------------------- |
| `npm run test:browser`  | Show help menu                  |
| `npm run test:start`    | Start browser testing server    |
| `npm run test:deploy`   | Full deployment with validation |
| `npm run test:validate` | Pre-push validation only        |
| `npm run test:status`   | Generate agent status report    |

### VS Code Tasks

Access via: **Ctrl+Shift+P** → **Tasks: Run Task**

| Task                             | Purpose                               |
| -------------------------------- | ------------------------------------- |
| Start Browser Testing Server     | Launch shared browser instance        |
| Automated Deploy with Validation | Full deployment workflow              |
| Pre-push Validation              | Validate before pushing               |
| Generate Agent Status Report     | Create standardized status report     |
| Open Browser Preview             | Open http://localhost:8080 in browser |

---

## Log Files

All activities are logged for debugging and auditing:

| Log File                                         | Purpose                          |
| ------------------------------------------------ | -------------------------------- |
| `logs/browser-testing.log`                       | Server activity and file serving |
| `logs/agent-protocol.log`                        | Agent communication and tasks    |
| `logs/deployment-reports/`                       | Deployment summaries             |
| `logs/deployment-reports/execution-flow-*.md`    | Execution flow tracking          |
| `logs/deployment-reports/session-summary-*.json` | Session summaries                |

---

## Permanent Standards

### ✅ Validation Requirements

Before every push:
1. ✓ ESLint passes with no errors
2. ✓ Health check succeeds
3. ✓ Apps Script paths verified
4. ✓ No merge conflicts

### ✅ Deployment Requirements

Every deployment must:
1. ✓ Generate timestamped deployment report
2. ✓ Document all execution steps
3. ✓ Include deployment links
4. ✓ Track frontend and backend flow
5. ✓ Log all errors and edge cases

### ✅ Communication Requirements

All agent communications must:
1. ✓ Follow standardized status format
2. ✓ Report: complete, partial, or failed
3. ✓ Include exactly one line for next steps
4. ✓ Provide plain English testing recommendations

---

## Troubleshooting

### Server Won't Start

**Problem:** Port 8080 already in use

**Solution:**
```powershell
# Find process using port 8080
netstat -ano | findstr :8080

# Kill the process (replace PID)
taskkill /F /PID <PID>

# Restart server
npm run test:start
```

### Deployment Fails

**Problem:** Validation errors

**Solution:**
```powershell
# Run validation to see specific errors
npm run test:validate

# Fix errors, then try again
npm run test:deploy
```

### Merge Conflicts

**Problem:** Git conflicts detected

**Solution:**
```powershell
# View conflicted files
git status

# Resolve conflicts manually, then
git add .
git commit -m "Resolved conflicts"
npm run test:deploy
```

---

## Advanced Usage

### Custom Agent Protocol

```javascript
const { AgentProtocol } = require('./scripts/browser-testing/agent-protocol');

const agent = new AgentProtocol('my-agent');

// Add tasks
agent.addTask('task1', 'Implement feature X');
agent.addTask('task2', 'Add unit tests');

// Update status
agent.updateTaskStatus('task1', 'complete');
agent.updateTaskStatus('task2', 'partial');

// Generate reports
agent.generateStatusReport('Complete task2 unit tests');
agent.generateTestingRecommendations([
  'Test feature X with edge cases',
  'Verify performance metrics'
]);

// Save session
agent.saveSessionSummary();
```

### Custom Deployment Reporter

```javascript
const { DeploymentReporter } = require('./scripts/browser-testing/deployment-reporter');

const reporter = new DeploymentReporter();

reporter.addStep('Custom deployment step');
reporter.addSuccess('Operation succeeded', 'Details...');
reporter.addError('Operation failed', 'Error details...');

// Get Git info
await reporter.getGitStatus();
await reporter.getCLASPDeploymentInfo();

// Generate report
const reportFile = reporter.generateReport();
console.log('Report saved:', reportFile);
```

### Execution Flow Tracking

```javascript
const { ExecutionFlowTracker } = require('./scripts/browser-testing/deployment-reporter');

const tracker = new ExecutionFlowTracker();

// Track frontend events
tracker.trackFrontend('click', '#submit-button', {
  formData: { name: 'John', email: 'john@example.com' }
});

// Track backend operations
tracker.trackBackend('saveData', 'Database Write', {
  table: 'users',
  recordId: 'usr_123'
});

// Generate report
const flowReport = tracker.generateFlowReport();
console.log('Flow report:', flowReport);
```

---

## Architecture

```
scripts/
├── browser-testing/
│   ├── launch-browser.js       # HTTP server for browser testing
│   ├── agent-protocol.js       # Standardized communication protocol
│   ├── deployment-reporter.js  # Deployment & flow reporting
│   └── version-control.js      # Automated deployment workflow
├── test-cli.js                 # Main CLI entry point
└── ...

logs/
├── browser-testing.log         # Server logs
├── agent-protocol.log          # Agent communication logs
└── deployment-reports/         # Deployment reports
    ├── deployment-*.md
    ├── execution-flow-*.md
    └── session-summary-*.json
```

---

## Support

For issues or questions:
1. Check logs in `logs/` directory
2. Run health check: `npm run health`
3. Review deployment reports in `logs/deployment-reports/`
4. Consult project documentation in `docs/`

---

**Version:** 1.0.0
**Last Updated:** November 13, 2025
**Maintained By:** Nijjara ERP Team

# Browser Testing Environment - Quick Reference

## Start Testing Server
```powershell
npm run test:start
# Access: http://localhost:8080
```

## Deploy with Validation
```powershell
npm run test:deploy
```

## Agent Status Report Format
```
=== AGENT STATUS REPORT ===
task1: complete
task2: partial
task3: failed

--- Next Steps ---
[Single line with next action]
===========================
```

## Testing Recommendations Format
```
1. Test login button response
2. Verify data saves after form submission
3. Check error handling for invalid inputs
```

## VS Code Tasks
- Ctrl+Shift+P → Tasks: Run Task
- Start Browser Testing Server
- Automated Deploy with Validation
- Generate Agent Status Report

## Log Locations
- `logs/browser-testing.log` - Server logs
- `logs/agent-protocol.log` - Agent logs
- `logs/deployment-reports/` - Deployment reports

## Deployment Workflow
1. Validate (ESLint + Health + Paths)
2. GitHub Sync (Stage + Commit + Pull + Push)
3. Apps Script Push (main folder only)
4. Generate Report

## Standards
✓ All deployments create timestamped reports
✓ All execution flows are tracked
✓ All agent communications follow protocol
✓ All pushes pass validation
✓ All conflicts resolved immediately

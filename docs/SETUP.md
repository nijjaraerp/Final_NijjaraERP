# Nijjara ERP - Workstation Setup (Windows)

This guide bootstraps a dev machine for the Google Apps Script-based ERP.

## Prerequisites
- Git (latest)
- Node.js LTS (v18+)
- VS Code (latest)
- Google account with Apps Script access

## Quick start

1. Clone the repo and open in VS Code.
2. Optional: run the environment bootstrap script.

```powershell
# From repo root
pwsh -File .\scripts\setup-environment.ps1 -InstallExtensions -GlobalClasp
```

3. Authenticate clasp and push to Apps Script when ready:

```powershell
npx @google/clasp login
npm run push
```

4. Recommended VS Code tasks: open the Command Palette and run: Tasks: Run Task.

## Environment variables
Copy `.env.example` to `.env` and fill values.
- GOOGLE_*: OAuth credentials for API access if needed locally.
- GITHUB_TOKEN: For scripts that interact with GitHub.
- OPENAI/ANTHROPIC/GOOGLE_API_KEY: Only if you wire AI services.

## Linting/Formatting
- ESLint + Prettier are configured. Run:

```powershell
npm run lint
npm run format
```

## MCP servers
The repo includes MCP server settings in `.vscode/settings.json` pointing to the current folder.
If you move the repo, run:

```powershell
npm run fix:paths
```

## Rollback
- VS Code settings: `git checkout -- .vscode/settings.json`
- .env creation: delete `.env` and re-copy from `.env.example`


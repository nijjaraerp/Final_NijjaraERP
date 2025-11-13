# Security & Access Control

## Credentials
- Store local secrets only in `.env` (never commit real secrets).
- Google Apps Script uses `clasp login` OAuth flow; secrets are stored by `clasp`, not in the repo.
- Rotate tokens regularly.

## Access levels
- Separate GitHub roles (admin, maintainer) from Apps Script editors.
- Use branch protection on `main`.

## Audit logging
- All helper scripts write to `./logs` with timestamps.
- Include log files in incident reports.

## Rollback
- For configuration changes, revert with `git checkout -- <files>`.
- For deployments, maintain changelogs and use versioned releases.

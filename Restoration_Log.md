# Restoration Log

## Version 61 Baseline

- Baseline Tag: v61-baseline
- Description: Stable backend APIs and services; starting point for frontend stabilization and theme implementation.
- Safeguards: `.clasp.json` configured to sync from `./main` only; Husky pre-push checks prevent script files outside `main`.

### Recovery Instructions
1. Checkout the baseline: `git checkout v61-baseline`
2. Create a working branch from baseline: `git checkout -b feature/frontend-stabilization`
3. Ensure Apps Script pushes are restricted to `./main`: see `.clasp.json` and pre-push hook.

### Notes
- Maintain backward compatibility with APIs exposed in Version 61 during UI refactors.
- All HTML templates served by `doGet` come from `main` (`Login.html`, `NijjaraOS.html`).


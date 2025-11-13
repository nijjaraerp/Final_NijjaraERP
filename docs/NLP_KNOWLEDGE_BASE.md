# Knowledge Base: NL → Technical Tasks

Use these patterns to write clear requests that the pipeline transforms well.

## Examples

### Add a new field to schema
- Components: `main/Setup.js` (ERP_SCHEMA), `main/Seed_Data.js`, `main/Seed_Functions.js`
- Acceptance Criteria:
  - Column appears in the correct sheet with English header
  - Arabic header is formula-linked
  - `runInitialSetup()` completes without errors

### Create a permission
- Components: `main/SYS_Permissions.js`, `main/Seed_Data.js`
- Acceptance Criteria:
  - New permission is seeded
  - Roles updated accordingly
  - UI reflects permission in SET_ sheets

### Add validation rule
- Components: `main/Validation.js`, `main/SchemaGuard.js`
- Acceptance Criteria:
  - Invalid inputs rejected with clear message
  - Logging via `logError` on failures


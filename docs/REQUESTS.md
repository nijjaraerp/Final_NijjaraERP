# Submitting Plain Language Requests

There are two simple ways to submit a request that the system will transform, validate, queue, and forward to the agent for execution.

## Option A: Use a file (recommended)
1) Create a text or Markdown file under `requests/`, e.g. `requests/my-task.md`.
2) Write your request in plain language. Include a section named `## Acceptance Criteria` with bullet points if possible.
3) Submit it via the VS Code task:
   - Open the file in the editor
   - Run: Tasks → Run Task → "Submit NL Request (active file)"

This will:
- Transform your text into a structured task
- Validate that required fields exist
- If valid, write a queued task JSON to `queue/pending/` and forward it to the agent
- If something is missing, write a clarification JSON to `queue/clarifications/`

## Option B: Use the terminal
```powershell
# From repo root, using a file
npm run request -- .\requests\my-task.md

# Or pass text directly
npm run request -- "- Add login feature`n## Acceptance Criteria`n- Works with valid credentials"
```

## What happens next?
- The agent log is written to `./logs/agent-*.log`. For now, it simulates execution and confirms receipt.
- You can extend `scripts/agents/deploy.ps1` to invoke real MCP/AI agents.

## Tips for best results
- Always include an "Acceptance Criteria" section.
- Add a "Components" section to list impacted files/areas when you know them.
- Keep requests concise but complete. The pipeline adds a clean agent prompt internally.

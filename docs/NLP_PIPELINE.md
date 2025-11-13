# Natural Language → Structured Task Pipeline

This repo includes a lightweight, rule-based transformer that converts plain text into a structured technical task JSON.

## CLI usage

```powershell
# From repo root
# Parse a text file
node .\tools\nlp\cli.js .\docs\NLP_PIPELINE.md | Out-File -Encoding utf8 .\nlp-output.json

# Or pipe text
"- Implement caching\n- Acceptance Criteria\n  - Cache hit ratio > 90%" | node .\tools\nlp\cli.js
```

## Outputs
- `task`: structured fields (title, description, components, acceptanceCriteria, dependencies, risks)
- `validation`: missing fields/errors
- `checklist`: pre-action checklist items

## Integration
- Extend `tools/nlp/index.js` to add domain-specific parsing rules.
- Replace with an LLM when ready; keep the same output schema for downstream compatibility.


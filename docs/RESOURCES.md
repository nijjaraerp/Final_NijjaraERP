# Resource Optimization Audit

Perform this review quarterly or when usage patterns change.

## Current paid services (examples)
- ChatGPT Plus
- Gemini Pro
- GitHub (Team/Pro)
- Trae

## What to evaluate
- Performance: response time, reliability
- Cost vs usage: monthly spend, per-seat utility
- Integration: APIs, SDKs, webhooks, security

## Recommendations template
- Keep: <service> — reason
- Downgrade: <service> — reason
- Upgrade: <service/tier> — reason
- Replace: <service A> -> <service B> — reason

## Interoperability
- Use `.env` to keep credentials and tokens.
- Prefer REST+JSON or official SDKs.
- Centralize outbound requests via utility functions for observability.


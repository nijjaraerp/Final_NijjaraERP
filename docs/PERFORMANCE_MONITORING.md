# Performance Monitoring & Alerts

## Health check
Run the health task to gather environment info, lint/format checks, and sizes.

```powershell
npm run health
```

Logs are stored in `./logs/health-*.log`.

## Benchmarks
- Add micro-benchmarks to `scripts/health-check.js` as needed.

## Alerts
- For CI usage, parse the health log and fail thresholds (e.g., size > X MB).
- Optional: integrate with Sentry or PostHog using env vars in `.env`.

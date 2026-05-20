# aegis-cicd-test

Tests the **CI/CD page** and **Insights page** in AEGIS.

## Setup
1. Push this repo to GitHub
2. Go to Actions tab — you'll see 3 workflows
3. Push to main 5-6 times so `flaky.yml` builds up failure history

## What to Test in AEGIS CI/CD Page

| Action | How | Expected Output |
|--------|-----|-----------------|
| View runs | Open CI/CD page | Lists all 3 workflows with status badges |
| Re-run failed | Click ▷ on a failed flaky run | New run triggers, status updates |
| Cancel run | Click ■ on an in-progress run | Run cancels within seconds |
| Anomaly detect | After 5+ flaky failures | Orange banner: "X of last 5 runs failed" |
| AI explain anomaly | Click "Explain" on anomaly | AI describes likely cause (flaky test / infra issue) |
| Trigger pipeline | Enter branch name + click trigger | New run appears in list |

## Different Outputs to Expect
- **First push:** Only 1 run — no anomaly
- **After 3+ failures:** Anomaly banner appears, AI explanation changes each time
- **Re-run a success:** AI explanation will say "no issues detected"
- **Re-run a failure:** AI will suggest root cause differ each run (random)

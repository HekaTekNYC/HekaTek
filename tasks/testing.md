# Testing & Launch Tasks

End-to-end testing, RLS verification, production setup, and deployment.
These run last, after all feature work is complete.

---

## End-to-End Tests

- [x] TEST-01 Full client journey — invite → password → questionnaire → assets → timeline → approve → message → invoice
  - source: 14.1
  - depends: all FE client tasks
  - notes: test with a real invite email flow

- [x] TEST-02 Full admin journey — invite client → view onboarding → update phases → upload deliverable → respond → check billing
  - source: 14.2
  - depends: all FE admin tasks
  - notes: test all admin CRUD operations

- [x] TEST-03 Test RLS policies — clients cannot access other clients' data, admin can access all
  - source: 14.3
  - depends: INFRA-06
  - notes: test with two separate client accounts

- [x] TEST-04 Test real-time messaging — messages appear instantly without refresh
  - source: 14.4
  - depends: FE-34, FE-48
  - notes: open two browser windows side by side

- [x] TEST-05 Test WaveApps integration — amounts, statuses, PDF downloads, installment tracking
  - source: 14.5
  - depends: INFRA-15, FE-37
  - notes: use real WaveApps invoice data

## Production & Deploy

- [x] TEST-06 Set up Supabase production environment — separate from dev, migrate schema, configure Netlify env vars
  - source: 14.6
  - depends: all INFRA tasks
  - notes: do NOT reuse dev project for production

- [x] TEST-07 Deploy to production — merge to dev, verify Netlify build, smoke test all features
  - source: 14.7
  - depends: TEST-01 through TEST-06
  - notes: final go/no-go checkpoint

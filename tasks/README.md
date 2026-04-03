# Task Coordination System

File-based task tracking for the Hekatek Client Portal build. Tasks are split by domain so work can be planned, assigned, and tracked independently.

## Structure

```
tasks/
├── README.md              ← You are here
├── infrastructure.md      ← Supabase setup, env config, database schema, RLS
├── backend.md             ← Auth, Edge Functions, data seeding, business logic
├── frontend.md            ← UI components, layouts, pages, theming, responsive
├── testing.md             ← E2E tests, RLS verification, production deploy
└── distribute.sh          ← Script to report mapping coverage from openspec
```

## Task Format

Each task follows this format:

```
- [ ] {id} {description}
  - source: openspec task reference (e.g., 1.1, 2.3)
  - depends: list of task IDs this blocks on
  - notes: implementation details or decisions
```

## Statuses

- `[ ]` — not started
- `[~]` — in progress
- `[x]` — done
- `[!]` — blocked

## Adding a Task Manually

Append to the appropriate domain file:

```markdown
- [ ] FE-XX Build the widget component
  - source: manual
  - depends: none
  - notes: needs design review before starting
```

## Workflow

1. Run `bash tasks/distribute.sh` to sync from openspec/changes/hekatek-client-portal/tasks.md
2. Pick a domain file, find the next unblocked `[ ]` task
3. Mark `[~]` when you start, `[x]` when done
4. If blocked, mark `[!]` and note the blocker

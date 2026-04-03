# Agent-Task Coordination Map

Which agent owns which task files, and how they coordinate.

## Agent Assignments

| Agent | Role | Task Files | ID Prefix |
|-------|------|-----------|-----------|
| **Ryoko** | Backend & Infrastructure | `infrastructure.md`, `backend.md` | INFRA-*, BE-* |
| **Yoruichi** | Frontend & UI | `frontend.md` | FE-* |
| **Unassigned** | Testing & Deploy | `testing.md` | TEST-* |

## Dependency Flow

```
infrastructure.md (Ryoko)
        │
        ▼
   backend.md (Ryoko)
        │
        ▼
  frontend.md (Yoruichi)
        │
        ▼
   testing.md (unassigned — run jointly after feature work)
```

## Shared Boundaries

These files sit at the boundary between agents — both may read, but ownership is clear:

| File | Written by | Consumed by |
|------|-----------|-------------|
| `src/lib/supabase.js` | Ryoko | Yoruichi |
| `src/lib/auth.js` | Ryoko | Yoruichi |
| `src/contexts/auth.context.jsx` | Ryoko (logic) | Yoruichi (UI consumption) |
| `src/App.jsx` | Yoruichi (routes) | Both |

## Handoff Protocol

When Ryoko completes an INFRA-* or BE-* task that unblocks FE-* tasks:

1. Mark the task `[x]` in her file
2. Find the dependent FE-* task(s) in `tasks/frontend.md`
3. Update the `depends` line to note the dependency is satisfied
4. Example: `depends: INFRA-05 ✓, BE-02 ✓` 

## Launch Commands

```bash
# Launch Ryoko for infrastructure/backend work
/ryoko Read tasks/infrastructure.md and tasks/backend.md. Pick up the next unblocked task and begin implementation.

# Launch Yoruichi for frontend work
/yoruichi Read tasks/frontend.md. Pick up the next unblocked task and begin implementation.

# Launch both in parallel (when their work doesn't overlap)
# Use the Agent tool with two concurrent invocations
```

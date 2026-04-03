#!/bin/bash
#
# distribute.sh — Parse openspec tasks.md and report what's mapped vs. unmapped
#
# Usage: bash tasks/distribute.sh
#
# This script reads the openspec master task list and cross-references it against
# the domain task files (infrastructure.md, backend.md, frontend.md).
# It reports any openspec tasks that aren't yet tracked in a domain file.

OPENSPEC_TASKS="openspec/changes/hekatek-client-portal/tasks.md"
TASK_DIR="tasks"

if [ ! -f "$OPENSPEC_TASKS" ]; then
  echo "Error: $OPENSPEC_TASKS not found"
  exit 1
fi

echo "=== Task Distribution Report ==="
echo ""

# Extract all task IDs from openspec (e.g., 1.1, 2.3, 14.7)
openspec_ids=$(grep -oE '[0-9]+\.[0-9]+' "$OPENSPEC_TASKS" | sort -t. -k1,1n -k2,2n | uniq)
total=$(echo "$openspec_ids" | wc -l | tr -d ' ')

# Extract all source references from domain files
mapped_ids=$(grep -hE 'source:' "$TASK_DIR"/infrastructure.md "$TASK_DIR"/backend.md "$TASK_DIR"/frontend.md "$TASK_DIR"/testing.md 2>/dev/null | grep -oE '[0-9]+\.[0-9]+' | sort -t. -k1,1n -k2,2n | uniq)
mapped_count=$(echo "$mapped_ids" | wc -l | tr -d ' ')

echo "Openspec tasks:  $total"
echo "Mapped to domain files: $mapped_count"
echo ""

# Find unmapped tasks
unmapped=""
for id in $openspec_ids; do
  if ! echo "$mapped_ids" | grep -qx "$id"; then
    # Get the task description from openspec
    desc=$(grep "$id" "$OPENSPEC_TASKS" | head -1 | sed 's/^- \[ \] //')
    unmapped="${unmapped}  ${desc}\n"
  fi
done

if [ -z "$unmapped" ]; then
  echo "All openspec tasks are mapped to domain files."
else
  echo "UNMAPPED tasks (need to be added to a domain file):"
  echo ""
  printf "%b" "$unmapped"
fi

echo ""
echo "=== Per-Domain Breakdown ==="
echo ""

for file in infrastructure.md backend.md frontend.md testing.md; do
  filepath="$TASK_DIR/$file"
  if [ -f "$filepath" ]; then
    total_tasks=$(grep -c '^- \[' "$filepath" 2>/dev/null || echo 0)
    done_tasks=$(grep -c '^- \[x\]' "$filepath" 2>/dev/null || echo 0)
    progress_tasks=$(grep -c '^- \[~\]' "$filepath" 2>/dev/null || echo 0)
    blocked_tasks=$(grep -c '^- \[!\]' "$filepath" 2>/dev/null || echo 0)
    todo_tasks=$(grep -c '^- \[ \]' "$filepath" 2>/dev/null || echo 0)
    echo "$file: $total_tasks total | $done_tasks done | $progress_tasks in progress | $blocked_tasks blocked | $todo_tasks todo"
  fi
done

# Canonical Project Memory Adapter Feasibility

> **English** · [Português](README.pt-BR.md)

An experiment that tests whether human-readable, versioned Markdown and YAML Project Memory can
initialize, resume, and compare the C-lite domain deterministically without turning runtime state,
event logs, snapshots, or derived views into sources of truth.

```text
Canonical Project Memory != Runtime State != Event Log != Snapshot
Read Adapter             != Write Authority
Update Proposal          != Accepted Canonical Change
```

## Pipeline

```text
Versioned Project Memory
  -> bounded parsing and validation
  -> canonical / derived / temporary classification
  -> staleness and contradiction detection
  -> deterministic domain initialization or resume
  -> proposed memory update
  -> explicit human acceptance outside the adapter
```

The adapter validates schema version and size limits, detects sensitive data in fixtures, resumes
from multiple lifecycle points, and guarantees `NO AUTO-WRITE`.

## Run

```bash
npm install
npm test
```

## Boundaries

This experiment is not a write authority, canonical memory service, event-sourcing platform, or
production persistence layer. Contradictions require an external human decision.

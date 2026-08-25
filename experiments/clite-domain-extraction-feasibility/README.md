# C-lite Domain Extraction Feasibility

> **English** · [Português](README.pt-BR.md)

A limited, reversible experiment that extracts the Stage 3 vertical slice domain core from its UI.
It asks whether the state machine, commands, events, guards, invalid transitions, and Project Memory
derivation remain executable and testable without the demonstration application.

```text
Feasibility Extraction != Canonical Domain Package
Extracted Code         != Production-Ready Code
Passing Tests          != Product Validation
```

## What is included

- Typed commands and events.
- Deterministic state transitions and invalid-transition guards.
- Authorization represented separately from execution.
- Replay from an event history.
- Failure, retry, cancellation, review, and lineage behavior.
- Persistence adapters and Project Memory reconstruction.
- Two synthetic scenarios using the same domain mechanics.

## Contract differences

Differences from the Stage 3 prototype are recorded explicitly instead of being hidden behind a
compatibility claim. Extraction is allowed to reveal missing abstractions, but it cannot silently
promote experimental types to canonical ontology.

## Run

```bash
npm install
npm test
```

## Boundaries

This is not a canonical domain package, backend, distributed event store, authorization service, or
production runtime. Tests validate deterministic local behavior over synthetic data only.

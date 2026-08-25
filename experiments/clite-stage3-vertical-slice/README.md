# C-lite Stage 3 Executable Vertical Slice

> **English** · [Português](README.pt-BR.md)

A local experimental implementation of the smallest governed C-lite cycle:

```text
idea -> discovery -> assumptions -> understanding -> plan -> approval -> queue
-> execution -> pending -> failure -> recovery -> completion -> result -> evidence
-> accept / revise / reject -> project memory -> return
```

Failure, retry, cancellation, and recovery are first-class states rather than hidden exceptions.

## Boundary

Local-only, single-user, deterministic, and based on synthetic data. There is no backend, runtime
network, authentication, real agent execution, or deployment. The interface demonstrates workflow
and state transitions; it does not enforce real access control or make production security claims.

## Run

```bash
npm install
npm test
npm run build
```

## Verified behavior

- Governed transitions from proposal through acceptance.
- Routed pending, failure, retry, cancellation, and recovery states.
- Separate artifact and evidence records linked by claims.
- Versioned local snapshots and history.
- CSP, no external runtime assets, semantic structure, and basic accessibility checks.

## Reset and snapshot

The demonstration can reset synthetic state and restore its versioned local snapshot. This is a
deterministic local convenience, not durable crash recovery or event sourcing.

## Known limitations

No real identity, RBAC, idempotent external work, timeout enforcement, backoff, distributed
reliability, production observability, or PII sanitization is implemented.

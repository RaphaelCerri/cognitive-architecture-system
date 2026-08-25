---
title: "Experiment: Interaction Protocol"
status: experimental
canonicality: experimental_prototype_not_canon
created_at: 2026-07-23
parent_directive: knowledge/DRAFT-DIRECTIVE-interaction-protocol-slice-1.md
parent_vision: knowledge/DRAFT-VISION-self-extending-capability-arms.md
language: en
---

# Interaction Protocol Demonstration

> **English** · [Português](README.pt-BR.md)

A disposable prototype that turns an open conversation into structured elicitation without
redesigning the governing Slice 1 directive.

## First decision after intent

The protocol first identifies initiative maturity:

- **Idea:** no tangible artifact exists yet.
- **Tangible work:** documents, code, or decisions already exist.
- **Operation:** the initiative is running and has observed behavior.

Routing changes with maturity so the system does not prescribe a solution before understanding
available evidence and constraints.

## Loop

```text
intent -> maturity -> evidence -> constraints -> assumptions -> bounded next action -> confirmation
```

Communication rules apply across all phases: distinguish facts from assumptions, bring required
content into the interaction, ask one decision at a time, and preserve unresolved uncertainty.

## Tracked state and output

The prototype tracks maturity, confirmed facts, assumptions, open questions, evidence references,
constraints, and the next authorized action. Output follows a bounded contract rather than a free
form recommendation.

## Run

```bash
npm install
npm test
```

## Boundaries

This is not a conversational product, autonomous planner, canonical protocol implementation, or
proof of user experience quality. It validates routing and contract behavior over synthetic cases.

---
schema_version: 0.1.0-experimental
document_role: category_index
title: Architectural Research Programs
status: experimental
language: en
---

# Architectural Research Programs

> **English** · [Português](README.pt-BR.md)

This category records architectural investigations before they become Architectural Proposals.

An Architectural Research Program (ARP) identifies a problem, formulates questions, gathers
evidence, and compares principles and alternatives. It does not represent implementation intent,
technology approval, or inclusion in the Core.

## Relationship to proposals and decisions

```text
question or uncertainty -> ARP -> evidence and assessment -> AP -> authority decision -> ADR / handoff
```

Research may end without a proposal. A proposal may cite multiple programs. No research conclusion
becomes governing architecture without the required authority transition.

## Rules

- Separate observed evidence, inference, hypothesis, and recommendation.
- Record contradictory evidence rather than averaging it away.
- Declare scope, authority, methods, external dependencies, and stopping criteria.
- Preserve provenance for sources and derived claims.
- Do not implement experimental findings directly from the research directory.

## Experimental lifecycle

Programs can be `draft`, `active`, `paused`, `split`, `closed`, or `superseded`. State changes must
record rationale and preserve links to resulting evidence, proposals, or successor programs.

## Operational criteria

- **Start:** the uncertainty can change architecture and cannot be resolved by an existing artifact.
- **Split:** independent questions have different evidence or stopping conditions.
- **Pause:** progress depends on unavailable evidence or authority.
- **Close:** stopping criteria are satisfied, the question is rejected, or further work has no
  justified architectural value.

## Safe relations and portfolio control

Relations distinguish `supports`, `contradicts`, `investigates`, `derives`, and `supersedes`.
Inferred links remain derived views and never become canonical facts automatically. Portfolio review
limits duplicate programs and research without a decision path.

The files in this directory and their frontmatter are the canonical program index. The Portuguese
version preserves the detailed historical portfolio table.

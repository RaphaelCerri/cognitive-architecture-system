# Architectural Evolution Backlog

> **English** · [Português](README.pt-BR.md)

This backlog records possible architectural evolution. It is not a task list, sprint backlog, or
substitute for operational planning.

Any idea that can change principles, ontology, contracts, core capabilities, governance,
intelligence, runtime, evolution, or system boundaries must begin as an **Architectural Proposal
(AP)**. It must not remain only in conversation or move directly to implementation.

## Canonical source

All proposals live in [`proposals/`](proposals/) regardless of state. Physical paths do not encode
status. Status is a logical YAML attribute; derived views may organize proposals but never replace
canonical objects.

## Initial states

- `draft`: incomplete and not ready for review.
- `proposed`: complete enough for evaluation.
- `accepted`: approved in principle, not necessarily scheduled or implemented.
- `rejected`: evaluated and declined with rationale.
- `superseded`: replaced by an explicitly linked proposal.
- `implemented`: delivered with evidence and review.

## Required content and flow

Each AP identifies the problem, scope, affected principles or contracts, alternatives, risks,
authority, validation strategy, and expected evidence. The official flow is proposal, architectural
review, authority decision, bounded handoff, implementation evidence, and milestone review.

Milestone review is mandatory in V1 and remains manual until a compiler can derive trustworthy
portfolio views.

## Identification

Proposal IDs use `AP-NNNN`. IDs are stable and never reused, even after rejection or supersession.

---
schema_version: "0.1.0-experimental"
id: PMM-001
kind: knowledge
knowledge_type: architectural_manifesto
title: "Project Memory Manifesto"
status: approved
version: "1.0"
created_at: 2026-07-21
owner: "Architecture Council"
audience: [CVO, CSA, CEA]
language: en
relations:
  - type: reinforces
    target: AIP-001
  - type: governs
    target: GOV-001
---

# Project Memory Manifesto

## Purpose

No architectural knowledge may depend on the memory of a specific AI model or person. The project must become self-describing. Any future AI, contributor, or architect must understand the system by consulting the repository instead of relying on previous conversations.

The repository is the institutional memory. Humans and AIs are interpreters of that memory.

## Architectural Boundary

> Project Memory is an architectural responsibility, not a directory.

Permanent knowledge must be reflected in the repository wherever it belongs semantically. A dedicated layer or physical organization may only emerge from a justified Architectural Proposal.

## Core Principle

> No important decision may exist exclusively inside a conversation.

Conversations generate ideas. Project Memory preserves them.

## Objectives

Project Memory exists to preserve architectural knowledge, eliminate dependence on context windows and human memory, make evolution traceable, allow a future AI to reconstruct project state, and provide a single source of truth.

## Authority Hierarchy

When sources conflict, the highest available authority prevails:

1. Constitution — future.
2. Manifestos.
3. Governance.
4. Core Principles.
5. ADRs.
6. Architecture Documentation.
7. Knowledge Objects.
8. Roadmap.
9. Milestones.
10. Implementation.

## Philosophy

Project Memory is not merely documentation. Documentation explains; Project Memory preserves decisions. Knowledge explains reality; Project Memory explains why reality became what it is.

## Required Persistent Knowledge

The repository must preserve principles, architectural decisions, architectural proposals, manifestos, governance, glossary definitions, roadmap, and milestones.

Every architectural idea becomes an AP before implementation. Every important accepted decision becomes an ADR. Rejected alternatives and superseded decisions remain traceable.

## AI Independence

Changing AI assistants must not require rebuilding architectural context. The repository must contain enough information for another AI to continue development without access to previous conversations.

## Responsibilities

- **CSA:** interprets Project Memory and consults it instead of relying on conversation history.
- **CEA:** continuously improves Project Memory, registers insights as APs, and records implementation consequences.
- **CVO:** approves architectural direction; the repository preserves it.

## Living Memory

Project Memory evolves continuously and should increasingly explain what exists, why it exists, when it appeared, which decision created it, and which alternatives were rejected.

## Success Criterion

Project Memory succeeds when a completely new AI can clone the repository and understand the architectural reasoning without access to previous conversations.

## Evolution History

- 2026-07-21: version 1.0 approved by the Architecture Council.

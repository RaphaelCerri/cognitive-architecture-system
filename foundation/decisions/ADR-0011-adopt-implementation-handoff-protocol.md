---
schema_version: "0.1.0-experimental"
id: ADR-0011
kind: knowledge
knowledge_type: architectural_decision_record
title: "Adopt the Implementation Handoff Protocol"
status: accepted
created_at: 2026-07-21
decision_authority: "Architecture Council"
language: pt-BR
relations:
  - type: implements
    target: AP-0010
  - type: establishes
    target: IHP-001
  - type: authorized_by
    target: AD-002
---

# ADR-0011 — Adopt the Implementation Handoff Protocol

## Contexto

Resumos de execução não preservam evidência suficiente para revisão arquitetural independente da conversa ou do ambiente do CEA.

## Decisão

Adotar IHP-001 como protocolo obrigatório em pontos de controle significativos e como requisito de encerramento de milestones.

## Consequências

Milestones implementados podem permanecer `pending_review`. Relatórios autocontidos passam a integrar a Project Memory e precisam explicitar execução, validação, desvios, decisões, riscos e questões pendentes.

## Alternativas rejeitadas

Resumos informais foram rejeitados por omissão. Logs completos sem síntese foram rejeitados por dificultar revisão e transportar ruído operacional.

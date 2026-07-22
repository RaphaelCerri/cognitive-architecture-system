---
schema_version: "0.1.0-experimental"
id: ADR-0012
kind: knowledge
knowledge_type: architectural_decision_record
title: "Prioritize System Overview in V1-M02"
status: accepted
created_at: 2026-07-22
decision_authority: "Architecture Council"
language: pt-BR
relations:
  - type: authorized_by
    target: AD-003
  - type: prioritizes
    target: ARCH-001
  - type: revises
    target: ROADMAP-001
---

# ADR-0012 — Prioritize System Overview in V1-M02

## Contexto

O projeto possui decisões canônicas distribuídas, mas ainda não possui uma visão completa capaz de orientar uma nova IA sem conversas anteriores.

## Decisão

Priorizar a estrutura do System Overview antes da expansão da Ontologia em V1-M02. O documento será arquitetura canônica de navegação e síntese, não README nem nova autoridade acima das fontes especializadas.

## Consequências

V1-M02 ganha um checkpoint estrutural anterior à redação definitiva. Ontologia e metamodelo permanecem experimentais e serão contextualizados sem promoção automática.

## Alternativas rejeitadas

Expandir diretamente a Ontologia foi adiado por risco de baixa compreensão global. Transformar o README em visão completa foi rejeitado por misturar onboarding breve e arquitetura detalhada.

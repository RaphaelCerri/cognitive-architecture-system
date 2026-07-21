---
schema_version: "0.1.0-experimental"
id: ADR-0008
kind: knowledge
knowledge_type: architectural_decision_record
title: "Human-Governed Evolution"
status: accepted
created_at: 2026-07-21
decision_authority: "Founder & CVO"
language: pt-BR
relations:
  - type: constrained_by
    target: AIP-001
---

# ADR-0008 — Human-Governed Evolution

## Contexto

Autoalteração da fonte canônica prejudica confiança e torna difícil explicar por que a arquitetura mudou.

## Decisão

Na V1, Evolution observa, analisa e propõe melhorias com justificativa, impacto e evidências, mas nunca modifica diretamente a fonte canônica.

> A IA propõe. O humano aprova.

## Consequências

Toda mudança permanente possui revisão explícita e histórico consistente. Níveis futuros de autonomia deverão nascer como AP.

## Alternativas rejeitadas

Atualização automática de drafts e autoevolução plena foram adiadas por falta de governança e evidência operacional.

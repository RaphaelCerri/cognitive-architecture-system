---
schema_version: "0.1.0-experimental"
id: ADR-0003
kind: knowledge
knowledge_type: architectural_decision_record
title: "Structural and Human Language Convention"
status: accepted
created_at: 2026-07-21
decision_authority: "Founder & CVO"
language: pt-BR
relations:
  - type: applies_to
    target: ADR-0001
---

# ADR-0003 — Structural and Human Language Convention

## Contexto

O sistema precisa de interoperabilidade internacional sem criar atrito desnecessário para autoria e revisão humana.

## Decisão

Schemas, IDs, tipos, enums, campos, interfaces, objetos e nomes de capacidades usam inglês. Conteúdo humano pode ser multilíngue, com português como padrão inicial. O idioma do conteúdo nunca influencia a estrutura.

## Consequências

Contratos permanecem portáveis e o conhecimento continua natural para seu principal autor.

## Alternativas rejeitadas

Tudo em português reduz interoperabilidade; tudo em inglês aumenta o atrito cotidiano sem necessidade estrutural.

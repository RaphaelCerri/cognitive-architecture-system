---
schema_version: "0.1.0-experimental"
id: ADR-0007
kind: knowledge
knowledge_type: architectural_decision_record
title: "Logical Status and Derived Views"
status: accepted
created_at: 2026-07-21
decision_authority: "Architecture Council"
language: pt-BR
relations:
  - type: records
    target: AP-0001
  - type: ratified_by
    target: ACD-001
---

# ADR-0007 — Logical Status and Derived Views

## Contexto

Organizar objetos por pastas de status acopla ciclo de vida à estrutura física e exige movimentações desnecessárias.

## Decisão

Status pertence ao objeto. Todos os objetos de uma coleção permanecem em sua localização canônica; visões como approved, scheduled, completed, rejected e superseded serão derivadas pelo Compiler.

## Consequências

Links e identidades permanecem estáveis e diferentes visões podem coexistir sem duplicação.

## Alternativas rejeitadas

Diretórios por status foram rejeitados por acoplamento lógico-físico.

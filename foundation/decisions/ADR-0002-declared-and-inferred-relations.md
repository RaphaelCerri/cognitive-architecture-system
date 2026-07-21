---
schema_version: "0.1.0-experimental"
id: ADR-0002
kind: knowledge
knowledge_type: architectural_decision_record
title: "Declared and Inferred Relations"
status: accepted
created_at: 2026-07-21
decision_authority: "Founder & CVO"
language: pt-BR
relations:
  - type: depends_on
    target: ADR-0001
---

# ADR-0002 — Declared and Inferred Relations

## Contexto

Relações intencionais exigem autoridade autoral; relações técnicas e redundantes podem ser derivadas.

## Decisão

Relações explícitas sempre prevalecem. O Compiler poderá derivar relações adicionais, mas nunca sobrescrever ou contradizer declarações. Toda inferência registrará origem, regra e confiança quando aplicável e será reconstruível sem alterar a fonte canônica.

## Consequências

O autor declara intenção; o Compiler expande o grafo. Visões devem permitir inspeção separada das relações declaradas e derivadas.

## Alternativas rejeitadas

Somente relações manuais não escalam; somente inferência reduz controle e auditabilidade.

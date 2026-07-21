---
schema_version: "0.1.0-experimental"
id: ADR-0009
kind: knowledge
knowledge_type: architectural_decision_record
title: "Taxonomy V1 Is Logical and Versioned"
status: accepted
created_at: 2026-07-21
decision_authority: "Founder & CVO"
language: pt-BR
relations:
  - type: may_be_revised_by
    target: AP-0006
---

# ADR-0009 — Taxonomy V1 Is Logical and Versioned

## Contexto

Uma taxonomia inicial é necessária para orientar o trabalho, mas tratá-la como estrutura permanente ou espelho de diretórios impediria evolução.

## Decisão

A Taxonomia V1 possui seis domínios lógicos: Foundation, Knowledge, Intelligence, Governance, Runtime e Evolution. Ela é versionada, revisável e independente da estrutura física. A Ontologia futura poderá confirmar, redefinir ou substituir suas fronteiras.

## Consequências

Os domínios orientam classificação sem se tornarem axiomas prematuros.

## Alternativas rejeitadas

Taxonomia imutável e diretórios equivalentes aos domínios foram rejeitados por acoplamento.

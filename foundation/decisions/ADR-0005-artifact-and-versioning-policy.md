---
schema_version: "0.1.0-experimental"
id: ADR-0005
kind: knowledge
knowledge_type: architectural_decision_record
title: "Canonical and Generated Artifact Policy"
status: accepted
created_at: 2026-07-21
decision_authority: "Founder & CVO"
language: pt-BR
relations:
  - type: depends_on
    target: ADR-0001
---

# ADR-0005 — Canonical and Generated Artifact Policy

## Contexto

Artefatos compilados versionados junto da fonte geram divergência e diffs ruidosos.

## Decisão

Somente Knowledge Objects e demais fontes canônicas são versionados durante o desenvolvimento. Artefatos compilados são reproduzíveis e gerados localmente. Fixtures e snapshots de teste podem ser versionados; releases oficiais podem publicar compilados como assets auditáveis. Git é obrigatório desde o início.

## Consequências

A fonte mantém autoridade única, enquanto releases continuam distribuíveis e inspecionáveis.

## Alternativas rejeitadas

Versionar todos os compilados foi rejeitado por risco de divergência.

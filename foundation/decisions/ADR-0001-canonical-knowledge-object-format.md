---
schema_version: "0.1.0-experimental"
id: ADR-0001
kind: knowledge
knowledge_type: architectural_decision_record
title: "Canonical Knowledge Object Format"
status: accepted
created_at: 2026-07-21
decision_authority: "Founder & CVO"
language: pt-BR
relations: []
---

# ADR-0001 — Canonical Knowledge Object Format

## Contexto

O sistema precisa combinar autoria humana, validação por máquina e compilação para múltiplos formatos.

## Decisão

Cada Knowledge Object canônico será um arquivo Markdown com front matter YAML. O YAML é parte contratual do objeto, não metadado auxiliar; o corpo Markdown contém conhecimento humano e documentação operacional. O arquivo completo é a fonte de verdade e cada especialização deverá possuir schema correspondente.

## Consequências

Objetos poderão ser validados, versionados em Git e compilados para JSON, bancos, grafos, índices e documentação.

## Alternativas rejeitadas

JSON puro prejudica autoria; YAML e documentação separados criam risco de divergência.

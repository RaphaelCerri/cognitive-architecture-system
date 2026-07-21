---
schema_version: "0.1.0-experimental"
id: ADR-0004
kind: knowledge
knowledge_type: architectural_decision_record
title: "Core Platform Language Boundary"
status: accepted
created_at: 2026-07-21
decision_authority: "Founder & CVO"
language: pt-BR
relations: []
---

# ADR-0004 — Core Platform Language Boundary

## Contexto

O Core precisa de contratos portáveis, enquanto módulos especializados de IA podem se beneficiar do ecossistema Python.

## Decisão

Schemas, validação, Compiler e CLI do Core Platform serão implementados em TypeScript sobre Node. Python será linguagem de primeira classe para pesquisa, embeddings, pipelines e módulos especializados. A comunicação ocorrerá por contratos e artefatos independentes de linguagem, nunca por acoplamento direto.

## Consequências

O Compiler permanece agnóstico de linguagem em suas saídas e módulos Python podem evoluir ou ser removidos sem alterar o Core.

## Alternativas rejeitadas

Python como base do Core foi rejeitado para a V1; excluir Python do ecossistema desperdiçaria capacidades especializadas.

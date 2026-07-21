---
schema_version: "0.1.0-experimental"
id: ADR-0010
kind: knowledge
knowledge_type: architectural_decision_record
title: "Adopt the Architectural Decision Filter"
status: accepted
created_at: 2026-07-21
decision_authority: "Architecture Council"
language: pt-BR
relations:
  - type: implements
    target: AP-0009
  - type: establishes
    target: ADF-001
  - type: authorized_by
    target: AD-001
---

# ADR-0010 — Adopt the Architectural Decision Filter

## Contexto

A arquitetura precisa distinguir experimentação válida de promoção permanente sem depender de gosto, autoridade pessoal ou pontuação compensatória.

## Decisão

Adotar o ADF-001 como protocolo obrigatório de elegibilidade para Core Types, camadas, domínios permanentes, contratos públicos e abstrações fundamentais.

Todos os critérios funcionam como gates baseados em evidência. Aprovação no ADF torna o candidato elegível, mas não substitui a decisão do Conselho.

## Consequências

Promoções prematuras são bloqueadas. Candidatos com evidência incompleta permanecem experimentais e implementações específicas podem continuar como adapters ou extensões sem inflar o Core.

## Alternativas rejeitadas

Pontuação ponderada foi rejeitada por permitir que uma qualidade esconda uma falha crítica. Aprovação automática foi rejeitada por conflitar com a governança humana.

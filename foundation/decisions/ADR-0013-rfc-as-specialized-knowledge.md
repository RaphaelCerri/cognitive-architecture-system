---
schema_version: "0.1.0-experimental"
id: ADR-0013
kind: knowledge
knowledge_type: architectural_decision_record
title: "Model RFC as Specialized Knowledge"
status: accepted
created_at: 2026-07-22
decision_authority: "Architecture Council"
language: pt-BR
relations:
  - type: authorized_by
    target: AD-003
  - type: documented_in
    target: ARCH-001
  - type: governed_by
    target: PMM-001
---

# ADR-0013 — Model RFC as Specialized Knowledge

## Contexto

Mudanças significativas precisam ser especificadas antes da implementação, mas criar uma fonte de verdade paralela ou um novo Core Type nesta fase violaria a hierarquia de autoridade e anteciparia a Ontologia.

## Decisão

Na V1, RFC é um objeto de `Knowledge` especializado. Ele descreve uma mudança proposta antes da implementação e deve ser derivado da Project Memory e consistente com Manifestos, Principles, ADRs, APs e demais Knowledge Objects.

RFC não é Source of Truth independente. A decisão não estabiliza schema, lifecycle, relações obrigatórias ou posição ontológica definitiva.

## Consequências

O Cognitive Pipeline pode nomear uma etapa de especificação sem criar autoridade concorrente. Qualquer necessidade de novos tipos, relações ou automação deverá nascer como AP e passar pelo ADF.

## Alternativas rejeitadas

Promover RFC imediatamente a Core Type foi rejeitado por falta de evidência ontológica. Tratar RFC como fonte autônoma foi rejeitado por conflitar com o PMM-001. Omitir o conceito foi rejeitado porque deixaria sem forma explícita a especificação anterior à decisão e execução.

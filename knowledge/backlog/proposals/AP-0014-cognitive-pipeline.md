---
schema_version: "0.1.0-experimental"
id: AP-0014
kind: knowledge
knowledge_type: architectural_proposal
title: "Cognitive Pipeline"
status: approved
created_at: 2026-07-22
author: "Architecture Council"
language: pt-BR
motivation: "Tornar visível o percurso pelo qual uma ideia é capturada, examinada, decidida, executada, validada e reincorporada à memória institucional."
expected_benefits:
  - "Rastreabilidade entre ideação, decisão e execução."
  - "Separação explícita entre conhecimento, governança e runtime."
  - "Base conceitual para coordenação futura sem automatização prematura."
architectural_impact:
  domains: [knowledge, intelligence, governance, runtime, evolution]
  summary: "Conecta processos e artefatos existentes em uma visão ponta a ponta, sem afirmar que cada etapa seja um Core Type ou obrigatória em todos os casos."
estimated_complexity: very_high
dependencies: ["Formal Ontology", "RFC concept", "Architecture Interview", "Orchestrator", "Capability System", "Governance contracts"]
ideal_implementation_time: "Documentar em V1-M02; considerar contratos e automação somente após Ontologia e evidência operacional."
acceptance_criteria:
  - "Cada transição possui responsabilidade e autoridade explicáveis."
  - "Etapas opcionais e obrigatórias são distinguíveis."
  - "Nenhuma etapa cria fonte de verdade paralela."
  - "O pipeline permanece model e runtime agnostic."
observations: "Aprovado como direção conceitual. A cadeia inicial é hipótese revisável e não autoriza automação."
relations:
  - type: introduced_by
    target: AD-003
  - type: documented_in
    target: ARCH-001
  - type: includes_candidate
    target: AP-0013
  - type: coordinates_with
    target: AP-0012
---

# AP-0014 — Cognitive Pipeline

## Visão inicial

`Idea → Knowledge Capture → Architecture Interview → RFC → Council Review → ADR → Planning → Orchestrator → Capability Selection → Skill Selection → Agent Selection → Execution → Validation → Documentation → Project Memory → Evolution`

## Decisão

Aprovado como direção conceitual a ser documentada e amadurecida. Não há autorização para automação, contratos ou promoção ontológica.

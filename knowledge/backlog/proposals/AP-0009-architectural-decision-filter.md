---
schema_version: "0.1.0-experimental"
id: AP-0009
kind: knowledge
knowledge_type: architectural_proposal
title: "Architectural Decision Filter"
status: completed
created_at: 2026-07-21
author: "Raphael Caveagna — Founder & Chief Vision Officer"
language: pt-BR
motivation: "Impedir que implementações, tecnologias ou abstrações transitórias sejam promovidas a componentes permanentes sem demonstrar valor arquitetural duradouro."
expected_benefits:
  - "Preservar um Core pequeno e estável."
  - "Reduzir overengineering e proliferação de camadas."
  - "Tornar explícitos os critérios de promoção arquitetural."
  - "Avaliar propostas independentemente de modelo, runtime ou tecnologia."
architectural_impact:
  domains: [foundation, governance, evolution]
  summary: "Define um filtro obrigatório para avaliar a promoção de componentes e conceitos permanentes."
estimated_complexity: medium
dependencies: []
ideal_implementation_time: "Antes da revisão da Ontologia, da Constitution Layer e de qualquer promoção de Core Types."
acceptance_criteria:
  - "Avalia se a proposta simplifica a arquitetura."
  - "Avalia se permanece válida em um horizonte de cinco anos."
  - "Distingue princípio arquitetural de implementação ou tecnologia."
  - "Avalia se pode servir de base para gerar outros componentes."
  - "Avalia independência de modelo, runtime e tecnologia."
  - "Define resultados explícitos para aprovação, permanência experimental ou rejeição."
observations: "Implementada como ADF-001 no milestone V1-M01."
decision:
  outcome: approved
  authority: AD-001
  decided_at: 2026-07-21
implementation:
  status: completed
  milestone: V1-M01
  artifact: ADF-001
relations:
  - type: implemented_by
    target: ADF-001
  - type: recorded_by
    target: ADR-0010
  - type: completed_in
    target: V1-M01
---

# AP-0009 — Architectural Decision Filter

## Contexto

Uma arquitetura extensível precisa aceitar experimentação sem transformar toda nova abstração em parte permanente do sistema.

## Implementação

O ADF-001 estabelece cinco gates baseados em evidência: simplicidade, durabilidade, fundamentality, generativity e agnosticism. Os resultados possíveis são promoção elegível, permanência experimental ou rejeição da promoção.

## Decisão

Proposta aprovada pela AD-001, implementada no milestone V1-M01 e registrada no ADR-0010.

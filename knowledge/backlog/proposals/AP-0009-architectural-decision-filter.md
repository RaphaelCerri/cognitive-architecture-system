---
schema_version: "0.1.0-experimental"
id: AP-0009
kind: knowledge
knowledge_type: architectural_proposal
title: "Architectural Decision Filter"
status: proposed
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
dependencies:
  - "Architecture Council review"
  - "Definition of evidence required for each criterion"
ideal_implementation_time: "Antes da revisão da Ontologia, da Constitution Layer e de qualquer promoção de Core Types."
acceptance_criteria:
  - "Avalia se a proposta simplifica a arquitetura."
  - "Avalia se permanece válida em um horizonte de cinco anos."
  - "Distingue princípio arquitetural de implementação ou tecnologia."
  - "Avalia se pode servir de base para gerar outros componentes."
  - "Avalia independência de modelo, runtime e tecnologia."
  - "Define resultados explícitos para aprovação, permanência experimental ou rejeição."
observations: "Os critérios foram propostos pelo Founder durante a definição da Taxonomia V1. A forma definitiva do ADF depende de revisão do Conselho."
relations:
  - type: required_by
    target: AP-0002
  - type: required_by
    target: AP-0006
---

# AP-0009 — Architectural Decision Filter

## Contexto

Uma arquitetura extensível precisa aceitar experimentação sem transformar toda nova abstração em parte permanente do sistema. O ADF foi proposto como mecanismo de avaliação anterior à promoção arquitetural.

## Proposta

Definir um filtro baseado em evidências que responda, no mínimo:

1. A proposta simplifica a arquitetura?
2. Continua válida daqui a cinco anos?
3. Representa um princípio, e não uma implementação ou tecnologia?
4. Pode servir de base para gerar outros componentes?
5. Continua válida independentemente de modelo, runtime ou tecnologia?

Uma proposta que não satisfaça os critérios necessários deverá permanecer experimental ou ser rejeitada, preservando a justificativa.

## Decisão

Proposta registrada para revisão do Conselho. Nenhum contrato do ADF foi implementado.

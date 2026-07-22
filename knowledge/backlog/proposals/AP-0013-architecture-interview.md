---
schema_version: "0.1.0-experimental"
id: AP-0013
kind: knowledge
knowledge_type: architectural_proposal
title: "Architecture Interview Skill Candidate"
status: approved
created_at: 2026-07-22
author: "Architecture Council"
language: pt-BR
motivation: "Reduzir ambiguidades antes da especificação de mudanças por meio de questionamento arquitetural exaustivo e rastreável."
expected_benefits:
  - "Expor premissas e conflitos antes da implementação."
  - "Aumentar a qualidade dos RFCs."
  - "Preservar decisões e respostas relevantes na Project Memory."
architectural_impact:
  domains: [knowledge, intelligence, governance]
  summary: "Introduz uma candidata a Skill no Cognitive Pipeline, sem definir ainda schema, interface ou executor."
estimated_complexity: medium
dependencies: ["Cognitive Pipeline", "RFC concept", "Skill model", "Project Memory rules"]
ideal_implementation_time: "Após a revisão do System Overview e a definição inicial de Skill e RFC."
acceptance_criteria:
  - "Perguntas derivam do contexto e das fontes canônicas."
  - "Resultados relevantes são persistidos sem criar fonte paralela."
  - "A Skill permanece model e runtime agnostic."
  - "O processo possui condição explícita de encerramento."
observations: "Conceito aprovado como candidata a Skill, inspirado no padrão ‘Grill Me’. Implementação, contrato e integração não estão autorizados."
relations:
  - type: approved_by
    target: AD-003
  - type: documented_in
    target: ARCH-001
  - type: participates_in
    target: AP-0014
---

# AP-0013 — Architecture Interview Skill Candidate

## Proposta

Amadurecer uma Skill de entrevista arquitetural que questione objetivos, premissas, restrições, riscos, alternativas e critérios de aceitação antes da elaboração de um RFC.

## Decisão

Aprovada somente como candidata a Skill. Nenhuma implementação ou promoção ontológica foi autorizada.

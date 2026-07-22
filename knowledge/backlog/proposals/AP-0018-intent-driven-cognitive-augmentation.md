---
schema_version: "0.1.0-experimental"
id: AP-0018
kind: knowledge
knowledge_type: architectural_proposal
title: "Intent-Driven Cognitive Augmentation"
status: proposed
created_at: 2026-07-22
author: "Architecture Council"
language: pt-BR
motivation: "Permitir que o usuário expresse intenções sem precisar conhecer ou selecionar Agents, Skills, Capabilities, workflows ou outros mecanismos internos."
expected_benefits:
  - "Reduzir a carga cognitiva imposta ao usuário."
  - "Orientar o sistema pela finalidade real, não por componentes escolhidos manualmente."
  - "Permitir descoberta, composição e execução governadas a partir de linguagem de intenção."
architectural_impact:
  domains: [knowledge, intelligence, governance, runtime]
  summary: "Propõe uma experiência intention-first na qual a arquitetura interna permanece acessível para auditoria, mas não precisa ser operada diretamente pelo usuário."
estimated_complexity: very_high
dependencies: ["Cognitive Pipeline", "Cognitive Discovery", "Capability System", "Orchestrator", "Governance contracts"]
ideal_implementation_time: "Após amadurecer intenção, descoberta, Orchestrator e contratos do Cognitive Pipeline; antes de consolidar interfaces de usuário."
acceptance_criteria:
  - "O usuário consegue iniciar processos relevantes declarando uma intenção."
  - "Seleção de processos, Capabilities, Skills, Agents e Task Forces não exige conhecimento arquitetural do usuário."
  - "Decisões internas permanecem explicáveis, auditáveis e sujeitas à governança."
  - "A abstração não elimina controles explícitos quando risco ou autoridade exigirem participação humana."
observations: "Reflexão filosófica proposta para discussão. Não autoriza implementação nem alteração de ARCH-001."
relations:
  - type: extends
    target: AP-0011
  - type: contextualizes
    target: AP-0014
  - type: coordinates_with
    target: AP-0012
---

# AP-0018 — Intent-Driven Cognitive Augmentation

## Contexto

O sistema não deve apresentar Agents, Skills ou workflows como um catálogo que o usuário precisa aprender a operar. Esses elementos existem para servir à intenção, não para transferir ao usuário a complexidade da arquitetura.

## Proposta

Investigar uma experiência intention-first. A partir de expressões como “Tenho uma ideia”, o sistema poderá compreender objetivos, identificar lacunas, conduzir descoberta, preparar artefatos, selecionar processos cognitivos e recursos, coordenar execução e preservar conhecimento e governança.

Ocultar complexidade não significa ocultar decisões: seleção, autoridade, risco e proveniência devem continuar explicáveis e auditáveis.

## Decisão

Aguardando discussão do Conselho. Nenhuma implementação ou promoção filosófica permanente foi autorizada.

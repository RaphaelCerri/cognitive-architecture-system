---
schema_version: "0.1.0-experimental"
id: AP-0019
kind: knowledge
knowledge_type: architectural_proposal
title: "Cognitive Discovery"
status: proposed
created_at: 2026-07-22
author: "Architecture Council"
language: pt-BR
motivation: "Criar uma hipótese explícita para transformar uma intenção inicial, incompleta ou ambígua em contexto suficiente para preparar o restante do Cognitive Pipeline."
expected_benefits:
  - "Compreender melhor o objetivo real do usuário."
  - "Identificar requisitos implícitos e informações ausentes."
  - "Evitar planejamento ou execução prematuros."
  - "Tornar a decisão de investigar mais explícita e governável."
architectural_impact:
  domains: [knowledge, intelligence, governance]
  summary: "Pode introduzir uma responsabilidade cognitiva anterior à especificação e execução, sem determinar ainda se será processo, Capability, Strategy, Skill ou composição."
estimated_complexity: high
dependencies: ["Intent model", "Cognitive Pipeline", "Architecture Interview", "Knowledge capture", "Governance contracts"]
ideal_implementation_time: "Após a Ontologia esclarecer Intent, Context, Process e Capability; antes de automatizar entrada intention-first."
acceptance_criteria:
  - "Distingue intenção declarada de objetivo inferido e registra incerteza."
  - "Identifica lacunas e requisitos implícitos com rastreabilidade."
  - "Possui critérios para continuar descoberta, preparar o pipeline, escalar ou interromper."
  - "Não inventa autoridade nem altera conhecimento canônico sem governança."
  - "Permanece model e runtime agnostic."
observations: "Hipótese experimental. Natureza ontológica, contrato e implementação não estão autorizados; ARCH-001 não deve ser alterado neste checkpoint."
relations:
  - type: supports
    target: AP-0018
  - type: prepares
    target: AP-0014
  - type: related_to
    target: AP-0013
---

# AP-0019 — Cognitive Discovery

## Contexto

Uma intenção curta pode ocultar objetivos, restrições, riscos e requisitos que o usuário ainda não formulou. Encaminhá-la diretamente para planejamento ou execução transfere ambiguidade para etapas posteriores.

## Proposta

Investigar Cognitive Discovery como responsabilidade capaz de compreender a intenção, reduzir ambiguidades, descobrir requisitos implícitos, decidir quando investigar mais e preparar o restante do Cognitive Pipeline.

Sua relação com Architecture Interview permanece aberta: Discovery pode selecionar, compor ou utilizar essa candidata a Skill, mas os conceitos não são automaticamente equivalentes.

## Decisão

Aguardando discussão do Conselho. Nenhum tipo, componente, Capability, Skill ou processo executável foi promovido.

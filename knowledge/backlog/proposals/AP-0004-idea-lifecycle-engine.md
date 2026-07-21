---
schema_version: "0.1.0-experimental"
id: AP-0004
kind: knowledge
knowledge_type: architectural_proposal
title: "Idea Lifecycle Engine"
status: proposed
created_at: 2026-07-21
author: "Architecture Council"
language: pt-BR
motivation: "Evoluir o tratamento de insights, propostas, decisões e implementação sem depender de acompanhamento manual permanente."
expected_benefits: ["Reduzir perda de ideias.", "Detectar dependências resolvidas.", "Sugerir fusões e obsolescência."]
architectural_impact:
  domains: [knowledge, governance, evolution]
  summary: "Automatiza observação e recomendação sobre o ciclo das ideias, sem aprovar mudanças autonomamente."
estimated_complexity: high
dependencies: ["Architectural Evolution Backlog", "Type Registry", "Compiler", "Governance contracts"]
ideal_implementation_time: "Após o backlog manual produzir histórico suficiente para validar o comportamento."
acceptance_criteria: ["A IA somente propõe mudanças.", "Toda recomendação possui evidência.", "A fonte canônica nunca é alterada sem aprovação humana."]
observations: "O nome Engine é provisório e deverá passar pelo ADF."
relations:
  - type: depends_on
    target: AP-0001
  - type: depends_on
    target: AP-0003
---

# AP-0004 — Idea Lifecycle Engine

Avaliar uma capacidade de acompanhar ideias desde o insight até sua conclusão, mantendo a regra permanente: a IA propõe; o humano aprova.

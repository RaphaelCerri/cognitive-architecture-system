---
schema_version: "0.1.0-experimental"
id: AP-0007
kind: knowledge
knowledge_type: architectural_proposal
title: "Runtime-Agnostic Core and Adapter Contract"
status: proposed
created_at: 2026-07-21
author: "Raphael Caveagna — Founder & Chief Vision Officer"
language: pt-BR
motivation: "Impedir que o núcleo conheça ou dependa de Codex, Claude Code, GPT, Gemini, Cursor, Fable, n8n ou qualquer runtime específico."
expected_benefits: ["Portabilidade entre runtimes.", "Adapters substituíveis.", "Contratos centrais duráveis."]
architectural_impact:
  domains: [foundation, runtime]
  summary: "Estabelece fronteira entre Core agnóstico, contrato de distribuição e adapters específicos."
estimated_complexity: high
dependencies: ["Formal Ontology", "Public contract definition"]
ideal_implementation_time: "Antes do primeiro adapter Codex e de qualquer contrato público de distribuição."
acceptance_criteria: ["Core não contém nomes ou caminhos proprietários.", "Adapter Codex pode ser removido sem alterar o Core.", "Um adapter de teste consome o mesmo contrato."]
observations: "Model agnosticism é consequência; runtime agnosticism é a restrição mais ampla."
relations:
  - type: depends_on
    target: AP-0006
---

# AP-0007 — Runtime-Agnostic Core and Adapter Contract

Formalizar o runtime como consumidor substituível. Ferramentas e convenções específicas devem existir exclusivamente atrás de adapters.

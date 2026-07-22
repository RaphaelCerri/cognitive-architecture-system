---
schema_version: "0.1.0-experimental"
id: ARP-0001
kind: knowledge
knowledge_type: architectural_research_program
title: "Context, Retrieval and Compression"
status: experimental
research_form: program
document_state: complete
governance_state: approved_experimental
research_state: scoped
knowledge_maturity: hypothesis
outcome: null
implementation_state: not_started
operational_state: not_applicable
created_at: 2026-07-22
owner: "Architecture Council"
language: pt-BR
research_tracks:
  - "Context Engineering"
  - "Knowledge Retrieval"
  - "Context Compression"
  - "Incremental Context"
  - "Retrieval Planning"
research_questions:
  - "Qual contexto um runtime precisa para decidir com qualidade e autoridade?"
  - "Como selecionar, ordenar, comprimir e atualizar contexto sem perder proveniência?"
  - "Quando leitura integral, índice, grafo, resumo ou estratégia híbrida é superior?"
scope: ["Problemas", "Princípios", "Algoritmos", "Métricas", "Custos", "Riscos"]
out_of_scope: ["Implementação", "Escolha de fornecedor", "Alteração de ARCH-001", "Promoção de domínio"]
evaluation_criteria: ["Token reduction", "Decision quality", "Authority preservation", "Provenance", "Maintenance cost", "No parallel Source of Truth"]
expected_outputs: ["Evidence map", "Comparative analysis", "Possible AP or no-change conclusion"]
evidence: []
risks: ["Compressão pode remover contexto decisivo.", "Retrieval pode privilegiar relevância sem autoridade."]
relations:
  - type: established_by
    target: AD-004
  - type: informs
    target: AP-0019
---

# ARP-0001 — Context, Retrieval and Compression

## Definição experimental de Context Engineering

Disciplina responsável por determinar qual contexto deve ser entregue para um runtime de IA, em qual formato, utilizando o menor custo possível de tokens e preservando autoridade, coerência, proveniência e qualidade das decisões.

Context Engineering é tema de pesquisa, não domínio oficial.

## Resultado esperado

Produzir evidências para comparar estratégias de recuperação e composição de contexto. Nenhuma estratégia ou tecnologia está aprovada.

## Restrições

Não implementar retrieval, compressão, índices ou integração. Pesquisa não autoriza mudança arquitetural.

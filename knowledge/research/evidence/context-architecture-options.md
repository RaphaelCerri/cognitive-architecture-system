---
schema_version: "0.1.0-experimental"
document_role: architecture_options
title: "Context Architecture Options"
status: reviewed
reviewed_at: 2026-08-07
review_outcome: accepted_as_experimental_evidence
acceptance_scope: experimental_evidence
knowledge_maturity: experimental
review_basis: ASSESS-0003
created_at: 2026-07-22
related_programs: [ARP-0001, ARP-0006]
language: pt-BR
---

# Context Architecture Options

## Invariantes

- Markdown/objetos canônicos continuam Source of Truth.
- Índices, grafos, resumos, embeddings e caches são descartáveis e recompiláveis.
- Autoridade precede similaridade; documento recuperado é reaberto na origem.
- Conteúdo recuperado é dado não confiável, nunca instrução de sistema.
- Runtime e fornecedor não aparecem no Kernel.

## Opção A — Minimal Deterministic Retrieval (canonical-first)

`Intent → classificação → IDs/autoridade/relações → busca lexical → documentos canônicos`

Vantagens: simples, explicável, barato, coerente com o corpus atual. Limites: sinonímia, relações ausentes, baixa cobertura de código sem parser. Melhor para V1 e baseline.

## Opção B — Deterministic Graph plus Semantic Retrieval

`Fontes canônicas → parsers Markdown/AST → grafo derivado com provenance → traversal → reabertura da fonte`

Vantagens: dependências e impacto; incrementalidade; explainability. Limites: custo de compilador, cobertura por linguagem, staleness e risco de elevar inferências a fatos. Graphify e Tree-sitter informam esta opção sem serem adotados.

## Opção C — AI-generated Knowledge Graph / GraphRAG

`Chunking → embeddings e/ou extração LLM → índice/grafo → ranking → contexto`

Vantagens: perguntas implícitas e grandes corpora. Limites: custo, não determinismo, poisoning, privacidade, lock-in e difícil distinção entre relação canônica e inferida. Inadequada como primeira camada.

## Opção D — Híbrida governada (recomendada para pesquisa futura)

`Intent → policy/authority filter → explicit graph → lexical → semantic fallback → provenance/risk gate → budgeted context → canonical reopen`

Combina A como baseline, B quando houver estrutura e C apenas quando o ganho mensurado justificar. O planejador produz um plano explicável (`fontes`, `motivo`, `ordem`, `estimativa`, `confiança`), não uma verdade paralela. O fallback de leitura integral permanece para baixa confiança ou decisão de alta autoridade.

## Fronteira provisória

Um eventual Context Retrieval Engine teria responsabilidade coesa apenas por planejar e compor contexto derivado sob política. Não seria Knowledge Store, Memory, Orchestrator, Compiler inteiro ou autoridade. A evidência atual sustenta continuar pesquisando a fronteira, não criar componente ou AP.

## Hipótese arquitetural preliminar

```text
Canonical Project Memory
        ↓
Authority and Explicit Relations
        ↓
Deterministic Indexes and Graph Views
        ↓
Lexical Retrieval Baseline
        ↓
Optional Semantic Retrieval
        ↓
Budgeted Context Planning
        ↓
Canonical Source Reopening
        ↓
Runtime
```

Esta sequência é hipótese de pesquisa, não decisão arquitetural.

## Comparação consolidada

| Opção | Custo | Complexidade | Qualidade potencial | Segurança | Incrementalidade | Autoridade | Manutenção | Estágio recomendado |
|---|---|---|---|---|---|---|---|---|
| Minimal Deterministic Retrieval | baixo | baixa | média | alta relativa | por artefato, a validar | alta | baixa | baseline conceitual |
| Deterministic Graph plus Semantic Retrieval | médio | média/alta | alta potencial | condicional | candidata | alta se reabrir fonte | média/alta | pesquisa futura |
| AI-generated Knowledge Graph | alto | alta | alta potencial, não medida | baixa sem controles | não medida | baixa para inferências | alta | defer |
| Híbrida governada | incremental | alta | maior potencial, não medido | depende dos gates | por camada | preservada por desenho | alta | hipótese preferida para benchmark |

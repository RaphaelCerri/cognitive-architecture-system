---
schema_version: "0.1.0-experimental"
document_role: technology_decision_matrix
title: "Context Retrieval Technology Decision Matrix"
status: reviewed
reviewed_at: 2026-08-07
review_outcome: accepted_as_experimental_evidence
acceptance_scope: experimental_evidence
knowledge_maturity: experimental
review_basis: ASSESS-0003
created_at: 2026-07-22
related_programs: [ARP-0001, ARP-0005, ARP-0006]
language: pt-BR
---

# Context Retrieval Technology Decision Matrix

Escala: 1 desfavorável, 3 condicional, 5 favorável. Pontuações são julgamento desta pesquisa, não benchmark do fornecedor. Pesos: autoridade/proveniência 25%, custo 15%, determinismo 15%, qualidade potencial 15%, manutenção 10%, runtime agnostic 10%, segurança 10%.

| Alternativa | Aut. | Custo | Det. | Qual. | Manut. | Agn. | Seg. | Total /5 | Disposição |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Relações canônicas + busca lexical | 5 | 5 | 5 | 3 | 4 | 5 | 4 | 4,5 | Adopt como baseline conceitual, sem nova implementação autorizada |
| Graphify-Labs/graphify | 3 | 4 | 5 | 3 | 3 | 4 | 3 | 3,6 | Defer; Absorb parsing/arestas explicáveis |
| Tree-sitter + compilador próprio | 4 | 4 | 5 | 3 | 2 | 5 | 4 | 3,9 | Defer; relevante a código, não ao corpus inteiro |
| Microsoft GraphRAG standard | 2 | 1 | 1 | 4 | 2 | 3 | 2 | 2,2 | Defer/Reject para V1 |
| Microsoft FastGraphRAG | 2 | 3 | 2 | 3 | 2 | 3 | 2 | 2,4 | Defer |
| SQLite FTS5/BM25 | 4 | 5 | 5 | 3 | 5 | 5 | 4 | 4,4 | Adapt como fallback lexical candidato |
| Embeddings/vector store | 2 | 3 | 2 | 4 | 3 | 3 | 2 | 2,7 | Defer até benchmark e threat model |
| Mem0/Letta | 2 | 3 | 2 | 3 | 3 | 3 | 2 | 2,5 | Reject como Project Memory; Defer para memória operacional |
| LangGraph | 3 | 3 | 4 | 2 | 3 | 3 | 3 | 3,0 | Fora da decisão de retrieval; Defer |
| DSPy | 3 | 2 | 2 | 3 | 3 | 3 | 3 | 2,7 | Fora da decisão de retrieval; Defer |

## Limites

Não foram medidos latência, precision@k, recall@k, custo monetário ou compatibilidade real. Licenças observadas: Graphify declara MIT; Mem0, Apache-2.0; DSPy, MIT. Licença não equivale a aprovação de supply chain. Antes de adoção: congelar versão/commit, verificar LICENSE/SBOM/dependências, executar benchmark e revisar privacidade/telemetria.

## Campos mínimos por alternativa

`Não verificado` indica ausência de evidência recuperada; não é avaliação negativa.

| Alternativa | Problema e mecanismo | Maturidade, licença, linguagem e TypeScript | Determinismo e incrementalidade | Custos: indexação / atualização / consulta | Tokens e qualidade | Auditabilidade, proveniência e segurança | Lock-in, complexidade, aderência e risco de SoT paralela | Classificação / evidência |
|---|---|---|---|---|---|---|---|---|
| Relações canônicas + lexical | Resolver IDs, autoridade e termos por metadados/FTS | Interno; licença/linguagem não aplicáveis; TypeScript não avaliado | Alto; atualização por artefato é hipótese | baixo / baixo / baixo | redução potencial; qualidade 3/5, sem medição | alta / alta / risco controlável | baixo / baixa / alta / baixo | Adopt como baseline conceitual / corpus local |
| Graphify-Labs/graphify | Grafo estrutural de código por parsing AST | maturidade e linguagem não verificadas; MIT declarada; TypeScript não verificado | alto declarado; incrementalidade não verificada | não medido / não medido / não medido | potencial não medido; qualidade 3/5 | arestas explicáveis; supply chain pendente | médio / média / condicional / médio | Defer; Absorb princípios / docs oficiais |
| Tree-sitter | Concrete syntax trees incrementais | maturidade, licença e linguagem não recuperadas; TypeScript não verificado | alto; incrementalidade documentada | não medido / potencial incremental / não medido | impacto indireto; qualidade 3/5 | saída estrutural auditável; sem threat model local | baixo / alta / parcial / baixo | Defer / docs oficiais |
| GraphRAG standard/Fast | Grafo e retrieval por extração/ranking com LLM | maturidade, licença, linguagem e TypeScript não verificados | baixo a condicional; atualização não medida | alto ou condicional / não medido / não medido | qualidade potencial 3–4/5; tokens não medidos | proveniência e poisoning exigem controles | médio-alto / alta / baixa na V1 / alto | Defer; Reject para standard na V1 / docs oficiais |
| SQLite FTS5/BM25 | Full-text search lexical e ranking BM25 | tecnologia documentada; demais campos não verificados | alto; incrementalidade candidata | baixo / baixo / baixo | ganho potencial; qualidade 3/5 | alta auditabilidade; segurança depende do corpus | baixo / baixa / alta / baixo | Adapt / docs oficiais |
| Embeddings/vector store | Similaridade semântica | fornecedor, maturidade, licença, linguagem e TypeScript não definidos | baixo; incrementalidade não medida | não medido / não medido / não medido | qualidade potencial 4/5; tokens não medidos | poisoning, privacidade e provenance pendentes | alto / média / condicional / alto | Defer / evidência insuficiente |
| Mem0/Letta | Memória operacional de agentes e hierarquia de contexto | Mem0 Apache-2.0; demais campos não verificados | condicional; atualização gerenciada | não medido / não medido / não medido | não medido | provenance/retention exigem avaliação | médio / média / baixa como Project Memory / alto | Reject como Project Memory; Defer operacional / docs oficiais |
| LangGraph/DSPy | Orquestração durável e otimização de programas | DSPy MIT; demais campos não verificados | condicional; não aplicável ao índice canônico | não medido / não medido / não medido | não medido | fora da decisão de retrieval | médio / média / baixa / médio | Defer / docs oficiais |

---
schema_version: "0.1.0-experimental"
document_role: research_evidence_report
title: "Context Retrieval Research Evidence"
status: pending_review
created_at: 2026-07-22
related_programs: [ARP-0001, ARP-0005, ARP-0006, ARP-0007]
language: pt-BR
---

# Context Retrieval Research Evidence

## Questão e método

Esta primeira onda pergunta como reduzir contexto sem perder autoridade, proveniência ou qualidade. Foram usados apenas documentos oficiais, medição local e um benchmark documental reproduzível. Não houve instalação, integração ou execução de tecnologia externa. Fatos, inferências e recomendações aparecem separados.

## Baseline local

Em 2026-07-22 o repositório continha 70 arquivos Markdown, 189.654 caracteres/bytes UTF-8, 23.051 unidades separadas por espaço e 4.383 linhas. `caracteres / 4` produz 47.414 tokens aproximados, mas não é tokenizer e não sustenta previsão financeira precisa.

## Evidência primária observada

| Família | Fato documentado | Implicação limitada |
|---|---|---|
| Graphify-Labs/graphify | O repositório oficial redirecionado e a documentação descrevem parsing AST local/determinístico, grafo consultável, arestas explicadas, artefatos locais e ausência de vector store. O site declara MIT. | Bom candidato para estudar estrutura de código; claims de qualidade e economia ainda exigem benchmark independente. |
| Microsoft GraphRAG | `standard` extrai entidades/relações e sumários com LLM; `FastGraphRAG` troca custo por ruído. Local Search combina grafo e chunks; Global Search usa relatórios de comunidades/map-reduce. O projeto estima extração do grafo em cerca de 75% do custo de indexação. | É uma família de retrieval sobre corpus, não um substituto neutro para relações canônicas. O número de custo é estimativa do fornecedor/projeto. |
| Tree-sitter | A documentação oficial define parser incremental que gera e atualiza concrete syntax trees, robusto a erros. | Útil para dependências estruturais de código; não resolve semântica arquitetural de Markdown. |
| SQLite FTS5 | A documentação oficial oferece full-text search, consultas por tokens/frases/prefixos/NEAR e ranking BM25. | Baseline lexical local, determinístico e barato; sofre com sinonímia e perguntas conceituais implícitas. |
| Mem0 | Repositório oficial descreve camada de memória persistente para agentes e licença Apache-2.0. | Trata memória de interação; não deve ser confundida com Project Memory canônica. |
| Letta | A documentação distingue blocks sempre em contexto, files pesquisáveis, archival memory e RAG externo; blocks podem ser read-only. | A hierarquia de contexto é um padrão útil, mas sua memória é agent-centric e não autoridade arquitetural. |
| LangGraph | Documenta runtime de orquestração com persistência, checkpoints, stores, interrupções e human-in-the-loop. | Relevante a execução durável futura, não ao índice canônico desta pesquisa. |
| DSPy | Documenta programas por signatures/modules e otimização contra métrica. | Pode informar avaliação/compilação futura; não resolve retrieval sozinho. |

## Graphify: identidade e decomposição

O nome “Graphify” possui colisões externas. O candidato que corresponde ao briefing é `Graphify-Labs/graphify` (o URL antigo `safishamsi/graphify` redireciona para ele). Esta é uma identificação de trabalho, não aprovação. Componentes declarados: parsers determinísticos, normalização de nós/arestas, `graph.json`, relatório Markdown, visualização HTML e consulta por CLI/MCP. Riscos: cobertura desigual por linguagem/artefato, grafo derivado desatualizado, dependência de heurísticas e claims autocertificados. A licença declarada é MIT; versão/release não foi congelada nesta onda.

## Benchmark documental preliminar

Conjunto de nove perguntas: autoridade entre fontes; regra para novas ideias; lifecycle de ARP; estado de ARP-0006; origem de Context Engineering; papel de Graphify; restrição de Source of Truth; checkpoint de V1-M02; e controles de retrieval malicioso. Gold set foi definido por IDs/relações explícitas e inspeção do documento canônico.

Resultados qualitativos reproduzíveis, sem modelo externo:

| Estratégia | Recall esperado no gold set | Precisão | Custo | Falha observável |
|---|---|---|---|---|
| Leitura integral | 9/9 por inclusão | baixa | corpus inteiro | excesso de tokens e conflito sem priorização |
| Busca lexical por ID/termo | 8/9 | média/alta | baixo | perde requisito implícito/sinônimo |
| Relações explícitas + autoridade | 7/9 diretamente; 9/9 com fallback lexical | alta | baixo | depende de relações completas e atuais |
| Vetorial/semântica | não medido | não medido | indexação + consulta | não autorizado instalar/usar embeddings |
| Grafo extraído por LLM | não medido | não medido | alto na indexação | inferência pode parecer autoridade |

O benchmark prova apenas que IDs, hierarquia e relações existentes formam um baseline valioso neste corpus. Não prova superioridade universal. Um benchmark quantitativo futuro precisa de consultas versionadas, julgamentos independentes, precision@k/recall@k, latência, tokens reais por runtime e testes adversariais.

## Achados, inferências e recomendação

Achados: o corpus já contém metadados e relações; ferramentas estudadas resolvem responsabilidades diferentes; grafos e índices são derivados; memória de agente não é Project Memory; retrieval amplia superfície de prompt injection.

Inferência: a opção mais coerente é retrieval híbrido em camadas — autoridade e relações explícitas primeiro, lexical depois, semântico apenas como fallback controlado — com conteúdo canônico sempre reaberto na origem.

Recomendação provisória: **Adapt/Absorb** princípios de parsing estrutural e arestas explicáveis; **Defer** adoção de Graphify, GraphRAG, Mem0, Letta, LangGraph ou DSPy; não criar AP ainda. Faltam benchmark executável autorizado, qualidade quantitativa e decisão de fronteira do eventual mecanismo.

## Fontes primárias

Todas acessadas em 2026-07-22:

- https://github.com/Graphify-Labs/graphify
- https://graphify.com/docs
- https://graphify.com/what-is-graphify
- https://microsoft.github.io/graphrag/index/methods/
- https://microsoft.github.io/graphrag/query/overview/
- https://microsoft.github.io/graphrag/query/local_search/
- https://microsoft.github.io/graphrag/get_started/
- https://tree-sitter.github.io/tree-sitter/
- https://sqlite.org/fts5.html
- https://github.com/mem0ai/mem0
- https://docs.mem0.ai/open-source/overview
- https://docs.letta.com/guides/core-concepts/memory/context-hierarchy
- https://langchain-ai.github.io/langgraph/index.html
- https://dspy.ai/

## Limitações, riscos e questões abertas

Limitações: o benchmark foi documental, não executou embeddings nem mediu latência, precision@k, recall@k ou custo monetário. Riscos: autoridade omitida, derivados desatualizados, poisoning e falsa precisão econômica. Questões abertas: gold set versionado, tokenizer/runtime, fronteira do mecanismo, qualidade quantitativa e threat cases.

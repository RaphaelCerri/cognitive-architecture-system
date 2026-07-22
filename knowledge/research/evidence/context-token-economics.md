---
schema_version: "0.1.0-experimental"
document_role: token_economics_model
title: "Context Token Economics Model"
status: pending_review
created_at: 2026-07-22
related_programs: [ARP-0001, ARP-0006]
language: pt-BR
---

# Context Token Economics Model

## Baseline e incerteza

Corpus medido: 189.654 caracteres, 23.051 palavras aproximadas, 70 Markdown. Heurística `T ~= caracteres/4`: 47.414 tokens. Ela não considera tokenizer, idioma, modelo, whitespace, YAML ou mensagens do protocolo; usar intervalo inicial de sensibilidade de 0,7x a 1,5x (33,2k–71,1k) até medição com tokenizer do runtime.

## Modelo

Para uma consulta:

`T_total = T_fixed + T_query + T_candidates + T_selected + T_provenance + T_output`

`C_query = sum(T_input_model * price_input + T_output_model * price_output) + C_index_amortized + C_storage + C_latency`

`Savings = 1 - T_selected_strategy / T_full_read`, condicionado a qualidade e autoridade iguais ou superiores. Sem essa condição, “economia” é perda de informação.

## Cenários teóricos

| Contexto selecionado | Tokens pela heurística | Redução vs. leitura integral |
|---:|---:|---:|
| 100% | 47.414 | 0% |
| 25% | 11.854 | 75% |
| 10% | 4.742 | 90% |
| 5% | 2.371 | 95% |

Isto é envelope matemático, não resultado de retrieval. Custos de índice mudam o break-even:

`N_break_even = C_index / (C_full_query - C_retrieved_query)`

GraphRAG com extração LLM tende a exigir maior `N_break_even`; lexical/relações explícitas tendem a menor custo inicial. O próprio GraphRAG estima que graph extraction representa aproximadamente 75% do custo de indexação standard; a estimativa é do projeto e deve ser revalidada no nosso corpus.

## Regras de decisão

- Reportar estimativa, intervalo e tokenizer/runtime usados.
- Separar custo de construir, atualizar, armazenar e consultar.
- Medir p50/p95 de tokens e latência, recall@k, precision@k e taxa de fallback.
- Invalidar ganho quando fonte de maior autoridade for omitida.
- Reindexar incrementalmente apenas artefatos alterados; rebuild deve permanecer possível.
- Não fixar preços nesta Project Memory; preços são dados externos voláteis.

## Categorias de custo e break-even

- Criação: parsing, extração, embeddings, grafo e validação inicial.
- Atualização: detecção de mudança, reindexação, invalidação de cache e testes de consistência.
- Consulta: seleção, ranking, reabertura canônica, tokens e latência.
- Amortizado: criação e atualização distribuídas por consultas úteis.
- Break-even teórico: somente calculável em benchmark real, quando custos e qualidade forem medidos com tokenizer e runtime definidos.

Não há percentual observado de economia nesta onda; os percentuais da tabela são apenas envelopes matemáticos de seleção, não resultados experimentais.

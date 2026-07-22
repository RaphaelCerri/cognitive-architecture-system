---
schema_version: "0.1.0-experimental"
id: IHR-0004
kind: knowledge
knowledge_type: implementation_handoff_report
title: "First Context Retrieval Research Wave — Handoff"
status: pending_review
version: "1.0"
created_at: 2026-07-22
milestone: V1-M02
related_commits: []
language: pt-BR
relations:
  - type: reports
    target: V1-M02
  - type: governed_by
    target: IHP-001
  - type: researches
    target: ARP-0001
  - type: researches
    target: ARP-0005
  - type: researches
    target: ARP-0006
  - type: informed_by
    target: ARP-0007
---

# IHR-0004 — First Context Retrieval Research Wave

## 1. Identificação

Checkpoint documental da primeira onda substantiva: Context Engineering, Knowledge Retrieval e Security Constraints.

## 2. Objetivo autorizado

Pesquisar com fontes primárias, comparar arquiteturas, modelar tokens, avaliar segurança e produzir benchmark preliminar. Sem implementação, dependências, integração, ARCH-001, AP, ADR ou RFC.

## 3. Resultado

Foram produzidos cinco artefatos derivados. A evidência favorece baseline canonical-first e pesquisa futura de uma opção híbrida governada. Nenhuma tecnologia foi adotada.

## 4. Execução por iteração

1. Diretiva e limites confirmados.
2. Corpus e ARPs inspecionados; baseline medido.
3. Fontes primárias de Graphify, GraphRAG, Tree-sitter e memória/orquestração coletadas.
4. Uma inspeção usou nomes de arquivo incorretos; nenhum efeito e nenhum progresso.
5. Caminhos canônicos corrigidos; requisitos de início confirmados.
6. Conteúdo recuperado reconstruído semanticamente; ARPs ativados; artefatos e handoff preparados para validação.

## 5. Arquivos

Alterados: ARP-0001, ARP-0005, ARP-0006 e ARP-0007. Criados: evidence report, technology matrix, architecture options, token economics, security assessment e IHR-0004. Total: 10 arquivos. O draft de assessment preexistente permaneceu intocado.

## 6. Decisões técnicas locais

- `Graphify` foi identificado provisoriamente como `Graphify-Labs/graphify`; a colisão nominal permanece registrada.
- Relações/autoridade + lexical formam baseline; semântica é fallback candidato, não primeira camada.
- Grafo, índice, resumo e cache permanecem derivados e descartáveis.
- Estimativas de tokens usam intervalo e devem ser substituídas por tokenizer real em benchmark autorizado.
- ARP-0007 não foi ativado; apenas informou os controles desta onda.

## 7. Validação

Validação documental proporcional: unicidade de IDs, YAML, JSON do snapshot, relações, links locais, URLs/citações, escopo e `git diff --check`. Nenhum build, lint ou typecheck se aplica.

## 8. Desvios

Uma iteração não produziu progresso por nomes de arquivo incorretos. O patch recuperado também era incompatível com o HEAD; os documentos foram reconstruídos semanticamente a partir do conteúdo integral recuperado, com estrutura atual preservada e sem alteração parcial. O benchmark semântico ficou não medido porque instalar embeddings violaria o escopo.

## 9. Pendências

Revisão do Conselho; benchmark executável versionado; tokenizer por runtime; freezing de versão/licença/SBOM; decision boundary do eventual mecanismo; aprovação estrutural de ARCH-001 continua separada e bloqueada.

## 10. Riscos

Source of Truth paralela, poisoning, authority bypass, falso ganho de tokens, dependência externa, staleness e mistura de Project Memory com memória operacional.

## 11. Recomendação

Aceitar os resultados como evidência preliminar, manter ARP-0001/0005/0006 ativos e não criar AP. Autorizar futuramente um benchmark isolado somente após o Conselho escolher corpus, gold set, métricas, runtime/tokenizer e threat cases.

## 12. Project Status Snapshot

```json
{"current_milestone":{"id":"V1-M02","status":"in_progress","current_checkpoint":"context_retrieval_research_review","completion_percentage":38,"closure_recommended":false},"completed":["First documentary research wave","Primary-source evidence report","Technology matrix","Four architecture options","Token economics model","Security assessment","Preliminary deterministic benchmark"],"pending":["Council review","Quantitative executable benchmark","ARCH-001 structural approval"],"blocked":["Implementation","Technology adoption","System Overview drafting","ARCH-001 changes"],"decisions_required":["Accept or revise preliminary recommendation","Authorize and scope a future executable benchmark"],"active_research_programs":["ARP-0001","ARP-0005","ARP-0006"],"scoped_research_programs":["ARP-0007"],"documentation_status":{"synchronized":true,"missing_updates":[]},"validation":{"documentary_checks_passed":true,"build_passed":null,"lint_passed":null,"typecheck_passed":null},"recommended_next_action":"Council reviews IHR-0004 and the five evidence artifacts; do not implement or draft ARCH-001."}
```

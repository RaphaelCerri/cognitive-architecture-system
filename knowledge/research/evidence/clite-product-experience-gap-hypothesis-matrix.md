---
schema_version: 0.1.0-experimental
id: ARP-0009-E61
kind: knowledge
knowledge_type: research_evidence
title: C-lite Product Experience Evidence Gap and Hypothesis Matrix
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E40
  - type: related_to
    target: ARP-0009-E42
  - type: related_to
    target: ARP-0009-E49
  - type: related_to
    target: ARP-0009-E55
---

# C-lite Product Experience Evidence Gap and Hypothesis Matrix

Inventário dos gaps de evidência que **não podem ser fechados por mais
documentação ou testes automatizados** — somente por pessoas reais.

```text
Technical Feasibility != Product Comprehension
Human-Operated Technical Check != User Evaluation
Internal Reviewer != Independent Participant
```

## 1. Mudança de estímulo (decisão de pesquisa desta slice)

Todo o aparato de avaliação existente (E33/E34/E40) foi desenhado para o
**protótipo Markdown 1.0** renderizado em preview do VS Code. Desde então, o
Stage 3 produziu um **vertical slice executável** (browser, `file://`, 43
testes) que: corrigiu o finding material F-01 de E42 (label "Responsável pela
pesquisa" em vez de `CEA simulado` — testado por scan F-01); implementa o
estado real que E42 apontou como limitação do meio (F-04: input respondido tem
efeito observável; F-03: retry re-exibe running; F-06: erro de entrada real);
e já tem verificação técnica estrutural de acessibilidade (E49). O estudo
mínimo deve usar **o slice executável como estímulo**, não o protótipo
Markdown — isso invalida parcialmente a premissa de renderer de G-04 e reduz a
necessidade das notas de moderação de F-02/F-04.

## 2. Evidence gap inventory

| # | Categoria | Evidência técnica existente | Evidência de usuário ausente | Risco se não respondido | Método candidato | Cohort | Prioridade | Blocker p/ produto? |
|---|---|---|---|---|---|---|---|---|
| GAP-01 | comprehension (propósito/simulação) | boundary textual permanente; disclaimers testados | ninguém externo confirmou que entende que nada é real | usuário confia em capacidade inexistente | task + probe | A+B | **alta** | sim |
| GAP-02 | terminology | F-01 corrigido por scan; labels planos | rótulos de estado fazem sentido fora do vocabulário institucional? (HP-08) | ontology leakage invisível para nós | task + probe | **B** especialmente | **alta** | sim |
| GAP-03 | authority | guards executáveis (self-review, approval) | usuário entende QUEM decide/executa e o efeito de aprovar? (HP-04, PQ-06–09) | aprovação por engano; `Recommendation != Authorization` falha na prática | task + authority probes | A+B | **alta** | sim |
| GAP-04 | trust | n/a (não mensurável tecnicamente) | usuário confiaria decisões reais a este modelo? | adoção zero mesmo com arquitetura correta | retrospective interview | A+B | média | não (formativo) |
| GAP-05 | recovery | failure/retry testados; preservação garantida | usuário PERCEBE que nada se perdeu? (PQ-13/14) | medo de falha → abandono | task (failure branch) | A+B | **alta** | sim |
| GAP-06 | evidence interpretation | EvidenceStatus + claim-level links testados | usuário distingue artifact/evidence/limitação? confia em fonte indisponível? (HP-06, PQ-11/15) | decisões sobre evidência inexistente | task + evidence probes | A+B | **alta** | sim |
| GAP-07 | review consequences | accept/revise/reject executáveis | usuário prevê a consequência de cada escolha? (PQ-16) | reject lido como deleção; accept lido como fim | task + probe | A+B | média-alta | sim |
| GAP-08 | Project Memory usefulness | derivação testada; adapter Feasible (E60) | a Memory ajuda ALGUÉM a se situar, ou só parece que ajuda? (HP-02/07/09, PQ-17/18) | tese central do produto não validada | return task | A+B | **alta** | sim |
| GAP-09 | return journey | snapshot/stale context testados | pessoa real reconstrói contexto após dias? | continuidade só funciona para quem construiu | return task (seeded) | A+B | alta | sim |
| GAP-10 | cognitive load | n/a | as 6 views em conjunto sobrecarregam? | abandono por complexidade | observação transversal | **B** | média | não |
| GAP-11 | accessibility | E49: 0 passed empírico; HV-01–07 abertas | uso real com teclado/zoom/AT | exclusão de usuários; G-04 aberto | verificação dirigida (separada) | operador qualificado | média* | sim p/ claim |
| GAP-12 | technical limitation awareness | limitações declaradas em texto | usuário entende o que a interface NÃO garante? | overclaim implícito | probe (PQ-20) | A+B | média | sim |
| GAP-13 | security misunderstanding | permission asserted documentado | botão visível lido como enforcement? | falsa sensação de controle de acesso | probe | A | média | sim |

*GAP-11 mantém o caminho separado já definido (HV-01–07 com operador
qualificado; CM-0001) — **não** deve ser fundido ao estudo de compreensão, para
não sobrecarregar sessões de 60 min nem gerar claim indevida.

## 3. Hipóteses selecionadas para o estudo mínimo (8 de 8 da diretiva)

| SH | Hipótese | Origem | Gap | Tarefa (E62) |
|---|---|---|---|---|
| SH-1 | usuários entendem que plano proposto ainda não está aprovado | HP-04; PQ-06 | GAP-03 | MT-3 |
| SH-2 | usuários entendem que aprovação não inicia execução | PQ-07/08 | GAP-03 | MT-4 |
| SH-3 | usuários entendem quem decide e quem executa | PQ-07; EC-03 | GAP-03 | MT-4 |
| SH-4 | usuários reconhecem que a pesquisa é simulada | PQ-19/20; EC-09 | GAP-01/12 | transversal + MT-5 |
| SH-5 | usuários entendem failure e recovery (nada se perdeu) | PQ-13/14; EC-05 | GAP-05 | MT-6 |
| SH-6 | usuários distinguem artifact de evidence (e evidência indisponível bloqueia) | HP-06; PQ-11/15 | GAP-06 | MT-7 |
| SH-7 | usuários compreendem Accept/Revise/Reject e suas consequências | PQ-16; EC-07 | GAP-07 | MT-7 |
| SH-8 | usuários reconstroem o projeto pela Project Memory ao retornar | HP-02/07/09; PQ-17/18 | GAP-08/09 | MT-8 |

Deliberadamente **não** selecionadas para o mínimo (ficam para ciclo futuro):
compreensão fina de discovery/contradição (EC-02 — importante, mas coberta
indiretamente por MT-1/2 e menos arriscada que autoridade/evidência), carga
cognitiva quantificada (GAP-10 — observada transversalmente, não medida) e
confiança (GAP-04 — entrevista retrospectiva, não hipótese testável).
Critério: risco se errado + impossibilidade de resolver sem gente, nunca
facilidade de medição.

## 4. O que este documento NÃO faz

Não autoriza estudo, recrutamento ou sessão; não altera E33/E34/E40 (o estudo
mínimo é uma **redução derivada**, não uma substituição dos artifacts
históricos); não fecha nenhuma HV de acessibilidade; não transforma nenhum
teste técnico em evidência de usuário.

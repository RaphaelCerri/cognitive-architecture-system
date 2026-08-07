---
schema_version: 0.1.0-experimental
id: IHR-0032
kind: knowledge
knowledge_type: implementation_handoff_report
title: Product Experience Validation Minimal Study Readiness — Handoff
status: reviewed
reviewed_at: 2026-08-07
review_outcome: approved_historical_reconciliation
acceptance_scope: experimental_checkpoint
review_basis: ASSESS-0003
version: "1.0"
created_at: 2026-07-23
milestone: V1-M02
related_commits: []
language: pt-BR
relations:
  - type: reports
    target: V1-M02
  - type: governed_by
    target: IHP-001
  - type: documents
    target: ARP-0009
  - type: related_to
    target: ARP-0009-E61
  - type: related_to
    target: ARP-0009-E62
  - type: related_to
    target: ARP-0009-E63
  - type: related_to
    target: ARP-0009-E64
  - type: related_to
    target: IHR-0031
---

# IHR-0032 — Product Experience Validation Minimal Study Readiness — Handoff

## 1. Contexto

O CSA aceitou IHR-0031 (Memory adapter **Feasible**; Opção D de event history
aprovada como hipótese) e declarou que o maior risco do programa passou de
viabilidade técnica para compreensão humana. O Council autorizou
exclusivamente a definição do menor estudo com pessoas reais — **sem
recrutamento e sem sessões**.

```text
Technical Feasibility != Product Comprehension
Study Proposal != Study Authorization != Recruitment != Session Execution
Internal Reviewer != Independent Participant
```

## 2. O que foi executado

### Bootstrap Loading Report — com desvio declarado

**Desvio processual declarado antecipadamente (padrão CSA-OBS-BOOT-02/03/04):**
diretiva pedia sessão nova; execução ocorreu na sessão corrente (decisão do
Chief ao colar a diretiva aqui). **Não deve contar** como teste vivo de
bootstrap. Impacto material: nenhum — slice documental; estado re-verificado
contra o Git nesta sessão. PROJECT_STATUS com staleness zero (`observed_head`
= HEAD real `4676b24`). Manifest aplicável: ausente (CM-0001 cobre outra
tarefa). Fontes lidas do repositório nesta sessão: E40 (íntegra, 17 gates),
E42 (íntegra, F-01–F-11 e cobertura PQ), E33 (íntegra, T-01–18/EC-01–09/
métodos/probes/A0–A3/stopping), E34 (íntegra, participantes/consentimento/
privacidade/retenção/renderer gate), além de E48–E60 e IHR-0029–0031 já
canônicos. Da diretiva: autorização, escopo das 27 seções, orçamentos
(7 arquivos/2 commits), aceite de IHR-0031. Conflitos: nenhum material.

### Execution Loop Report

1. Preflight: `main` @ `4676b24`; worktree rastreado limpo; untracked
   preservados; progresso sim.
2. Leitura integral das fontes de avaliação (E40/E42/E33/E34); progresso sim.
3. `E61` criado — Gap and Hypothesis Matrix: 13 gaps classificados com
   evidência existente × ausente × risco × método × prioridade; 8 hipóteses
   SH-1..8 mapeadas a HP/PQ/tarefas; **decisão de pesquisa central: o estímulo
   do estudo mínimo é o vertical slice executável**, não o protótipo Markdown
   (F-01 já corrigido; F-03/F-04/F-06 resolvidos por estado real); progresso
   sim.
4. `E62` criado — Minimal Study Protocol: 4 desenhos comparados, Option D
   recomendada; 8 tarefas MT-1..8 (≤60 min) com enunciado verbatim/sucesso/
   sinal de erro/probe/stop/dados, derivadas de T-01–18; probes de autoridade
   e evidência; avaliação de Memory item a item; findings model
   (Observation ≠ Interpretation ≠ Finding ≠ Recommendation ≠ Decision);
   decision criteria qualitativos sem limiar percentual; progresso sim.
5. `E63` criado — Operations Plan: 4–6 participantes (2 cohorts, ordem
   alternada, stopping por suficiência); acessibilidade integrada sem exigir
   AT e sem fundir com HV-01–07; minimização de dados (sem gravação; paráfrase
   default); consentimento/retenção herdados de E34; papéis reduzidos a 2
   operadores + CSA reviewer + Council, com acumulações registradas pela
   política proporcional de SoD (IHR-0030); progresso sim.
6. `E64` criado — Launch Readiness: G-01–17 reavaliados um a um para o mínimo
   (encolhidos/substituídos/fecháveis/waiver G-15 recomendado; G-17 absoluto);
   pacote mínimo de 13 itens com estado; recomendação concreta
   (`minimal_study_recommendation`); progresso sim.
7. ARP-0009 + PROJECT_STATUS atualizados; este IHR; progresso sim.

Limites: 7/7 iterações; dentro de 75 min; **7/7 arquivos**; 2/2 commits;
0 iterações sem progresso.

## 3. Arquivos afetados

Created: `knowledge/research/evidence/clite-product-experience-gap-hypothesis-matrix.md`
(E61); `clite-minimal-user-study-protocol.md` (E62);
`clite-minimal-study-operations-plan.md` (E63);
`clite-minimal-study-launch-readiness.md` (E64); este IHR (5). Modified:
`knowledge/research/ARP-0009-…md`; `foundation/bootstrap/PROJECT_STATUS.yaml`
(2). Total **7 ≤ 7**. Intactos: E29–E60 (nenhum artifact histórico de
avaliação alterado), vertical slice, adapters, Ontologia, ARCH-001,
ARP-0007/0008, `.obsidian/`, DRAFT untracked. **Nenhum código.**

## 4. Validação realizada

Executado: branch/HEAD/worktree verificados; IDs únicos (E61–E64, IHR-0032);
relations conferidas; rastreabilidade: cada hipótese SH mapeia a HP/PQ de
E25/E33 e a uma tarefa MT; cada MT deriva de T-01–18; cada gate MG reavalia um
G de E40; cobertura das 8 hipóteses da diretiva confirmada 1:1; probes de
autoridade e evidência incluídos; avaliação de Memory com os 8 itens da
diretiva; acessibilidade separada em 4 categorias sem claim WCAG; minimização
de dados sem gravação; papéis com SoD proporcional; decision criteria sem
score agregado; **nenhum recrutamento/contato/sessão iniciado**; UTF-8 sem
mojibake; `git diff --check` limpo; staging por path; worktree final limpo.

Não executado / n/a: testes/build/typecheck/lint — **nenhum código** (slice
documental; declarado, não inventado); nenhuma sessão, screener ou
consentimento produzido como instrumento final (são gates do pacote mínimo,
propositalmente pendentes de decisão).

## 5. Plano versus execução

Um desvio processual declarado (sessão reutilizada; §2). Nenhum outro:
7 arquivos, 2 commits, sem código, artifacts históricos intactos, nada
executado do estudo.

## 6. Decisões tomadas pelo CEA (dentro do escopo)

- **Estímulo = slice executável** (não o protótipo Markdown): elimina o
  finding material F-01 na fonte, resolve as limitações de meio F-03/F-04/F-06
  e reduz G-03/G-04 — registrado como a decisão de pesquisa mais consequente
  da slice, reversível pelo Council.
- **8 tarefas em vez de 18:** priorização por risco (autoridade, evidência,
  recovery, Memory) e teto de 60 min; discovery/contradição cobertos
  indiretamente (MT-1/2); o aparato completo T-01–18 permanece disponível para
  a avaliação completa futura.
- **G-15 (5 especialistas) proposto como único waiver**, com o custo declarado
  (menos perspectivas independentes) — decisão do Council.
- **GAP-11 (acessibilidade empírica) mantido fora do estudo de compreensão**,
  no caminho HV-01–07/CM-0001 — evita sobrecarregar sessões e claim indevida.
- **Mínimo de 2 operadores com moderador ≠ note taker inegociável** — sem
  gravação, o registro independente é a única fonte de evidência.

## 7. Estado da documentação

`ARP-0009` mantém `governance_state: authorized`, `research_state: active`,
`knowledge_maturity: evidence_gathering`, `outcome: null`,
`implementation_state: not_started`; `concluded` não usado. E33/E34/E40
intactos (o mínimo é redução derivada, não substituição). PROJECT_STATUS
reflete IHR-0031 aceito e este checkpoint `pending_review`.

## 8. Backlog e propostas

Nenhuma AP criada/alterada. Pendências operacionais nomeadas para fechamento
de gates (E64 §2): screener, consentimento, compensação, armazenamento,
validação técnica do browser, nomeações — todas pequenas (~2 dias), nenhuma
autorizada aqui.

## 9. Riscos e pontos de atenção

- **O risco de adiar continua sendo o maior do programa** (E53): esta é a
  quarta slice consecutiva sem evidência de usuário; o pacote mínimo agora
  custa ~2 dias de preparação — adiar de novo deveria ser uma decisão
  explícita, não inércia;
- amostra 4–6 é sinal qualitativo, não validação — o resultado alimenta
  decisão de direção, nunca claim de produto;
- waiver de G-15 reduz perspectivas independentes — se o estudo achar pouco,
  parte da explicação pode ser essa;
- operar com 2 pessoas concentra papéis — as acumulações precisam ficar
  registradas no log do estudo para a leitura honesta dos findings.

## 10. Questões para o Conselho

- Aceitar IHR-0032 e E61–E64 como desenho do estudo mínimo?
- Confirmar o slice executável como estímulo (substituindo o protótipo
  Markdown para o estudo mínimo)?
- Aprovar o waiver de G-15 (1 reviewer em vez de 5 especialistas)?
- Encomendar o fechamento das 6 pendências operacionais (screener,
  consentimento, compensação, armazenamento, validação de browser, nomeações)
  como próxima slice — ou adiar com registro explícito?

## 11. Próxima ação recomendada

CSA/Council review e `accept`. Recomendação do CEA: aceitar e **encomendar o
fechamento das 6 pendências** como próxima slice operacional curta,
culminando na decisão G-17 (autorizar ou não as sessões). Não iniciar
recrutamento, sessões, Real Execution Boundary ou Production Architecture
automaticamente — interrompido após este relatório.

## 12. Evidências

Fontes internas: Council Decision "Product Experience Validation Minimal Study
Readiness" (via CSA, 2026-07-23); E40 (gates), E42 (findings F-01–F-11), E33
(protocolo/T-01–18/EC/PQ/HP), E34 (participantes/consentimento/privacidade),
E48–E60, E49 (HV-01–07), IHR-0028–0031; vertical slice executável e seus 43
testes (estado conhecido, não re-executado nesta slice — sem mudança de
código); cadeia de bootstrap. Nenhuma fonte externa; nenhum dado pessoal;
nenhuma pessoa contatada.

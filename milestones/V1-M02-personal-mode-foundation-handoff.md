---
schema_version: 0.1.0-experimental
id: IHR-0035
kind: knowledge
knowledge_type: implementation_handoff_report
title: Personal Mode Foundation — Handoff
status: reviewed
reviewed_at: 2026-08-07
review_outcome: accepted_with_subsequent_governance_refinement
acceptance_scope: experimental_checkpoint
review_basis: ASSESS-0003
version: "1.0"
created_at: 2026-07-23
milestone: V1-M02
related_commits: [8a59dc6, fe18e71, 5274d77]
language: pt-BR
relations:
  - type: reports
    target: V1-M02
  - type: governed_by
    target: IHP-001
  - type: documents
    target: ARP-0009
  - type: authorized_by
    target: AD-006
  - type: related_to
    target: IHR-0034
---

# IHR-0035 — Personal Mode Foundation — Handoff

## 1. Contexto

O CVO autorizou papel duplo temporário (AD-006 — **acumulação divulgada**:
este IHR foi produzido pelo executor e será revisado pelo CSA incorporado na
mesma inteligência; um CSA independente futuro pode reabrir). Sob AD-006, o
CSA aceitou IHR-0034 com findings CSA-34-1..4 e autorizou esta slice omnibus:
o portfolio Now/Next de E74 executável sem decisões pessoais do CVO.

## 2. O que foi executado

1. **AD-006** criado — registro formal da autorização, salvaguardas e
   limitação declarada (uma inteligência nos dois papéis reduz independência).
2. **Revisão CSA do IHR-0034** — aceito com verificação interna sob acumulação
   divulgada, não independente (link check: 0 quebrados; 164 testes
   reconferidos), e 4 findings, incluindo duas
   REJEIÇÕES de propostas do executor (IHP-001 intacto; ARCH-001 só ponteiro).
3. **GOV-002** — modos de operação formalizados + perfil `personal-low-risk`
   (elegibilidade estreita, IHR-lite e revisão CSA em lote) — fecha G-A02/G-A14.
   A ambiguidade histórica de autoaprovação foi posteriormente corrigida:
   `solo_operator_exception` pertence ao humano owner, nunca ao agente/runtime.
4. **E75** — processo de aceite de update proposal (GENERATE→VERIFY→REVIEW→
   DECIDE→APPLY→RECORD; aplicação é ato humano; base antiga nunca aplicada) —
   fecha G-A05.
5. **E76** — desenho do audit artifact (NDJSON append-only + hash chain;
   verificador; o que entra/não entra; limitações) — fecha G-A06 documental.
6. **E77** — Real Execution Boundary spec (slice 5): contrato de fronteira,
   WorkOrder com budgets duros, 7 obrigações do engine, e a proposta de 1ª
   implementação como **Supervised Execution Engine** (formalizar o padrão
   humano-no-loop que já opera o repositório) — não autorizada.
7. **Backup (G-A07)** — `scripts/backup-repo.ps1` + `scripts/BACKUP.md`;
   ciclo completo EXECUTADO: bundle criado e verificado → restore falhou com
   "Filename too long" (achado real) → corrigido com `core.longpaths=true` →
   restore íntegro (269 arquivos, worktree limpo). Resta a decisão humana do
   destino externo (DH-backup).
8. **Real Project Intake v0 (G-A03)** — `project-fixture.ts` (fixture real
   com placeholders rotulados, nunca disfarçados) + `intake.ts` (CLI com
   self-check: só emite o que o próprio adapter aceita; recusa overwrite) +
   override de fixture em `initialize.ts` (com validação de id/versão) +
   `projects/` no .gitignore raiz (CSA-34-3). **54/54 testes** (7 novos,
   incl. correção de 2 guards que dispararam legitimamente contra o intake) +
   CLI exercitado de ponta a ponta no scratchpad.
9. **ARCH-001** — apenas o ponteiro datado autorizado (CSA-34-4).

## 3. Arquivos afetados

Created: `foundation/directives/AD-006-…`, `foundation/governance/GOV-002-…`,
evidence E75/E76/E77 (3), `scripts/backup-repo.ps1`, `scripts/BACKUP.md`,
adapter `src/project-fixture.ts` + `src/intake.ts` + `tests/intake.test.ts`,
este IHR (11). Modified: `.gitignore` (raiz), `architecture/system-overview.md`
(ponteiro), adapter `src/initialize.ts` + `tests/independence.test.ts`,
`knowledge/research/ARP-0009-…`, `foundation/bootstrap/PROJECT_STATUS.yaml`
(6). Total 17. Intactos: IHP-001 (CSA-34-1), E33/E34/E40/E61–E74, Ontologia,
domínio extraído (só consumo), Stage 3, `.obsidian/`, DRAFT.

## 4. Validação realizada

Adapter: typecheck verde; **54/54 testes** (guards de browser/cenário/
read-only/no-secrets todos ativos — dois dispararam contra o intake e foram
tratados com justificativa, não silenciados). Backup: ciclo backup→restore
executado com evidência em BACKUP.md. CLI: execução real com saída conferida.
Git: staging por path; `git diff --check` limpo; untracked preservados.
Extração/Stage 3: não tocados nesta slice (últimos estados conhecidos: 74/74,
43/43 — não re-executados aqui; declarado).

## 5. Plano versus execução

A slice executou os blocos Now/Next autorizados por AD-006. Não iniciou o
Supervised Execution Engine, implementação do Audit Artifact, execução real de
projetos, estudo com usuários ou redação integral de ARCH-001. A falha inicial
do restore por path longo foi corrigida e registrada, sem redução do teste.

## 6. Decisões tomadas pelo CEA

- O intake recusa overwrite e valida id/versão antes de produzir memória.
- Placeholders permanecem explicitamente rotulados como fictícios.
- O backup usa bundle verificável e restaura com `core.longpaths=true`.
- Propostas de execução real permaneceram não autorizadas.

## 7. Estado da documentação

ARP-0009 preservou seus estados. GOV-002 e AD-006 foram os artifacts governados
introduzidos. ARCH-001 recebeu somente o ponteiro autorizado. PROJECT_STATUS e
este IHR registraram o checkpoint; IHP-001 permaneceu intacto.

## 8. Backlog e propostas

Permaneceram candidatas e não autorizadas: Supervised Execution Engine (E77
§5), implementação do Audit Artifact (E76 §5) e aplicação assistida de memory
update proposals (E75 §4).

## 9. Riscos e pontos de atenção

- **Acumulação de papéis (AD-006)** é o desvio estrutural desta slice —
  divulgado em cada decisão; mitigação: findings do CSA incluíram rejeições
  reais de propostas do executor (CSA-34-1/34-4), e tudo é reabrível.
- Intake v0 não cobre execução real (placeholders rotulados) — coerente com
  E77; o valor entregue é discovery/entendimento/plano com conteúdo real.
- Perfil personal-low-risk ainda não foi usado — primeira aplicação real deve
  ser observada pelo CSA em lote.

## 10. Questões para o Conselho

No estado atual, DH-backup foi resolvida por remoto Git privado e bundle mensal;
DH-1..7 foram deferidas junto com o estudo completo; DH-intake permanece como
dogfooding do primeiro projeto real. Essas decisões posteriores não alteram a
evidência produzida pela slice.

## 11. Próxima ação recomendada

Revisão independente deste IHR e, se aceito, registrar AD-006 como encerrada por
cumprimento do escopo. Depois: suas respostas às DH ainda aplicáveis.

## 12. Evidências

Commits `8a59dc6`, `fe18e71` e `5274d77`; 54/54 testes; typecheck verde; ciclo
backup/restore verificado; execução ponta a ponta do CLI; `git diff --check`
limpo. Nenhuma fonte externa ou dado pessoal foi usado. O projeto de teste do
CLI continha somente conteúdo fictício e foi gravado no scratchpad.

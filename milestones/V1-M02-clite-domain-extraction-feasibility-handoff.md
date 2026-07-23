---
schema_version: 0.1.0-experimental
id: IHR-0029
kind: knowledge
knowledge_type: implementation_handoff_report
title: C-lite Domain Extraction Feasibility — Handoff
status: pending_review
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
    target: ARP-0009-E55
  - type: related_to
    target: ARP-0009-E54
  - type: related_to
    target: IHR-0028
---

# IHR-0029 — C-lite Domain Extraction Feasibility — Handoff

## 1. Contexto

O CSA aceitou IHR-0028 (`accepted_with_process_note`; observação
CSA-OBS-BOOT-02: a execução anterior reutilizou contexto de conversa e não
contou como teste vivo de bootstrap). O Council autorizou exclusivamente a
primeira candidate slice de E54 — **Domain Extraction Feasibility** — e exigiu
que esta execução contasse como novo uso real da camada de bootstrap: sessão
nova, começando por `AGENT_START_HERE.md`, sem memória de outras conversas.

```text
Feasibility Extraction != Canonical Domain Package
Extracted Code         != Production-Ready Code
Passing Tests          != Product Validation
```

## 2. O que foi executado

### Bootstrap Loading Report (contando como teste vivo)

Ordem real de leitura em sessão nova: (1) `AGENT_START_HERE.md`;
(2) `foundation/bootstrap/PROJECT_CHARTER.md`; (3) `PROJECT_STATUS.yaml`;
(4) `EXECUTION_CONTRACT.md`; (5) `RETURN_SCHEMA.yaml`; (6) listagem de
`manifests/` (somente CM-0001 existe — **nenhum manifest aplicável a esta
tarefa**); (7) E51–E54; (8) trecho relevante de ARP-0009; (9) IHR-0028 (formato
de handoff); (10) código e testes do vertical slice. ~10 arquivos de
bootstrap/evidência + 14 arquivos de código/teste; ~30k tokens de contexto de
repositório. **Staleness detectada e esperada:** PROJECT_STATUS registrava
`observed_head: 5f2bf9a` e IHR-0028 como `pending_review`, enquanto o Git real
estava em `375390a` e a diretiva confirmava o aceite — tratado como o próprio
snapshot declara (repositório como verdade; corrigido no commit de docs desta
slice). **Do repositório** vieram: papéis, contratos, formato de retorno,
estado do programa, orçamentos default, formato de IHR, todo o código.
**Da diretiva** vieram: autorização, escopo, orçamentos específicos (24
arquivos/4 commits/3 sessões/2 ciclos), sequência decidida das slices e o
aceite de IHR-0028 (ainda não refletido no repositório). Ambiguidade real
encontrada: E54 estimava ≤8 arquivos/≤2 commits para esta slice; a diretiva
autoriza ≤24/≤4 — resolvida pela precedência nível 1 (Council Decision),
declarada aqui.

### Execution Loop Report

1. **Preflight:** `main` @ `375390adf8afc461fdd1133e435dd51a44eb27cc`
   confirmado; worktree rastreado limpo; `.obsidian/` e o DRAFT untracked
   preservados; baseline do Stage 3 executado: 43/43 testes, `tsc --noEmit`
   verde, build 75.0kb; progresso sim.
2. **Mapa de acoplamento:** domínio importava o fixture como módulo
   (`machine.ts`, `commands.ts`); gatilho `DQ-02` hardcoded; UI family dentro
   do `AppState`; browser confinado a `src/app/`; tsconfig com lib DOM;
   progresso sim.
3. **Extração** em `experiments/clite-domain-extraction-feasibility/`:
   contrato `ScenarioFixture` (inversão de dependência), domínio copiado e
   parameterizado, `context: { stale }` substituindo a família de UI,
   persistência com adapter in-memory, tsconfig **sem lib DOM**; progresso sim.
4. **Segundo fixture** (Estufa Vertical, mínimo, mesma forma de jornada) +
   suíte de testes fixture-genérica (driver reage ao estado, não a IDs de
   cenário); progresso sim.
5. **Validação:** 74/74 testes novos; typecheck verde; 43/43 do Stage 3
   re-executados verdes; varreduras de independência (browser, cenário, rede,
   dados pessoais) como testes automatizados; progresso sim.
6. **Docs:** E55 (feasibility report), ARP-0009 (slice ativa + aceite de
   IHR-0028), PROJECT_STATUS (staleness corrigida no checkpoint), este IHR;
   progresso sim.

Limites: 1 sessão de 3; 22 arquivos rastreados de 24; 3 commits de 4;
**0 ciclos materiais de correção consumidos** (2 correções triviais durante o
desenvolvimento: guard de null no driver de teste; comentário colidindo com o
scan de padrões — nenhuma é mudança de comportamento de domínio).

## 3. Arquivos afetados

Created (`experiments/clite-domain-extraction-feasibility/`): `package.json`,
`tsconfig.json`, `.gitignore`, `README.md`, `src/fixture-contract.ts`,
`src/types.ts`, `src/events.ts`, `src/commands.ts`, `src/machine.ts`,
`src/memory.ts`, `src/persistence.ts`, `src/fixtures/oficina-horizonte.ts`,
`src/fixtures/estufa-vertical.ts`, `tests/helpers.ts`, `tests/machine.test.ts`,
`tests/invalid-transitions.test.ts`, `tests/memory-review.test.ts`,
`tests/independence.test.ts` (18). Created (docs):
`knowledge/research/evidence/clite-domain-extraction-feasibility-report.md`
(E55), este IHR (2). Modified: `knowledge/research/ARP-0009-…md`,
`foundation/bootstrap/PROJECT_STATUS.yaml` (2). Total **22 ≤ 24**.
Intactos: `experiments/clite-stage3-vertical-slice/` (nenhum byte alterado),
ARCH-001, Ontologia, Compiler, outros ARPs, `.obsidian/`, DRAFT untracked.

## 4. Validação realizada

Executado (comandos reais): `npm test` no domínio extraído (74/74, 12 suítes);
`npm run typecheck` no domínio extraído (verde, **sem lib DOM**); `npm test`
no Stage 3 (43/43); `npm run typecheck` e `npm run build` no Stage 3 (verdes;
build 75.0kb); varreduras automatizadas em teste: browser independence
(window/document/HTMLElement/localStorage/sessionStorage/navigator/eventos/CSS),
zero URLs externas/fetch/rede/eval, zero conteúdo da oficina no domínio, F-01
nos dois fixtures, zero padrões de dados pessoais, replay determinístico
deep-equal, fixture cross-invalidation de snapshot; `git diff --check` limpo.

Não executado / não aplicável: build de bundle do domínio extraído (não há
bundle — domínio sem UI; declarado `n/a`, não inventado); lint (não configurado,
como no Stage 3); qualquer teste de concorrência, rede ou multiusuário
(stopping rule — feasibility é só sobre o domínio); qualquer observação
empírica humana.

## 5. Plano versus execução

Sem desvios de escopo. Orçamentos respeitados (22/24 arquivos; 3/4 commits;
1/3 sessões; 0/2 ciclos materiais). Nenhuma stopping rule atingida: nenhuma
dependência de runtime nova (devDependencies typescript/@types/node, as mesmas
do Stage 3; esbuild dispensado); nenhum contrato promovido a canon; Ontologia e
ARCH-001 intocados; os 43 testes existentes continuam passando.

## 6. Decisões tomadas pelo CEA (dentro do escopo)

- **Interface State dividida:** stale context é domínio (`context.stale` +
  guard); navegação de views é apresentação — com renomeação registrada
  (`VIEW_REFRESHED`→`CONTEXT_REFRESHED`; `RefreshView`→`RefreshContext`).
- **Cópia, não movimentação:** o Stage 3 permanece intacto; duplicação de ~1.100
  linhas aceita como custo da feasibility, com a resolução da duplicação
  explicitamente deixada para a decisão de arquitetura (slice 6 de E54).
- **Independência verificável por tipo:** tsconfig sem lib DOM, além dos testes
  de varredura — a independência de browser falha em compile-time, não só em teste.
- **Segundo fixture mínimo** (Estufa Vertical) com a mesma forma de jornada —
  nenhum fluxo novo, nenhum produto novo.
- **Driver de teste fixture-genérico** que reage ao estado do domínio em vez de
  scriptar IDs/pasos — a própria suíte é evidência de scenario independence.
- **Mensagens de guard em pt-BR mantidas na máquina** — explicações de transição
  inválida são domínio; localização registrada como preocupação futura, não
  resolvida especulativamente.

## 7. Estado da documentação

`ARP-0009` mantém `governance_state: authorized`, `research_state: active`,
`knowledge_maturity: evidence_gathering`, `outcome: null`,
`implementation_state: not_started` — **nenhum estado alterado**; `concluded`
não usado. PROJECT_STATUS atualizado para o checkpoint aceito (IHR-0028) e
lista este checkpoint como `pending_review`. Este IHR permanece
`pending_review` até decisão do CSA/Council.

## 8. Backlog e propostas

Nenhuma AP criada ou alterada. Próxima slice da sequência decidida — Identity
and Authority Model — segue **não autorizada**. Pendência técnica registrada em
E55: duplicação Stage 3 × extração a resolver na futura decisão de arquitetura.

## 9. Riscos e pontos de atenção

- **Duplicação viva:** dois domínios quase idênticos agora existem no
  repositório; sem uma decisão futura de qual é a referência, eles podem
  divergir silenciosamente.
- **"Feasible" pode ser lido além do que prova:** a extração prova independência
  de browser/cenário, não concorrência, escala, persistência real ou produto.
- **`ScenarioFixture` pode se cristalizar por inércia** — está marcado
  `experimental_only` em três lugares, mas o risco de virar schema de fato
  existe se slices futuras o importarem sem decisão.
- **Localização:** as explicações de guard em pt-BR dentro da máquina são um
  acoplamento registrado que uma internacionalização futura precisará tratar.

## 10. Questões para o Conselho

- Aceitar IHR-0029 e E55 como prova de feasibility (outcome `Feasible`)?
- Confirmar a decisão de Interface State (stale context no domínio; views fora)?
- Autorizar a próxima slice da sequência (Identity and Authority Model)?
- Declarar desde já qual dos dois domínios (Stage 3 × extração) é a
  especificação de referência, ou deixar para a slice 6?

## 11. Próxima ação recomendada

CSA/Council review e `accept`. Recomendação do CEA: aceitar; autorizar Identity
and Authority Model como próxima slice (desenho puro, sem código); manter o
domínio extraído congelado até a decisão da slice 6 sobre duplicação. Não
iniciar Identity/Authority Model, Memory Adapter, produto, Stage 5, avaliação
externa ou nova slice automaticamente — interrompido após este relatório.

## 12. Evidências

Fontes internas: Council Decision "C-lite Domain Extraction Feasibility" (via
CSA, 2026-07-23); cadeia de bootstrap (BOOT-001/002/003/005/006);
`ARP-0009-E51..E55`; IHR-0028; `experiments/clite-stage3-vertical-slice/`
(baseline); `experiments/clite-domain-extraction-feasibility/` (resultado).
Comandos executados e resultados: ver §4. Nenhuma fonte externa; nenhum dado
pessoal; nenhuma requisição de rede em runtime (verificado por teste).

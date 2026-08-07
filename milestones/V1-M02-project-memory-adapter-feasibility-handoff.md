---
schema_version: 0.1.0-experimental
id: IHR-0031
kind: knowledge
knowledge_type: implementation_handoff_report
title: Canonical Project Memory Adapter Feasibility — Handoff
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
    target: ARP-0009-E60
  - type: related_to
    target: ARP-0009-E55
  - type: related_to
    target: IHR-0030
---

# IHR-0031 — Canonical Project Memory Adapter Feasibility — Handoff

## 1. Contexto

O CSA aceitou IHR-0030 (vocabulário de identidade/autoridade experimental;
política proporcional de SoD para operador único). O Council autorizou a
terceira candidate slice: provar (ou refutar) que uma Project Memory humana em
Markdown + YAML alimenta e reconstrói o domínio experimental C-lite sem
transformar runtime, snapshot, event log ou derived view em Source of Truth.

```text
Canonical Project Memory != Runtime State != Event Log != Snapshot
Read Adapter != Write Authority · Update Proposal != Accepted Canonical Change
```

## 2. O que foi executado

### Bootstrap Loading Report — com desvio declarado

**Desvio processual declarado antecipadamente (mesmo padrão de
CSA-OBS-BOOT-02/03):** a diretiva pediu sessão nova; a execução ocorreu na
sessão corrente (decisão do Chief ao colar a diretiva aqui, após aviso
explícito do executor no retorno anterior). Esta execução **não deve contar**
como teste vivo de bootstrap. Impacto material: nenhum — todo o estado foi
re-verificado contra o Git e os arquivos do repositório nesta sessão.
PROJECT_STATUS: staleness zero (`observed_head` = HEAD real `1cbf07d`).
Manifest aplicável: ausente. Fontes canônicas: cadeia de bootstrap, E51–E59,
domínio extraído, convenção de frontmatter YAML do repositório. Da diretiva:
autorização, escopo, orçamentos (26 arquivos/4 commits/2 ciclos/1 dependência),
aceite de IHR-0030. Conflitos: nenhum material.

### Execution Loop Report

1. **Preflight:** `main` @ `1cbf07d`; worktree rastreado limpo; untracked
   preservados; 117 testes existentes verdes (74 extração + 43 Stage 3);
   typechecks e build verdes; nenhum parser YAML no repositório (verificado);
   progresso sim.
2. **Adapter** em `experiments/clite-memory-adapter-feasibility/`:
   memory-types (incl. matriz `FIELD_CLASSIFICATION` testável), reader
   (frontmatter + YAML via pacote `yaml`), normalize (determinístico; issues
   classificadas), initialize (fixture injeta conteúdo; perdas declaradas em
   `unreconstructable`; recusa inicializar sob `require_human_decision`),
   proposal (status sempre `proposed`; validação de base desatualizada);
   progresso sim.
3. **Duas Memories experimentais:** Oficina Horizonte (`awaiting_input`) e
   Estufa Vertical (`under_review`, com `solo_operator_exception` de baixo
   risco conforme a política do CSA); progresso sim.
4. **Testes (46):** reader/validação/determinismo (8), inicialização e três
   pontos de retomada com continuação até acceptance (9), staleness/conflito/
   solo-operator (13), proposal/no-auto-write (5), independência de browser/
   cenário/conteúdo + matriz (11); progresso sim.
5. **Correções durante desenvolvimento (2, não materiais):** palavra "window"
   em comentário colidindo com a varredura; padrão de placa colidindo com IDs
   institucionais (IHR-0029) — refinado o teste, não o conteúdo; progresso sim.
6. **Docs:** E60, ARP-0009 (slice ativa + aceite IHR-0030), PROJECT_STATUS,
   este IHR; progresso sim.

Limites: 1 sessão de 3; **21 arquivos rastreados de 26**; 3 commits de 4;
0 ciclos materiais de 2; 1 dependência de runtime nova de 1 (justificada).

## 3. Arquivos afetados

Created (`experiments/clite-memory-adapter-feasibility/`): `package.json`,
`package-lock.json`, `tsconfig.json`, `.gitignore`, `README.md`,
`src/memory-types.ts`, `src/reader.ts`, `src/normalize.ts`,
`src/initialize.ts`, `src/proposal.ts`, `memories/oficina-horizonte-memory.md`,
`memories/estufa-vertical-memory.md`, `tests/reader.test.ts`,
`tests/initialize.test.ts`, `tests/staleness-conflict.test.ts`,
`tests/proposal.test.ts`, `tests/independence.test.ts` (17). Created (docs):
`knowledge/research/evidence/clite-project-memory-adapter-feasibility-report.md`
(E60), este IHR (2). Modified: `knowledge/research/ARP-0009-…md`,
`foundation/bootstrap/PROJECT_STATUS.yaml` (2). Total **21 ≤ 26**.
Intactos: domínio extraído (nenhum byte), Stage 3, Ontologia, ARCH-001,
ARP-0007/0008, `.obsidian/`, DRAFT untracked.

## 4. Validação realizada

Executado (comandos reais): `npm test` no adapter (46/46, 13 suítes);
`npm run typecheck` no adapter (verde, sem lib DOM); `npm test` na extração
(74/74) e no Stage 3 (43/43) — **117 preservados**; typecheck/build do Stage 3
verdes no preflight; varreduras em teste: browser independence (incl. proibição
de qualquer capacidade de escrita de arquivo no src — read adapter literal),
zero URLs/fetch/rede/eval, zero conteúdo de cenário fora do registry, zero
segredos/dados pessoais nas Memories, no-auto-write por byte-igualdade do
arquivo canônico após o ciclo completo; determinismo (releitura, ordem de
chaves, whitespace); três pontos de retomada com continuação e guards (stale
context, self-review) sobrevivendo; staleness/conflitos classificados e
testados um a um; `git diff --check` limpo; staging por path.

Não executado / n/a: build de bundle (não há UI); lint (não configurado);
escala/merge/multiusuário/persistência real (stopping rules); observação
humana.

## 5. Plano versus execução

Um desvio processual declarado (sessão reutilizada; ver §2). Nenhum outro:
orçamentos respeitados; nenhuma stopping rule atingida — em particular, a
resumability **não** exigiu event log completo (a alternativa de marcadores
canônicos + fixture bastou para os três pontos).

## 6. Decisões tomadas pelo CEA (dentro do escopo)

- **Sibling experiment** (`clite-memory-adapter-feasibility/`) importando o
  domínio extraído por referência relativa — zero modificação no experimento
  congelado, descartabilidade máxima.
- **Dependência única `yaml`:** nenhum parser seguro no repositório; parsing
  YAML manual é inseguro; o pacote não tem dependências transitivas.
- **`require_human_decision` recusa inicialização** — inicializar sob conflito
  seria resolução silenciosa, proibida pela diretiva.
- **Family states como marcadores canônicos** e project/discovery states
  derivados — evita duplicação de verdade dentro do próprio documento.
- **Log de restauração de entrada única** (marker `PROJECT_RESUMED` com origem
  `MemoryAdapter.initializeFromMemory`) em vez de histórico sintético.
- **Opção D de event history recomendada** (Memory enxuta + audit artifact
  separado futuro), coerente com `Audit trail != Memory` (E58).

## 7. Estado da documentação

`ARP-0009` mantém `governance_state: authorized`, `research_state: active`,
`knowledge_maturity: evidence_gathering`, `outcome: null`,
`implementation_state: not_started`; `concluded` não usado. ARP-0007/0008 não
modificados. PROJECT_STATUS reflete IHR-0030 aceito e este checkpoint
`pending_review`.

## 8. Backlog e propostas

Nenhuma AP criada/alterada. Gap nomeado (não autorizado): artifact separado de
audit/event history (lado ausente da Opção D). Próximas slices da sequência —
Product Experience Validation e Real Execution Boundary — não autorizadas.

## 9. Riscos e pontos de atenção

- **Três experimentos vivos** agora coexistem (Stage 3, extração, adapter);
  a Production Architecture Proposal precisará decidir o que é referência e o
  que é arquivável antes que divergências silenciosas apareçam;
- o formato `memory-format-0.1-experimental` pode cristalizar por uso — mesmo
  risco já apontado para `ScenarioFixture`, mitigado pela marcação explícita;
- "Feasible" aqui cobre leitura/reconstrução local e single-user — escala,
  merge e colaboração seguem completamente não provados;
- a aplicação de update proposals permanece manual por design; sem um processo
  humano definido para aceitá-las, propostas podem acumular sem decisão.

## 10. Questões para o Conselho

- Aceitar IHR-0031 e E60 (outcome **Feasible**)?
- Adotar a Opção D de event history como hipótese de trabalho?
- Autorizar a próxima slice — e qual: Product Experience Validation (primeira
  evidência de usuário real do programa) ou Real Execution Boundary
  (especificação documental)?
- Registrar o gap do audit artifact separado como slice candidata futura?

## 11. Próxima ação recomendada

CSA/Council review e `accept`. Recomendação do CEA: aceitar; priorizar
**Product Experience Validation** como próxima slice — é a única frente que
produz evidência de usuário real, o maior risco nomeado do programa (E53), e
as três slices técnicas aceitas já dão base suficiente para o estímulo. Não
iniciar nada automaticamente — interrompido após este relatório.

## 12. Evidências

Fontes internas: Council Decision "Canonical Project Memory Adapter
Feasibility" (via CSA, 2026-07-23); cadeia de bootstrap; E51–E59; IHR-0029/
0030; domínio extraído (leitura); convenções de frontmatter do repositório.
Comandos e resultados: §4. Dependência externa adicionada: pacote `yaml`
(npm), sem dependências transitivas — nenhuma outra fonte externa; nenhum dado
pessoal; nenhuma requisição de rede em runtime (verificado por teste).

---
schema_version: 0.1.0-experimental
id: ARP-0009-E60
kind: knowledge
knowledge_type: research_evidence
title: C-lite Canonical Project Memory Adapter Feasibility Report
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E55
  - type: related_to
    target: ARP-0009-E56
  - type: related_to
    target: ARP-0009-E57
  - type: related_to
    target: ARP-0009-E58
  - type: related_to
    target: ARP-0009-E59
  - type: constrained_by
    target: PMM-001
---

# C-lite Canonical Project Memory Adapter Feasibility Report

## Pergunta principal, respondida

> O domínio experimental pode ser inicializado, retomado e comparado de
> maneira determinística usando uma Project Memory em Markdown/YAML como
> entrada canônica candidata, preservando provenance, decisões, unresolved
> items e histórico relevante?

**Sim — outcome: `Feasible`**, com um limite estrutural honesto: o event log
completo **não** é reconstruível a partir da Memory — por design (é
`audit_only`, não Memory), e o adapter declara a perda em vez de fingir replay.
O experimento vive em `experiments/clite-memory-adapter-feasibility/`: 46/46
testes novos, typecheck sem lib DOM, 117 testes existentes preservados, domínio
extraído **não modificado** (importado por referência).

```text
Canonical Project Memory != Runtime State != Event Log != Snapshot
Read Adapter != Write Authority · Update Proposal != Accepted Canonical Change
Feasibility Adapter != Production Persistence · Candidate Format != Ontology
```

Respostas às perguntas secundárias:

1. **Mínimo canônico:** identidade/versões do documento; input humano
   (respostas, comentários de revisão, answer de pendência); estados de
   família como marcadores aceitos; decisões com authority basis; continuidade
   (pending action, unresolved, provenance refs).
2. **Derivado:** `project.state`/`discovery.state` (computados de marcadores),
   `context.stale` (sempre true na restauração), atividades (recomputadas do
   fixture até o cursor), Project Memory view (`deriveMemory`).
3. **Runtime-only:** ticks por evento, histórico completo de recentChanges,
   qualquer estado de UI.
4. **Alterações propostas:** `memory_update_proposal` com before/after por
   campo, seções afetadas, base version, required_authority referenciada e
   status **sempre** `proposed`; teste prova byte-igualdade do arquivo original
   após o ciclo completo ler→trabalhar→propor.
5. **Staleness/incompatibilidade:** issues classificadas
   (`reject` / `require_human_decision` / `warn` /
   `recoverable_by_normalization`); conflito nunca é resolvido silenciosamente
   — `require_human_decision` **recusa** a inicialização.
6. **Reconstrução sem event log:** sim para os três pontos de retomada
   testados — o estado reconstruído aceita os próximos comandos válidos e
   completa a jornada até acceptance; o que não é reconstruível é declarado em
   `unreconstructable`.

## Estrutura canônica candidata

`memory-format-0.1-experimental`: Markdown com frontmatter YAML — mesmo padrão
dos artifacts institucionais do repositório. Seções: identidade/metadata,
intent, governance (incl. `approval_decision` com `authority_basis` e
`solo_operator_exception` de baixo risco), execution summary, result
(refs, não conteúdo), continuity. Corpo Markdown é contexto humano; a
inicialização usa somente o bloco estruturado.

## Matriz de classificação (testada em código)

`FIELD_CLASSIFICATION` em `src/memory-types.ts` (33 entradas). Decisões
centrais: event sequence completa → **audit_only** (não é necessária); UI
state → **reject_from_memory**; timestamps sintéticos → `last_tick`
canônico-opcional, ticks por evento runtime_only; current view →
reject_from_memory; evidence confidence → **reject_from_memory** (pertence ao
evidence artifact; a Memory carrega refs+status); authority basis →
**embutida como referência textual** aos contratos E56–E59 (não como objeto
canônico); rejected work → permanece representável (`artifact_state:
rejected` + review_decision); stale context → **calculado**, nunca armazenado.

## Adapter (pipeline com perdas declaradas)

```text
Markdown/YAML → ValidatedMemoryDocument → NormalizedMemoryRecord → AppState
   reader.ts          (versão, campos)      normalize.ts (determinístico)
                                            initialize.ts (fixture injeta conteúdo)
```

Parser: pacote `yaml` — **única dependência de runtime nova**, justificada
(nenhum parser seguro no repositório; parsing manual de YAML é inseguro; zero
dependências transitivas). Campos desconhecidos viram warnings nomeados; erros
sempre explicam o motivo; o adapter não conhece DOM/browser/localStorage e não
importa nenhuma capacidade de escrita de arquivo (testado).

## Determinismo e retomada (evidência de teste)

- duas leituras/inicializações → deep-equal; ordem de chaves YAML e whitespace
  do corpo não alteram o resultado; sem relógio real; sem dependência de path.
- **Ponto 1** (pós-discovery, pré-authorization): `contextualized`
  reconstruído; `ProposePlan` aceito; comandos prematuros rejeitados.
- **Ponto 2** (awaiting_input, Memory da oficina): pendência respondida →
  falha → retry (bloqueado até `RefreshContext` — o guard de stale sobrevive
  à restauração) → conclusão → aceite.
- **Ponto 3** (under_review, Memory da estufa): evidência indisponível e
  answer preservadas; self-review continua rejeitado; decisão final alcançada.
- Cenários: o mesmo adapter alimenta ambos; o único conhecimento de cenário é
  o registry de fixtures em `initialize.ts` (testado por varredura).

## Estratégias de event history (recomendação, não canonização)

| Opção | Avaliação |
|---|---|
| A — Full event log na Memory | Rejeitada como default: ilegível para humanos, cresce sem limite, mistura audit com Memory, píora merge e privacidade |
| B — Checkpoints aceitos + provenance selecionada | Boa legibilidade; reconstrução média; exige disciplina de checkpoint |
| C — Estado canônico + artifact separado de audit/event | Melhor separação de responsabilidades (`Audit trail != Memory`, E58); reconstrução forte quando o audit existe |
| D — Híbrido (B no documento + C para auditoria) | **Recomendada**: a Memory carrega marcadores aceitos + provenance refs; o log completo vive em artifact de auditoria separado e opcional |

A implementação desta feasibility exercita exatamente o lado "Memory" da
Opção D; o artifact de auditoria separado permanece não construído (gap
declarado, coerente com E58 §5).

## Round-trip limitations (declaradas)

Read fidelity: forte para o bloco estruturado. Proposal fidelity: before/after
por campo sobre a superfície canônica. **Não testado nem exigido:** reescrita
textual idêntica do Markdown (comentários, formatação e ordenação seriam
perdidos numa regravação automática — mais um motivo para a aplicação de
propostas permanecer um ato humano).

## Findings

- **Observação (OBS-A):** a reconstrução de atividades a partir do fixture não
  reproduz as atividades de retomada inseridas por `EXECUTION_RESUMED` em
  execuções vivas — declarado em `unreconstructable`; irrelevante para
  comportamento futuro, relevante para exibição de histórico.
- **Observação (OBS-B):** `DecisionRecord.atTick` é aproximado por
  `last_tick`; ticks originais são runtime_only.
- **Observação (OBS-C):** o registry de fixtures é o acoplamento residual do
  adapter a cenários; num produto real seria substituído por conteúdo canônico
  próprio — exatamente o boundary fixture_only da matriz.
- Blocker/material/minor: **none**.

## Outcome e recomendação

**Feasible** (sem score agregado). Recomendação de pesquisa: adotar a Opção D
de event history como hipótese de trabalho; tratar o formato
`memory-format-0.1-experimental` como descartável; a decisão de formato real
de Memory de produto pertence à Production Architecture Proposal, junto com a
resolução da duplicação Stage 3 × extração. O que esta feasibility **não**
prova: escala (Memories grandes), merge/colaboração, multiusuário, persistência
real, imutabilidade de audit, produto.

## Referências

`experiments/clite-memory-adapter-feasibility/` (código, memories, README);
`experiments/clite-domain-extraction-feasibility/` (domínio, não modificado);
`ARP-0009-E51..E59`; Council Decision "Canonical Project Memory Adapter
Feasibility" (via CSA, 2026-07-23); PMM-001; `foundation/bootstrap/EXECUTION_CONTRACT.md`.

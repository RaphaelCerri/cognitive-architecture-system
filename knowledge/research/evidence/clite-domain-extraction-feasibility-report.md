---
schema_version: 0.1.0-experimental
id: ARP-0009-E55
kind: knowledge
knowledge_type: research_evidence
title: C-lite Domain Extraction Feasibility Report
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E51
  - type: related_to
    target: ARP-0009-E52
  - type: related_to
    target: ARP-0009-E54
---

# C-lite Domain Extraction Feasibility Report

## Pergunta principal, respondida

> A state machine, os commands, events, guards, invalid transitions e a
> derivação da Project Memory sobrevivem como um domínio executável e testável
> sem depender da aplicação de demonstração?

**Sim — outcome: `Feasible`.** O domínio extraído em
`experiments/clite-domain-extraction-feasibility/` executa e passa 74/74 testes
com `node --test`, sem navegador, sem DOM, sem `localStorage`, e com **dois**
cenários distintos (Oficina Horizonte portado + Estufa Vertical mínimo),
compilando em TypeScript strict **sem a lib DOM** — a independência de browser é
verificada pelo typecheck, não só por convenção. Zero dependências de runtime;
nenhuma nova dependência além das devDependencies já usadas pelo Stage 3
(typescript, @types/node; esbuild não é necessário).

```text
Feasibility Extraction != Canonical Domain Package
Extracted Code         != Production-Ready Code
Passing Tests          != Product Validation
Experimental Contract  != Ontology
```

## Mapa de acoplamento encontrado (antes da extração)

| Acoplamento | Onde | Tipo |
|---|---|---|
| `import * as FX from './fixture.ts'` | `machine.ts`, `commands.ts`, `persistence.ts` | Scenario (módulo concreto importado pelo domínio) |
| Gatilho de contradição hardcoded (`ev.questionId === 'DQ-02'`) | `machine.ts` | Scenario |
| Texto de correção, limite de revisão do plano, claim de revisão de escopo, evidências de falha/conclusão (`EVIDENCE_ITEMS[2]`, `slice(0, 2)`), `TICKS_PER_STEP`, `ROLE_LABELS`, `EXECUTION_ID` | `machine.ts`, `commands.ts` | Scenario |
| Default `affectedScope: 'Seção de aprovação externa'` | `commands.ts` | Scenario |
| `AppState.ui { state: InterfaceState; view: ViewId }` | `types.ts` | UI (parcial: `stale_view` é domínio; navegação não) |
| `window.localStorage` | somente `src/app/main.ts` | Browser — **já fora do domínio** no Stage 3 |
| `lib: ["DOM", "DOM.Iterable"]` no tsconfig | projeto inteiro | Browser (tipos disponíveis ao domínio, mesmo sem uso) |

O domínio do Stage 3 **não** referenciava `window`/`document`/`localStorage`
diretamente — o acoplamento real era (a) o fixture como import de módulo e
(b) a família de UI dentro do `AppState`.

## Estratégia de extração aplicada

Cópia para área experimental nova (`experiments/clite-domain-extraction-feasibility/`),
sem mover nenhum arquivo do Stage 3; **inversão de dependência** — o contrato
experimental `ScenarioFixture` (`src/fixture-contract.ts`) declara todo o
conteúdo de cenário e é injetado por parâmetro em `initialState(fx)`,
`applyEvent(fx, …)` e `handleCommand(fx, …)`.

## Classificação dos contratos

| Contrato | Classificação | Nota |
|---|---|---|
| State families (Project/Discovery/Plan/Authorization/Execution/Artifact/Evidence/Review) | reusable_as_is | Copiados sem mudança; 10 famílias continuam separadas, sem status universal |
| Entidades (`Assumption`, `Contradiction`, `PlanVersion`, `AuthorizationRequest`, `RequestedInput`, `Artifact`, `EvidenceItem`, `DecisionRecord`, `HistoryEntry`) | reusable_as_is | Sem mudança |
| Commands/Events (nomes e payloads) | reusable_with_adapter | 32/34 eventos e 24/25 comandos idênticos; `VIEW_REFRESHED`→`CONTEXT_REFRESHED`, `RefreshView`→`RefreshContext` |
| `InterfaceState`/`ViewId` | ui_bound | **Não extraídos**; ver decisão abaixo |
| `AppState.ui` | ui_bound → substituído por `context: { stale: boolean }` | O guard de stale context é domínio |
| Conteúdo antes hardcoded (gatilho de contradição, textos, evidências roteirizadas) | scenario_bound → movido para `ScenarioFixture` | |
| `ScenarioFixture` em si | experimental_only | Não é schema canônico nem API pública; prematuro como Ontologia |
| `StorageAdapter` (load/save) | reusable_as_is | Boundary já era correto no Stage 3; implementação (`localStorage`) ficou fora |
| Mensagens de guard/explicação em português dentro da máquina | experimental_only | Explicações de transição inválida são domínio, mas localização/tradução é preocupação futura registrada |

## Decisão sobre Interface State

**Dividida.** O componente *stale context* (`stale_view` + guard de ações
sensíveis + `PROJECT_RESUMED`/refresh) **é domínio**: implementa
`Derived Status != Canonical Decision` e permanece representável e testável sem
browser (`context.stale`). A navegação de views (`ViewId`, `idle`/`busy`/`error`)
**é apresentação** e ficou fora do domínio extraído. Consequência de contrato:
o produto futuro precisará mapear stale context de domínio ↔ estado de interface,
o que já era a relação implícita no Stage 3.

## Resultados por dimensão

- **Browser independence:** nenhuma referência a `window`, `document`,
  `HTMLElement`, `localStorage`, `sessionStorage`, `navigator`, eventos DOM,
  CSS ou HTML em `src/`; verificado por teste de varredura **e** por compilar
  sem a lib DOM. Nenhuma boundary experimental adicional foi necessária — o
  acoplamento de browser do Stage 3 já estava confinado a `src/app/`.
- **Scenario independence:** o segundo fixture (Estufa Vertical — 2 perguntas,
  1 suposição, 6 passos, mesma *forma* de jornada, conteúdo distinto) executa o
  ciclo completo idea→accept com a mesma máquina; teste de varredura confirma
  que nenhum conteúdo da oficina vazou para máquina/commands/events/types/memory.
- **State machine:** 10 famílias separadas; aprovação não inicia execução;
  conclusão não aceita resultado; executor não revisa o próprio resultado;
  retry exige failed; as 10 transições inválidas da diretiva original continuam
  rejeitadas com explicação — agora testadas **nos dois fixtures**.
- **Project Memory:** derivada somente de domain state + event history
  (teste adicional prova derivação idêntica após round-trip JSON do estado —
  sem objeto vivo, sem DOM, sem strings de interface). Continua sendo derived
  view; candidato canônico segue sendo a futura slice "Canonical Project
  Memory Adapter" (E54).
- **Persistence boundary:** interface experimental `StorageAdapter` +
  adapter in-memory; snapshot versionado e invalidável; teste prova que
  snapshot de um fixture nunca restaura sob outro. O domínio não conhece o
  mecanismo de persistência.
- **Deterministic replay:** duas execuções idênticas produzem estados
  deep-equal (não só nomes de eventos), nos dois fixtures.

## Comparação Stage 3 × domínio extraído

- **Behavior parity:** transições, guards, rejeições e consequências idênticas;
  as diferenças são as registradas (contexto vs ui; defaults de texto vindo do
  fixture). Nenhum teste do Stage 3 precisou ser enfraquecido.
- **Coupling removido:** fixture como import; UI dentro do estado; tipos DOM
  disponíveis ao domínio.
- **Código duplicado:** ~1.100 linhas de domínio copiadas (custo aceito da
  feasibility para não tocar o Stage 3); os dois conjuntos podem divergir — por
  isso um dos dois deve ser declarado especificação de referência na decisão
  de Option C (ver E52).
- **Testes:** 43 originais preservados e verdes; 74 novos executados (as suítes
  de domínio foram adaptadas e parametrizadas pelos dois fixtures; suítes de
  bundle/HTML não se aplicam ao domínio sem UI).
- **Custo de extração real:** 1 sessão, 0 redesigns materiais, 2 correções
  triviais (guard de null no driver de teste; comentário que colidia com o
  scan de padrões).

## Limitações (o que esta feasibility NÃO prova)

- Não prova concorrência, multiusuário, rede ou escala — tudo continua um
  processo síncrono único (o gap nomeado em E51/E54 §1 sobre "sobreviver fora
  de um processo síncrono único" foi respondido para *browser/cenário*, não
  para *concorrência* — isso exigiria infraestrutura fora do stopping rule).
- Não prova Project Memory canônica em Markdown/YAML (slice 3 de E54).
- Não implementa identidade, autorização real ou motor de execução.
- Não é validação de produto nem evidência de usuário.
- As mensagens de explicação em pt-BR dentro da máquina são um acoplamento de
  localização registrado, não resolvido.

## Recomendação de reuso (research recommendation, não autorização)

Prosseguir com a trilha Option C sobre esta base **como referência**, não como
pacote canônico: o Council pode agora decidir com evidência que o custo de
extração é baixo e o comportamento sobrevive. Próxima slice da sequência
(Identity and Authority Model) não depende deste código. A duplicação
Stage 3 × extração deve ser resolvida na decisão de arquitetura de produto
(E52/E54 slice 6), não agora.

## Referências

`experiments/clite-domain-extraction-feasibility/` (código e README);
`experiments/clite-stage3-vertical-slice/` (original, intacto);
`ARP-0009-E51`, `E52`, `E53`, `E54`; Council Decision "C-lite Domain
Extraction Feasibility" (via CSA, 2026-07-23); `foundation/bootstrap/EXECUTION_CONTRACT.md`.

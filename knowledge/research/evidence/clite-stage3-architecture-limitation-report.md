---
schema_version: 0.1.0-experimental
id: ARP-0009-E48
kind: knowledge
knowledge_type: research_evidence
title: C-lite Stage 3 Architecture and Limitation Report
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E44
  - type: related_to
    target: ARP-0009-E45
  - type: related_to
    target: ARP-0009-E46
  - type: related_to
    target: ARP-0009-E47
---

# C-lite Stage 3 Architecture and Limitation Report

## Natureza

Relatório da implementação experimental do vertical slice autorizado pelo Conselho após `4e9ec43`. O slice vive em `experiments/clite-stage3-vertical-slice/` e é descartável: seu valor é o aprendizado e os contratos exercitados, não o código.

```text
Experimental implementation != Product != Production architecture != Frontend
```

## Technology preflight (registro da decisão)

Inspeção: o repositório era documental puro (nenhum package.json, toolchain ou convenção de código preexistente). Máquina: Node.js 24.16.0, npm 11.13.0.

Menor combinação compatível selecionada:

| Decisão | Escolha | Rationale |
|---|---|---|
| Linguagem | TypeScript strict | preferência da diretiva; contratos tipados |
| Runtime deps | **0** | plataforma web nativa é suficiente |
| Dev deps | typescript, esbuild, @types/node (somente tipos) | typecheck + bundle único; abaixo do limite de 2 deps diretas de runtime (que é zero) |
| Entrega | `dist/app.js` (IIFE) + `index.html` via `file://` | zero servidor, zero rede; CSP bloqueia recursos externos |
| Testes | `node --test` nativo (type stripping do Node 24) | nenhuma dependência de teste |
| Lint | não configurado | decisão consciente: slice descartável; typecheck strict + testes cobrem o risco |
| Fixture | módulo TypeScript tipado (`src/domain/fixture.ts`) | **desvio declarado de E44/E46**: YAML canônico exigiria parser em runtime; o módulo TS é versionado, tipado e validado por teste; o alinhamento semântico com E29 (Markdown/YAML) permanece documentado |

Nenhuma stopping rule foi atingida: 0 dependências de runtime, sem backend, sem rede, Option D viável, 6 views, escopo preservado.

## Arquitetura implementada (Option D aprovada)

```text
fixture.ts (canônico sintético, versionado, F-01 corrigido)
    ↓ initialState()
domain: commands.ts → events.ts → machine.ts (guards) → types.ts
    ↓ deriveMemory()          ↓ log determinístico
app: views.ts (6 views, DOM via textContent) + main.ts (bootstrap/foco/anúncios)
    ↕ persistence.ts (snapshot local opcional, versionado, descartável)
```

- Domínio 100% independente da camada visual (testado sem navegador).
- 10 famílias de estado separadas; nenhum status universal.
- 34 tipos de evento; 14 commands; command rejeitado não emite evento e explica o motivo.
- Autoridade com consequência via guards (executor não decide o próprio resultado; aprovar não inicia; stale view bloqueia ações sensíveis) — **representação, não enforcement**, com boundary textual permanente no header e na superfície de aprovação.

## Verificação executada (real, sem invenção)

| Check | Comando | Resultado |
|---|---|---|
| Typecheck | `npx tsc --noEmit` (strict) | **passou** |
| Build | `npm run build` (esbuild → dist/app.js, 75 kb) | **passou** |
| Testes | `node --test "tests/*.test.ts"` | **43/43 passaram** (9 suítes) |
| Lint | — | **não executado** (não configurado; decisão registrada) |

Cobertura dos testes: ciclo completo válido; separação aprovação/fila/início; efeito observável de input (F-04); falha/retry com preservação (F-03); cancel/denial/lineage de plano; determinismo (duas execuções idênticas); as 10 transições inválidas da diretiva + 3 extras (autoautorização, ideia vazia, input fora das opções); validação de fixture (termos proibidos F-01 com fronteira de palavra, padrões de dados pessoais, claim por evidência); consequências executáveis de accept/revise/reject; derivação da Memory (sem paths de repositório, sem IDs internos); snapshot com invalidação por versão e corrupção; reset determinístico; varredura de fronteira em `src/` e em `dist/app.js` (sem URLs externas, fetch/XHR/WebSocket/sendBeacon, eval/new Function, innerHTML); estrutura semântica do `index.html` (lang, CSP com `connect-src 'none'`, landmarks, skip link, live regions, boundary visível).

## Accessibility technical baseline — o que foi feito e o que não foi

Implementado: HTML semântico (landmarks, headings, labels, tabelas com caption/scope); skip link; foco visível (`:focus-visible` com outline de 3px); foco previsível (main recebe foco após cada transição); erros anunciados via `role="alert"` com associação textual; status via `aria-live="polite"`; estados comunicados por texto, nunca só por cor; controles nativos (button/form/textarea); reflow linear com tabelas em contêiner rolável; `prefers-reduced-motion` respeitado (não há motion); zoom herdado do navegador (unidades relativas).

**Não executado (limitação honesta):** operação empírica por teclado em navegador real, medição de zoom/reflow e verificação com screen reader. O executor desta slice é um agente de linha de comando sem capacidade de operar navegador ou tecnologia assistiva e observar o resultado; a autorização de AT check permanece disponível para um operador humano em sessão futura. A verificação de acessibilidade aqui é estrutural/estática (código + testes de estrutura), não evidência empírica.

```text
Automated Check != Manual Technical Check != AT Check != User Evidence != Conformance
```

Nenhum claim WCAG é emitido.

## Security boundary — verificado

Zero chamadas externas em runtime (CSP `default-src 'self'; connect-src 'none'` + varredura de fonte e bundle); zero secrets; zero dados pessoais (teste de padrões); zero HTML não confiável (proibição de innerHTML testada); zero execução dinâmica; conteúdo 100% sintético; snapshot removível com invalidação por versão; nenhuma aparência de segurança (sem cadeados/ícones; linguagem "representa/demonstra"). ARP-0007 não foi modificado.

## Mapeamento para exit criteria (E47)

| Exit criterion | Estado |
|---|---|
| 1. executável localmente sem rede | atendido (file:// + CSP) |
| 2. deterministic reset | atendido e testado |
| 3. jornadas requeridas representadas | atendido (J1–J6; 6 views/8 famílias) |
| 4. transições requeridas funcionam | atendido (testes) |
| 5. inválidas rejeitadas com explicação | atendido (13 testes) |
| 6. artifact/evidence separados | atendido (modelo, UI e teste) |
| 7. failure/recovery com preservação | atendido (testes) |
| 8. Memory update e return | atendido (derivação + snapshot + stale view) |
| 9. zero chamadas externas | atendido (CSP + varredura) |
| 10. technical checks executados | atendido (typecheck, build, 43 testes) — exceto empíricos de acessibilidade |
| 11. limitações registradas | este relatório |
| 12. nenhuma claim de produção | atendido (boundaries em código, UI e docs) |
| 13. recomendação de Stage 4 | ver IHR-0024 §11 |

## Findings da implementação

- **IMPL-01 (observation):** a implementação confirmou a viabilidade integral da state machine de E45 — nenhuma família precisou ser fundida ou redefinida; o produto não foi redefinido.
- **IMPL-02 (minor):** o retorno pós-reload aterrissa na view de Memória em `stale_view`; o refresh é um clique. Se o usuário navegar sem refresh, ações sensíveis são bloqueadas com explicação — comportamento desejado, mas a fricção real só será medida com usuários.
- **IMPL-03 (minor):** `paused` existe no domínio e na UI, mas o roteiro determinístico não força uma pausa; o caminho é alcançável apenas por iniciativa do usuário.
- **IMPL-04 (observation):** representar "avançar cenário" como botão explícito torna a simulação honesta, porém menos parecida com trabalho de longa duração real; um timer roteirizado opcional ficou fora por decisão de acessibilidade/determinismo.
- **IMPL-05 (observation):** o teste de termos proibidos precisou distinguir literais renderizáveis de placeholders de interpolação — detalhe registrado para a regra de conteúdo de futuras versões.

## Limitações conhecidas

1. Nenhuma evidência empírica de navegador/teclado/AT/usuário — ver acima.
2. Um único cenário (Oficina Horizonte); generalização não demonstrada (risco de overfitting aceito em E47).
3. Snapshot em localStorage acopla o retorno ao mesmo navegador/perfil — aceitável no escopo single-user local.
4. O event log cresce sem paginação; irrelevante no volume do cenário.
5. Contratos de `src/domain/` são experimentais e não podem ser promovidos sem decisão (marcados no código).
6. `implementation_state` do ARP-0009 permanece `not_started` por ausência de valor taxonômico para implementação experimental — decisão de taxonomia solicitada ao Conselho (IHR-0024 §10).

## Rollback

Reversão integral por `git revert` dos commits da slice; nenhuma migração, nenhum artifact canônico alterado, nenhum estado fora do diretório `experiments/` (exceto ARP/IHR documentais). `node_modules/` e `dist/` não são rastreados.

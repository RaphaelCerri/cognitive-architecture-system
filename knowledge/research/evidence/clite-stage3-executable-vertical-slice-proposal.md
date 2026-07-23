---
schema_version: 0.1.0-experimental
id: ARP-0009-E44
kind: knowledge
knowledge_type: research_evidence
title: C-lite Stage 3 Executable Vertical Slice Proposal
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E43
  - type: related_to
    target: ARP-0009-E42
  - type: related_to
    target: ARP-0009-E30
---

# C-lite Stage 3 Executable Vertical Slice Proposal

## Natureza e limites

**[Decisão]** Proposta documental `1.0-proposal` do menor vertical slice executável do C-lite, autorizada pelo Conselho após o checkpoint `5fca035ed519e0d3f1fd15e4e9d562ba9b2ca9dc`. Fontes internas: E29–E31 (protótipo 1.0 e packs), E33 (protocolo), E41–E43 (pré-avaliação interna). Nenhuma fonte externa foi consultada; nenhum código, package, framework ou teste foi criado ou executado.

```text
Stage 3 Proposal
!= Stage 3 Authorization
!= Implementation
!= Production Architecture
!= Product Frontend
```

Pergunta principal:

> Qual é o menor sistema local e executável capaz de representar um ciclo governado de ideia até revisão, preservando estados, autoridade, failure/recovery, artifact, evidence e Project Memory, sem criar arquitetura de produção prematuramente?

## Objetivo

Transformar as principais hipóteses documentais do C-lite em comportamento técnico observável e testável: transições de estado reais, autoridade representada com consequência, falha com preservação e recovery operante, artifact/evidence como modelos distintos e Project Memory que sobrevive ao retorno. O slice existe para **aprender**, não para entregar produto; seu valor é responder às perguntas que somente implementação revela (E43, pergunta 9).

## Escopo candidato (baseline aceita)

Local-only; single user; dados 100% sintéticos (conteúdo derivado de E29); comportamento determinístico; sem backend remoto, autenticação real, execução real de agentes, ferramentas externas, APIs externas, dados pessoais, deploy público, analytics, claims de segurança ou de conformidade de acessibilidade.

## Jornada mínima e cobertura

O slice cobre o ciclo integral:

```text
Idea → Discovery → Assumption Review → Project Context → Plan → Authorization
→ Queued → Running → Awaiting Input → Failure → Recovery → Completed
→ Artifact → Evidence → Accept / Revise / Reject → Project Memory → Return
```

**Passos representáveis como estado, não como superfície independente:**

| Passo | Tratamento candidato |
|---|---|
| Assumption Review | modo/substate da superfície de Discovery (ver F-05) |
| Queued / Running / Awaiting Input / Failed / Retry / Cancelled / Completed | estados de **uma** superfície de Execução, não sete superfícies |
| Evidence | seção da superfície de revisão de Artifact, com modelo de dados próprio |
| Project Context | seção da superfície de Understanding, versionada |
| Return | estado de entrada (projeto existente) da superfície inicial, não superfície nova |

Isso reduz superfícies sem reduzir estados — os estados permanecem distintos no modelo e observáveis na interface.

## Executable versus simulated

| Comportamento | Executável no slice | Simulado/fixture |
|---|---|---|
| Transições de estado (todas as famílias) | ✔ state machine real | — |
| Rejeição de transições inválidas | ✔ guards reais | — |
| Registro de eventos e histórico | ✔ event log determinístico | — |
| Autoridade (proposta→aprovação→fila→início→aceitação separados) | ✔ consequências reais no fluxo | enforcement de acesso: **não** (boundary declarada) |
| Requested input com efeito observável | ✔ (resolve F-04) | conteúdo da pendência vem de fixture |
| Falha, preservação e recovery | ✔ retry/cancel/input/scope-revision operantes | causa da falha é roteirizada (fixture) |
| Artifact e evidence | ✔ modelos distintos, revisão com consequência | conteúdo do relatório e das fontes é sintético |
| Project Memory e return | ✔ atualização e reconstrução reais | — |
| Pesquisa em si (atividades, fontes, achados) | — | ✔ passos roteirizados do cenário E29 |
| Agente de IA, rede, tempo real | — | ✔ representados; nunca reais |

## Tratamento do F-01 (determinação do Conselho)

O protótipo 1.0 permanece congelado com F-01 documentado; a correção ocorre **no conteúdo do vertical slice**.

| Campo | Definição candidata |
|---|---|
| Interface label recomendado | **"Responsável pela pesquisa"** |
| Alternativas avaliadas | "Agente de pesquisa" — rejeitada como label primário: "agente" sugere execução real de IA, risco de capability overclaim num slice onde a execução é simulada. "Executor da pesquisa" — aceitável como segunda opção; mais rígido e menos natural em pt-BR. |
| Rationale | linguagem plana de papel funcional, compreensível sem vocabulário institucional; descreve responsabilidade, não identidade de runtime; coerente com os demais labels do cenário ("Quem decide", "Proprietária") |
| Label interno | `research_executor` (ID de papel em contratos e fixtures; nunca renderizado) |
| Impacto em conteúdo | substitui `CEA simulado` em toda superfície derivada de SV-09/E29; demais textos inalterados |
| Impacto em contracts | campo `actor_role` nos contratos de Authorization/Execution usa o ID interno; a camada de apresentação traduz para o label |
| Impacto em accessibility | label plano melhora compreensão sem contexto; nenhum impacto negativo |
| Impacto em provenance | fixtures do slice registram que o conteúdo deriva de E29 com a substituição F-01 documentada |
| Risco de ontology leakage | mitigado por regra de conteúdo: `CEA`, `Codex`, `Agent Blueprint`, `ARP`, `IHR`, `Ontologia` e afins são proibidos em qualquer string renderizável; teste automático de conteúdo proposto em E47 |

```text
Interface Label != Internal Role ID != Runtime Identity != Authority
```

A escolha final do label é decisão de entrada do Stage 3 (E47, entry criteria); esta é a recomendação justificada.

## Tratamento dos findings menores

### F-02 — recoveries descritos versus navegáveis

| Recovery path | Tratamento no slice |
|---|---|
| Retry | **executável** (transição completa, ver F-03) |
| Provide input | **executável** (RI-01, ver F-04) |
| Cancel | **executável** (terminal com histórico preservado) |
| Revise scope | **executável em forma mínima**: remove a claim dependente do artifact e registra a redução — deterministicamente viável |
| Use alternative source | representado **desabilitado com explicação** ("requer nova autorização de fonte") — emite entrada de histórico, não transição |
| Escalate | representado **desabilitado com explicação** ("requer decisão de autoridade") — idem |

Critério: executável quando o efeito é interno ao ciclo autorizado; documental quando exigiria nova autoridade ou fonte — exatamente a semântica que o protótipo já comunica.

### F-03 — retry explícito

Transição tecnicamente explícita e observável:

```text
Failed → RETRY_REQUESTED → Queued → Running → Completed | Failed
```

Cada passo emite evento próprio e é visível na superfície de Execução; o caminho retry→completed direto do protótipo desaparece.

### F-04 — efeito observável do requested input

Após `INPUT_PROVIDED`, o slice exibe obrigatoriamente: confirmação de input recebido (com o valor escolhido); evento `EXECUTION_RESUMED`; transição de estado visível (awaiting_input → running); atualização da atividade corrente; atualização de "última atualização" (tick determinístico do cenário, não relógio real); e entrada preservada no histórico.

### F-05 — inspeção de assumption e resolução de contradição

Tratamento candidato: **uma única view de Discovery com dois modos explícitos** — `inspecting` (lista de assumptions com origem/confiança/impacto) e `resolving_conflict` (contradição com interpretações numeradas). Os modos são substates da família Discovery, com heading, título e estado visível próprios. Não cria superfície nova; o total de superfícies não aumenta.

## Long-running work simulation

Mecanismo recomendado: **fixture-based scenario steps com avanço determinístico por evento**. O cenário E29 é decomposto em passos ordenados (checkpoints, atividades, notas, falha F-01 do cenário, retry, conclusão); cada `ADVANCE_SCENARIO` — acionado por interação explícita, nunca por timer — move a execução ao próximo passo roteirizado.

| Alternativa | Avaliação |
|---|---|
| Deterministic manual transitions | ✔ base do mecanismo recomendado |
| Scripted timer | rejeitado como padrão: introduz tempo real, dificulta teste e acessibilidade; aceitável como opção demonstrativa desligável |
| Event-driven local simulator | ✔ combinado: os passos emitem eventos no mesmo barramento das ações do usuário |
| Fixture-based scenario steps | ✔ fonte única do roteiro |

Proibidos: progresso aleatório, percentual inventado, nondeterminismo, qualquer aparência de execução real de IA.

## Authority representation

Cada ação sensível carrega: `proposed_action`, `actor` (role ID + label), `required_authority`, `approval_state`, transições permitidas e negadas (com razão), entrada de auditoria e explicação em linguagem plana. A separação proposta→aprovação→fila→início→aceitação é imposta pela state machine (guards), tornando a autoridade **consequente** sem ser **enforcement**.

Boundary obrigatória, exibida na interface:

> A implementação experimental demonstra fluxo e compreensão. Não aplica controle de acesso real.

## Failure and recovery

O slice possui: trabalho parcial preservado (notas/output do fixture), evidence parcial, failure reason explícita, retry, alternative source (documental), scope revision (executável mínima), cancel e retorno à decisão. Paths executáveis conforme F-02 acima. Preservação é testável: nenhum recovery apaga histórico, notas ou evidence.

## Review outcomes (efeitos executáveis)

| Outcome | Efeitos |
|---|---|
| **Accept** | Decision criada (ator/razão/escopo); artifact → `accepted`; Memory atualizada; próxima ação limitada exibida ("nenhuma nova execução sem nova proposta") |
| **Request Revision** | comentário + seção afetada registrados; novo pending work criado; artifact preservado em `revision_requested` com lineage; Memory atualizada |
| **Reject** | razão registrada; artifact → `rejected`; evidence e histórico preservados; próximas ações possíveis exibidas (revisar plano / encerrar) |

## UI boundary

As oito famílias SF-01–08 permanecem o vocabulário de superfícies, com consolidações candidatas: SF-06 vira **uma** superfície de Execução com estados (7 variantes → 1 view com substates); SF-01/SF-02 podem compartilhar a view de entrada (idle vs editing). Resultado candidato: **6 views** cobrindo as 8 famílias, sem perda de estados.

Por superfície, a proposta define somente: responsabilidades de informação, de interação, de estado, de acessibilidade e boundaries de autoridade (detalhado por família em E45/E46). **Nenhum Design System, branding ou direção visual é autorizado** — tratamento neutro estrutural, como no protótipo.

## Observability proposal (somente local)

Visible state por família; event history navegável; log determinístico (sequência de eventos com payloads); informação de erro; última transição; ator corrente; autoridade corrente; pending action corrente. **Sem analytics, telemetry ou rede.** O event log é a principal ferramenta de aprendizado do slice — ele materializa a distinção Displayed State != Runtime State.

## Stage 3 deliverables candidate

Pacote futuro mínimo (quantidades candidatas, a congelar nos entry criteria):

1. executable local vertical slice;
2. synthetic scenario fixtures (derivados de E29 com F-01 corrigido);
3. state/event contracts (versão executável dos candidatos de E45);
4. automated technical tests (E47);
5. accessibility technical review (métodos de E46);
6. architecture and limitation report;
7. IHR.

Orçamento realista candidato: **máximo 30 arquivos rastreados, máximo 5 commits, timebox de 3 sessões de trabalho** — sujeito a aprovação do Conselho nos entry criteria (E47).

## Bootstrap portability note

Registro, sem criação de arquivos: iniciativa futura **Agent-Agnostic Project Bootstrap and Context Portability**, com candidatos `AGENT_START_HERE.md`, `PROJECT_CHARTER.md`, `PROJECT_STATUS.yaml`, `REPOSITORY_MAP.yaml`, `EXECUTION_CONTRACT.md`, `RETURN_SCHEMA.yaml` e `CONTEXT_MANIFEST` por slice. Nenhum desses artifacts é criado ou modificado nesta slice; a iniciativa requer decisão própria do Conselho.

## Project boundary

Protótipo 1.0, E29–E31 e demais artifacts permanecem inalterados. Esta proposta não autoriza implementação; a autorização de Stage 3 é decisão separada condicionada aos entry criteria de E47.

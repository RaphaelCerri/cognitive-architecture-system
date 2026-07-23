---
schema_version: 0.1.0-experimental
id: ARP-0009-E33
kind: knowledge
knowledge_type: research_evidence
title: C-lite Evaluation Protocol
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: evaluates
    target: ARP-0009-E30
  - type: refines
    target: ARP-0009-E32
---

# C-lite Evaluation Protocol

## Natureza, sources and authority

Proposta documental `1.0-proposal` para futura avaliação formativa do protótipo C-lite `1.0`. Fontes internas: Council Decision após `c0fec73`; ARP-0009-E21–E32, especialmente PQ/HP de E25, participant/method plan E27, prototype E30, annotations E31 e draft E32. Nenhuma fonte externa, pessoa, sessão, review ou dado foi consultado nesta slice.

```text
Evaluation Proposal
!= Evaluation Execution
!= User Research Result
!= Product Validation
!= Accessibility Conformance
!= Stage 3 Authorization
```

O Conselho aprova/revisa/rejeita esta proposta. Aprovação documental não satisfaz os entry criteria nem autoriza recrutamento ou execução.

## Objective and scope

Pergunta principal:

> Existe um protocolo suficientemente seguro, ético, limitado e rastreável para avaliar o protótipo C-lite sem transformar observações locais em claims universais?

Objetivo futuro: observar compreensão e navegação do propósito, ideia incompleta, discovery, assumptions, contradição, plano, autoridade, estados, progresso desconhecido, requested input, falha/recovery, artifact/evidence, review outcomes, Project Memory, return, terminologia e acessibilidade conceitual.

Fora da avaliação: performance, enforcement de segurança/autorização, persistência, API/backend, browser compatibility geral, interoperabilidade real com tecnologia assistiva sem autorização específica, arquitetura executável, código e produção.

## Candidate claims and traceability

Claims são perguntas testáveis, não resultados.

| Claim | Source / requirement / PQ | Task | Method / future evidence | Limitation / decision affected |
|---|---|---|---|---|
| EC-01 ideia incompleta é entrada válida e propósito/limites são compreendidos | E25; CL-UN-01/02; PQ-01/02 | T-01 | moderated task + comprehension; first action/explanation | Markdown/briefing priming; revise entry or proceed |
| EC-02 perguntas, unknowns, assumptions e contradições são distinguíveis/corrigíveis | E25/E31; CL-PN-01/02; PQ-03–05 | T-02–04 | task + probe; path, explanation, correction impact | scenario learning; revise content/discovery |
| EC-03 entendimento, plano, autorização, execução e aceitação permanecem distintos | E22/E31; CL-GOV-01/02/04; PQ-06–09/16 | T-05–08/T-15 | task + authority walkthrough; actor/effect account | no enforcement proof; blocker or revise |
| EC-04 queued/running/awaiting input e progresso desconhecido são compreendidos | E22/E30; CL-UN-03/PN-03; PQ-09–12 | T-09/10 | task + probe; state/activity/unknown interpretation | no runtime timing; revise state language |
| EC-05 falha, preservação e opções de recovery são compreendidas | E22/E30; CL-PN-04/GOV-03; PQ-13/14 | T-11/12 | recovery task; selected option/rationale/effect | deterministic branch; revise recovery |
| EC-06 artifact, evidence, claim, freshness e limitation são distinguíveis | E24/E31; CL-EVAL-01/02; PQ-11/15 | T-13/14 | findability/comprehension; located evidence and explanation | synthetic evidence; blocker or revise grouping |
| EC-07 accept/revise/reject têm autoridade e consequências compreensíveis | E22/E31; CL-GOV-04; PQ-16 | T-15 | decision task; predicted consequence | no actual decision; revise outcomes |
| EC-08 Memory e return permitem reconstruir estado, mudanças e pendência | E22/E30; CL-PN-05/UN-04; PQ-17/18 | T-16–18 | return task + first-click when valid; account/path | seeded return and order effects; revise Memory |
| EC-09 labels/cues suportam caminho conceitual sem ontology, color ou motion dependency e sem capability overclaim | E23/E31; CL-AX-01/02/03, CL-SEC-01; PQ-19/20 | all + specialist review | content/accessibility/security review; cue/barrier/misattribution notes | not conformance, AT or enforcement evidence; stop/revise |

HP-01–09 remain hypotheses. Evidence may support, contradict or leave each unresolved; no claim is accepted by task completion alone.

### Explicit PQ and HP coverage

| Claim | Prototype questions |
|---|---|
| EC-01 | PQ-01, PQ-02 |
| EC-02 | PQ-03, PQ-04, PQ-05 |
| EC-03 | PQ-06, PQ-07, PQ-08, PQ-09, PQ-16 |
| EC-04 | PQ-09, PQ-10, PQ-11, PQ-12 |
| EC-05 | PQ-13, PQ-14 |
| EC-06 | PQ-11, PQ-15 |
| EC-07 | PQ-16 |
| EC-08 | PQ-17, PQ-18 |
| EC-09 | PQ-19, PQ-20 |

| Hypothesis | Evaluation treatment |
|---|---|
| HP-01 | EC-01/T-01 task-entry comprehension |
| HP-02 | EC-08/T-16–18 persistent context and return |
| HP-03 | EC-02/T-03 assumption correction |
| HP-04 | EC-03/T-08 structured authority |
| HP-05 | EC-04/T-09 unknown progress and state |
| HP-06 | EC-06/T-13/14 artifact/evidence distinction |
| HP-07 | EC-08/T-17 pending decision on return |
| HP-08 | EC-01/02/09 terminology across tasks |
| HP-09 | EC-08/T-16–18 relation list without graph |

Coverage only assigns future methods; it does not answer any PQ or validate any HP.

## Methods

| Method | Scope | Output | Boundary |
|---|---|---|---|
| moderated task evaluation | T-01–18, six journeys | actions, explanations, assistance, completion/blockage | small formative sample, no population estimate |
| neutral comprehension probes | terminology, authority, states, evidence, consequences | participant interpretation after action | statements are contextual, not runtime behavior |
| cognitive walkthrough | learnability, discoverability, feedback, recovery | specialist observations/findings | expert model, not user evidence |
| first-click analysis | T-01/T-06/T-14/T-16/T-17 only if renderer makes target/action unambiguous | first selected destination with rationale | not full IA metric or aggregate score |
| expert reviews | content, UX, accessibility, security/authority, architecture | scoped finding records | no certification, conformance or implementation claim |

No method is executed by this document.

## Task protocol

Allowed assistance levels: `A0 none`, `A1 repeat neutral wording`, `A2 clarify prototype mechanics without naming target`, `A3 direct help`. A3 completes the learning opportunity but marks the task `completed_with_help`; safety clarification may occur at any time and is recorded.

| Task | Objective / starting state | Instructions and neutral wording | Completion / failure | Observations and evidence captured |
|---|---|---|---|---|
| T-01 | start an incomplete idea; SV-01 | “Comece o projeto usando a ideia fornecida.” | reaches submitted idea / cannot locate entry or believes completeness required | first action, purpose/limits account, assistance; PQ-01/02 |
| T-02 | answer discovery; SV-03 | “Continue até conseguir explicar por que essa pergunta aparece.” | records answer/unknown and rationale / invented answer or rationale unavailable | path, unknown use, explanation; PQ-03/04 |
| T-03 | identify/correct assumption; SV-04 | “Encontre uma interpretação que possa estar incorreta e corrija-a.” | correction and impact located / assumption treated as fact or change hidden | before/after account, impact; PQ-04/05 |
| T-04 | resolve contradiction; SV-04 | “Trate o conflito entre quem usa e quem atualiza.” | chooses/defer with rationale / conflict missed or dependent claim proceeds silently | chosen interpretation, rationale, blocker awareness; PQ-05 |
| T-05 | review understanding; SV-06 | “Explique o que está no escopo, fora e ainda desconhecido.” | distinguishes three sets / reviewed interpreted as complete truth | located fields, explanation; PQ-04/06 |
| T-06 | review plan; SV-07 | “Revise o que está sendo proposto antes de qualquer pesquisa.” | finds objective/output/risk/limit / plan confused with running work | first target, scope/effect account; PQ-06/07 |
| T-07 | request plan change; SV-07 | “Peça que estoque e pagamento fiquem explicitamente fora.” | reaches revision with version/history effect / believes prior plan overwritten | route, comment target, consequence; PQ-06 |
| T-08 | authorize research; SV-09 | “Decida sobre a proposta e explique quem pode executar o quê.” | authorization separated from queue/start / actor, scope or expiry misunderstood | decision path, actor/effect account; PQ-07–09 |
| T-09 | interpret queued/running; SV-12 then SV-13 | “Compare os dois estados e diga o que está acontecendo.” | distinguishes state/activity and unknown progress / invents percent or treats queued as running | state language, progress inference; PQ-09–11 |
| T-10 | answer requested input; SV-14 | “Responda à pendência sem ampliar o escopo.” | explains need/impact/next and selects allowed option / generic request or unsafe widening | choice, rationale, responder/effect; PQ-12 |
| T-11 | interpret failure; SV-16 | “Explique o que falhou e o que foi preservado.” | names unavailable source, limitation and preserved work / assumes total loss or silent success | explanation, located evidence; PQ-13/14 |
| T-12 | select recovery; SV-16 | “Escolha uma recuperação e explique o impacto.” | selects allowed option with authority/effect / unsafe retry or impact absent | option, rationale, preservation; PQ-14 |
| T-13 | review artifact; SV-20 | “Revise o resultado principal e suas limitações.” | identifies version/status/finding/limit / equates completion with acceptance | located fields, account; PQ-15/16 |
| T-14 | find evidence; SV-20 | “Mostre o que sustenta a claim e o que não pode sustentá-la.” | links evidence/claim/freshness/limit / artifact conflated or unavailable source trusted | first target, explanation; PQ-11/15 |
| T-15 | choose outcome; SV-20 | “Compare aceitar, pedir revisão e rejeitar; escolha uma opção.” | predicts actor/effect/history / outcomes conflated or reject means deletion | choice, consequence, authority; PQ-16 |
| T-16 | return later; reset then SV-24 | “Imagine que voltou depois. Descubra o estado atual.” | reconstructs current state / relies on moderator or repository paths | route, status account; PQ-17 |
| T-17 | locate pending item; SV-24 | “Encontre o que ainda precisa de decisão.” | locates identity/review pendency / chooses stale or unauthorized action | first target, pending explanation; PQ-17/18 |
| T-18 | reconstruct changes; SV-24 | “Explique o que mudou desde a ideia inicial e de onde veio.” | names correction/exclusions/provenance / Memory treated as folder or unsupported truth | change/provenance account; PQ-18 |

PQ-19 is assessed across the critical path only after renderer gating and explicit accessibility-review authorization. PQ-20 is assessed from textual/structural cues across T-02–18. Neither proves runtime accessibility.

## Task order

Default is deterministic and sequential T-01–15 because the object represents a governed cycle. T-16–18 begin after a declared reset/return break. Within the future eight-session ceiling, if at least four sessions are authorized, alternate the order of outcome explanations in T-15 and evidence/artifact inspection in T-13/14; do not reorder authority before plan or failure before running.

Record session order/version and every branch. Stop rather than improvise a missing state. Risks: learning, fatigue, priming, moderator influence and branch inconsistency. A 60-minute maximum makes omission preferable to rushing; omitted tasks are missing evidence, never failure.

## Moderator protocol

1. Confirm approved consent procedure before any task.
2. Introduce purpose, voluntary nature, duration, prototype simulation and prohibition on real data.
3. State: “Estamos avaliando a representação, não você.”
4. Invite think-aloud without requiring continuous speech.
5. Read the task wording verbatim; use A0–A3 assistance rules.
6. Ask probes only after the relevant action unless safety requires intervention.
7. Never call simulated capability, authorization, agent, evidence or state real.
8. Record deviation, interruption, confusion, distress, withdrawal and technical issue.
9. Apply stopping rules immediately.
10. Debrief: restate simulation, ask overclaim/access questions and explain approved data handling/contact.

No legal script or consent collection is produced/executed here.

## Neutral probes

- “O que você acredita que acontecerá agora?”
- “Quem você entende que pode autorizar esta ação?”
- “Como você descreveria o estado atual?”
- “O que esta evidência sustenta?”
- “O que aconteceria se você escolhesse esta opção?”
- “O que permanece pendente?”
- “Onde você procuraria para retomar o projeto?”
- “O que parece real aqui e o que parece apenas representado?”

Avoid “Você percebeu...?”, naming the target, confirming correctness during the task or asking for aesthetic preference.

## Success, failure and blockers

Success observations: purpose/limits explained; intended action located; assumption corrected; contradiction/authority/states/unknown progress/evidence/recovery/outcomes/return correctly described. They are qualitative observations, not scores.

Failure observations: real-operation belief; approval=start; executor=approver; queued=running; unknown progress=stuck; evidence=artifact; failure without perceived recovery; reject=deletion; Memory=directory; ontology blocks task; visible control=enforcement.

Non-compensable blockers:

- authorization without comprehension or apparent execution before approval;
- material authority ambiguity;
- primary cycle impossible;
- evidence/limitation unavailable;
- failure without recovery;
- critical keyboard barrier in the approved renderer;
- sensitive information exposure;
- false runtime/security claim;
- invalid consent/privacy process.

## Stopping rules

Stop a future session for withdrawal, distress, sensitive/real data, invalid consent, unaccommodated barrier, renderer failure, version mismatch, protocol drift, critical authority/accessibility flaw or privacy incident. Stop the evaluation program for evidence-capture failure, scenario inconsistency, budget breach or sufficient decision evidence already collected.

Stopping preserves authorized notes according to the approved privacy plan unless withdrawal terms require deletion. The moderator cannot override a stop to complete the task list.

## Protocol limitations

Small purposive sample, synthetic repair-shop scenario, pt-BR language, Markdown medium, deterministic sequence, moderator presence and prototype familiarity constrain every future observation. No statistical generalization, product validation, conformance, security, implementation or Stage 3 inference is permitted.

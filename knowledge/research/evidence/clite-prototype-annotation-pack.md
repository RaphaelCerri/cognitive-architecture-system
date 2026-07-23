---
schema_version: 0.1.0-experimental
id: ARP-0009-E31
kind: knowledge
knowledge_type: research_evidence
title: C-lite Prototype Annotation Pack
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: related_to
    target: ARP-0009-E30
  - type: refines
    target: ARP-0009-E25
---

# C-lite Prototype Annotation Pack

## Natureza

Anotações de equipe para o protótipo documental C-lite `1.0`. Elas não são conteúdo primário da interface e não promovem requisito, hipótese, estado, artifact ou decisão a tipo canônico.

Todas as transições são simuladas. `Authority` indica a autoridade que a experiência precisa comunicar, não uma permissão implementada. `Accessibility intent` é intenção verificável em revisão documental; não é claim de conformidade. `Security boundary` sempre preserva:

> Esta superfície representa intenção e compreensão. Não implementa enforcement de segurança.

## Surface annotation matrix

| Variant | Journey; flow/result | Requirement; PQ; HP | State family | Actor; authority | Simulated behavior | Accessibility intent | Security boundary | Assumption/unknown | Evaluation method |
|---|---|---|---|---|---|---|---|---|---|
| SV-01 | J1; entry/submit idea | CL-UN-01; PQ-01; HP-01 | Interface: idle | creator; no decision authority exercised | task entry links | H1, proposition before actions, ordered links | no authentication/control implied | plain entry is understandable / preferred entry unknown | first-click + comprehension |
| SV-02 | J1; submit idea | CL-UN-02; PQ-02; HP-01 | Interface: editing | creator; owns input | submission transition | label, retained input, explicit incomplete validity/error | free text treated untrusted; no storage implied | incomplete intent can start discovery | moderated task + content review |
| SV-03 | J2; answer discovery | CL-PN-01; PQ-03/PQ-04; HP-02 | Discovery: asking | creator answers; system only proposes | adaptive question/progress | question reason, unknown option, qualitative status | no invented answer or hidden collection | rationale improves calibrated response | comprehension probe |
| SV-04 | J2; inspect assumption/resolve contradiction | CL-PN-02; PQ-04/PQ-05; HP-03 | Discovery: resolving conflict | creator corrects; system explains impact | interpretation branch | conflict heading, numbered interpretations, text cues | inference not authoritative; source shown | distinctions can be understood / permission impact unknown | correction task + content review |
| SV-05 | J2; correct assumption | CL-PN-02; PQ-05; HP-03 | Discovery: corrected | creator confirms correction | downstream-impact link | before/after wording and change text | correction does not grant roles | visible propagation supports trust | moderated correction |
| SV-06 | J2/J3; inspect/approve understanding transition | CL-PN-01/CL-PN-02; PQ-04/PQ-06; HP-02/HP-03 | Discovery: reviewed/incomplete; Project: planning | creator confirms scoped understanding | preparation transition | grouped context, non-goals, unknowns | “reviewed” not truth or authorization | current context is sufficient to plan | comprehension + cognitive walkthrough |
| SV-07 | J3; inspect plan | CL-GOV-01; PQ-06/PQ-07; HP-04 | Plan: proposed | proposer presents; Council not yet deciding | plan navigation | objective/steps/limits as headings/list | proposed plan cannot execute | scope and effects are locatable | first-click + content review |
| SV-08 | J3; request plan revision | CL-GOV-01/04; PQ-06; HP-04 | Plan: revision requested | reviewer comments; proposer revises | version-preserving branch | comment tied to affected scope | prior proposal/history preserved | revision effect is understood | moderated task |
| SV-09 | J3; authorize execution | CL-GOV-01/CL-GOV-02, CL-SEC-01; PQ-07/PQ-08; HP-04 | Decision: pending | Council decides; executor cannot self-authorize | approval/reject/revise links | table labels, explicit action meanings | visual control != enforced permission | actor and scope are clear / delegation unresolved | authority walkthrough + security review |
| SV-10 | J3; authorization denied | CL-GOV-02/CL-GOV-04; PQ-08; HP-04 | Decision: rejected | Council denies | denial branch | denial reason and next action in text | denial means no execution; audit only represented | consequence is distinguishable | consequence task |
| SV-11 | J3/J4; authorize execution | CL-GOV-02, CL-ARCH-01; PQ-07/PQ-09; HP-04 | Decision: approved; Execution: authorized | Council authorizes; executor may queue | explicit separate queue action | status text; no merged approval/start | authority limited to identity/scope/expiry | authorization/start separation is understood | state comprehension |
| SV-12 | J4; monitor/cancel | CL-UN-03, CL-GOV-03; PQ-09/PQ-13; HP-05 | Execution: queued | executor queued; authorized actor may cancel | queue/cancel transitions | text state and elapsed label | no process actually queued | queued differs from running | comprehension + consequence task |
| SV-13 | J4; monitor execution | CL-UN-03/CL-PN-03; PQ-09/PQ-10/PQ-11/PQ-13; HP-05 | Execution: running; Evidence: partial | executor acts within scope | activity and branches | no fake percent; status/activity/last update text | no live agent, polling or source access | qualitative progress calibrates expectations | moderated monitor task |
| SV-14 | J4; provide requested input | CL-PN-03, CL-GOV-03; PQ-12; HP-05 | Execution: awaiting input | named requester responds within scope | deterministic input branch | missing/reason/impact/options/next stated | input does not widen authority; no data submission | specific request supports safe response | moderated task + security review |
| SV-15 | J4; pause/resume | CL-GOV-03/CL-PN-04; PQ-13/PQ-14; HP-05 | Execution: paused | authorized actor pauses/resumes | checkpoint-preserving branch | state/effect/actions textual | resume rechecks scope/authority | preservation is understood | recovery walkthrough |
| SV-16 | J4; failure/recovery | CL-PN-04/CL-SEC-02; PQ-14; HP-05 | Execution: failed; Evidence: partial/unavailable | executor reports; authority chooses scope changes | recovery option links | failure heading, preserved items, option impacts | unavailable/untrusted source explicit | alternatives can be compared safely | recovery task + security review |
| SV-17 | J4; retry failed execution | CL-GOV-03/CL-PN-04; PQ-14; HP-05 | Execution: retry available | executor retries only within authorization | retry transition | checkpoint and effect before action | idempotency represented, not enforced | retry does not erase/duplicate work | cognitive walkthrough |
| SV-18 | J4; cancel execution | CL-GOV-03/CL-PN-04; PQ-13; HP-05 | Execution: cancelled | authorized actor cancels | terminal branch | consequence/history in text | cancel not delete; no real interruption | partial effects understood | consequence task |
| SV-19 | J4/J5; completed → inspect artifact | CL-UN-03, CL-ARCH-01; PQ-09/PQ-11; HP-05/HP-06 | Execution: completed; Artifact: generated | executor completes; reviewer not yet decides | review-entry link | completed distinguished from accepted | completion cannot self-accept | terminal execution differs from outcome | state comprehension |
| SV-20 | J5; inspect artifact/evidence | CL-EVAL-01/CL-EVAL-02; PQ-15/PQ-16; HP-06 | Artifact: under review; Evidence: partial/unavailable; Review: in review | reviewer inspects; authority decides | three outcome branches | separate headings, source/freshness/limits text | shown evidence not verified evidence | distinction and blocked claim are findable | findability + evidence review |
| SV-21 | J5/J6; accept result | CL-GOV-04/CL-PN-05; PQ-16/PQ-18; HP-06/HP-07 | Decision: approved; Artifact: accepted | designated authority accepts | Memory-update transition | scope and next limits stated | acceptance not Stage 3/product approval | accepted scope is understood | decision task + provenance review |
| SV-22 | J5/J6; request revision | CL-GOV-04/CL-PN-05; PQ-16/PQ-18; HP-06/HP-07 | Artifact: revision requested; Decision: pending | reviewer requests; future work needs authority | lineage-preserving branch | comment/section/new work explicit | previous state not overwritten | revision consequence understood | moderated decision task |
| SV-23 | J5/J6; reject result | CL-GOV-04/CL-PN-05; PQ-16/PQ-18; HP-06/HP-07 | Artifact: rejected | authority rejects | preserved-history branch | reason/consequence/next step textual | reject != delete evidence/history | rejection differs from cancellation | consequence + provenance task |
| SV-24 | J6; resume project later | CL-UN-04/CL-PN-05/CL-AX-03; PQ-17/PQ-18; HP-02/HP-07/HP-09 | Project: under review; Decision: pending; Interface: stale-view candidate | returning creator; action still authority-bound | direct resume links | summary/change/pending/relationship list; no graph | stale authority/context must be refreshed in implementation | Memory reconstructs context without graph | return task + first-click |

## Cross-surface accessibility annotations

| Intent | Coverage | What this prototype can show | Not proven |
|---|---|---|---|
| heading hierarchy/logical order | SF-01–08 | ordered Markdown structure | rendered semantics across tools |
| visible focus/keyboard path | SF-01–08; PQ-19 | link order and intended focus sequence | actual focus visibility, trapping or full keyboard operation |
| labels/error association | SF-01/02/05/06 | named actions and adjacent explanation | programmatic association |
| non-color communication/status | SF-02–08; PQ-20 | explicit state/change/approval text | CSS/high-contrast rendering |
| reflow and reduced motion | all | no motion dependency; linear content | viewport/tool behavior |
| assistive technology | all | textual graph alternative and plain labels | screen-reader interoperability |
| user inclusion | evaluation draft | access-needs fields and accommodation plan | effectiveness with users |

No accessibility conformance claim is made.

## Cross-surface security and privacy annotations

- all content is synthetic and versioned; names refer only to fictitious roles;
- free-form/reference/generated content is treated as untrusted;
- authorization surfaces expose actor, authority, action, scope, risk, reversibility, expiry and output;
- denial, interruption, cancellation and audit history are represented without implying enforcement;
- no lock icon, credential, customer data, analytics, recording, storage or third-party execution exists;
- visible state and available link do not authorize an operation;
- tool/session interruption and stale context require future runtime handling outside this prototype;
- ARP-0007 remains authority for security architecture.

## PQ coverage

PQ-01–18 map to the variants above. PQ-19 applies to the intended link path across SF-01–08; PQ-20 applies to every dynamic state in SF-02–08. Coverage means “represented for future evaluation”, not “answered”.

## Hypothesis coverage

- HP-01: SF-01 plain task entry;
- HP-02: persistent context and SF-08 return;
- HP-03: SF-02 assumption inspection/correction;
- HP-04: SF-04/05 plan and approval separation;
- HP-05: SF-06 state/activity/unknown progress;
- HP-06: SF-07 artifact/evidence distinction;
- HP-07: SF-08 pending decision;
- HP-08: plain labels throughout; internal IDs remain annotations;
- HP-09: SF-08 relationship list without graph.

All nine remain hypotheses. No observation or finding in this creation slice validates them.

## Flow accounting

The 18 E22 task flows are represented. The Council's creation list exposes `inspect assumption` and `correct assumption` separately, producing 19 navigable outcomes while remaining one baseline flow. `approve project understanding` is the integrated SV-06 → SV-07 transition. No alternative is hidden by the accounting choice.

## Unresolved questions

- Emergency cancellation and delegated retry authority still require runtime governance.
- The actual rendering tool's focus, reflow and assistive-technology behavior is unknown.
- Whether participants understand “evidence” without extra explanation requires evaluation.
- Whether a relationship list is sufficient for return/lineage tasks remains HP-09.
- Approval identity, data retention and role permissions remain scenario questions, not prototype decisions.

---
schema_version: 0.1.0-experimental
id: ARP-0009-E27
kind: knowledge
knowledge_type: research_evidence
title: C-lite Prototype Evaluation, Participants and Ethics Plan
status: experimental
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E24
---

# C-lite Prototype Evaluation, Participants and Ethics Plan

## Natureza

Future evaluation proposal only. No participant was recruited, contacted or studied; no consent form, script, recording, test result, finding or personal data exists. Participant counts and methods are planning hypotheses, not statistical claims.

## Method selection by question

| Method candidate | Questions served | Strength in Stage 2 | Boundary |
|---|---|---|---|
| moderated task evaluation | PQ-02–18 | observes complete tasks, explanations and recovery | small purposive sample; prototype simulation |
| comprehension testing/neutral probes | PQ-01,03,04,07–10,16,18 | reveals interpreted meaning/authority/state | verbal account not behavior or population estimate |
| first-click testing within sessions | PQ-01,06,11,15,17 | entry/findability signal | first action only; no full IA validation |
| cognitive walkthrough | PQ-01–18 before sessions | exposes assumption/action/feedback gaps | expert model, not user evidence |
| content review | PQ-01–08,10,14–18 | terminology, clarity, risk/decision copy | no interaction/runtime proof |
| accessibility expert review | PQ-19/20 and all critical paths | keyboard/focus/cue/annotation risks | prototype cannot prove DOM/AT interoperability |
| security/authority review | PQ-07–09,12–16 | authority/effect/data confusion and deceptive enforcement | visual representation only, no control audit |
| architecture review | state/long-running boundaries | detects simulated claims and state conflation | no architecture selection/runtime evidence |
| preference testing | none in current scope | not selected | no competing Visual Directions and aesthetics not primary uncertainty |

Methods are claim-relative; no aggregate score.

## Participant profiles

Planning hypothesis for one initial round:

- **5 primary-profile participants:** individual creators/technical founders with partially formed digital-product ideas; varied prior AI/product experience.
- **3 adjacent-profile participants:** non-technical creators who can expose terminology and ontology leakage.
- **Reviewer/approver perspective:** exercised through two role-based expert walkthroughs, not counted as user representation.

Eight participants are a bounded qualitative planning number, not a representative sample or success threshold. Recruitment must seek variation in language, age, digital confidence and access needs; demographic collection is minimized to the research question. Findings must be attributed to observed participants/context.

## Specialist review plan

| Review | Scope/timing | Competence/evidence | Independence/authority |
|---|---|---|---|
| UX | six journeys, comprehension, recovery; before and after round | experienced interaction/user researcher; annotated walkthrough/findings | reviewer not sole success approver |
| accessibility | keyboard/focus/non-color/content/state/AT plan; before sessions and after material revision | accessibility specialist; issue/evidence report | no conformance claim; critical blocker escalated |
| security/authority | approvals, denial, sensitive visibility, untrusted content, session/audit representation; before sessions | security/authorization reviewer familiar with ARP-0007 | does not certify enforcement |
| content | proposition, discovery, assumption, status, error, approval/review/return; before sessions | content designer/researcher; terminology findings | owner proposes; Council resolves governance terms |
| architecture | state families, long-running contract, simulation boundary; before authorization and after structural change | frontend/system architect; boundary findings | no stack or architecture selection |

Conflicts of interest, scope, version, methods and limitations are recorded. Prototype creator != evaluation approver.

## Evaluation protocol structure

1. approved study version, purpose and research team roles;
2. accessible participant information, voluntary consent and withdrawal;
3. context and reminder that prototype/system—not participant—is evaluated;
4. neutral background questions limited to relevance;
5. seeded tasks across J1–J6 without revealing interface terms/answers;
6. neutral prompts such as “O que você entende que acontecerá?”;
7. expected observations and trace IDs, not coaching or pass/fail hints;
8. task-level safety stopping and participant break/skip control;
9. debrief, clarification and disclosure of simulation/limitations;
10. secure observation synthesis, evidence linking and retention/deletion handling.

This is structure, not a final recruitment or discussion script.

## Task sequence candidate

- explain system purpose and start with incomplete repair-shop idea;
- answer discovery, identify contradiction and correct assumption;
- inspect/request revision to plan, then explain authorization before acting;
- distinguish execution states, find partial output/evidence and respond to input;
- decide whether/how to cancel, encounter source failure and choose recovery;
- review artifact/evidence and choose accept/revise/reject with consequence explanation;
- start from later return state, reconstruct context and resume;
- perform the same critical path by keyboard where participant/access setup permits, supplemented by specialist review.

Task order may create learning effects; version/order and deviations are reported. No participant uses real sensitive data.

## Expected observations and success evidence

Evidence items are task/version/participant-scoped observations:

- purpose/limits and incomplete-idea affordance explained in own words;
- correct classification/correction of question, assumption, requirement and decision;
- plan scope/output/risk and authority identified before authorization;
- proposed/authorized/queued/running/awaiting-input distinctions explained;
- no inference of precise progress from unknown-progress treatment;
- partial output, source/evidence, freshness and limitation found;
- requested input/cancel/retry consequences understood;
- failure reason, preserved state and safe recovery selected;
- accept/revise/reject consequences and authority understood;
- current state/changes/pending/Memory update reconstructed on return;
- keyboard/focus/non-color barriers recorded;
- terminology/trust calibration findings linked to HP/PQ/CL anchors.

Record actual observation, evaluator, prototype/scenario version, task, method, limitation and affected decision. Completion rate/time may be descriptive, never universal score or sole approval.

## Failure criteria and stopping

Evaluation blockers:

- participant authorizes without understanding action/effects/authority;
- execution appears to start before valid approval;
- plan, execution, artifact or decision cannot be distinguished;
- unknown progress is read as precise/completed;
- required evidence cannot be found or is mistaken for artifact truth;
- material failure has no understandable recovery;
- accept/revise/reject consequences remain unclear;
- critical keyboard path blocks required task;
- visual permission is interpreted as real enforcement;
- ontology jargon prevents primary task;
- return state does not restore current context.

Pause a session for distress, privacy/safety concern, inaccessible setup, participant request, prototype malfunction that invalidates task or researcher uncertainty. Stop the round and escalate on repeated critical blocker, compromised consent/data, wrong version or material protocol drift.

## Privacy and ethics plan

- state purpose, voluntary nature, activities, duration, recording choice, use and limits before consent;
- use synthetic scenario data; prohibit real customer/vehicle/business secrets;
- collect only role-relevant background and access-needs accommodations;
- recording is optional and separately consented; support notes-only participation;
- store consent separately from research evidence; access by named research team;
- define storage location, encryption/access, retention period and deletion owner before recruitment;
- allow withdrawal up to declared anonymization/aggregation point and explain practical limits;
- provide compensation consistently and not coercively; define amount/process later;
- arrange accessible venue/tool/materials, breaks, assistive technology and support person/interpreter as needed;
- redact quotes/identifiers; report patterns and counterexamples without universalization;
- explain who receives findings and that they may change prototype decisions;
- incident/escalation route for accidental sensitive disclosure or participant harm;
- Council/legal/privacy review when jurisdiction/organization requires; no legal document is produced here.

## Accessibility evaluation layers

- **Prototype-properties:** task/content hierarchy, visible focus concept, keyboard order representation, non-color cues, labels/errors/status wording.
- **Implementation-properties:** semantic markup, actual focus/live regions, reflow, browser/AT compatibility and validation behavior.
- **AT evidence:** requires appropriate implemented/prototype medium and real assistive technology with specialist/users.
- **User evidence:** requires participants with relevant access needs; expert review is not substitution.

Findings must state which layer they concern. No prototype-only accessibility claim.

## Evidence synthesis and decision use

Observation → issue/finding → linked PQ/HP/CL/risk → severity/confidence/affected participants → candidate change → owner → retest/review need. Preserve conflicting evidence and participant differences. One opinion does not dictate change; critical harm/authority/accessibility evidence can stop regardless of frequency. Council/Stage 2 approver decides scope/revision based on portfolio, not evaluator preference.

## Open planning decisions

Named research owner/evaluator/specialists, jurisdiction, recruitment channel, compensation, session duration, tool/accessibility feasibility, recording/storage/retention, exact participant mix and whether a second round is needed require approval before Stage 2 execution.

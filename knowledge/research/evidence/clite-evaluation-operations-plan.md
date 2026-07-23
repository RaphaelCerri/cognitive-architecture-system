---
schema_version: 0.1.0-experimental
id: ARP-0009-E37
kind: knowledge
knowledge_type: research_evidence
title: C-lite Evaluation Operations Plan
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E33
  - type: related_to
    target: ARP-0009-E36
---

# C-lite Evaluation Operations Plan

## Natureza and sources

Operational-readiness proposal derived from the Council decision after `3e21e46` and ARP-0009-E33–E36. It names required functions, candidate operations and blockers without naming people, installing/testing a renderer, recruiting, contacting, scheduling or collecting data.

```text
Operational Readiness
!= Evaluation Authorization
!= Evaluation Execution
!= Data Collection
```

## Required role assignments

No real assignee is available in authorized repository context. Every assignment is therefore `unassigned` and blocks execution.

| Role | Assignment | Minimum criteria | Independence/authority |
|---|---|---|---|
| Evaluation Owner | unassigned | evaluation governance, protocol and stop management | cannot self-authorize launch |
| Requirement Owner | unassigned | E21–E36 requirement/PQ/claim trace | cannot rewrite contrary evidence |
| Moderator | unassigned | neutral moderation, consent/safety procedures | not Final Approver |
| Note Taker | unassigned | structured observation, privacy and A0–A3 | independent second record when feasible |
| Prototype Custodian | unassigned | freeze/hash/reset/version control | no live prototype edits |
| Evidence Custodian | unassigned | integrity, access, pseudonymization, deletion | not Decision Authority |
| Privacy Owner | unassigned | minimization, retention, withdrawal/incidents | independent privacy stop |
| Accessibility Reviewer | unassigned | Markdown/renderer/keyboard/reflow/AT competence | no conformance claim |
| Security/Authority Reviewer | unassigned | authority/capability representation | no enforcement certification |
| Content Reviewer | unassigned | pt-BR content/terminology/research copy | cannot be sole content creator/reviewer |
| UX Reviewer | unassigned | task/cognitive walkthrough/recovery | not sole success approver |
| Architecture Reviewer | unassigned | state/simulation/runtime boundaries | no stack selection |
| Synthesis Lead | unassigned | evidence separation/contradictions/findings | cannot force consensus |
| Council Approver | unassigned | explicit launch/exception/final-decision authority | must remain distinct from operations |

Before launch, each name, competence evidence, availability, conflict declaration, delegation limit and backup must be recorded in the future authorization artifact.

## Conflict-of-interest review

| Candidate conflict | Required mitigation | Blocker condition |
|---|---|---|
| prototype creator is sole evaluator | independent moderator/reviewer and Council review | no independent challenge |
| requirement owner moderates | second reviewer checks wording/notes | owner defends requirement or teaches answer |
| approver joins synthesis | label contributions; synthesis lead preserves contrary evidence | approver suppresses evidence before decision |
| reviewer evaluates own work | disclose and add independent reviewer | critical domain has only self-review |
| participant has direct hierarchy | use independent channel/moderator; voluntariness | coercion or perceived employment impact |
| compensation depends on feedback | flat approved honorarium | payment/eligibility tied to outcome |
| moderator advocates solution | script, A0–A3 log, second-person review | repeated leading/deviation |

Every conflict is `none disclosed`, `mitigated`, or `blocker`, with reviewer and date. Missing review is a blocker.

## Recruitment plan

Candidate channels:

- Group A, up to five: founder/product communities, professional networks and approved research panels;
- Group B, up to three: small-business/creator communities, approved panels and non-hierarchical referrals.

Use multiple channels where feasible to reduce single-network bias. Invitation states formative prototype research, pt-BR, maximum 60 minutes, compensation pending approval, voluntary participation, no recording baseline, accommodation availability and screening. It requests no business/customer data.

Workflow: channel approval → neutral invitation → minimal screening → conflict/privacy check → eligibility → accessible information/consent preview → scheduling only after launch authorization. Separate recruiter identity data from evaluation evidence.

No channel is selected or used and no person is recruited here.

## Minimal screening specification

Ask only:

1. confirmation of adult status and ability to consent;
2. self-selection between technical-founder and non-technical creator profile using short neutral descriptions;
3. broad digital-product familiarity;
4. prior direct exposure to Cognitive Architecture/prototype artifacts;
5. creator/reviewer/organizational conflict;
6. protocol language capability;
7. functional accommodation or preferred format, optionally and without diagnosis;
8. availability within an approved window.

Do not request birth date, identity document, employer detail, revenue, medical diagnosis or customer information. No executable form is created.

## Session delivery options

| Model | Strength | Risk |
|---|---|---|
| in-person, controlled device | renderer/environment consistency; direct support | travel/access burden, location/privacy cost |
| remote, participant device | reach and familiar access setup | environment variance, installation/support/privacy |
| remote, controlled facilitator device | version control and no participant install | remote-control/conferencing accessibility and telemetry |

Recommendation candidate: **in-person controlled-device baseline**, because the selected renderer candidate is local and version fidelity/reset are central. Remote controlled-device is backup only after conferencing, remote-control, privacy and accessibility gates. Participant-device sessions require a separately validated delivery package. Delivery mode remains a Council decision and may vary as an accommodation without changing tasks.

## Proposed session model

- maximum 60 minutes including introduction/debrief;
- exact prototype/content/annotation commit frozen;
- moderator plus note taker; participant; no unnecessary observers;
- controlled device cleaned of notifications/identifiers;
- approved renderer/environment and deterministic reset;
- no audio, video or screen recording;
- structured notes only;
- breaks and additional time as approved accommodation;
- T-01–15 sequential, declared reset, T-16–18 return;
- debrief, withdrawal reminder, incident check and compensation handoff.

If task coverage cannot fit safely, omit tasks and record missing evidence; never rush.

## Note-taking protocol

Use the E35 fields in an approved private template. Capture participant code, approximate task-relative time, path/action, A0–A3 assistance, observation, optional paraphrase, completion and limitation. Interpretation occupies a separate field; finding/status are empty until synthesis.

Default quote policy is paraphrase only. Do not note identity, diagnosis, customer/business data or irrelevant conversation. Note taker performs same-day quality check; moderator resolves factual transcription differences without rewriting interpretation. A second authorized person reviews pseudonymization before synthesis.

No note template file, raw note or participant record is created in this slice.

## Prototype disclosure

Before tasks, disclose:

> Este é um protótipo não funcional com dados fictícios. Os links mostram transições simuladas; nenhuma operação, autorização, agente ou decisão real será executada. Controles não implementam segurança. Avaliamos se a representação é compreensível, não você.

Do not reveal target labels, expected distinctions or task answers. Repeat disclosure immediately if the participant attributes real capability.

## Session checklist

### Before

- authorization artifact and named roles valid;
- consent status checked through approved process;
- participant/protocol/prototype/renderer versions match;
- renderer/reset/environment and access accommodation checked;
- participant code and private note template ready;
- notifications/data cleared; no recording active;
- stop/incident/withdrawal contacts available.

### During

- disclosure delivered without teaching;
- neutral wording and A0–A3 tracked;
- no real/sensitive data accepted;
- breaks/accommodations honored;
- stopping and incident rules applied;
- deviations and missing tasks recorded.

### After

- debrief and withdrawal route restated;
- notes quality-checked and pseudonymized;
- incident and capability-confusion check completed;
- evidence routed to approved storage;
- compensation processing separated;
- reset/environment cleared; retention clocks recorded.

## Recruitment stop rules

Stop future recruitment if a group ceiling is filled, consent material invalid, storage unavailable, renderer unvalidated, accommodation unmet, privacy incident occurs, conflict emerges, operational/financial budget is exceeded, prototype changes materially or decision evidence is already sufficient. A quota is a ceiling, not a requirement.

## Candidate calendar model

No dates/events are created. Relative sequence:

1. assign roles and conflicts;
2. select/validate renderer and delivery mode;
3. approve consent/privacy/quotes/compensation/storage/retention;
4. approve recruitment/screening and authorization artifact;
5. recruitment/scheduling window;
6. specialist pre-reviews;
7. Cycle 1 participant sessions;
8. evidence QC/pseudonymization/synthesis;
9. targeted remediation only if authorized;
10. optional Cycle 2;
11. final synthesis/privacy closure;
12. Council decision and retention/deletion.

Dependencies, not calendar pressure, determine launch.

## Operational blockers

All 14 roles are unassigned; conflicts unreviewed; delivery mode not approved; renderer not validated; channels/screener/invitation not approved; consent/compensation/storage/retention/accommodations incomplete; no execution authorization. Therefore operations are `Not Ready`.

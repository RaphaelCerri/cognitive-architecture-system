---
schema_version: 0.1.0-experimental
id: ARP-0009-E36
kind: knowledge
knowledge_type: research_evidence
title: C-lite Evaluation Governance and Authorization Readiness
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E28
  - type: related_to
    target: ARP-0009-E33
---

# C-lite Evaluation Governance and Authorization Readiness

## Natureza

Governance proposal for a possible future evaluation of prototype `1.0`. Functional roles, gates and ceilings are defined; people, renderer, storage and operational approvals are not. This artifact does not authorize execution.

## Roles and accountability

| Role | Accountability | Must not |
|---|---|---|
| evaluation owner | protocol integrity, budget, deviations and stop | self-authorize entry/exit |
| requirement owner | clarify requirement/claim trace without teaching tasks | rewrite evidence after outcome |
| moderator | consent check, neutral delivery, safety stop | be final approver |
| note taker | structured observation and assistance records | infer silently or retain shadow notes |
| prototype custodian | freeze/version/checksum and reset instructions | modify prototype during sessions |
| evidence custodian | access, integrity, version, deletion and lineage | become decision authority |
| privacy owner | minimization, storage, retention, withdrawal and incident gate | waive consent for convenience |
| accessibility reviewer | material/renderer/access-plan assessment | claim conformance |
| security/authority reviewer | authority/capability-overclaim review | certify enforcement |
| content/UX/architecture reviewers | scoped reviews and findings | replace participant evidence or choose stack |
| synthesis lead | separation, contradictions, findings and limitations | force consensus |
| Council approver | protocol authorization, exception and final decision | delegate implicitly |

```text
Moderator != Final Approver
Prototype Creator != Sole Evaluator
Evidence Custodian != Decision Authority
```

Named accountable people and conflict declarations are entry requirements.

## Authority matrix

| Action | Propose | Review | Approve |
|---|---|---|---|
| protocol/claim/task change | evaluation/requirement owner | specialist + privacy/access as affected | Council |
| renderer acceptance | prototype custodian | UX + accessibility | Council or explicitly delegated authority |
| recruitment/consent/compensation/storage | evaluation/privacy owner | privacy + relevant operations/legal authority | Council |
| start/stop session | moderator may stop; owner proposes start | entry evidence custodian | Council authorization + moderator safety authority |
| accept finding/severity | synthesis lead proposes | relevant owners/reviewers | Council/evaluation decision authority named |
| prototype remediation | finding owner proposes | requirement/UX/access/security as affected | separate Council authorization |
| Stage 3 proposal | Council/CEA proposal only | CSA | Council; proposal does not implement |

Safety/privacy/accessibility stop authority is immediate and cannot require completion of a task.

## Candidate budget ceiling

- participant sessions: up to 8 total (A up to 5; B up to 3);
- specialist reviews: up to 5;
- evaluation cycles: up to 2;
- participant session: maximum 60 minutes including introduction/debrief;
- tasks: 18 planned; omit rather than rush when stopping/time applies;
- protocol artifacts: four approved proposal artifacts plus future authorized evidence outputs;
- synthesis: up to 3 working days after last valid session/review;
- targeted remediation window before optional Cycle 2: up to 5 working days;
- no financial amount until local approval.

Ceilings are not targets. Stop for sufficient decision evidence, ethics/access/privacy issue or no decision value.

## Entry criteria

Future evaluation can begin only when evidence exists for all:

1. Council-approved protocol/claims/tasks/probes/stopping rules;
2. named owners, moderator, note taker, custodians and reviewers;
3. prototype/content/annotation version frozen and integrity recorded;
4. exact renderer/environment assessed and approved for intended profiles/tasks;
5. participant profiles, inclusion/exclusion and recruitment plan approved;
6. accessible consent artifact/version approved;
7. no-recording baseline or explicit exception approved;
8. local compensation and withdrawal treatment approved;
9. storage/access/retention/deletion/incident plan approved;
10. accommodations process/contact approved;
11. specialist sequence/scope approved;
12. evidence fields, synthesis and finding authority approved;
13. privacy/access/security blockers cleared;
14. separate explicit Council authorization to recruit/contact/schedule/execute.

Document approval alone satisfies none of 2–14 automatically.

## Exit criteria

Evaluation may close when planned valid work completes or a stopping rule triggers; evidence is versioned; invalid/contradictory records preserved; findings and blockers synthesized; limitations/remediation recorded; privacy deletion duties scheduled; readiness recommendation issued; and no conformance/product-validation claim is made.

Early stop is a valid exit when documented. Incomplete tasks are not silently marked successful.

## Stopping and escalation

Stop for invalid consent, renderer inadequacy, distress/withdrawal, privacy incident, protocol drift, version mismatch, critical authority/accessibility flaw, scenario inconsistency, evidence-capture failure, budget breach or sufficient evidence. Moderator stops a session; evaluation owner freezes program activity; privacy/access/security owners control their incident domains; Council decides restart, revision or closure.

## Invalidation and change control

Reopen proposal after material changes to prototype version, scenario, actor, groups, tasks, claims, authority, renderer, recording, storage, consent, compensation, accommodations, specialist scope or method. Every change records requester, rationale, affected claims/tasks, version, reviewers, approval and revalidation target.

No live editing of the frozen prototype or protocol during sessions.

## Unresolved authorization conditions

- actual people for every accountable role;
- conflict/independence review;
- renderer/environment and accessibility gate result;
- recruitment channel, screening and scheduling;
- consent text and applicable review;
- local compensation value/process;
- storage system, access list, retention confirmation and deletion evidence;
- accommodation contact/process;
- incident and withdrawal procedures;
- quote policy;
- final specialist availability;
- explicit evaluation-execution decision.

## Readiness assessment

| Area | Proposal state | Execution state |
|---|---|---|
| scope/claims/PQ/HP | defined and traceable | not authorized |
| methods/tasks/probes | defined | not executed |
| participants/sampling | ceilings and criteria defined | none recruited |
| consent/recording/privacy | requirements and no-recording recommendation defined | artifacts/systems not approved |
| accessibility/renderer | gate defined | renderer not assessed |
| evidence/synthesis/findings | framework defined | no data/findings |
| roles/authority | functions defined | people not named |
| budget/entry/exit/invalidation | defined | entry unmet |

## Recommendation

**Ready with conditions for a separate evaluation authorization; Not Ready to execute.**

The four-proposal package is sufficiently bounded for CSA/Council review. Evaluation authorization should be withheld until every entry criterion has named evidence and a separate decision explicitly permits recruitment, contact, consent collection, compensation, reviews and sessions.

This recommendation does not authorize user evaluation, specialist review execution, prototype change, Stage 3, frontend or implementation.

## Future Council decision options

- accept proposal and require entry-evidence closure before execution authorization;
- request revision or targeted evidence;
- reject/stop;
- redirect the construct or representation.

No option is automatic, and “prepare Stage 3 proposal” is unavailable until evaluation is separately authorized, executed and closed.

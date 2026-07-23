---
schema_version: 0.1.0-experimental
id: ARP-0009-E26
kind: knowledge
knowledge_type: research_evidence
title: C-lite Prototype Content, State and Interaction Plan
status: experimental
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E22
  - type: refines
    target: ARP-0009-E23
---

# C-lite Prototype Content, State and Interaction Plan

## Natureza

Content/state/interaction proposal only. It specifies what a future prototype would represent, not layout, copy final, wireframes, visual assets, transitions in a tool or executable behavior.

## Screen versus state strategy

Use stable surface families plus state variants. A `screen` is not a domain state; panels/overlays/inline regions may represent contextual detail or decisions without fragmenting orientation. Persistent project context spans SF-02–08. Notifications announce outcome but never replace durable state/history. Steps are used only where order is materially required.

Prototype annotations must label simulated behavior, source state, available action, authority and unimplemented enforcement. Loading, empty, error, partial, awaiting input, denied, stale, revision requested, cancelled and recovery are variants within families, not independent pages by default.

## Scenario-content strategy

Future content pack is fictitious, reproducible, versioned, non-sensitive, limited and free of lorem ipsum or capability claims. It uses one small repair shop, one primary actor and a small public-source research task. It must disclose that names/data/operations are synthetic.

| Content element | Candidate role in prototype; not final copy/data |
|---|---|
| idea | organize service requests, estimates and customer approvals currently dispersed in messaging |
| discovery questions | users/roles, approval evidence, customer access, inventory boundary, notifications, volume and privacy |
| contradiction | “no customer account” versus secure traceable approval/history |
| assumption | approval link may be sufficient; source and confidence shown; user can correct |
| project context | problem, actors, scope, non-goals, unknowns and decision history |
| plan | one bounded public-source workflow/approval research brief; outputs/exclusions/authority |
| risk | identity/approval ambiguity and sensitive customer/vehicle information |
| approval request | authorize limited research only, named requester/executor/scope/expiry |
| activity | querying declared sources, comparing workflows, recording evidence; no fake percent |
| requested input | choose whether anonymous approval is allowed or authenticated approval is required for research scope |
| partial output | provisional workflow patterns with incomplete evidence label |
| failure | one primary source unavailable; collected evidence preserved |
| recovery | retry source, use authorized alternative, revise scope, cancel or escalate |
| artifact | research brief on workflow/approval requirements, explicitly synthetic scenario |
| evidence | small set with source/version/date/scope/limits and one stale/unavailable condition |
| review decision | accept for benchmark, request revision, or reject with consequences |
| Memory update | decision, artifact/evidence links, unresolved approval identity question and next action |

This is a content inventory, not a dataset or final content creation.

## Flow coverage classification

| Stage 1 flow | Classification | Future prototype treatment |
|---|---|---|
| submit idea | must prototype | SF-01 realistic incomplete input |
| answer discovery | must prototype | SF-02 justified question/unknown option |
| inspect assumption | must prototype | SF-02 source/confidence/impact |
| resolve contradiction | must prototype | SF-02 compare/correct/defer and downstream effect |
| approve project understanding | represent as state | reviewed-context transition integrated into SF-03 |
| inspect plan | must prototype | SF-03 scope/output/risk/unknowns |
| request plan revision | must prototype | SF-03 reason/version/history |
| authorize execution | must prototype | SF-04 structured approval |
| monitor execution | must prototype | SF-05 queued/running/activity/unknown progress |
| provide requested input | must prototype | SF-06 why/effect/responder |
| cancel execution | must prototype | SF-05/06 effect/authority confirmation |
| retry failed execution | must prototype | SF-06 checkpoint/idempotency/alternative |
| inspect artifact | must prototype | SF-07 version/status/limits |
| inspect source/evidence | must prototype | SF-07 provenance/freshness/dispute |
| accept result | must prototype | SF-07 consequence/authority |
| request result revision | must prototype | SF-07 findings/new proposal/lineage |
| reject result | must prototype | SF-07 reason/history retention |
| resume project later | must prototype | seeded SF-08 return state and direct resume |

Seventeen interactive flows plus one represented transition is the ceiling; no extra platform flows.

## State representation plan

| Family | Required future variants | Representation rule |
|---|---|---|
| Discovery | asking, awaiting answer, conflict, reviewed/incomplete | unknown remains explicit; reviewed not “complete truth” |
| Plan | draft/proposed, revision requested, pending approval, approved/rejected | approval never visually collapses into execution |
| Execution | proposed, authorized, queued, running, awaiting input, paused, failed/retry available, cancelled, completed | identity/history persistent; only available actions shown with authority explanation |
| Artifact | generated/draft, under review, revision requested, accepted/rejected/superseded | execution completion does not auto-accept artifact |
| Evidence | missing/partial/available/stale/disputed/accepted-for-decision | evidence state and claim scope visible |
| Review/Decision | in review, awaiting clarification, recommendation, approved/rejected/superseded | reviewer recommendation and authority decision distinct |
| Interface | idle/loading/submitting/error/stale/offline simulation | annotation states no runtime guarantee |

Project state remains persistent context, not a single status badge that replaces these families.

## Authority representation

Every consequential action displays requester, executor, required authority, proposed action, scope/version, affected content, risk/unknowns, reversibility/partial effects, expiry and expected result. The prototype must let evaluators ask the user who is deciding, who acts and what happens next. Visual permission cues are explicitly labeled as representation; security enforcement is outside Stage 2.

```text
proposal != approval != execution != acceptance
```

## Long-running interaction plan

SF-05/06 must cover stable execution identity; plan/approval link; proposed/authorized/queued/running/awaiting input/paused/failed/cancelled/completed; actual current activity and elapsed time; `progress unknown` rather than a percentage; partial artifacts/evidence; blocker and requested input; actions allowed/denied with reasons; failure checkpoint and known effects. Streaming may be represented as staged draft content, never as real AI behavior.

## Failure and recovery

Primary material failure: declared primary source unavailable after partial evidence collection. Preserve execution identity, activity history, partial evidence and artifact draft. Explain impact: evidence insufficient for one claim, not total data loss. Alternatives: retry later; use a pre-authorized alternative source; revise the research scope; provide input/authority; cancel; escalate to Council when authority/scope changes. Permission denial and stale evidence appear as additional state variants, not separate scenarios.

## Project Memory and return

SF-08 includes synthetic project summary, separate current states, recent changes, primary artifact, review decision, evidence status, unresolved contradiction, pending action, provenance/history and return entry point. It does not mirror repository directories. A seeded later-time state allows PQ-17/18 without simulating elapsed real time.

## Search decision

Exclude interactive global/contextual search from the first prototype. None of PQ-01–20 requires search to complete the core cycle; direct contextual links, recent changes and pending actions are sufficient. Search requirements remain documented for later scope and must not be implied functional. Reopen if return/findability tasks cannot be evaluated without it.

## Graph decision

Defer graph entirely. Use a simple accessible relation/history list in SF-07/08 for artifact–evidence–decision lineage. Graph would add visual/interaction/tool questions without answering a core uncertainty. HP-09 failure or later impact-analysis needs can reopen the decision.

## Accessibility representation plan

Future prototype should preserve semantic intent in its chosen tool/export where possible; complete keyboard sequence; logical/visible focus; headings/labels/errors; status/approval meaning in text/structure; no color/motion-only communication; reduced-motion assumptions; zoom/reflow annotations; plain language and graph alternative by design.

Classification:

- **Prototype-evaluable:** content comprehension, navigation order, visible focus treatment, non-color cues, task flow, labels/errors, authority meaning.
- **Implementation-required:** real semantics/DOM, focus behavior, live regions, reflow, input validation, timeout, security enforcement.
- **Real AT-required:** screen-reader announcements/navigation and assistive-technology interoperability.
- **User-required:** comprehension, cognitive load, access-needs barriers and recovery behavior.

No accessibility claim can be produced from the prototype alone.

## Security and privacy representation

Represent requester/executor/authority, sensitive action, denial, untrusted reference, tool approval, scoped sensitive information, session interruption, audit history and relevant privacy notice. Synthetic data contains no real person. Annotations state that buttons, hidden content and simulated denial do not enforce security. No tool call, upload, analytics, recording or session exists.

## Minimal artifact set and capability needs

Future artifact candidates are evaluated in E28. Tool capabilities, without selection: linked surface states, deterministic transitions/reset, keyboard-representable order, annotations, version/comments/history, controlled sharing/access, export/archive and accessibility-conscious interaction. No deep tool research or recommendation occurs.

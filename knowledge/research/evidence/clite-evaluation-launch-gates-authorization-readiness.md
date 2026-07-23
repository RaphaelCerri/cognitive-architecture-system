---
schema_version: 0.1.0-experimental
id: ARP-0009-E40
kind: knowledge
knowledge_type: research_evidence
title: C-lite Evaluation Launch Gates and Authorization Readiness
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E36
  - type: related_to
    target: ARP-0009-E37
---

# C-lite Evaluation Launch Gates and Authorization Readiness

## Natureza

Final operational-readiness register for a possible future evaluation of prototype `1.0`. A launch gate is evidence required before an authorization decision; this document is not that authorization.

## Launch gates

| Gate | Required evidence | Current state | Blocker owner |
|---|---|---|---|
| G-01 roles | 14 named people/backups, competence, availability and delegation | open: all unassigned | Council Approver |
| G-02 conflicts | reviewed declarations and mitigations | open | Evaluation Owner |
| G-03 prototype | E29/E30/E31 hashes frozen and reset package | partially closed: v1.0 exists; launch freeze unapproved | Prototype Custodian |
| G-04 renderer | selected exact VS Code preview version/environment, validation report, backup | open: candidate only, untested | Accessibility + Prototype |
| G-05 disclosure | approved neutral non-functional disclosure | candidate text exists | Security/Content |
| G-06 recruitment | channels, invitation, screening, scheduling and stop rules approved | open | Evaluation/Privacy |
| G-07 participants | A≤5/B≤3, inclusion/exclusion/conflict/accommodation process approved | candidate defined | Evaluation Owner |
| G-08 consent/quotes | accessible final artifact, paraphrase-only choice and withdrawal cutoff approved | open: specification only | Privacy Owner |
| G-09 recording | explicit no-recording authorization and environment check | recommendation closed; authorization open | Privacy Owner |
| G-10 compensation | local amount/funds/method/cancellation/withdrawal approved | open | Council/administration |
| G-11 storage | actual approved system, separation/access/encryption/export/backups/deletion/incident | open; no system selected | Privacy/Evidence |
| G-12 retention | consent record period and 30/90/180-day schedule approved | partially defined; approval open | Privacy Owner |
| G-13 accommodations | contact, intake, renderer capability and delivery adaptations ready | open | Accessibility Reviewer |
| G-14 protocol | E33 tasks/probes/A0–A3/stops/notes/incidents approved | candidate complete; approval open | Evaluation Owner |
| G-15 specialists | five named reviewers, scopes/conflicts/order and blocker authority | open | Evaluation Owner |
| G-16 budget/calendar | financial and operational capacity, windows and buffers approved | open | Council Approver |
| G-17 authorization | signed explicit artifact with dates/scope/ceilings/authority | absent | Council Approver |

Any open/blocker gate keeps the evaluation `Not Ready`.

## Candidate authorization artifact

A future Council authorization should contain:

```yaml
authorization_id: unassigned
evaluation_scope: C-lite Stage 2 formative evaluation
protocol_version: 1.0-proposal
prototype_version: "1.0"
prototype_commit: unassigned_at_launch
renderer:
  product: unassigned
  version: unassigned
  environment: unassigned
participant_groups:
  technical_founders_max: 5
  non_technical_creators_max: 3
specialist_reviews_max: 5
participant_sessions_max: 8
recording: none
quote_policy: paraphrase_only
compensation: unassigned
storage: unassigned
retention: unassigned
accommodations_owner: unassigned
named_roles: unassigned
start_date: unassigned
end_date: unassigned
stopping_rules: E33/E36/E37/E38/E39
authority:
  launch: Council Approver
  session_stop: Moderator
  privacy_stop: Privacy Owner
  accessibility_stop: Accessibility Reviewer
status: not_authorized
```

This is a documentary example, not an AP, ADR, schema or authorization instance.

## Operational budget

Ceilings:

- up to eight participant sessions: A≤5, B≤3;
- up to five specialist reviews;
- up to 60 minutes per participant session;
- up to two evaluation cycles;
- up to three working days synthesis per completed cycle;
- up to five working days targeted remediation before optional Cycle 2;
- no recording infrastructure;
- recruitment/screening/scheduling window: duration pending channel/local context;
- scheduling buffer: pending accessibility/participant context;
- storage/privacy administration and compensation operations required.

Financial items pending: participant honoraria, specialist professional time, travel/venue, conferencing/remote control if used, storage/administration, accessibility services/captions/support and incident/legal review. No amount is estimated without local context.

## Readiness findings

### Closed documentary conditions

- protocol scope, EC-01–09, T-01–18, methods/probes/A0–A3;
- A≤5/B≤3 and five specialist perspectives;
- no-recording and paraphrase-only recommendations;
- consent/data/storage/retention requirements;
- renderer comparison and VS Code-preview validation candidate;
- session/recruitment/note/checklist/calendar models;
- accommodations, evidence and incident workflows;
- roles/authority criteria, budget ceilings and launch-gate definitions.

### Open conditions

- all names/competence/conflict/backup assignments;
- exact renderer/OS/device/extensions/network and validation evidence;
- delivery mode;
- recruitment channels/invitation/screener/schedule;
- final accessible consent and quote choice;
- local compensation/funds/process;
- real storage/access/jurisdiction/backups/deletion;
- final retention and withdrawal cutoff;
- accommodation contact/capability;
- specialist availability/reviews;
- explicit authorization and dates.

### Current blockers

G-01, G-02, G-04, G-06, G-08, G-10, G-11, G-13, G-15, G-16 and G-17 are open. G-03/G-05/G-07/G-09/G-12/G-14 have candidate documentation but lack operational approval/evidence.

## Decision and escalation model

- artifact author proposes readiness evidence;
- accountable owner verifies its domain;
- Evidence Custodian records version/trace;
- CSA reviews coherence and unresolved risk;
- Council alone authorizes launch/exceptions;
- Moderator, Privacy Owner and Accessibility Reviewer retain immediate scoped stop authority;
- no owner may convert a recommendation into authorization.

## Recruitment and launch stopping rules

Stop or refuse launch for filled ceiling/sufficient evidence, invalid consent, unavailable storage, failed renderer, unmet accommodation, privacy/security incident, unresolved conflict, budget breach, prototype/version change or protocol drift. A deadline, available participant or completed document cannot waive a blocker.

## Invalidation

Reopen operational readiness after role/authority, prototype/content/annotation, renderer/environment, delivery mode, recruitment, consent/quotes, recording, compensation, storage/retention, accommodations, specialist scope, budget/calendar or incident-process change.

## Readiness recommendation

**Not Ready for evaluation authorization or execution.**

The operational decisions are sufficiently specified for CSA/Council to assign owners and request evidence without improvisation. However, unassigned roles, unvalidated renderer, absent consent/storage/compensation/accommodation operations and missing G-17 authorization are non-compensable blockers.

Future options: assign and close gates; request targeted evidence/revision; stop/redirect. Even after all gates close, a new explicit Council authorization is required. No recruitment, contact, review or session begins from this recommendation.

## Project boundary

Prototype `1.0`, Scenario Pack, Annotation Pack and Evaluation Protocol remain unchanged. Evaluation Execution, data collection, Stage 3, frontend and implementation remain blocked.

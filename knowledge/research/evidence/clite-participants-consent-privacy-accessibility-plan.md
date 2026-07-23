---
schema_version: 0.1.0-experimental
id: ARP-0009-E34
kind: knowledge
knowledge_type: research_evidence
title: C-lite Participants, Consent, Privacy and Accessibility Plan
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E27
  - type: related_to
    target: ARP-0009-E33
---

# C-lite Participants, Consent, Privacy and Accessibility Plan

## Natureza

Plano candidato para futura autorização. Nenhuma pessoa foi identificada, recrutada, contatada, consentida, compensada, gravada ou avaliada. Não há dados de participantes.

## Participant groups

| Group | Ceiling | Candidate characteristics | Purpose / non-generalization |
|---|---:|---|---|
| A — Technical Founders | 5 | adults with digital-product experience and variable technical familiarity; no prior project Ontology knowledge | primary C-lite actor contrast; not all founders |
| B — Non-technical Creators | 3 | adults with business, operations or creation experience; software mastery unnecessary | comprehension contrast; not universal non-technical population |

Total ceiling: eight participant sessions, subject to stopping for sufficient decision evidence. Recruitment must not fill a quota after sufficient evidence or exclude access needs for convenience.

## Inclusion and exclusion

Inclusion candidates: adult; capacity and approved language for informed consent; profile-compatible experience; session availability; ability to use an approved format with reasonable accommodation.

Exclusion candidates: direct creation of E21–E34 or detailed prior benchmark knowledge; material conflict of interest; inability to consent; method remains unsuitable after available accommodation. Exclusion reason is recorded at category level without unnecessary sensitive detail.

Do not exclude based on disability, age within adulthood, gender, ethnicity or technical confidence. If the renderer cannot support an access need, that is a renderer/protocol blocker—not participant failure.

## Sampling limitations

Purposive small sample; formative purpose; no statistical representativeness; possible convenience, technical-founder, language, scenario, prototype-medium, moderation, self-selection, access and order bias. Group comparison is descriptive and question-specific; no percentage, significance or universal “user” claim.

## Recruitment boundary

A future recruitment plan must name owner/channel, use neutral invitation, disclose prototype research and time, avoid coercive manager/subordinate recruitment, separate screening from findings, provide accessibility contact and prohibit sharing workshop/customer data. This document does not select channels or contact anyone.

## Consent requirements

An approved accessible consent artifact must cover:

- purpose and formative limits;
- non-functional prototype nature;
- activities and maximum duration;
- no-recording recommendation or any approved exception;
- exact data categories and optional quote use;
- storage owner/access/location class;
- retention/deletion/backups;
- voluntariness, skip, pause and withdrawal;
- compensation independent of positive findings;
- foreseeable privacy, fatigue and confusion risks;
- accommodation and contact routes;
- intended synthesis/finding use;
- no product, accessibility or security claim.

Consent must precede collection and be version-linked to protocol/prototype/renderer. Reconsent is required after material change. This is not legal advice or a legal consent script.

## Recording options and recommendation

| Option | Value | Risk / requirement | Disposition |
|---|---|---|---|
| no recording | minimum collection and infrastructure | relies on moderator + note taker; fewer verbatim details | **recommended baseline** |
| audio | preserves verbalization | personal data, voice, consent, storage, transcription and retention | not recommended for baseline; separate Council exception |
| screen | preserves navigation | accidental identifiers/notifications, more sensitive storage | not recommended; structured action log substitutes |
| audio + screen/video | richest replay | disproportionate for Markdown formative scope | excluded from baseline |

Recommendation: no audio, video or screen recording. Use a moderator and independent note taker with structured fields and action codes. A short quote excerpt may be written only when separately authorized by consent, necessary to a claim and de-identified; paraphrase is default. Any recording exception reopens the proposal and privacy review.

## Compensation proposal

Compensation is a flat participation honorarium based on approved local market, scheduled duration (maximum 60 minutes), preparation, profile, accessibility time/cost and remote/in-person context. It is not contingent on completion, “positive” feedback or agreement. Withdrawal receives the Council-approved fair treatment stated before consent.

Specialist review uses a separate professional-time basis. No value, provider, currency or payment mechanism is set until local context, tax/administrative requirements and Council approval exist.

## Data categories and minimization

Candidate collection:

- participant code and group;
- eligibility outcome at minimum granularity;
- protocol/prototype/renderer/session versions;
- task actions, structured notes, assistance and completion;
- optional de-identified quote excerpt if authorized;
- voluntarily stated task-relevant access need;
- finding links and evaluator identity.

Do not collect unnecessary identity documents, medical diagnosis, credentials, customer/vehicle/message data, hidden telemetry, public identity or secondary-use data. Contact/payment records remain separate from evaluation notes.

## Storage, access and security expectations

Before recruitment, the privacy owner must register an approved encrypted storage location, owner, least-privilege access list, export control, incident route and deletion evidence. Raw notes cannot enter this public/versioned repository. Participant-code mapping, contact/payment records and research notes use separate stores and access.

Proposed access:

- recruitment/payment owner: identity/contact/payment only;
- moderator/note taker: active session notes;
- evaluation/evidence custodians: pseudonymized notes;
- privacy owner: governance/audit access;
- Council: de-identified synthesis, not raw identity by default.

No storage system is selected or used in this slice.

## Retention proposal

- participant-code mapping/contact/payment records: delete after compensation/reconciliation and withdrawal window, proposed maximum 30 days after last authorized session unless a binding obligation requires otherwise;
- pseudonymized raw task notes: delete 90 days after Council decision on the evaluation, with absolute proposed maximum 180 days from collection;
- approved de-identified findings/synthesis: retain with ARP evidence lifecycle and explicit provenance;
- recordings: none in baseline; any exception requires a shorter explicit period;
- backups: deletion schedule and restoration procedure must prevent silent reappearance.

The Council/privacy owner must confirm applicable requirements before execution. Retention begins from recorded events and deletion is auditable.

## Withdrawal, deletion and incident handling

Consent must state the practical withdrawal cutoff and whether already aggregated/de-identified findings can be removed. Before cutoff, locate data through the participant mapping and execute approved deletion without exposing identity. Incident response: stop collection, contain access, preserve minimum audit evidence, notify privacy authority/owner and Council, assess participant notice and invalidate affected evidence.

## Accessibility accommodations

Future intake offers accessible consent/material, zoom, keyboard path, screen reader where renderer-approved, captions for any audio communication, breaks, extra time, alternate communication, flexible scheduling, support person policy and recording alternative. Access-need disclosure is voluntary and minimized; no diagnosis is requested.

Accommodation time does not reduce compensation or count as performance. If a task cannot be validly compared because of the medium, report `renderer/access barrier`; do not attribute failure to the participant.

## Renderer assessment gate

No renderer is selected here. Before any session, accessibility and UX reviewers assess the exact renderer/version/environment against:

| Check | Gate evidence |
|---|---|
| headings and reading order | structure inspection and representative keyboard/AT walkthrough |
| links and target context | labels, destination, back/reset behavior |
| keyboard and visible focus | full critical path without pointer; visible location |
| zoom/reflow | approved zoom/viewport conditions without task loss |
| screen-reader output | only if AT use is authorized; named AT/browser/version |
| state distinction | text/structure independent of color/motion |
| browser/environment | exact supported session configuration, not compatibility claim |

Gate outcomes: `adequate for approved profiles/tasks`, `adequate with documented accommodation`, or `inadequate`. Inadequate means no sessions. A replacement representation needs Council authorization; it cannot silently become executable frontend.

## Specialist review plan

Proposed sequence before participant sessions:

1. content review;
2. UX/cognitive walkthrough;
3. accessibility review of material and exact renderer;
4. security/authority representation review;
5. architecture-boundary review.

Each review records reviewer competence/independence, claim, scope, inputs/versions, method, evidence, findings, limitations and authority. Prototype creator cannot be sole evaluator; specialist recommendation is not Council decision. No review is executed in this slice.

## Open approval conditions

Named owners/reviewers; recruitment channel/screener; consent artifact; local compensation; storage location/access; final retention; withdrawal cutoff; accommodations contact; exact renderer/environment; participant schedule; quote policy and incident route remain Council gates.

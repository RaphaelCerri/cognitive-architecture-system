---
schema_version: 0.1.0-experimental
id: ARP-0009-E38
kind: knowledge
knowledge_type: research_evidence
title: C-lite Consent, Compensation, Privacy and Data Handling Specification
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E34
  - type: related_to
    target: ARP-0009-E35
---

# C-lite Consent, Compensation, Privacy and Data Handling Specification

## Natureza

Documentary operational specification. It is not final legal advice, a consent form, a payment action, a storage configuration or data collection. Privacy Owner and applicable review remain unassigned.

## Consent artifact specification

Future accessible consent information must be plain-language, versioned and separable from task instructions:

1. study purpose and formative/non-generalizable limits;
2. prototype `1.0` non-functional/simulated nature;
3. tasks, think-aloud option and maximum 60-minute duration;
4. voluntary participation, skip/pause/stop and withdrawal;
5. no-recording baseline;
6. structured notes, actions, assistance and optional access-need data;
7. participant code/pseudonymization and separation from contact/payment;
8. storage category, owner, access and repository prohibition;
9. retention/deletion/backups and withdrawal cutoff;
10. compensation model and treatment after withdrawal/cancellation;
11. foreseeable fatigue, privacy, confusion and accessibility risks;
12. accommodations and alternate format/contact;
13. de-identified synthesis/finding use and prohibited claims;
14. quote policy;
15. privacy/research contact and incident/complaint route.

Required consent record fields: participant code, artifact/version, date/time, choices, recording=`none`, quote=`paraphrase only`, withdrawal cutoff acknowledged and authorized collector. Identity-signature mechanism depends on approved local process and is not designed here.

## Quote policy

Options considered: no direct quotes; paraphrases only; short pseudonymized quotes under consent; separate quote opt-in.

Recommendation: **paraphrased observations only** for baseline. Direct/verbatim quotes are excluded because no recording is used, exact wording is difficult to verify and re-identification value exceeds current decision need. If a short quote becomes necessary, amend consent with separate opt-in and reopen privacy/protocol approval before collection.

Paraphrase must preserve meaning, be labeled as paraphrase and never fabricate fluency or certainty.

## Compensation framework

Candidate basis:

- scheduled duration up to 60 minutes and required preparation;
- approved local market/currency and participant profile;
- accessibility-related time/cost and in-person travel where applicable;
- cancellation/no-show and withdrawal treatment disclosed before consent;
- participant versus specialist professional-review effort;
- flat amount independent of completion, performance or favorable feedback.

Decision pending: amount, currency, payer, method, tax/administrative handling, cancellation window and withdrawal proration. No value is invented. Without approval and funds, recruitment cannot start.

## Data inventory and separation

| Domain | Candidate data | Separation and access |
|---|---|---|
| identity/contact | name/contact/channel/eligibility mapping | recruitment owner + Privacy Owner only |
| administrative | payment status and minimum required payment data | payment owner; separate from evidence |
| consent | consent version/choices/date/collector | Privacy Owner; participant-code link |
| session evidence | code/group/versions/tasks/actions/notes/assistance | moderator/note taker during session; Evidence Custodian after QC |
| specialist evidence | reviewer identity/competence/conflict/scope/findings | Evaluation/Evidence Owners |
| synthesis | de-identified observations/findings/limitations | authorized synthesis team/Council |
| final report | approved de-identified decisions | governed repository only after privacy review |

Raw notes, identity, contact, payment and consent records are prohibited from this repository.

## Storage model requirements

No real system is selected. Future storage must provide:

- accountable owner and approved jurisdiction/location class;
- encryption in transit/at rest as applicable;
- least-privilege named access and access review;
- separate containers for identity, administration and research evidence;
- export/version/integrity controls;
- backup inventory and deletion propagation;
- incident logging/containment/notification;
- participant-code mapping isolated from notes;
- repository/public-link prohibition;
- deletion evidence and legal-review exception log.

Unapproved personal drives, email threads, chat transcripts and shared public links are invalid storage.

## Retention recommendation

Accept the bounded candidate with clarifications:

- mapping/contact/payment: delete within 30 days after last authorized session and compensation/withdrawal reconciliation, unless a documented obligation requires a scoped exception;
- consent record: retain only for the period approved by privacy/applicable review; decision remains pending because it may differ from contact mapping;
- pseudonymized raw notes/specialist records: delete 90 days after Council evaluation decision, absolute maximum 180 days from collection;
- approved de-identified synthesis/final report: governed knowledge lifecycle, with provenance and privacy review;
- recordings: none;
- backups: same deadlines, with documented propagation or cryptographic/unrecoverable deletion model.

Every exception records category, reason, authority, new expiry and affected participant notice. If applicable review cannot approve these periods, launch remains blocked.

## Data handling workflow

```text
Session or Review
→ Raw Notes in approved private storage
→ Same-day Quality Check
→ Pseudonymization and minimization
→ Observation Set
→ Interpretation
→ Finding
→ Synthesis
→ Recommendation
→ Council Decision
→ Retention / Deletion evidence
```

`Raw Notes != Finding != Decision`. Identity/payment/consent follow separate administrative flows and never enter synthesis by default.

## Access, export and deletion

Access is role-based, time-limited and removed after duty. Exports inherit classification, owner and expiry; local copies are prohibited unless explicitly registered. Deletion covers primary copies, exports, caches/backups and participant mapping. De-identified synthesis cannot be called anonymous unless re-identification risk has been assessed.

## Incident response

| Incident | Immediate action | Owner/escalation | Evidence/reauthorization |
|---|---|---|---|
| withdrawal | stop task/contact; confirm requested scope | Moderator → Privacy/Evaluation Owner | quarantine/delete per consent; assess reuse |
| distress | stop, offer break/withdrawal/support route | Moderator | minimum safety note; no task continuation |
| accessibility failure | stop affected task/session | Moderator → Accessibility Reviewer | record medium barrier, not participant failure; revalidate |
| privacy/unauthorized disclosure | stop collection, contain access | Privacy Owner → Council/applicable authority | preserve minimum incident evidence; invalidate affected data |
| renderer failure/wrong version | stop and freeze notes | Prototype Custodian/Evaluation Owner | assess validity; reauthorize environment |
| moderator deviation | pause; label affected records | Evaluation Owner | independent review; invalidate if answer taught |
| data loss | freeze synthesis and access | Evidence/Privacy Custodians | recover only approved backup; report gaps |
| capability confusion | neutral corrective disclosure; stop if persistent | Moderator/Security Reviewer | mark overclaim observation; review disclosure |

No incident procedure is executed here.

## Privacy minimization and participant rights

Collect functional access need, not diagnosis; adult confirmation, not birth date; broad profile, not employer/revenue; participant code, not public identity. Do not collect credentials, customer/vehicle/messages, medical details, hidden telemetry or secondary-use consent bundles.

Future process must provide accessible routes to ask questions, withdraw and exercise approved access/deletion rights without exposing other participants. Compensation cannot be withheld to discourage withdrawal.

## Closed and open decisions

Closed as proposal: no recording; paraphrase-only quote baseline; separated data domains; raw-data repository prohibition; bounded raw-note retention recommendation; incident categories/workflow.

Open/blocking: legal/applicable review; consent artifact and collection mechanism; consent-record retention; storage system/jurisdiction/access; compensation details/funds; named owners; withdrawal cutoff; incident contacts and explicit launch authorization.

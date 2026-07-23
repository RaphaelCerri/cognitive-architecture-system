---
schema_version: 0.1.0-experimental
id: ARP-0009-E35
kind: knowledge
knowledge_type: research_evidence
title: C-lite Evidence, Findings and Synthesis Framework
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E24
  - type: related_to
    target: ARP-0009-E33
---

# C-lite Evidence, Findings and Synthesis Framework

## Natureza and boundaries

Framework documental para capturar e sintetizar evidência futura sobre o protótipo C-lite `1.0`. Não contém observações, findings ou resultados de pessoas/reviews.

```text
Observation
!= Interpretation
!= Finding
!= Recommendation
!= Decision
```

Every record carries protocol, prototype, renderer, task and method versions. Missing, contradictory and invalidated evidence remains visible.

## Evidence capture fields

| Field | Rule |
|---|---|
| record_id | future sequential opaque ID; not personal identifier |
| participant_code/group | pseudonym and A/B; mapping stored separately |
| session/review version | protocol, prototype, content, renderer/environment and consent versions |
| task / journey / variant | T-01–18, J1–J6 and applicable SV |
| requirement / PQ / HP / claim | explicit IDs; HP remains hypothesis |
| method | moderated task, probe, first click, walkthrough or named review |
| observation | what happened/was stated, without causal conclusion |
| action/path | selected link/state sequence when relevant |
| quote_excerpt | optional, consented, minimal and de-identified; paraphrase default |
| assistance | A0–A3 and exact reason |
| completion | completed / completed_with_help / blocked / stopped / omitted |
| misunderstanding | participant interpretation in context |
| interpretation | analyst explanation, labeled and attributable |
| evidence_status | available / partial / contradictory / invalidated / missing |
| severity/confidence | qualitative rubric below with rationale |
| limitation | medium, scenario, order, moderator, profile or data issue |
| evaluator | accountable role/person code |
| timestamp | approved granularity; no hidden telemetry |
| consent/privacy reference | artifact/version, never sensitive consent content |

No database or executable schema is created. Raw records must remain in approved private storage; only de-identified synthesis may enter governed documentation.

## Claim-evidence matrix

For EC-01–09, synthesis must report:

- supporting, contradicting and missing records;
- participant group/task/method/version;
- specialist evidence separately;
- observed recurrence without population prevalence language;
- limitations and confidence;
- affected requirement/PQ/HP;
- blocker status;
- recommended next decision.

One task completion cannot validate a claim. Participant statement, action, expert judgment and normative requirement are distinct evidence classes and are not silently aggregated.

## Finding categories

`comprehension`, `discoverability`, `authority`, `state`, `terminology`, `content`, `accessibility`, `security_representation`, `recovery`, `evidence`, `return_journey`, `prototype_limitation`, `research_protocol_issue`.

A finding may have multiple categories but one primary category. Accessibility/security findings describe the representation or method unless separately authorized evidence supports more.

## Severity rubric

| Level | Qualitative rule | Typical consequence |
|---|---|---|
| blocker | prevents critical task/consent/access, enables material authority error, exposes sensitive data or creates false runtime/security belief | stop affected work; Council review before continuation |
| material | causes consequential misunderstanding or recovery failure across a journey; workaround unreliable | targeted prototype/protocol revision and revalidation |
| minor | local friction with safe, discoverable workaround and no authority/safety effect | backlog or targeted clarification |
| observation | context/preference without demonstrated task/risk effect | preserve; no automatic action |

Rationale considers task blockage, misunderstanding impact, journeys, workaround, recurrence, authority/security, accessibility, recovery and confidence. No arithmetic or aggregate universal score.

## Confidence

`low`: single/ambiguous/limited observation or major method limitation.
`medium`: coherent evidence across more than one relevant record/method with limitations.
`high`: convergent scoped evidence including appropriate specialist/user evidence and no unresolved material contradiction.

High confidence remains scoped to versions, participants, tasks and method. Normative requirements do not need participant recurrence to remain blockers.

## Findings register

| Field | Meaning |
|---|---|
| finding_id | `CLF-###` future identifier |
| category | primary + secondary |
| observation_refs | immutable evidence references |
| interpretation | bounded explanation |
| affected participants | pseudonymous group/count description, never public identity |
| requirement / claim / PQ / HP | trace targets |
| task/journey/variant | affected scope |
| severity / confidence | level plus rationale |
| contradiction | competing evidence or interpretation |
| proposed_action | unchanged, revise, reopen, targeted evidence or stop |
| owner | accountable role/person after naming |
| status | proposed / reviewed / accepted / rejected / superseded |
| revalidation_need | version/task/method target |
| decision_ref | Council decision when one exists |

Status never converts a finding into a decision. A rejected recommendation does not delete its evidence.

## Synthesis protocol

1. Verify entry evidence, versions, consent references and protocol deviations.
2. Separate raw observation, participant statement, moderator note and specialist finding.
3. Map each valid record to task/PQ/HP/claim/requirement.
4. Mark missing, invalidated and contradictory evidence.
5. Draft interpretations independently by evaluation owner and synthesis lead where feasible.
6. Compare Group A/B descriptively without statistical claims.
7. Triangulate methods; do not count expert review as participant evidence.
8. Classify candidate findings and severity with rationale.
9. Run privacy/de-identification and accessibility/security-boundary review.
10. Preserve disagreements; do not force consensus.
11. Produce recommendations with explicit affected decision.
12. Council accepts/revises/rejects recommendations and records rationale.

Quotes are illustrative evidence, not votes. Frequency language uses exact scoped counts only when privacy-safe and never implies prevalence.

## Contradictory evidence

Register contradiction type: participant-participant, group-group, action-statement, expert-participant, method-method or evidence-requirement. Report conditions and plausible explanations as hypotheses. Seek targeted evidence only when it can change a decision within budget; otherwise leave unresolved.

## Decision rules

| Outcome candidate | Evidence condition | Authority effect |
|---|---|---|
| proceed unchanged | no blocker; claims sufficiently addressed for the bounded decision; limitations acceptable | Council may close evaluation; does not authorize Stage 3 |
| revise prototype | material/blocker issue attributable to prototype and remediable | separate prototype-change authorization/version |
| reopen Stage 1 | scenario/requirements/authority baseline materially invalid | Council reopens documentary baseline |
| request targeted evidence | decision-relevant contradiction/missing evidence with bounded method | separate targeted plan within remaining budget |
| stop/redirect | ethics/privacy/access/authority risk or construct invalid | no further evaluation under this proposal |
| prepare Stage 3 proposal | only after evaluation closure and explicit Council choice | proposal only; no implementation authorization |

No threshold, score or automated rule takes the decision.

## Iteration and revalidation policy

Maximum two future evaluation cycles:

- Cycle 1: authorized baseline sessions/reviews, evidence validation, synthesis and blocker identification.
- Cycle 2: only after targeted remediation, new prototype/protocol version, change log and named revalidation target.

Cycle 2 cannot be general polish, sample inflation or repetition without decision value. Changed areas plus affected upstream/downstream claims are revalidated. Unaffected evidence may be reused only when version/context/validity remain explicit.

## Evidence invalidation

Invalidate or scope down records after material change to prototype, scenario, actor, group, task, claim, authority, renderer, recording, storage, consent, compensation, accommodation, specialist scope or method. Also invalidate for protocol drift, wrong version, missing consent reference, evidence-capture failure, privacy incident or moderator teaching the answer.

Invalidated evidence remains auditable but cannot support readiness.

## Synthesis outputs and limitations

Future outputs: de-identified evidence matrix, findings register, contradiction register, remediation recommendations and readiness recommendation. They cannot claim statistical representativeness, causal effect, product validation, accessibility conformance, security enforcement, performance or implementation readiness.

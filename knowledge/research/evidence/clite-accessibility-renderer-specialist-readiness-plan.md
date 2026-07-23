---
schema_version: 0.1.0-experimental
id: ARP-0009-E39
kind: knowledge
knowledge_type: research_evidence
title: C-lite Accessibility, Renderer and Specialist Readiness Plan
status: experimental
version: "1.0-proposal"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E31
  - type: related_to
    target: ARP-0009-E34
---

# C-lite Accessibility, Renderer and Specialist Readiness Plan

## Natureza

Documentary comparison and readiness gate. No renderer was installed, opened, tested or authorized; no accessibility or specialist review occurred. Recommendations remain candidates until the exact versions/environment pass review.

## Renderer decision matrix

| Candidate | Strengths | Limitations/risks | Disposition |
|---|---|---|---|
| VS Code built-in Markdown Preview | local/offline possible; exact repository file; headings/links; no extra install in controlled environment; deterministic commit/reset | editor chrome and developer burden; focus/link/back behavior; accessibility/telemetry/extensions/version unknown | **selected candidate for validation**, not use |
| Obsidian | local graph-free Markdown navigation; readable preview | installation/config/plugins; `.obsidian` contamination; participant burden; exact accessibility unknown | not selected; no repository change |
| GitHub/GitLab renderer | familiar browser surface, commit/version links | network/account/telemetry/privacy; external availability; link/reset behavior | not selected |
| static Markdown viewer | potentially low chrome/offline | unspecified product/version; installation/supply-chain and semantics vary | candidate class only, not selected |
| trusted browser-based renderer | browser accessibility potential | hosting/network/telemetry/security and source fidelity need proof | **backup candidate**, after specific approval |
| PDF export | portable/offline/static | interaction, reset, focus, reflow and state navigation degraded | fallback material only, not equivalent prototype |
| other approved local representation | may satisfy accommodation | revalidation and scope-change risk | requires separate Council decision |

Selection rationale: controlled local VS Code preview best preserves prototype `1.0`, version fidelity, internal navigation, offline use and no new repository installation. This is a validation target, not evidence of adequacy. If it fails a critical task/access gate, disposition becomes `inadequate`; do not substitute frontend.

## Renderer limitations and unknowns

- exact VS Code/Markdown engine, OS and extension state are unfrozen;
- built-in versus extension-provided preview must be distinguished;
- keyboard focus visibility, heading navigation, back/reset and link target context are unverified;
- zoom/reflow, high contrast, reduced motion, screen-reader output and remote-control behavior are unknown;
- editor navigation may reveal repository paths/ontology or create participant burden;
- extensions, update checks, remote links, telemetry and workspace trust need isolation;
- controlled-device mode may not match participant assistive setup;
- no cross-browser or product compatibility claim follows.

Any extension requirement, external request, missing semantic path or hidden telemetry is an invalidation/review trigger.

## Pre-session renderer validation protocol

Run only after separate authorization, with Accessibility Reviewer, UX Reviewer and Prototype Custodian:

1. record prototype/content/annotation commit hashes;
2. record renderer product/version/build, OS, device, browser if any, extensions and trust/network settings;
3. verify no file modification, hidden external request or unauthorized telemetry;
4. open exact prototype and confirm all headings/SV anchors/26 internal targets;
5. exercise T-01–18 main/return path and deterministic reset;
6. verify keyboard-only entry, link activation, back/reset, focus visibility and no trap;
7. verify heading hierarchy, labels, reading order and state text without color/motion;
8. verify approved zoom/reflow/high-contrast conditions without task loss;
9. inspect annotation separation and repository-path leakage;
10. run screen-reader walkthrough only when scope/competence/environment are authorized, recording AT/version;
11. test remote delivery/control only if selected;
12. classify each task/profile `pass`, `pass with accommodation`, `blocker` or `not assessed`;
13. issue signed version-scoped recommendation.

No validation is executed in this slice.

## Renderer acceptance and invalidation

Accept only if critical paths work for approved participant profiles/accommodations, state/authority text remains clear, reset is deterministic and environment/privacy controls are documented. A critical keyboard/reading-order/task blocker or capability-misleading renderer means `Not Ready`.

Invalidate after prototype/content/annotation hash change, renderer/OS/browser/extension update, delivery-mode change, telemetry/network change, accommodation/profile change, security incident or failed reset/link.

## Accessibility accommodations process

1. Invitation states accommodations are available.
2. Screening asks only functional need/preferred format, voluntarily.
3. Accessibility Reviewer maps need to renderer/session requirements without diagnosis.
4. Evaluation Owner confirms feasible format, time, device/input, communication and support.
5. Participant confirms arrangement before consent/scheduling.
6. Moderator rechecks access before tasks and offers breaks/extra time.
7. Note Taker labels renderer/access limitation separately from participant behavior.
8. If equitable access cannot be offered, pause/cancel/adapt only through approved change; never attribute failure to participant.

Candidate accommodations: accessible consent/material, zoom/reflow, keyboard, approved screen reader/environment, captions for live audio, breaks, additional time, alternate communication, flexible scheduling, support-person rule and no-recording alternative (already baseline).

Accommodation does not reduce compensation, force disclosure or establish conformance.

## Specialist review operations

| Review | Input/scope/method | Duration ceiling/output | Independence/blocker authority |
|---|---|---|---|
| Content | E29/E30/E33; pt-BR proposition, tasks, disclosure, authority/state/evidence terms; structured review | up to 90 min; versioned findings | reviewer not sole author; terminology blocker escalated |
| UX | E30/E33/E37; six journeys, discoverability, recovery/return; cognitive walkthrough | up to 120 min; task/path findings | prototype creator not sole reviewer; critical task blocker |
| Accessibility | E30/E31/E34/E39 + exact renderer; keyboard/focus/reflow/cues/accommodations | up to 120 min; gate report | no conformance claim; critical access blocker stops |
| Security/Authority | E30/E31/E33/E38; approval/capability/data/disclosure/incidents | up to 90 min; representation findings | no enforcement certification; authority/privacy blocker |
| Architecture | E22/E30/E33; state families/simulation/runtime boundary/version | up to 90 min; boundary findings | no stack choice; runtime conflation blocker |

Each review records reviewer identity/competence, conflict, versions, claim/scope, method, observation/evidence, interpretation, finding/severity, limitation, recommendation and decision authority. Reviews precede participant sessions; a reviewer recommendation cannot launch or remediate automatically.

No reviewer is named and no review is executed.

## Specialist checklist

- scope and input versions frozen;
- reviewer identity, competence and conflict approved;
- method and duration bounded;
- observation separated from finding;
- evidence and affected claim/PQ/task cited;
- severity/confidence rationale;
- limitations and dissent preserved;
- blocker owner/escalation identified;
- recommendation distinguished from Council decision;
- revalidation target stated.

## Accessibility and renderer incident handling

On focus/keyboard/reading-order failure, wrong version, inaccessible consent, AT incompatibility, remote-control failure, privacy/telemetry issue or participant confusion: stop affected activity, preserve minimum authorized notes, contain exposure, notify Evaluation/Accessibility/Privacy Owners, classify medium versus protocol limitation, invalidate affected evidence and require reauthorization before restart.

## Readiness

Decision framework, selected/backup candidates, validation protocol, accommodations process and five specialist operations are closed documentally. Exact renderer/environment, gate evidence, named reviewers, conflicts and accommodations capability are open blockers. Therefore renderer/specialist readiness is `Not Ready`.

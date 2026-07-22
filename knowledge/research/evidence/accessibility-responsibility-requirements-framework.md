---
schema_version: 0.1.0-experimental
document_role: research_framework
title: Accessibility Responsibility and Requirements Framework
status: pending_review
created_at: 2026-07-22
related_programs: [ARP-0009, ARP-0007]
language: pt-BR
---

# Accessibility Responsibility and Requirements Framework

## Propósito e fronteira

**[Decisão]** Comparar como access needs tornam-se requirements, responsibilities, tests e evidence ao longo do product lifecycle. Não é schema, RACI definitiva, checklist, legal determination ou process implementation.

```text
Access Need → Barrier Risk → Accessibility Requirement
→ Experience Decision → Implementation Responsibility
→ Test Method → Evidence → Residual Risk
```

Cada arrow exige traceability; technique não substitui requirement e test result não substitui decision/evidence scope.

## Requirement candidate

Um requirement proporcional pode registrar conceitualmente:

- source e epistemic/legal class;
- affected users/access need, sem diagnosis assumption;
- product/task/content/platform context;
- barrier, harm e priority rationale;
- normative basis/version/jurisdiction when applicable;
- desired outcome/acceptance behavior;
- responsible disciplines e implementation implications;
- test methods/environments and expected evidence;
- exceptions, owner, expiry e residual risk;
- dependencies, change impact e evidence freshness.

**[Hipótese]** Requirement precisa expressar outcome/barrier prevention; implementation technique fica separada para permitir platform evolution.

## Lifecycle responsibility map

| Camada | Responsabilidade primária candidata | Evidence produzida | Gap a evitar |
|---|---|---|---|
| Discovery | identify audiences, contexts, applicable obligations, barriers, research gaps | assumptions, access-needs evidence, risk/questions | accessibility added after scope |
| PRD | product outcomes, covered users, applicable requirements/constraints, success and risk | requirement/source/priority | vague “must be accessible” |
| Experience Architecture | tasks, flows, states, alternatives, time/recovery and complete process | traceable behavior decisions | happy path only |
| IA/navigation | semantics, labels, orientation, findability and content order | IA/navigation rationale and tests | visual map without reading/focus order |
| Content Design | clear labels/instructions/errors, alternatives, media/doc ownership, localization | content review and alternative assets | component expected to fix content |
| Visual/Design Language | contrast/color independence, focus, type/zoom/reflow, target/motion/modes | decision/constraint coverage | palette screenshot as proof |
| Design System | semantic/keyboard/focus/state/content contracts, limitations and consumer duties | component/pattern documentation and scoped tests | “accessible by default” claim |
| Component/Pattern | implemented contract and complete task behavior | unit/integration/manual/AT evidence | isolated component treated as flow |
| Frontend Architecture | native/platform semantics, routing/focus/live updates, user settings and compatibility | architecture mapping, compatibility scope | framework convention as accessibility |
| Backend/integration | data/state/errors/time/auth/docs/media support | API/state/recovery evidence | inaccessible error/time behavior |
| QA/evaluation | risk-based matrix, reproducible findings, regression | results/environment/severity | tool score only |
| Release | evidence completeness, exceptions, critical-flow review and approval | release decision and residual risk | ship by silence |
| Operations/support | barriers, incidents, feedback, remediation, revalidation | production/issue history | ownership ends at release |

No artifact/type or mandatory ceremony is canonized.

## Discipline responsibilities

- **Product/leadership:** scope, resources, priorities, accountable owner, applicable review and residual-risk acceptance authority.
- **UX research/users:** direct evidence with consent, compensation, privacy and representation limits.
- **Experience/IA:** task, state, orientation, alternatives, recovery and complete-process requirements.
- **Content:** labels, instructions, errors, plain/context language, alternatives, localization, documents/media.
- **Visual/Design System:** reusable constraints/contracts and limitations, not consumer conformance claims.
- **Frontend/backend:** realized semantics, behavior, integration, error/time/authentication and platform compatibility.
- **QA/accessibility reviewer:** independent, reproducible evaluation across required environments.
- **Security/legal/privacy:** joint constraints, jurisdiction/applicability and sensitive-data/exception review.
- **Operations/support:** barrier intake, assisted paths, issue ownership, monitoring and remediation evidence.

## Shared-responsibility examples

| Concern | Shared owners | Contract questions |
|---|---|---|
| focus order/management | Experience, Design System, frontend, QA | where should task resume; what triggers movement; how verified? |
| accessible name | content, component, consumer, frontend | who supplies label; visible/programmatic consistency; localization? |
| validation messages | product, content, frontend/backend, QA | prevention, association, summary, preservation and recovery? |
| timeout/session | product, security, frontend/backend, content | necessity, warning, extension, autosave, reauth/recovery? |
| captions/media | content owner, procurement, platform, QA | accuracy, synchronization, language, publication lifecycle? |
| documents/exports | product/content, generator owner, QA | semantic source, generation, validation and remediation? |
| charts | data/product, design, frontend, content, QA | summary, underlying data, interaction and update behavior? |
| consent/authentication | legal/security/product/experience/content | informed choice, alternatives, accessible authentication, explainability? |
| dynamic status | product/experience/frontend/QA | urgency, announcement, focus, duplicate suppression and recovery? |

## Requirements by interaction domain

### Semantics

Specify structure/purpose, language/title, reading order, relationships, control name/role/state/value and status exposure. Prefer appropriate native platform semantics; custom abstraction inherits responsibility for behavior and compatibility.

### Keyboard, pointer alternatives and focus

Specify complete task without required pointer path, logical/visible focus, no traps, composite navigation, shortcut conflicts, escape/cancel, drag alternatives and focus restoration. Switch/voice/external keyboard applicability depends on platform/users.

### Visual and responsive

Specify information independent of color, applicable contrast, resizing/reflow, target/spacing, focus not obscured, user styles/high contrast/forced colors, content at extremes and no loss across orientation/container changes.

### Content/forms

Specify persistent labels, instructions, input purpose, grouping, understandable errors, correction, data preservation, alternative media/formats, localization and generated-content responsibility. Plain language is contextual, not a universal reading score.

### Navigation/dynamic state

Specify orientation, consistent identification, current location, route/step change, loading/streaming/progress/error/completion and non-disruptive announcements.

### Motion/time/authentication

Specify flash/motion control and equivalent feedback; timing necessity/warnings/extensions/preservation; authentication without avoidable cognitive/sensory barriers, compatible with password managers/copy-paste where applicable.

### Data/documents/mobile

Specify accessible alternative/underlying data for complex visuals; semantic generation/validation for downloads; platform screen readers, scaling, gestures, touch, keyboards and system preferences for mobile.

## Component accessibility contract candidate

| Dimension | Producer responsibility | Consumer responsibility | Evidence candidate |
|---|---|---|---|
| purpose/semantics | supported role/use and contraindications | choose appropriate component/context | inspection + AT mapping |
| accessible name/content | expose label/description contract | supply meaningful/localized content | content + implementation review |
| keyboard/focus | base interactions, entry/exit, states | compose without breaking order/restoration | keyboard protocol |
| states/announcements | expose operational states correctly | drive states and messages accurately | state matrix/manual/AT result |
| visual/modes | constraints for contrast/focus/zoom/reflow | preserve supported themes/customization | mode/viewport tests |
| motion | purpose and reduced behavior | avoid incompatible custom effects | preference/manual check |
| known limitations | publish environment/version gaps | assess fit and mitigate | issue/test history |
| version/evidence | maintain contract, changes, tests | pin/update/retest modified use | release/migration record |

Accessible base component can be used accessibly or inaccessibly. Consumer content, composition, state, integration and complete flow remain material.

## Pattern/flow contract

Pattern accessibility asks whether the complete task works across entry, alternatives, errors, interruption, permissions, time, completion and recovery. Required questions:

- can users perceive current context and required action?
- can all applicable inputs operate the task?
- are alternatives equivalent rather than second-class?
- are state/authority/consequence understandable?
- do errors preserve data and support correction?
- are security/privacy checks usable with AT/access needs?
- can users pause, cancel, resume, obtain support or human takeover?
- do final artifacts/documents remain accessible?

Apply to authentication, onboarding, checkout, search/filter, approvals, destructive actions, upload, collaboration and AI/agent workflows.

## AI-native responsibility map

- **Model/output owner:** structure, language, alternatives and uncertainty/provenance policy; cannot guarantee generated-content accessibility.
- **Orchestrator/agent owner:** state, tool authority, progress, cancellation, approval and recovery semantics.
- **Experience/frontend:** navigable streaming, controlled announcements, keyboard review/edit and long-response navigation.
- **Tool/file owner:** accessible inputs/outputs and generated document evidence.
- **Human reviewer:** consequential action, content alternative and exception review where risk requires.
- **Operations:** barrier reports, failed actions, drift and model/tool changes.

## Traceability and change propagation

```text
Need/Source ↔ Requirement ↔ Experience/Design Decision
↔ Contract/Implementation ↔ Test ↔ Evidence/Issue
↔ Release/Exception ↔ Production Feedback
```

Changes in law/standard, content, language, design token/component, dependency, browser/AT, platform or flow invalidate only evidence whose scope is affected—but impact must be discoverable. Screenshot diff and automated pass do not establish behavioral preservation.

## Discovery proportionality

Minimum candidate for low-risk/simple work: applicable scope check, critical tasks/users, predictable barriers, named owner, basic test/evidence plan. Add direct user research, multi-platform/AT/language coverage, legal/security review and formal exception/release gates as risk, novelty, public reach or criticality increases.

## Exceptions and responsibility gaps

Exception candidate: requirement, barrier/affected users, reason, alternatives, mitigation, evidence, owner, independent approval, expiry, residual risk and remediation plan. Implementer cannot unilaterally approve their own material exception. Third-party/legacy/disproportionate-burden claims require current factual and legal review.

Gap detection:

- requirement with no accountable owner or test;
- component claim with no consumer duty;
- test failure assigned to “accessibility team” without product owner;
- document/media/backend behavior excluded from frontend scope;
- exception without expiry/remediation;
- production barrier without link to requirement/component/release.

## Anti-patterns

Vague PRD line; accessibility persona stereotype; design handoff without states/content; native semantics erased by wrapper; component team claiming end-to-end conformance; QA only at release; security or legal as blanket veto; accessibility reviewer owning all remediation; users recruited as certification; production support disconnected from engineering.

## Recommendations e open decisions

Recommendations: outcome-based requirements; shared but explicit accountability; native/platform-first realization; complete-flow contracts; proportional independent review; evidence with scope/version; expiring exceptions; production feedback loop.

Council decisions: artifact identity/authority; minimum package by risk; RACI/approval; legal-review triggers; cross-ARP boundary; evidence retention/freshness; component versus consumer responsibility; critical-flow definition; exception authority.

## Fontes e proveniência

Acesso em 2026-07-22:

- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- WCAG2ICT: https://www.w3.org/TR/wcag2ict-22/
- WAI-ARIA/APG: https://www.w3.org/WAI/standards-guidelines/aria/
- WAI Accessibility, Usability and Inclusion: https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/
- WAI Involving Users: https://www.w3.org/WAI/test-evaluate/involving-users/
- WHO ICF: https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health
- UN CRPD: https://treaties.un.org/doc/Publication/CTC/Ch_IV_15.pdf
- Apple accessibility guidance: https://developer.apple.com/design/human-interface-guidelines/accessibility
- Android accessibility principles: https://developer.android.com/guide/topics/ui/accessibility/principles

Limites: responsibility and requirement fields are hypotheses; no schema, organizational assignment, implementation or test was created.

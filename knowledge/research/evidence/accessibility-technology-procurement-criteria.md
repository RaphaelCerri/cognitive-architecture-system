---
schema_version: 0.1.0-experimental
document_role: research_selection_criteria
title: Accessibility Technology and Procurement Criteria
status: reviewed
reviewed_at: 2026-08-07
review_outcome: accepted_as_experimental_evidence
acceptance_scope: experimental_evidence
knowledge_maturity: experimental
review_basis: ASSESS-0003
created_at: 2026-07-22
related_programs: [ARP-0009, ARP-0007]
language: pt-BR
---

# Accessibility Technology and Procurement Criteria

## Escopo e decisão

**[Decisão]** Preparar critérios para futura pesquisa de technologies/libraries. Nenhuma library, framework, component set, tool ou supplier foi profundamente avaliado, selecionado, aprovado, instalado ou benchmarked.

```text
Vendor claim != requirement coverage != test evidence
!= consumer implementation != product conformance
```

Section 508 guidance treats procurement, testing and re-testing over contract versions as lifecycle responsibilities. W3C does not endorse tools in its tools list and says descriptions may be supplier-provided/unverified. These are institutional lessons, not procurement policy adopted here.

## Intake: fit before accessibility claim

Record future candidate identity/version/license/source, intended role, supported platforms, architecture, maintenance/governance, consumers and integration boundary. First ask whether it fits product/task/content/security/performance/maintenance needs; then assess accessibility model. “Accessible” cannot rescue technology that is semantically wrong for the product.

## Claim taxonomy and required substantiation

| Claim | Minimum questions | Why insufficient alone |
|---|---|---|
| accessible | what scope, version, standard/level, components/states? | undefined marketing term |
| accessible by default | which defaults and what consumer changes break them? | content/composition/integration remain external |
| WAI-ARIA compliant | which normative ARIA requirements and host behavior? | ARIA is not full accessibility/WCAG |
| WCAG compliant | exact version/level/scope/pages/processes/evaluator/date? | component/library rarely controls complete process |
| keyboard accessible | tasks, keys, focus, composites, escape/restoration? | partial interaction may block flow |
| tested with screen readers | AT/browser/OS/version/language/states/results? | one combination is not universal compatibility |
| production ready | consumers, incidents, support, security, evidence? | maturity claim is not access evidence |
| VPAT/ACR available | edition, product version, criteria/findings/evidence? | self-report scope/remarks must be verified |

Reject claim without source, version, coverage, test environment, evidence, limitations and consumer responsibilities.

## Semantic/native model

Evaluate:

- appropriate native elements/platform controls before custom reconstruction;
- accessibility tree/role/name/state/value and relationship fidelity;
- APIs for labels/descriptions/errors/status without duplicate/silent output;
- DOM/visual/reading order and server/client rendering effects;
- behavior when scripts/styles fail or content varies;
- custom elements/wrappers that erase native semantics;
- arbitrary slots/markup and invalid composition prevention;
- document/media/chart outputs beyond visible UI.

Evidence: specification/implementation inspection plus representative rendered/AT results. Documentation-only claim is insufficient.

## Keyboard, focus and input criteria

- complete documented keyboard patterns and platform conventions;
- sequential order, visible/not-obscured focus, no traps;
- composite navigation, shortcut conflicts, escape/cancel and restoration;
- route/dialog/popover/error/async focus guidance;
- alternatives to drag, complex gesture, hover and pointer-only actions;
- external mobile keyboard, switch/voice implications where supported;
- consumer override/extensibility without breaking behavior.

## State, content and flow coverage

Look for default, focus, selected, expanded, disabled/readonly, loading, empty, error, validation, permission, offline/sync and async status where applicable. Verify real/localized/extreme content, persistent labels, errors/instructions, generated content and complete patterns—not showcase happy paths.

Component evidence does not cover onboarding/authentication/checkout/approval/AI flow unless the integration and complete process are evaluated.

## Visual, responsive and user-setting criteria

- contrast and color-independent roles across states/themes;
- zoom/text scaling/reflow and content growth;
- focus indication and forced/high-contrast/user styles;
- target sizing/spacing and orientation;
- reduced-motion behavior with equivalent status;
- density/custom theme/brand changes without semantic regression;
- system/platform preferences and accessible personalization;
- documented constraints when customization is unsafe.

## Browser, platform and AT evidence

Require declared support matrix: platform/OS, browser/user agent, AT, version, input, language, viewport/mode and test date. Distinguish designed support, tested support, community report and unknown. Ask how matrix updates follow browser/AT/platform releases and how incompatibilities are disclosed/remediated.

## Testing evidence

Assess whether supplier publishes:

- requirement/rule mapping and protocol;
- automated and manual/keyboard coverage;
- AT/browser/platform matrix and versions;
- component/state/content/interaction coverage;
- known false-positive/negative limits;
- independent/user testing when claimed;
- issue/fix/retest and regression history;
- reproducible examples/artifacts without exposing participants;
- conformance statement scope and date.

Test count/score and absence of open issues are weak without denominator, scope and issue transparency.

## Customization, composition and wrappers

Evaluate supported extension points, semantic slot constraints, consumer-provided labels/content, event/focus ownership, theming/motion, rendering wrappers and fork strategy. A headless primitive may expose more responsibility to consumer; a styled component may constrain visuals but still depend on content/flow. Neither model is inherently more accessible.

Ask which customizations invalidate supplier evidence and whether modifications are detectable/testable. Wrappers can silently alter semantics, order, IDs, events, portals and focus.

## Known limitations and issue governance

Required signals:

- public/available accessibility policy and reporting channel;
- issue triage/severity, owner and response expectations;
- security/privacy-safe disclosure path;
- known limitations/workarounds with affected versions;
- roadmap versus committed fix distinction;
- regression handling, changelog and migration notices;
- deprecated component/version support;
- contributor review competence and release authority.

No known limitations may mean low transparency rather than high quality.

## Maintenance and change risk

Evaluate release frequency/stability, compatibility, breaking-change policy, dependency updates, browser/AT monitoring, component forks, documentation correspondence, tests in CI claimed by supplier, and consumer migration burden. Re-test product integration on updates; inherited supplier evidence is version-scoped.

## Supply chain, privacy and security

Coordinate with ARP-0007:

- source/repository/registry provenance, maintainer identity and release integrity;
- dependencies, scripts, remote assets, fonts/icons/SVG and telemetry;
- arbitrary HTML/content, sanitization boundaries and data exposure;
- accessibility telemetry/preferences as potentially sensitive data;
- vulnerability disclosure, incident/patch process and EOL;
- license/asset rights and update authenticity;
- third-party accessibility overlays/injected scripts with privilege/privacy risk.

Accessible behavior cannot justify unsafe supply chain; security controls cannot create unnecessary access barriers.

## Procurement evidence package candidate

1. product/version/source/intended use and owner;
2. applicable requirements and product access needs;
3. supplier claims with scope and source;
4. architecture/semantic/customization responsibility map;
5. published tests, environments, findings and limitations;
6. independent representative verification plan/results;
7. maintenance/governance/security/privacy/license assessment;
8. integration-specific consumer responsibilities and tests;
9. gaps, mitigations, exception/expiry and residual risk;
10. decision, rejected alternatives, conditions and revalidation trigger.

This is a candidate package, not schema or mandatory tender format.

## Decision matrix candidate

| Dimension | Favorable evidence | Warning |
|---|---|---|
| requirement fit | traceable applicable coverage | generic WCAG badge |
| semantics | native/platform mapping and inspectable behavior | role-heavy abstraction without behavior |
| keyboard/focus | documented complete patterns and tests | “tab works” |
| states/content | realistic/full contract coverage | demo-only happy path |
| AT/platform | current named matrix | “screen-reader tested” without versions |
| customization | bounded responsibilities and invalidation rules | arbitrary override/slot |
| limitations | transparent, versioned and owned | no published issues/unknown scope |
| maintenance | responsive issue/release/migration process | stale docs/forks |
| security/privacy | provenance, dependencies, telemetry controls | injected/remote privileged code |
| consumer burden | explicit feasible implementation/test duties | hidden responsibility transfer |

No weights/score/threshold are approved. High-risk blocker cannot be averaged away.

## Release and contract considerations

Future procurement may condition acceptance on exact version/evidence, remediation SLAs, accessibility issue disclosure, update/retest duties, artifact/document accessibility, support channels, conformance-report accuracy and exit/migration. Legal/procurement specialists must validate language and applicable obligations. Supplier self-attestation is an input, not final product acceptance.

## Overlay boundary

Accessibility overlay/injection claims require independent review of actual barriers, privacy, script privilege, performance, compatibility and user control. An overlay cannot universally repair source semantics, content, task logic, documents, authentication or complete processes; it must not be treated as conformance shortcut.

## AI-generated or AI-assisted technology

Ask whether components/docs/tests were generated; how source/provenance, licensing, semantics, states, security and accessibility were reviewed; whether model/tool changes affect output; and whether hallucinated APIs/claims are independently verified. Visual plausibility and generated test coverage are not evidence of correctness.

## Anti-patterns

Marketing claim as decision; WCAG/ARIA badge without scope; VPAT/ACR accepted unread; demo tested instead of integration; one AT/version; issue count as quality; “accessible by default” transferring hidden duties; customization that invalidates evidence; fork without patches; overlay as universal fix; security/accessibility averaged into score; stale claim after upgrade; catalog popularity replacing evidence.

## Recommendations e future decisions

Recommendations: requirement-first intake; claim substantiation; semantics/behavior inspection; integration-specific verification; explicit consumer burden; lifecycle revalidation; transparent limitations; joint accessibility/security/privacy review; no aggregate score masking blockers.

Council decisions: catalog evidence fields; exclusion/blocker rules; accepted conformance artifacts; independent-test triggers; support matrix; freshness; supplier/consumer responsibility; procurement authority; exception/renewal; ARP-0007 boundary.

## Fontes e proveniência

Acesso em 2026-07-22:

- U.S. Access Board Revised 508 Standards: https://www.access-board.gov/ict/
- Section508.gov procurement guidance: https://www.section508.gov/buy/
- Section 508 ICT Testing Baseline: https://www.section508.gov/test/ict-testing-baseline-portfolio/
- W3C Evaluation Tools disclaimer: https://www.w3.org/WAI/test-evaluate/tools/list/
- WAI-ARIA 1.2: https://www.w3.org/TR/wai-aria/
- APG: https://www.w3.org/WAI/ARIA/apg/
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Apple Accessibility: https://developer.apple.com/design/human-interface-guidelines/accessibility
- Android Accessibility Principles: https://developer.android.com/guide/topics/ui/accessibility/principles
- NIST SSDF: https://csrc.nist.gov/projects/ssdf
- OWASP Third Party JavaScript: https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html

Limites: no supplier/library/tool evidence was assessed; criteria remain candidates for future Council-authorized catalog research.

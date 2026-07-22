---
schema_version: 0.1.0-experimental
document_role: research_risk_assessment
title: Design System Governance and Risk Assessment
status: pending_review
created_at: 2026-07-22
related_programs: [ARP-0009, ARP-0007]
language: pt-BR
---

# Design System Governance and Risk Assessment

## Escopo e boundary

**[Decisão]** Avaliar governance, change, drift, accessibility, security e AI-generated risks de um futuro Design System. Não criar processo definitivo, control implementation, registry, package, policy, schema ou supplier selection. ARP-0007 mantém security architecture/assurance; este relatório fornece riscos específicos de interface/design-system.

## Modelo de responsabilidade candidato

| Papel | Responsabilidade candidata | Não autoriza por si só |
|---|---|---|
| creator/contributor | propor need, evidence, design/spec/implementation change | publish/approve |
| maintainer | triage, quality, compatibility, releases, support e debt | decidir product requirement |
| reviewer | avaliar UX, content, accessibility, platform, security e engineering | substituir accountable owner |
| approver | aceitar/rejeitar dentro de authority e risk | canonizar ontology silenciosamente |
| consumer | usar conforme contract, test context e report findings | fork/override sem provenance |
| product owner | validar task/outcome e accept product exception | redefinir shared contract unilateralmente |

**[Heurística]** Segregation proporcional: creator não deve ser único approver de high-risk component; accessibility/security/legal/brand specialists entram por trigger, não em toda mudança.

## Lifecycle e governance candidates

```text
Need/Evidence → Proposal → Scope/Owner → Multidisciplinary Review
→ Decision → Versioned Release → Adoption/Migration
→ Production Evidence → Maintain/Revise/Deprecate/Retire
```

Cada change deveria registrar purpose, consumers, evidence, alternatives, accessibility/security impact, compatibility, owner, decision, version, migration e validation. Contribution aberta não implica merge; GOV.UK demonstra critérios de useful/unique e teste amplo como orientação institucional contextual.

## Change impact

| Change source | Downstream candidates | Perguntas de impacto |
|---|---|---|
| principle/decision | language, tokens, specs, docs, products | authority mudou? previous decisions invalidated? |
| token/semantic mapping | themes, components, pages, snapshots | quais states/modes/brands/platforms e pinned versions? |
| component contract | consumers, tests, patterns, content | behavior/API/semantics/focus changed? |
| pattern guidance | flows, requirements, analytics | task/recovery/security outcomes changed? |
| accessibility requirement | foundations through complete flows | retrofit, exception e evidence plan? |
| brand | theme/assets/content/products | identity versus accessibility/platform conflict? |
| platform convention | implementation/navigation/inputs | common intent preserved? |
| content rule | components, localization, tests | real/extreme content affected? |

Version pinning reduz surprise, mas cria fragmentation. Automatic update reduz lag, mas aumenta unreviewed blast radius. **[Recomendação]** classificar semantic/behavioral impact, não apenas semver/file diff.

## Exception governance

Exception candidata registra context, unmet need, options, rationale, scope, owner, risk, validation, expiry/review date e upstream potential. Consistency não vence product fit automaticamente; exception sem visibility vira drift.

Tipos candidatos: temporary migration; product-specific; platform-specific; accessibility correction; regulatory/security; experiment. Permanent exception exige reavaliar shared boundary: talvez seja valid variant, distinct component ou evidence contra current system.

## Debt e drift taxonomy

| Drift/debt | Detection signal futuro | Risco |
|---|---|---|
| visual drift | unexplained output divergence | recognition/quality inconsistency |
| token drift | hardcoded/local values e broken mappings | theme/accessibility failures |
| component fork | copied implementation/version gap | security/accessibility regression |
| undocumented variant | behavior without contract | impossible maintenance/testing |
| stale pattern | evidence/requirements changed | task harm |
| documentation mismatch | examples/docs differ from released output | false consumer confidence |
| unused assets/tokens/components | no known consumers | complexity/attack surface |
| version fragmentation | incompatible product pins | costly fixes and migrations |
| accessibility regression | prior outcome no longer holds | exclusion/nonconformance |

Metrics are signals, not targets: adoption percentage can reward inappropriate use; low exception count can hide silent forks; visual uniformity can mask task failure.

## Supply-chain e runtime risks

Future design-system implementation may include packages, build tools, fonts, icons, SVG, third-party scripts, registries and remote assets. Risks:

- compromised or typosquatted package/registry;
- mutable dependency or unverified release provenance;
- malicious theme/token payload or unsafe transformation plugin;
- SVG/script/event handler, remote tracking e data exfiltration;
- unsafe arbitrary HTML/slot/content rendering;
- hidden third-party JavaScript with page/data privileges;
- vulnerable stale fork and inconsistent patch distribution;
- license/provenance loss for fonts, icons, photos and illustrations.

**[Orientação de segurança]** NIST SSDF emphasizes secure environments, decision/risk tracking and component provenance; OWASP identifies arbitrary-code and data-disclosure risks from third-party JavaScript and untrusted files. **[Recomendação]** future controls should include trusted sources, review, integrity/provenance, least privilege, dependency inventory, pin/update strategy, sandboxing/sanitization where applicable and incident response. No control is implemented here.

## Interface trust e deceptive-design risks

- permission-confusing UI: visual availability implies authority that does not exist;
- deceptive disabled/hidden states obscure reason, rights or alternatives;
- brand/auth/payment clone enables phishing or confusion;
- security indicator or badge without verified semantics creates false trust;
- destructive action hierarchy minimizes consequence;
- consent/choice pattern manipulates or obstructs autonomy;
- component analytics/tracking hidden from consumers/users.

Shared components amplify both safety and harm. High-trust patterns need explicit authority, content, states, audit and misuse/contraindication guidance.

## Accessibility governance

Accessibility by construction requires:

- requirements represented in foundations/component/pattern contracts;
- review before release and regression coverage after change;
- keyboard, focus, semantics, names, states and content validation;
- mode/zoom/reflow/high-contrast/reduced-motion testing;
- platform/browser/assistive-technology scope and known limitations;
- consumer responsibilities and modified/forked component warnings;
- issue severity, remediation, release and communication path.

USWDS explicitly warns it cannot predict every accessibility/usability context. GOV.UK requires consumers to check modifications. **[Recomendação]** Never market component as universally “accessible”; state tested scope, evidence, limitations and consumer obligations.

## Brand, mode e platform conflicts

Priority candidate:

```text
law/policy and user safety
→ applicable accessibility/security requirements
→ product need and platform capability
→ governed brand/design decision
→ consistency/preference
```

This is a heuristic, not new Policy. Conflicts require named authority. Brand color may need alternative role/mode; identical component may need native platform form; density preference may be bounded by target/legibility; animation expression must respect reduced motion.

## AI-generated Design System risks

| Failure | Why plausible | Required future evidence |
|---|---|---|
| hallucinated component/API | model completes patterns without repository truth | inventory/contract verification |
| missing states/content | happy-path visual generation bias | state/content matrix review |
| accessibility omission | pixels do not prove semantics/keyboard | implementation and AT tests |
| copied identity/assets | training/reference similarity and weak provenance | originality/rights review |
| invented token relations | naming/value resemblance | resolution/cycle/use validation |
| abstraction/variant explosion | generation is cheap, maintenance is not | recurrence/consumer/owner evidence |
| framework lock-in | generated convention becomes architecture | technology-neutral contract review |
| unsafe code/dependencies | plausible output can hide vulnerabilities | secure SDLC, dependency and code review |
| semantically invalid pattern | polished layout masks task/authority failure | user/task/security evaluation |
| documentation hallucination | claims diverge from implementation | executable correspondence checks |

Appearance consistency is not engineering quality. Generated artifact is proposal/untrusted input until source, authority, behavior, accessibility, security, licensing and tests are verified.

## Evaluation model

### Foundations/tokens

Semantics, resolution, cycles, unused/deprecated values, combinations, contrast, scaling, responsive/platform fit and provenance.

### Components

Purpose, contract, behavior, all applicable states, realistic/extreme content, keyboard/focus/AT, responsive behavior, compatibility and security boundaries.

### Patterns

Task success, comprehension, errors/recovery, accessibility, security/autonomy, context fit and contraindications.

### System

Adoption appropriateness, exception visibility, drift/debt, issue response, migration completion, release reliability, consumer satisfaction and product outcomes. No single score or certification.

## Risk register

| Risk | Likelihood/impact without implementation evidence | Candidate mitigation direction | Residual uncertainty |
|---|---|---|---|
| premature system complexity | medium/high | proportional maturity and proven recurrence | future consumer scale |
| token/component explosion | high/medium | admission criteria, ownership, usage/debt review | thresholds |
| accessibility regression at scale | medium/high | contract + implementation/AT regression + scoped claims | test matrix |
| silent forks/version drift | high/high | inventory, namespaces, pinning, migration/upstream path | decentralized products |
| supply-chain compromise | unknown/high | trusted source, provenance, verification, least privilege | technology not selected |
| deceptive/high-trust misuse | medium/high | pattern guardrails, authority/content review | threat model |
| brand-platform conflict | medium/medium | explicit axes, platform owners, exception record | product portfolio |
| AI-generated plausible defects | high/high if accepted blindly | proposal status, independent reviews/tests | model/tool behavior |
| governance bottleneck | medium/medium | risk-based review, delegated ownership, service metrics | organization design |
| stale documentation/evidence | high/medium | versioned correspondence and expiry/revalidation | tooling/process |

No numeric score is assigned because architecture, consumers and threat model are not selected.

## Anti-patterns

- ownerless system, contribution without decision authority, approval by silence;
- same reviewer for every risk or no specialist triggers;
- releases without consumer impact/migration;
- exceptions and forks hidden;
- adoption/consistency metrics used as quality proof;
- package/theme/icon accepted from untrusted source;
- arbitrary HTML/third-party script treated as visual concern only;
- accessibility claim inherited by consumers without testing;
- brand consistency overriding user safety;
- AI-generated design/code/docs merged because they look coherent;
- deprecation without replacement, inventory or expiry;
- implementation without docs or docs without versioned implementation.

## Recommendations e decisions required

1. **[Recomendação]** Future governance should be product/service ownership, not committee-only documentation.
2. **[Recomendação]** Establish risk-based admission/review and explicit consumer responsibilities.
3. **[Recomendação]** Track bidirectional change impact and visible exceptions before scale.
4. **[Recomendação]** Keep ARP-0007 responsible for security controls/assurance; ARP-0009 supplies interface-specific threats and contracts.
5. **[Recomendação]** Treat accessibility claims as scoped evidence and generated assets as untrusted proposals.

Council decisions remain: ownership model; authorities; contribution/release/deprecation process; exception policy; risk triggers; security/accessibility test scope; versioning; evidence retention; artifact canonicity; governance metrics.

## Fontes e proveniência

Acesso em 2026-07-22:

- GOV.UK Community principles: https://design-system.service.gov.uk/community/community-principles/
- GOV.UK Contribution criteria: https://design-system.service.gov.uk/community/contribution-criteria/
- GOV.UK Extending/modifying components: https://design-system.service.gov.uk/get-started/extending-and-modifying-components/
- USWDS Accessibility: https://designsystem.digital.gov/documentation/accessibility/
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- WAI-ARIA APG: https://www.w3.org/WAI/ARIA/apg/
- NIST SSDF: https://csrc.nist.gov/projects/ssdf
- OWASP Third Party JavaScript Management: https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html
- OWASP File Upload: https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html

Limites: sem supplier/package/tool selection, threat model específico, code, audit, user testing ou operational metrics. Riscos são candidates para revisão, não findings de implementação existente.

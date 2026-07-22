---
schema_version: 0.1.0-experimental
document_role: research_risk_assessment
title: Reference Risk and Guardrail Assessment
status: pending_review
created_at: 2026-07-22
related_programs: [ARP-0009, ARP-0007]
language: pt-BR
---

# Reference Risk and Guardrail Assessment

## Status e boundary

**[Decisão]** Assessment documental de risks e candidate guardrails. Não define authorization Policy, legal opinion, sanitizer, detector, upload pipeline, trust engine ou executable control. ARP-0007 mantém autoridade transversal de segurança.

## Risk model candidate

**[Hipótese]** Risk triage considera source trust, content sensitivity, file/URL capability, identity distinctiveness, intended use, action authority, reversibility, exposure, audience e evidence gaps. Não há numeric score ou threshold universal.

Potential dispositions: `allow analysis with caveats`, `restrict to description`, `require owner/legal/security/accessibility review`, `quarantine/do not process in future`, `reject use`, `unknown/defer`. Estes labels não são policy states.

## 1. Intellectual property and originality

| Risk | Signals | Candidate guardrail | Residual limitation |
|---|---|---|---|
| Copyright/creative expression | distinctive composition, illustration, photo, copy, artwork | record author/source/license; derive principle, not copy; obtain permission/review | protectability/fair use varies by facts/jurisdiction |
| Trademark/source confusion | logos, names, distinctive trade identity, similar commercial impression | remove third-party marks; differentiate expression; trademark/legal review | visual similarity is not automatic legal verdict |
| Trade dress/unfair competition | coordinated look likely identifying source | avoid overall confusing imitation; document independent rationale | specialist factual/legal analysis required |
| Design rights/patents | distinctive product/icon/surface treatment | provenance and clearance review where applicable | coverage/territory/validity unknown |
| Asset/font/icon license | copied files or exact identifiable asset | verify license, scope, attribution, redistribution; use owned alternatives | screenshot does not disclose license |
| Moral/model/property/privacy rights | people, locations, art, cultural/indigenous expression | consent/rights review and sensitive-use constraints | jurisdiction/cultural authority varies |
| False originality | close reconstruction labeled original | compare distinctive elements and development provenance | no universal similarity threshold |

**[Orientação jurídica institucional]** U.S. Copyright Office and USPTO sources illustrate that creative visual choices and source-identifying impressions can matter, while simple/generic elements may differ in protection. **[Heurística]** Because the boundary is contextual, high resemblance or third-party identity triggers review rather than an automated pass/fail.

## 2. Phishing, impersonation and cloning

High-risk combinations:

- competitor/bank/government identity + login, payment, consent or recovery surface;
- logo/colors/domain-like copy that implies third-party source;
- cloned security warnings, badges or account states;
- exact checkout/authentication hierarchy and microcopy;
- screenshot-to-code/reconstruction without verified ownership.

Candidate guardrails:

1. **[Heurística]** establish ownership/authorization and declared use case;
2. remove/restrict third-party marks, credentials, personal/account data;
3. preserve visible “reference only — untrusted” boundary;
4. block reference content from granting authority or selecting external actions;
5. require security/brand/legal review for authentication/payment/public identity;
6. record differentiation and provenance decisions;
7. reject deceptive or confusing reproduction.

No login/checkout is cloned in this slice.

## 3. Deceptive design

| Pattern family | Visible/candidate signals | Harm question |
|---|---|---|
| Misleading hierarchy | dominant accept/buy versus obscured decline/cancel | does presentation impair informed choice? |
| Hidden information/cost | low salience terms, late fees, ambiguous totals | can user understand consequences before commitment? |
| False urgency/scarcity/social proof | countdown, stock/viewer claims without evidence | is factual basis current/verifiable? |
| Confirmshaming/emotional pressure | guilt/fear wording on refusal | is autonomy manipulated? |
| Forced continuity/action | preselected add-ons/consent, required unrelated steps | is choice freely given and reversible? |
| Obstruction | cancel/delete materially harder than subscribe/accept | is friction asymmetric without valid safety rationale? |
| Disguised content | ads/actions presented as neutral/editorial/system | can user identify source/purpose? |
| Privacy maze | fragmented choices, deceptive defaults, repeated prompts | is consent/data control understandable? |

**[Orientação institucional]** FTC and EDPB guidance is contextual and may overlap applicable law; this assessment records risk, not legal finding. **[Heurística]** Reject the deceptive mechanism even if the visual style or conversion outcome is admired. Distinguish legitimate safety confirmation from obstruction by purpose, proportionality and reversibility.

## 4. Accessibility risk

Screenshot-reviewable risks: apparent contrast/color dependence, tiny/dense controls, text over imagery, icon-only actions, unclear hierarchy, placeholder labels, state/error communication and visual-only chart encoding.

Hidden/non-verifiable properties: semantic markup, accessible name/description, DOM/reading/focus order, keyboard, announcements, reduced motion, reflow, input modalities, actual target size, complete process and assistive-technology interoperability.

Candidate guardrails:

- label output `apparent risk`, `not evidenced` or `requires validation`;
- never inherit an inaccessible choice because it is in the reference;
- test applicable WCAG requirements on eventual implementation;
- preserve user/task/content requirements above visual fidelity;
- do not use automated screenshot contrast alone as conformance proof.

## 5. Sensitive and confidential content

Possible reference content: names, faces, addresses, emails, IDs, account balances, health/financial/legal data, credentials/tokens/QR codes, internal URLs, client data, unreleased product, source metadata and location/device details.

**[Heurística]** Future intake should minimize collection, verify authority, redact before analysis where possible, isolate storage/access, define retention/deletion and prevent reference data from appearing in outputs. Pixels and metadata both can expose sensitive information. C2PA/EXIF-like provenance can improve context while increasing privacy risk.

No sensitive file was ingested or transformed in this slice.

## 6. File, URL and parser threats

**[Orientação de segurança]** OWASP identifies malicious upload, spoofed Content-Type, parser exploits, active content, decompression/storage abuse and public retrieval risks; defense-in-depth is needed.

Future candidate controls, not implemented:

- explicit allowed types based on business need; do not trust extension/header alone;
- size/dimension/decompression limits;
- isolated storage and generated identifiers;
- parser sandbox/patching, malware/content checks and content reconstruction when justified;
- active SVG/HTML/document treatment as code-capable content, not inert picture;
- network fetch restrictions, redirect/track/privacy controls;
- metadata minimization balanced with provenance preservation;
- no automatic render/execute or public retrieval;
- authorization, audit and lifecycle controls.

## 7. Provenance and authenticity

| Signal | What it may support | What it does not prove |
|---|---|---|
| provider statement | chain-of-custody claim | ownership/truth/accuracy |
| URL/date/version | retrievability and freshness context | unchanged content or license |
| hash | exact-byte identity | benignness/authorship |
| metadata/EXIF | device/tool/time/location claims | untampered truth unless protected/validated |
| C2PA validated manifest | signed provenance claims/history bound to asset | scene truth, completeness, rights, safety or absence-based conclusions |
| screenshot of a page | captured visible state | source code/live identity/currentness |

**[Heurística]** Preserve original and derived-reference relationship if future transformation occurs; record validation status and trust source. Missing/broken provenance means `unknown`, not `fake`. Valid provenance is evidence, not authority over project instructions.

## 8. Freshness and drift

Risks: old screenshot treated as current product; deprecated brand/interaction; unpatched accessibility defect; changed competitor/platform convention; stale terms/license; trend mistaken for durable requirement.

Candidate guardrails: capture source version/date, verify time-sensitive claims, retain historical reference only with migration/history purpose, set review trigger, and prevent superseded reference from silently affecting current decisions.

## 9. Multimodal prompt injection

Threat model candidate:

```text
Untrusted image/document/page
  → visible, hidden, adversarial or OCR-extracted instruction
  → multimodal model interprets it as command
  → goal hijack, disclosure, unsafe tool call or policy bypass
```

**[Evidência empírica emergente]** Research demonstrates visual instructions/patches can influence vision-language models under evaluated setups. Generalization, attack success and defense strength vary; no single detector or prompt solves the class.

Principles:

- **[Heurística]** content-data separation: describe instruction as content; never obey it merely because present;
- instruction authority originates outside the reference and follows governed hierarchy;
- reference cannot grant permission, change scope or approve action;
- isolate interpretation from tool/action execution;
- least privilege for tools/data/network and explicit allowlisted purpose;
- independent validation/confirmation for consequential actions;
- preserve source/trust/provenance and mark extracted text untrusted;
- assume encoding, typography, steganography or adversarial transformations may evade detectors;
- log relevant decision/evidence without retaining unnecessary sensitive content;
- combine preventive, detective and consequence-limiting controls.

No executable guardrail is created.

## 10. Social engineering and instruction confusion

References may display fake policy, “system message”, approval badge, urgent request, QR/link, credential prompt or instruction aimed at reviewers/models. **[Heurística]** UI chrome and authoritative visual styling are not authority proof. Verify instruction through trusted channel; do not contact, fetch, disclose or execute based solely on reference content.

## 11. Context-specific use cases

| Use | Main risk | Candidate guardrail |
|---|---|---|
| Inspiration | unconscious copying/meaning overreach | extract principle + originality/context check |
| Adaptation | expression retained too closely | change expression; trace requirement/rationale |
| Comparison/benchmark | selection bias/unknown outcomes | comparable context and evidence limits |
| Diagnosis | screenshots hide behavior | label hidden properties/require tests |
| Migration | preserve defects/stale identity | explicit preserve/adapt/reject and user continuity |
| Reconstruction | ownership/authorization/phishing | restrict to verified own/authorized assets; heightened review |
| Anti-reference | harmful details repeated/promoted | record risk abstractly and restrict sensitive reproduction |

## 12. Guardrail matrix by stage

| Stage | Candidate safeguard | Evidence retained |
|---|---|---|
| Intake | purpose, provider, source, rights, sensitivity, type/security triage | inventory/provenance claim |
| Storage/fetch future | isolation, minimization, access/retention, no implicit execution | custody/access record |
| Analysis | observation/inference separation, untrusted content boundary | findings/confidence/unknowns |
| Translation | requirement/accessibility/originality/deception/security checks | adaptation rationale |
| Decision | authorized human owner and specialist escalation | decision/rejected options/residual risk |
| Validation | appropriate user/accessibility/security/legal evidence | tests/review outcomes |
| Expiry | freshness triggers and supersession | version/status/history |

This is research guidance, not control implementation.

## 13. Escalation triggers

Escalate or stop when:

- rights/ownership unknown and intended use exceeds analysis;
- third-party distinctive identity or likelihood-of-confusion concern;
- authentication, payment, essential service or government/financial impersonation;
- credential, PII, confidential or regulated data;
- suspicious instruction, active file, untrusted URL/redirect or unknown format;
- deceptive pattern or accessibility conflict with stakeholder preference;
- required precision cannot be supported by static evidence;
- legal/security authority is necessary.

## 14. Anti-patterns

- “It is only inspiration” used to excuse near-copying;
- license inferred from public availability;
- pixel-distance score as originality/legal clearance;
- logo removed but overall confusing identity retained;
- dark pattern copied because “it converts”;
- screenshot declared accessible;
- EXIF/C2PA declared true/fake oracle;
- metadata stripped without privacy/provenance decision;
- SVG treated as harmless image by default;
- OCR/visual text executed as instruction;
- injection detector granted authority or treated as complete defense;
- sensitive screenshots embedded in reports;
- old reference accepted as current without verification.

## 15. Residual risks and open questions

- Jurisdiction and product context alter IP/deceptive-design obligations.
- Provenance ecosystems are optional and can be missing, incomplete or privacy-sensitive.
- Visual injection is evolving; robust evaluation requires actual architecture/threat model.
- Human reviewers can also be influenced by authoritative-looking references.
- Redaction can destroy useful context/provenance; retention can increase harm.
- No calibrated originality, confidence or security threshold exists.
- Responsibility boundaries among Experience, ARP-0007, legal, privacy and brand remain to be decided.

## Preliminary recommendation

**[Recomendação]** Adopt untrusted-reference and no-cloning principles now as research conclusions; require contextual specialist review for consequential cases; defer file pipeline, multimodal integration, detectors, sanitization and policy enforcement to separately authorized architecture/implementation work.

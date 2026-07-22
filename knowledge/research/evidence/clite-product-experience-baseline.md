---
schema_version: 0.1.0-experimental
id: ARP-0009-E21
kind: knowledge
knowledge_type: research_evidence
title: C-lite Product and Experience Baseline
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E17
---

# C-lite Product and Experience Baseline

## Natureza, fontes e autoridade

Baseline documental experimental para o benchmark C-lite. Não é PRD canônico, Experience Architecture type, prototype, wireframe, UI ou implementation specification. IDs `CL-*` são âncoras locais de rastreabilidade, não schema ou Ontology.

Fontes: decisão do Conselho de `2026-07-22` sobre o checkpoint `3c56302e7a5abf8b68ee1d39e1224355c7fac413`; ARP-0009-E17–E20; ARP-0007 para security/authority boundaries; ARP-0008 para cognitive-artifact distinctions; ARP-0009-E01–E16 para Experience, IA, accessibility, technology, architecture e evaluation. External methodology remains scoped in E17/E19: ISO/IEC 25040:2024, SPEC CPU 2026, NIST AI TEVV/800-2 IPD/800-3, W3C WCAG-EM 2.0 draft e GOV.UK guidance.

Epistemic classes: **[Council decision]**, **[product need candidate]**, **[user-need hypothesis]**, **[requirement candidate]**, **[assumption]**, **[risk]**, **[preference]**, **[unknown]**. Council decisions govern this benchmark only; they do not establish final product truth.

## Authorized benchmark decisions

- **[Council decision]** Scope: C-lite — One Governed Research Cycle.
- **[Council decision]** Primary actor for baseline: Individual Creator / Technical Founder; not universal.
- **[Council decision]** Representative task: transform an initial idea into a structured project, authorize bounded research, follow execution and review evidence-backed output.
- **[Council decision]** Future output ceiling: one Project Context, governed plan, bounded research execution, primary artifact, small evidence set, review decision and Project Memory update.
- **[Council decision]** Stage 1 is documentary; Stage 2 and all executable work remain unauthorized.

## Problem, opportunity and value

**[Product-need candidate]** Pessoas com ideias complexas frequentemente escolhem ferramentas, processos, artifacts ou especialistas antes de compreender o problema. Fragmented context makes assumptions, authority, evidence and decisions difficult to inspect or resume.

**[Opportunity hypothesis]** A governed intention-first experience could reduce premature solutioning while keeping humans able to correct understanding, bound work, authorize effects and review evidence.

**[Value proposition candidate]** Transformar uma ideia parcialmente formada em um projeto governado e retomável, tornando lacunas, assumptions, plano, autoridade, progresso, evidência e decisões compreensíveis sem exigir conhecimento da Ontologia ou do repositório.

## Primary actor and context

Individual Creator / Technical Founder: has a partially formed idea; tolerates technical concepts but does not know internal Ontology; wants structured progress without surrendering authority; needs to inspect plan/evidence and resume after time. Context/access needs, organization, domain regulation, language, device and prior AI experience remain unknown. No user research validates this profile.

## Outcomes candidates

- starts with natural language and explains the system purpose/limits;
- critical gaps, contradictions, unknowns and assumptions become visible/correctable;
- plan scope, affected artifacts, risks, effort uncertainty and authority are understandable;
- no execution begins without scoped authority;
- real state/current activity/uncertainty replace fake progress;
- partial outputs, blockers, requested input and recovery are findable;
- artifact, sources, evidence, limitations and review alternatives remain linked;
- accept/revise/reject consequences are explicit;
- returning user sees changes, pending decisions, blocked work and next action.

Outcomes require later evidence; they are not success claims today.

## Non-goals

Complete administration, marketplace, billing, advanced collaboration, complete multi-tenancy, native mobile, full plugin system, complete Agent/Skill editing, all research modes, all Knowledge Types, public production, total automation, final Design System and final frontend. C-lite tests one deep cycle, not platform breadth.

## Requirement classification

| Prefix | Origin | Authority/limit |
|---|---|---|
| `CL-BD` | benchmark decision | Council-authorized for baseline scope |
| `CL-PN` | product need | candidate derived from stated problem |
| `CL-UN` | user need | hypothesis pending user evidence |
| `CL-AX` | accessibility | candidate derived from prior normative/institutional research |
| `CL-SEC` | security/privacy | candidate; ARP-0007 governs security architecture |
| `CL-GOV` | governance | candidate unless explicitly decided above |
| `CL-ARCH` | architecture input | constraint/question, not architecture decision |
| `CL-EVAL` | evaluation | future evidence/acceptance requirement |
| `CL-HYP` | hypothesis | requires validation; never silently promoted |

Requirement != Preference != Assumption != Candidate Design Decision.

## Traceable requirement baseline

| ID | Requirement candidate | Origin | Acceptance/evidence anchor |
|---|---|---|---|
| CL-BD-01 | Limit experience to one governed research cycle and declared outputs | Council decision | scope/package review |
| CL-UN-01 | Explain purpose, limits and first action without ontology knowledge | user-need hypothesis | QS-01, future comprehension task |
| CL-UN-02 | Accept partially formed natural-language intent with contextual guidance | user-need hypothesis | QS-02, task review |
| CL-PN-01 | Identify material missing information and distinguish unknown from assumption | product need | QS-02/03, trace review |
| CL-PN-02 | Make assumptions and contradictions inspectable, correctable and attributable | product need | QS-03/04, provenance review |
| CL-GOV-01 | Present proposed scope, outputs, risks, unknowns and authority before execution | governance | QS-05/06, authority review |
| CL-GOV-02 | Start no execution without valid scoped authorization | Council principle | blocker B-01, security review |
| CL-UN-03 | Show actual execution state/current activity without invented percentage | user-need hypothesis | QS-07/08, state review |
| CL-PN-03 | Expose partial output, evidence, blocker and requested input with provenance | product need | QS-09, trace review |
| CL-GOV-03 | Allow pause/cancel/retry/resume only when authorized and explain effects | governance | QS-09/10, transition review |
| CL-PN-04 | Preserve failure reason, partial effects and safe recovery choices | product need | QS-10, recovery walkthrough |
| CL-EVAL-01 | Link artifact, source/evidence, limitation, finding and review decision | evaluation | QS-11/12, evidence coverage |
| CL-GOV-04 | Keep accept/revise/reject distinct and record actor, rationale and effects | governance | QS-11, decision trace |
| CL-PN-05 | Update Project Memory only from authorized event/decision with provenance | product need | QS-11/15, history review |
| CL-UN-04 | On return, explain current state, changes, pending decisions and next action | user-need hypothesis | QS-15, future return task |
| CL-AX-01 | Complete required journeys by keyboard with stable visible focus | accessibility | QS-16, future keyboard review |
| CL-AX-02 | Communicate route, status, stream, failure and approval changes accessibly | accessibility | QS-17, future AT review |
| CL-AX-03 | Provide non-graph alternative for required relationships/actions | accessibility | QS-18, equivalent-task review |
| CL-SEC-01 | Treat UI visibility as non-authoritative and enforce trusted authority later | security | QS-06/14, architecture/security review |
| CL-SEC-02 | Treat reference/generated content as untrusted and protect sensitive context | security/privacy | threat/privacy review |
| CL-ARCH-01 | Separate Project, Discovery, Plan, Execution, Artifact, Evidence, Review, Decision and Interface state ownership | architecture input | state-family consistency review |
| CL-EVAL-02 | Keep critical authority/accessibility/security/evidence/recovery blockers outside aggregate quality | evaluation | acceptance model review |

## Experience Architecture summary

```text
Actor/intent
 -> natural-language entry and adaptive discovery
 -> explicit unknowns/assumptions/contradictions
 -> reviewable Project Context
 -> governed plan and authority decision
 -> one bounded research execution
 -> actual state, input, evidence and recovery
 -> artifact/evidence review and accept|revise|reject
 -> authorized Project Memory update
 -> return, orient and resume
```

Across the chain: content clarity, authority, provenance, accessibility, security/privacy, state separation, failure/recovery and future evaluation evidence. This composition is a view, not a new Knowledge Type.

## IA baseline recommendation

**[Candidate design decision]** A limited hybrid is most proportional: persistent current-project context + task/lifecycle entry for C-lite + contextual links to the few relevant objects + search/recent/pending access. Pure object-centered IA leaks ontology; pure lifecycle implies false linearity; pure task-centered hides lineage; pure project-centered can hide pending cross-object action.

Minimum information coverage: Current Project, Idea/Discovery, Plan, Execution, Artifact, Evidence, Decisions, Project Memory, Pending Actions and Activity/History. These are information needs, not menu items.

## Navigation baseline

- entry by “Tenho uma ideia” and predictable non-language route;
- persistent project identity/context and current location;
- contextual deep links among plan, execution, artifact, evidence and decision;
- recent items, pending decisions and resume point;
- project-context search and direct navigation;
- global escape/orientation without forcing ontology knowledge;
- permission-aware links/results and recoverable missing/denied targets;
- natural language complementary, never sole navigation.

## Assumptions and risks summary

Material assumptions: actor tolerates some technical depth; one research cycle is representative; users value explicit governance; Project Memory can be presented without repo structure; bounded evidence is understandable. Key risks: founder/technical bias, self-reference/overfitting, ontology leakage, authority confusion, information density, fake progress, evidence overload, inaccessible dynamic state, AI overtrust and pressure to implement before review. Full registers are in E24.

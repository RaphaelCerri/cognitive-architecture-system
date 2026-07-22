---
schema_version: 0.1.0-experimental
id: ARP-0009-E20
kind: knowledge
knowledge_type: research_evidence
title: Benchmark Stages, Governance and Execution Readiness
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: related_to
    target: ARP-0007
  - type: related_to
    target: ARP-0008
---

# Benchmark Stages, Governance and Execution Readiness

## Natureza

Governance/readiness proposal only. Nenhum stage é iniciado; nenhum dataset, protocol executável, artifact baseline, prototype, code, evaluator assignment ou approval existe.

## Staged future benchmark

| Stage | Purpose and candidate outputs | Explicit boundary |
|---|---|---|
| 1 — Documentary baseline | bounded benchmark case; requirements; Experience Architecture; IA/flows/states; content/reference inputs; direction/language/technology needs; architecture/evaluation plan | only stage eligible for a future immediate Council authorization; not authorized now |
| 2 — Non-functional prototype | wireframes/prototype, state/content representation and review | no code/product claim; separate authorization |
| 3 — Executable vertical slice | implementation, tests, runtime evidence and review | stack/code/CI/dependency decisions required separately |
| 4 — Production-like evaluation | accessibility/security/performance/user/recovery/monitoring evidence | privacy, ethics, environment and authority required |
| 5 — Feedback and revision | findings, remediation, revalidation and decisions | does not convert result into production approval |

Stages are review boundaries, not maturity levels. Passing one does not automatically authorize or prove the next.

## Stage 1 candidate scope

C-lite documentary baseline for one Chief, one project and one governed research cycle: intent/discovery → assumptions → plan/approval → research execution specification → progress/failure/recovery → output/evidence review → Project Memory/return. It must include failure, access needs and authority, but produces no executable experience.

## Stage 1 readiness checklist

Council authorization should require all of the following, with owner and source:

- accepted benchmark construct and C-lite scope/version, exclusions and comparison purpose;
- primary actor hypothesis and explicit non-representation of other groups;
- representative research-task selection or bounded process for selecting it;
- requirement baseline, traceability and conflicts/unknowns register;
- authoritative relationships to ARP-0007, ARP-0008 and existing Experience evidence;
- candidate object/state vocabulary reviewed for ontology conflict without ontology mutation;
- authority/separation-of-duties matrix for documentary decisions;
- artifacts expected from Stage 1 and review/acceptance authority;
- quality scenarios, evidence plan, stopping rules and non-compensable blockers;
- accessibility/security/privacy review owners and legal/ethics escalation triggers;
- dataset principles without dataset creation;
- time/file/change budget, version/provenance convention and handoff requirement.

Missing material items produce `not_ready` or Council question, not silent assumptions. Readiness is scoped approval, not product quality.

## Governance candidates

| Role | Responsibility | Must not self-grant |
|---|---|---|
| benchmark owner | scope/version/change control | success approval |
| requirement owner | intent/requirement baseline | waive critical requirement alone |
| experience designer | IA/flows/content candidates | user validation claim |
| architect | responsibility/boundary coherence | implementation authorization |
| implementer, later | build authorized slice | evaluate own result as sole evidence |
| evaluator | execute declared methods/report limits | change construct after results |
| accessibility/security reviewers | specialist risk evidence | universal conformance/certification |
| user researcher, later | research questions/ethics/sample | claim population from convenience sample |
| evidence custodian | provenance/version/freshness | alter result/decision |
| Council/approver | accept/revise/reject scoped package | manufacture missing evidence |

Separation of duties is proportional, but benchmark creator cannot alone approve success. Conflicts, dissent and deviations remain visible.

## Decision and change authority

Council must decide benchmark version/scope, representative task, Stage entry/exit, blocker disposition, exception, invalidation and authorization of next stage. Owners may propose changes; evaluator records observations; specialist reviewers report scoped findings. Any construct, journey, dataset or metric change after baseline creates a new version and comparison note.

## Dataset principles

A future fictitious dataset may include projects, decisions, artifacts, agents, executions, evidence, findings, references, statuses and failures. It must use no real sensitive data; represent success, ambiguity, permission denial, failure, recovery and stale/disputed evidence; preserve provenance/version; avoid brand/IP copying; support deterministic reset where relevant; disclose synthetic assumptions and accessibility/localization coverage.

No dataset or example project is created now. Selecting SaaS, research, support, education, organization or AI-native product as nested idea could expand the construct; the Council should choose only if Stage 1 needs it.

## Repeatability package candidate

- immutable benchmark-definition ID/version and access date;
- frozen scope, construct, actors, journeys, tasks, requirements and exclusions;
- dataset/input version and generation provenance, later;
- system/model/prompt/catalog/architecture/implementation versions as applicable;
- environment and evaluator/method protocol;
- expected variations, known nondeterminism and uncertainty handling;
- raw observations/evidence links, findings, deviations and decisions;
- comparison eligibility statement and invalidation/revalidation triggers.

Repeatability is not identical output from nondeterministic systems. It means disclosed conditions and a justified comparison target; independent replication/reproducibility require later governance and evidence.

## Exclusions from first benchmark

Complete administration, billing, marketplace, advanced collaboration, full multi-tenant enterprise, native mobile, complete plugin system, public production, total automation, every Knowledge Type/Agent/execution mode, external benchmark, final visual language, real Design System and all platform settings remain out. Common project context, account/security primitives or accessibility mechanisms enter only when required to complete C-lite safely.

## Future authorization requirements

- **Stage 1:** Council accepts definition/readiness and authorizes exact documentary files/budget; PRD status and ontology boundaries decided explicitly.
- **Stage 2:** prototype purpose, fidelity, tool, participants/review, data/privacy and disposal authorized.
- **Stage 3:** AP/ADR/RFC as applicable, architecture/stack/dependencies, repo scope, tests/security and delivery authority approved.
- **Stage 4:** environment, participants, privacy/ethics, accessibility/security/performance methods, data retention and monitoring approved.
- **Stage 5:** finding/remediation/exception/revalidation and decision authorities fixed.

Nothing in this document supplies those approvals.

## Benchmark anti-patterns

- stack-favoring case or benchmark-specific shortcut;
- case too small for authority/evidence/recovery or too broad for causal diagnosis;
- happy-path, desktop-only or technical-user-only framing;
- missing accessibility, security, privacy, failure or human authority;
- visual polish, speed, artifact count or one score treated as success;
- fake progress, hidden nondeterminism or stale evidence;
- author/evaluator self-approval and unresolved blocker averaged away;
- variable dataset, prompt, model or goal without version/change disclosure;
- implementation before requirements/readiness;
- comparison across non-equivalent constructs/environments;
- benchmark overfitting, leaked answers or changing criteria after observation;
- benchmark result described as production, conformance or certification.

## Readiness finding

**[Recomendação, confiança moderada]** A definição C-lite está pronta para CSA review, mas **Stage 1 não está autorizado nem fully ready**. Council decisions remain on construct/scope owner, primary actor, representative research task, authoritative requirement source, Stage 1 artifact set, authority matrix, ontology review, budget and review acceptance.

## Risks and open decisions

Self-referential benchmark bias; scope creep; ontology leakage; C-lite still too large; synthetic dataset realism; accessibility/user underrepresentation; AI variability; benchmark gaming; governance overhead; artifact duplication; unclear PRD authority. Council may accept, revise, request targeted evidence or reject the definition without starting work.

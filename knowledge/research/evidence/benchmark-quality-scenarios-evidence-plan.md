---
schema_version: 0.1.0-experimental
id: ARP-0009-E19
kind: knowledge
knowledge_type: research_evidence
title: Benchmark Quality Scenarios and Evidence Plan
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: related_to
    target: ARP-0007
---

# Benchmark Quality Scenarios and Evidence Plan

## Natureza

Plan conceitual para uma execução futura; nenhuma medição, participant session, accessibility/security review, test, evidence item, finding ou conformance claim existe. Scenario, method e success claim permanecem candidatos.

## Evaluation questions

- O primary user entende propósito, limites e próxima ação sem conhecer Ontologia?
- Consegue transformar ideia incompleta/contraditória em project context revisável?
- Identifica assumptions, unknowns, sources e o que será criado?
- Distingue plan/proposal, decision/approval, execution e artifact?
- Entende quem possui autoridade e as consequências/reversibilidade de agir?
- Acompanha trabalho longo sem percentual inventado e encontra input/blocker/output?
- Interrompe, corrige e recupera failure sem perder history ou duplicar action?
- Encontra evidence, limitation e razão da decisão?
- Retorna depois, compreende mudanças e retoma o contexto?
- Conclui journeys por teclado e recebe mudanças/status sem overload?
- O sistema evita confiança falsa em output plausível, evidence stale ou agent identity?

## Quality-scenario template

Cada futuro scenario registra context/environment, actor/access needs, preconditions/system state, stimulus/task, expected response, quality attribute/claim, non-compensable failure, recovery expectation, method/evidence e limitations. Não é schema.

## Candidate scenario set

| Scenario | Expected response/claim | Critical failure | Future evidence portfolio |
|---|---|---|---|
| first-use comprehension | user explains purpose, limit and next step before acting | consent/action without understanding | task observation, comprehension probe, content/expert review |
| idea intake | vague intent becomes traceable questions/assumptions | invented requirement hidden as fact | requirement trace, task/user review |
| contradiction resolution | conflict visible, correctable and preserved | system silently chooses premise | flow inspection, user task, provenance review |
| plan approval | scope/risks/artifacts/authority are inspectable | execution starts without valid authority | task, authorization/security review, audit trail |
| long-running execution | current state/activity/input/output are understandable | fake progress, duplicate action or hidden wait | state/contract tests, accessibility/manual task review |
| execution failure | reason, partial effects and safe recovery shown | data loss, unsafe retry or dead end | failure injection later, recovery task, architecture review |
| artifact review | source/evidence/limits and review actions found | plausible output accepted without trace | evidence trace, expert/user review |
| return journey | changes, pending decisions and resume point recovered | stale state or wrong project action | longitudinal task later, history inspection |
| keyboard navigation | complete benchmark processes operable with visible focus | blocked action/context/focus loss | keyboard manual review and automated support |
| screen-reader status | meaningful state changes announced without chatter | silent approval/failure or unusable stream | AT expert/user review later |
| security approval | action, data, tool, risk and authority explicit | prompt/content bypasses permission | threat/abuse review, authorization evidence |
| stale evidence | changed version marks affected evidence for review | stale result presented as current | provenance/freshness rule inspection |
| permission denial | reason and safe next step without leakage | protected data/action exposed | authorization and content review |
| graph alternative | equivalent relationships/tasks available non-visually | graph-only critical information | keyboard/AT/task review |

Scenarios apply to complete processes, including alternate/failure/recovery states. [WCAG-EM 2.0](https://www.w3.org/TR/wcag-em-2/) informs explicit scope and complete-process sampling but cannot yield a conformance claim for this undefined product.

## Accessibility requirements candidates

- semantic structure, landmarks/headings and programmatic object/status relationships;
- keyboard-complete navigation/actions, visible/persistent focus and logical restoration across route/dialog/update;
- form labels/instructions, error identification, contradiction summary and recovery;
- status/streaming/queue/failure/approval announcements with user control and no excessive interruption;
- timeout extension, pause/cancel safety and preservation of entered work;
- zoom/reflow, text spacing, high contrast/forced colors, reduced motion and non-color states;
- accessible name/language, clear content and consistent terms;
- graph/data visualization alternatives exposing equivalent relationships and actions;
- supported browser/assistive-technology matrix and user participation planned later.

No detected violation != accessible experience. Tool independence, evaluator expertise and real-user complementarity follow [W3C WCAG-EM 2.0](https://www.w3.org/TR/wcag-em-2/); no WCAG claim is made.

## Security and privacy requirements candidates

- server-side/domain authority for every protected action; UI visibility/route guard is not authorization;
- identity of user, agent, execution, tool and approving authority remains explicit;
- approval is bound to action/input/scope/time and cannot be reused silently;
- prompt/reference/generated content is untrusted; tool instructions and rendered output need safe boundaries;
- sensitive project/evidence/log data uses least visibility, redaction, retention and deletion rules;
- shared-device/session timeout, history, download/external-link and clipboard exposure are considered;
- audit trail distinguishes proposal, approval, action, result and later modification;
- analytics/monitoring are absent now and would require purpose/minimization/consent/retention review;
- abuse cases include forged evidence, malicious reference, authority confusion, exfiltration and unsafe retry.

No security audit or executable control is defined. ARP-0007 remains the security-governance boundary.

## AI-native requirements candidates

Expose model/agent identity when decision-relevant, source/provenance, uncertainty/unknowns, plan and tool-call preview, human approval boundaries, current/committed streaming state, cancel/retry/resume, cost category when knowable, memory/context controls, nondeterminism and human takeover. Generated artifacts require version context, official-source verification where applicable, diff/review, architecture/accessibility/security evaluation and explicit acceptance.

NIST states AI characteristics need context-specific portfolios; [NIST AI 800-3](https://www.nist.gov/news-events/news/2026/02/new-report-expanding-ai-evaluation-toolbox-statistical-models) further warns that hidden assumptions, conflated performance notions and unquantified uncertainty undermine benchmark interpretation. These are institutional findings, not local thresholds.

## Success criteria candidates

Success is a decision-ready evidence portfolio, not a score. Future Stage-specific criteria should include:

- traceable coverage of frozen requirements and all required journeys/states;
- observed completion/comprehension/recovery for defined actor groups and access needs;
- authority and proposal/decision/execution distinctions understood and enforced;
- evidence/source/limitation findability and correct stale/disputed handling;
- no unresolved critical accessibility, security, data-integrity, main-task or recovery blocker;
- architecture responsibilities mapped without stack-specific benchmark special;
- versioned inputs/environment/methods and disclosed deviations;
- findings, unknowns, exceptions and dissent visible to decision authority.

Metrics such as task success, error, time, confidence or coverage remain claim-specific. GOV.UK notes stable/believable tasks and repeated comparison, while end-to-end experience needs more than aggregate metrics; no participant count or threshold is adopted.

## Evidence plan by stage

| Claim family | Stage 1 documentary evidence | Later evidence, separately authorized |
|---|---|---|
| intent/requirements | source trace, assumptions, coverage and conflict review | user/problem evidence |
| IA/flows/states | complete-process walkthrough and expert review | prototype task/navigation research |
| authority/security | responsibility/threat/abuse review | implementation tests and independent security review |
| accessibility | requirement/scenario/supported-matrix review | semantic/keyboard/AT/manual/user evidence |
| visual/content | direction/content criteria and reference provenance | visual/content/user review |
| architecture | boundary/state/data/job/failure decision review | code/runtime/dependency/deployment evidence |
| AI-native | plan/tool/uncertainty/recovery scenarios | adversarial, variability and human-task evaluation |
| production | monitoring/privacy/revalidation plan only | field observations after explicit production authority |

Each future evidence item records requirement/claim, method, input, expected/actual result, artifact, evaluator, environment/version/date, coverage, limitations/confidence/freshness and affected decision. Definition is not evidence collection.

## Repeatability and revalidation

Freeze benchmark-definition version, requirement set, representative task, dataset version, allowed variations, environment, model/prompts/catalog evidence, implementation, methods and evaluator roles. Report every deviation. SPEC's domain-specific rules illustrate that a result is an observation under disclosed conditions and that changed rules/components may require retesting; local rules remain Council work.

Revalidate affected claims after material change to requirement, content, data, model/prompt, dependency, browser/AT, architecture, implementation, configuration, evaluator protocol or benchmark scope. Comparison is invalid when construct/task/input equivalence is unknown.

## Stopping rules

Future stage stops or escalates on scope fulfillment, critical blocker, insufficient evidence, invalid assumption, ontology/architecture conflict, critical accessibility/security/data risk, budget/no-progress limit, unauthorized implementation need, non-representative task or material protocol drift. Stop is not failure laundering; partial evidence and reason are retained.

## Residual uncertainty

No empirical basis yet supports user representativeness, task difficulty, duration, thresholds, supported platform matrix, evaluator mix or statistical inference. Stage 1 can refine documentary coherence only; it cannot validate usability, accessibility conformance, runtime security or product success.

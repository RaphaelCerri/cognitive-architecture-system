---
schema_version: 0.1.0-experimental
id: ARP-0009-E15
kind: knowledge
knowledge_type: research_evidence
title: Evaluation Methods and Assurance Profiles
status: experimental
created_at: 2026-07-22
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
---

# Evaluation Methods and Assurance Profiles

## Premissa

Método é escolhido pela claim, risk e context. Profiles abaixo são opções proporcionais, não certification levels, maturity ranks ou gates implementados. Nenhuma ferramenta foi selecionada/executada.

## Method portfolio matrix

| Família | Claims fortes potenciais | Limites obrigatórios |
|---|---|---|
| document/trace review | source, requirement, decision and coverage coherence | cannot observe runtime/user behavior |
| static/type/lint | encoded syntax/type/rule properties | false +/-; erased/runtime/context gaps |
| unit/state/property | local rule, transform, transition across generated cases | integrations/platform/task absent |
| component | isolated semantics/states/interaction/content contract | composition/data/route/task absent |
| contract | producer-consumer shape/compatibility/error model | domain truth and UX may fail |
| integration | boundary/data/effect collaboration | full environment/user absent |
| browser E2E | complete scripted journey in selected user agents | scripted scope, flake, AT/user gaps |
| accessibility automation | detectable rules for rendered state | incomplete standards/task/access-needs coverage |
| manual keyboard/AT | interaction in specified environment | evaluator/device/sample scope |
| visual comparison | rendered change against approved baseline/environment | difference != defect; same pixels != correctness |
| performance lab | controlled diagnosis/regression | predefined conditions, not population |
| field performance | real distributions/environments | confounding, sampling, privacy, causality gaps |
| security verification | evidence against threat/control requirements | clean result != absence of vulnerability |
| dependency/contract scan | known identity/rule/advisory signals | unknown/logic/runtime risk remains |
| heuristic/expert review | experienced diagnosis and pattern finding | subjective/contextual; population not represented |
| cognitive walkthrough | learnability/path reasoning for defined actor/task | assumptions need user evidence |
| moderated user test | observation, probing, task/context detail | moderator/sample effects and scale |
| unmoderated user test | broader remote task signals | less context/control/support |
| contextual/longitudinal | real workflow/environment/change over time | cost, privacy, attribution and attrition |
| production observation | real release/task/failure signals | missingness, bias, privacy, weak causal inference |
| independent audit | scoped external judgment under authority/method | snapshot, cost and scope limits |

## Automated methods

For each automation record rule/test purpose, requirement/claim, exact tool/rule/config/version, fixtures/data/environment, expected oracle, false-positive/negative risk, deterministic controls, maintenance owner and invalidation. Test count and pass rate do not equal requirement coverage.

Static result cannot prove runtime; unit cannot prove integration; component cannot prove flow; E2E cannot cover all environments/users; scanner cannot prove security; automated accessibility cannot prove accessible experience. Automation is repeatable evidence where its oracle/applicability are sound.

## Visual regression method candidate

Baseline package: approved intent/reference, release/component/state/viewport/theme/locale, browser/OS/font/render engine/hardware context, dynamic/mask/animation policy, tolerance rationale, baseline owner/date and expected variants. Diff triage: defect, intentional change, environment noise, stale baseline, unknown.

Updating baseline requires visible diff/rationale and linked decision; never auto-accept to make suite green. Complement with semantics, interaction, responsive, content and accessibility review. Official Playwright documentation itself notes OS/version/settings/hardware differences; this is a method limitation, not tool endorsement.

## Expert/manual reviews

Review types: design intent/visual, UX/task, content, accessibility, frontend architecture, security/privacy, performance/reliability, localization, legal/brand. Record reviewer identity/role/competence/independence/conflict, checklist/scenarios/source versions, inspected artifacts/states, environment, finding rationale/confidence/dissent and unexamined scope.

Multiple experts can reduce individual blind spots but consensus is not truth. Review should produce inspectable evidence, not authority by title.

## User methods and participation

| Method | Best-fit questions | Main limitations |
|---|---|---|
| moderated task test | why/how failures occur; recovery/comprehension | moderator effect, small/contextual sample |
| unmoderated task test | task signals across more remote participants | environment/data quality, no probing |
| first-click/tree/card | findability/IA hypotheses | not whole service/task evidence |
| contextual inquiry | real workflow/tools/environment | observer effect, access/privacy |
| diary/longitudinal | recurring/learning/long-term behavior | attrition, burden, self-report |
| interview | needs, understanding, reported experience | report != observed behavior |
| survey | distribution of self-report in defined sample | wording/sampling/nonresponse and causality |

Participation plan candidates: research question, population/segments/access needs, sample rationale, recruitment/exclusions, accommodations/compensation, consent/withdrawal, data minimization/retention, safeguarding, researcher/support roles and representation limitations. Jurisdiction/institution may require ethics/legal review. No recruitment/study occurred.

## Evidence triangulation

Triangulation is not majority vote. When methods conflict, inspect claim alignment, scope, timing, environment, sample, oracle, measurement validity and change. Examples:

- automated a11y pass + user barrier: barrier remains material; automation scope was limited;
- expert concern + successful tasks: investigate severity/context, not discard either;
- lab good + field poor: segment/environment/release diagnosis;
- analytics completion + support complaints: survivorship/quality/assistance and excluded users;
- visual diff + no intent change: validate environment before defect classification.

## Assurance profile dimensions

Profile selection candidates: harm/criticality, reversibility, regulatory/normative exposure, data/security/privacy, task centrality, novelty/uncertainty, scale/public diversity, architecture/dependency/AI change, operational observability, evidence freshness and recovery cost. A project can apply different profiles per claim/task, not one label globally.

## Minimal profile

Best-fit hypothesis: low-impact, reversible, familiar, narrow-audience change. Minimum portfolio candidate: requirement/critical-task trace; focused document/manual review; applicable static/unit/component checks; basic accessibility/keyboard/content/responsive review; changed-risk validation; owner/limitations; rollback. Production feedback only when purpose/privacy justify.

Does not mean “no quality”; any security/auth/data/accessibility blocker escalates method/profile. Unknown criticality prevents automatic Minimal.

## Standard profile

Best-fit: ordinary product feature with multiple states/integration but controlled harm. Candidate portfolio: all Minimal plus alternate/error/recovery tasks, integration/browser scenarios, accessibility automation + manual keyboard/selected AT, content/visual/responsive review, performance scenario, security/privacy review, representative user participation where claim needs it, release evidence and production revalidation plan.

## Complex profile

Best-fit: high interaction/state/integration, diverse platforms/users, async/AI, migration or significant uncertainty. Candidate: Standard plus architecture/state/data/contract review; broad flow-state matrix; multiple browser/device/AT/locale; concurrency/degraded/offline/long-job scenarios; threat/abuse cases; lab + planned field evidence; independent specialist review; broader/contextual user evidence; staged rollout/rollback and shorter freshness.

## Critical profile

Best-fit: potential severe harm, regulated/public essential service, sensitive authorization/data, irreversible operation or accessibility-critical task. Candidate: Complex plus independent authority/audit/legal as applicable, rigorous traceability, separation of duties, representative access-needs participation, adversarial/security/abuse verification, failure/recovery rehearsal, explicit blockers/exceptions, approved release/rollback package, intensive privacy-bounded production monitoring and frequent revalidation.

“Critical” does not certify risk or prescribe a standard. Exact methods/authority depend on domain/jurisdiction and Council decisions.

## Profile comparison

| Concern | Minimal | Standard | Complex | Critical |
|---|---|---|---|---|
| task coverage | critical changed path | alternate/error/recovery | broad state/concurrency | comprehensive critical + rehearsed failure |
| automation | focused applicable | layered | broader cross-environment | risk-driven rigorous + independent review |
| users | when claim requires | representative focused | diverse/contextual | domain/access-needs rigor + ethics authority |
| accessibility | manual essentials + applicable checks | automation/manual/selected AT | broad matrix | independent/scoped conformance + users |
| security/privacy | changed-risk review | threat/control review | abuse/tenant/data lifecycle | independent/regulatory/adversarial as applicable |
| performance | obvious budget check | task scenario | lab + field plan/segments | SLO/critical field and failure evidence |
| authority | owner/reviewer | cross-functional | specialists/independence | designated independent/legal authority |
| freshness | change-triggered | release/material change | short/change/incident | continuous/high-frequency triggers |

This matrix is hypothesis, not policy.

## Dimension-specific methods

- **Functional/task:** scenario execution, integration/E2E, users, production task signals.
- **Usability/content:** moderated/contextual/cognitive/expert plus comprehension/task measures.
- **Visual/Design QA:** intent/spec/state/responsive review plus controlled diffs.
- **Accessibility:** WCAG applicability/methodology, ACT/manual/AT/users.
- **Security/privacy:** threat/data-flow/control verification, abuse/negative evidence, review.
- **Performance:** lab diagnosis, field distribution, perceived/task evidence.
- **Architecture/maintenance:** boundary/dependency/change/migration/exit scenarios.
- **AI:** model/version/context/data, nondeterminism, safety/security/task/human-control and production drift.

## Coverage and stopping

Coverage adequacy is reached when decision-relevant claims, critical failures/unknowns and residual risks are explicit and authority has sufficient evidence—not when every possible test exists. Stop evaluation and escalate when missing requirement/authority/source, ethics/legal need, need for implementation/benchmark, conflicting critical evidence or profile budget limit appears.

## Metrics and scorecards

Useful portfolio signals: traced critical requirements, blocker count/age, evidence freshness, unresolved/recurring findings, exception age, remediation/reopen time, task outcome/errors, user-reported barriers, performance distributions, drift and dependency incidents. Each needs denominator/segment/source/limitations.

Scorecard risks: false precision, averaging blockers, gaming, hidden weights, stale inputs, incomparable dimensions and threshold theater. If authorized later, weights/sensitivity/uncertainty/raw evidence remain visible and hard gates outside score. No scorecard created.

## Open questions

Profile selection authority, mandatory methods per domain, participant ethics/legal trigger, independence requirements, supported matrices, minimum production window, evidence confidence/freshness and cost/proportionality thresholds remain undecided.

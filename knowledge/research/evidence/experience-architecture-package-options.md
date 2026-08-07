---
schema_version: 0.1.0-experimental
document_role: research_options_analysis
title: Experience Architecture Package Options
status: reviewed
reviewed_at: 2026-08-07
review_outcome: accepted_as_experimental_evidence
acceptance_scope: experimental_evidence
knowledge_maturity: experimental
review_basis: ASSESS-0003
created_at: 2026-07-22
related_programs: [ARP-0009]
language: pt-BR
---

# Experience Architecture Package Options

## Status e regra de seleção

**[Decisão]** Minimal, Standard, Complex e Critical são opções candidatas para análise; não são profiles, tiers, schemas ou processos aprovados.

**[Hipótese]** O package é uma composição documental proporcional, não necessariamente arquivo único. A seleção considera uncertainty, novelty, actors/flows, impact, data/authority, reversibility, criticality, regulation e evidence gap. O tipo de produto informa, mas não determina a opção.

**[Heurística]** Escolher a opção menos pesada que ainda permite decisions, traceability, implementation e evaluation responsáveis. Elevar o package quando um fator crítico excede a capacidade da opção atual; reduzir/combinar artifacts quando não alteram decisão.

## Option A — Minimal

| Dimensão | Conteúdo candidato |
|---|---|
| Contexto | **[Hipótese]** problema conhecido, one primary audience/task, low impact, public/low-sensitivity data, reversible change, poucos states/integrations |
| Arquétipos prováveis | **[Heurística]** landing page, campaign, small institutional/content page; não é presunção automática |
| Artefatos mínimos | **[Hipótese]** Experience Brief; Content Outline/ownership; Primary Flow; essential states; Visual/Brand constraints; Basic Accessibility/Security requirements; success/validation intent; assumptions |
| Vantagem | **[Heurística]** reduz ceremony e acelera decision sem esconder essentials |
| Custo | **[Heurística]** baixa documentação/review |
| Risco | **[Heurística]** secondary users/states ou content lifecycle omitidos; falsa simplicidade |
| Critério de adoção | **[Hipótese]** all critical discovery checks ready, no material role/data/irreversibility gap |
| Limitação | **[Hipótese]** inadequado para multi-role, transactions sensíveis, complex journeys ou compliance/audit material |

## Option B — Standard

| Dimensão | Conteúdo candidato |
|---|---|
| Contexto | **[Hipótese]** product com várias tasks/states, moderate impact, known business, common integrations e normal release lifecycle |
| Arquétipos prováveis | **[Heurística]** small SaaS, consumer app, small commerce, content platform, dashboard com poucos roles |
| Artefatos mínimos | **[Hipótese]** Product/Experience Brief; User/Actor Model; IA/Navigation; primary/alternate User Flows; State Inventory; Content Model/rules; Accessibility/Responsive/Security requirements; Experience Acceptance/Test Plan; assumptions/decisions/traceability |
| Vantagem | **[Heurística]** cobre product behavior e quality sem service blueprint completo |
| Custo | **[Heurística]** discovery/review multidisciplinar moderados e manutenção de relações |
| Risco | **[Heurística]** journeys cross-channel, permission complexity ou backstage invisíveis |
| Critério de adoção | **[Hipótese]** roles/flows gerenciáveis, reversibility razoável e risks tratáveis sem formal assurance |
| Limitação | **[Hipótese]** não basta quando coordination, audit, regulation ou consequence of error é alta |

## Option C — Complex

| Dimensão | Conteúdo candidato |
|---|---|
| Contexto | **[Hipótese]** multi-role/channel, interdependent workflows, collaboration, dense data, material operations, migrations/integrations ou difficult recovery |
| Arquétipos prováveis | **[Heurística]** marketplace, enterprise/internal operations, ERP/CRM domain, collaborative/data-heavy product, multi-sided platform |
| Artefatos mínimos | **[Hipótese]** Actor/Permission Model; Journey Maps; Service Blueprint quando backstage/canais importam; role-based IA; complex/exception flows; State/Content Models; Screen Inventory quando ajuda coverage; Risk/Recovery Plan; accessibility/security/privacy requirements; acceptance/evidence/change-impact plan; bidirectional traceability |
| Vantagem | **[Heurística]** expõe handoffs, authority, dependencies, exceptions e operational reality |
| Custo | **[Heurística]** maior research, facilitation, modeling, governance e maintenance |
| Risco | **[Heurística]** documentation theater, stale maps e false precision |
| Critério de adoção | **[Hipótese]** multiple actors/flows/backstage/risks exigem shared model para evitar contradictions |
| Limitação | **[Hipótese]** não substitui formal compliance, threat/risk assessment ou critical assurance |

## Option D — Critical

| Dimensão | Conteúdo candidato |
|---|---|
| Contexto | **[Hipótese]** severe financial/legal/health/safety/public impact, sensitive data/authority, irreversible actions, essential service, strong regulation/audit ou AI actions de alto impacto |
| Arquétipos prováveis | **[Heurística]** health, financial, government/benefits, critical infrastructure e regulated/AI decision products; applicability depende da função, não do label |
| Artefatos mínimos | **[Hipótese]** Complex package + full requirement-to-test/evidence traceability; formal risk/privacy/security/accessibility applicability; approval/segregation; Human-in/on-the-Loop requirements; audit/retention; failure/degraded/continuity/recovery; adversarial/assurance plan; residual risks e authorities |
| Vantagem | **[Heurística]** torna authority, risk, evidence e failure treatment explícitos antes de UI/implementation |
| Custo | **[Heurística]** alto, multidisciplinar, dependente de experts/approvers e maintenance rigorosa |
| Risco | **[Heurística]** falsa conformidade documental, overconfidence, delays e gaps entre paper/operation |
| Critério de adoção | **[Hipótese]** qualquer severe/irreversible/regulatory/essential-service factor sem compensação suficiente |
| Limitação | **[Hipótese]** package não certifica, autoriza operação ou substitui standards, law, assurance e independent review |

## Cross-cutting core e optional modules

**[Hipótese]** Todo package contém um core, com profundidade variável:

```text
Problem/Outcome/Non-goals
Actors/Needs/Tasks/Context
Product and Experience Requirements
Critical Constraints/Risks/Authority
Content/Platform
Accessibility/Security/Privacy applicability
Success/Acceptance/Evidence intent
Assumptions/Unknowns/Contradictions/Decisions
Traceability and readiness rationale
```

| Módulo opcional/condicional | Trigger candidato | Categoria |
|---|---|---|
| Journey Map | cross-stage/channel experience ou longitudinal outcome | Heurística |
| Service Blueprint | backstage people/process/system handoffs affect experience | Heurística |
| IA/Navigation Model | findability, content/object hierarchy ou many destinations | Heurística |
| Detailed Flow/State Model | branching, exceptions, interruption, recovery ou permissions | Heurística |
| Screen Inventory | coverage/ownership across many surfaces; não como design prematuro | Heurística |
| Content Model | structured, multilingual, regulated, UGC/AI ou high-volume content | Heurística |
| Permission Matrix | multiple roles/data/action visibility | Heurística |
| Formal Evidence Plan | high-impact claim, compliance, release gate ou certification | Heurística |
| Visual Direction | brand/originality/alignment needed; não substitui experience foundation | Heurística |

## Project archetype signals

| Archetype candidate | Discovery emphasis | Package tendency |
|---|---|---|
| Landing/Marketing/Institutional | message, audience, conversion/content, brand, public accessibility/SEO | Minimal–Standard |
| Content Platform | content model, search/navigation, authorship, expiry, accessibility | Standard–Complex |
| E-commerce/Marketplace | catalog, transaction/failure, trust, payment/fraud, roles/sides | Standard–Complex/Critical by impact |
| SaaS/Dashboard/Internal | tasks, density, roles/permissions, repeated use, integrations | Standard–Complex |
| Mobile Consumer | context, interruption, permissions, connectivity, platform convention | Standard–Complex |
| Enterprise/Collaborative/Data-heavy | role workflows, backstage, audit, state/conflict, recovery | Complex |
| Public/Regulated | inclusion, assisted/offline channels, law, evidence, security/privacy | Complex–Critical |
| AI-native | authority, uncertainty, sources/tools, approval, memory, interrupt/audit | Standard–Critical by actions/impact |

Todas as tendências são **[Heurística]**, não classification automática.

## Escalation e de-escalation

**[Heurística]** Elevar package quando surgir: actor/permission crítico, sensitive data, irreversible/destructive action, regulation/audit, cross-channel/backstage dependency, complex failure/recovery, high exclusion risk, AI authority ou contradictory critical evidence.

**[Heurística]** Reduzir/combinar quando artifacts repetem a mesma decision, existing evidence é current/authoritative, flow é linear/low-impact, ou um section/table mantém traceability melhor que documento separado. De-escalation deve registrar rationale e residual risk.

## Artifact value test

**[Hipótese]** Antes de incluir um artifact, responder:

1. Qual decision/risk ele suporta?
2. Quem usa e mantém?
3. Qual source e relations preserva?
4. Que erro detecta ou evita?
5. Qual custo/staleness introduz?
6. Pode ser seção/visão combinada?
7. Qual condition permite removê-lo?

Sem resposta material, omitir ou deferir.

## Experience Architecture definition options

| Opção | Descrição candidata | Força | Risco | Disposição preliminar |
|---|---|---|---|---|
| Single document | **[Hipótese]** um documento consolida a arquitetura | simples para small cases | monólito/stale/duplicação | Adapt somente Minimal |
| Artifact collection | **[Hipótese]** conjunto fixo de artifacts | especialização/coverage | burocracia universal | Reject como default |
| Adaptive package | **[Hipótese]** core + modules selecionados por context/risk | proporcional e explicável | seleção/consistência ainda abertas | Preferência preliminar para pesquisa |
| Composed view | **[Hipótese]** visão derivada de PRD, needs, flows, Policies e specs | reduz duplication | depende de relations/tooling | Defer; promissora sem schema |
| Process/discipline only | **[Hipótese]** decisões existem nos artifacts owners | evita novo object | difícil descobrir/revisar como unidade | Absorb parcialmente |

`Preferência preliminar` é **[Preferência de pesquisa]**, não Council decision.

## Acceptance e evidence por opção

**[Heurística]** Minimal pode usar review de coverage/content/accessibility e primary task test posterior; Standard acrescenta state/flow/responsive tests; Complex acrescenta role/exception/recovery/integration coverage; Critical exige independent review, standards/policy traceability, adverse/failure scenarios, approval e evidence retention. Ferramentas e thresholds permanecem fora da slice.

## Limitações e decisões futuras

- **[Lacuna de evidência]** Packages não foram aplicados a projetos reais nem comparados por cost/quality.
- **[Hipótese aberta]** Como calcular/autorizar tier e quem aprova escalation/de-escalation.
- **[Hipótese aberta]** Se package é canonical artifact, derived view ou convenção documental.
- **[Hipótese aberta]** Quais modules e relações mínimas merecem futura modelagem.
- **[Decisão futura]** Council deve aceitar/revisar/deferir opções antes de qualquer schema, Question Selection Engine ou próxima slice.

---
schema_version: 0.1.0-experimental
document_role: research_question_framework
title: Experience Discovery Question Framework
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

# Experience Discovery Question Framework

## Status e uso

**[Decisão]** Este documento organiza perguntas e seleção; não é questionário executável, schema, gate ou lista obrigatória.

**[Hipótese]** Discovery é suficiente quando reduz incerteza crítica para uma decisão responsável, não quando todas as perguntas recebem resposta. A ordem é adaptativa e pode retornar a domínios anteriores.

## Metadados epistemológicos de uma resposta

| Status candidato | Significado | Tratamento |
|---|---|---|
| Confirmed | **[Hipótese]** sustentado por autoridade/evidência identificada | registrar source/date/owner |
| Inferred | **[Hipótese]** derivado de informação disponível | registrar rationale/confidence e validar se impactante |
| Assumed | **[Hipótese]** escolhido temporariamente para avançar | registrar impact/expiry/validation |
| Unknown | **[Hipótese]** não conhecido | perguntar, research, defer ou fail readiness conforme impacto |
| Conflicting | **[Hipótese]** fontes/respostas incompatíveis | explicar trade-off e escalar authority |
| Outdated | **[Hipótese]** evidência possivelmente vencida | renovar antes de decisão crítica |
| Preference | **[Preferência]** escolha estética/estratégica/cultural | testar compatibilidade, não elevar a requirement |
| Requirement | **[Hipótese]** obrigação de stakeholder/product/legal/technical | registrar authority, scope e acceptance |
| Normative | **[Fato normativo]** obrigação de norma/policy/regulação aplicável | registrar fonte, versão, jurisdição e applicability |
| Recommendation | **[Heurística]** proposta contextual | registrar evidência e alternatives |

## Domínios e perguntas candidatas

### Intent and problem

**[Heurística]** Perguntar: o que se pretende criar e por quê; qual problema, público afetado, mudança/outcome, situação atual, approach falhando, uncertainty principal, non-goals, deadline/budget e external dependencies. Reenquadrar solução pré-definida como problema quando evidence não a sustenta.

### Business and product

**[Heurística]** Perguntar: value/business model, revenue/conversion/activation/retention/internal operation, cost per action, success metrics, maturity, prior product/migration, alternatives/competitors, strategic advantage e unacceptable compromises.

### Users and actors

**[Heurística]** Identificar primary/secondary user, buyer, decision-maker, admin, operator, support, auditor, guest, anonymous/authenticated e automated actor. Para cada um: goal, knowledge, frequency, context/device, permissions, risks, limitations, anxiety/urgency e consequence of error.

### Tasks and outcomes

**[Heurística]** Identificar primary, support, occasional, critical, destructive, administrative, collaborative, interruptible, repetitive, discovery, decision e monitoring tasks. Separar user goal, interface action, business outcome e technical requirement.

### Context of use

**[Heurística]** Avaliar device/input, public/private/shared environment, connectivity/light/noise/movement, one-handed/long/sporadic use, urgency/distraction, assistive technology, languages, culture e organizational constraints.

### Content

**[Heurística]** Avaliar existing/missing volume/formats/languages, authorship/approval/maintenance/expiry/quality, sensitivity/legal responsibility e user/AI/external/regulated content. Estados de ausência, error, loading e outdated content devem ser conhecidos quando afetam task.

### Brand and perception

**[Preferência]** Capturar positioning, personality, trust, formality, innovation, proximity, sophistication, energy, exclusivity, simplicity, authority, neutrality e differentiation como intent de marca. Separar brand attribute, aesthetic preference, functional requirement, platform convention e audience expectation.

### Technology and operation

**[Heurística]** Identificar platform, backend/APIs, authn/authz, integrations, analytics, SEO, i18n, offline, performance/security/deploy, maintenance/team/maturity, existing design system/stack e compatibility. Não selecionar nova tecnologia nesta etapa.

### Risk and criticality

**[Heurística]** Avaliar financial, operational, legal, reputational, security, privacy, exclusion, human error, fraud, abandonment, manipulation e incorrect automation impact; reversibility, audit e approval. Consumir standards/policies aplicáveis, não inventá-los.

### Accessibility and inclusion

**[Fato normativo]** Para web content com WCAG 2.2 aplicável, requisitos devem ser identificados e verificados contra success criteria. **[Heurística]** Perguntar também sobre assistive technologies, keyboard, zoom/reflow, screen readers, media, time limits, dynamic content, drag/drop, charts/maps, complex data, plain language, cognitive/motor/sensory constraints e situational disability.

### Security, privacy and AI-native behavior

**[Heurística]** Identificar data collected/displayed/sensitive, roles, destructive/approved actions, exposure/shared device/session, upload/download/external content, AI-generated content/automated decisions, consent/deletion e dark-pattern risks. Para AI: authority, approval, uncertainty, sources/tool calls, interrupt/cancel/correct, memory/context, hallucination/failure, audit e human takeover.

## Seleção de perguntas

```text
Intent received
  → known information extracted and classified
  → gaps, contradictions and dependencies identified
  → complexity, risk and cost of uncertainty assessed
  → mandatory and conditional questions selected
  → low-value questions suppressed; deferred items recorded
  → answers reclassified; contradictions resolved/escalated
  → readiness and minimum artifact option recommended
```

**[Hipótese]** Value of Question pode ser estimado qualitativamente por `decision impact × uncertainty × risk`, descontando answer cost e safe inference. Nenhuma fórmula ou threshold está aprovado.

## Mandatory, conditional, optional e deferred

| Classe | Critério candidato | Exemplos candidatos |
|---|---|---|
| Mandatory | **[Hipótese]** ausência impede definir outcome, actor/task, critical boundary, authority/risk ou success | problem/outcome; primary actor/task; platform/context; critical constraints; sensitive data/permissions; success |
| Conditional | **[Hipótese]** trigger presente torna resposta necessária | SEO/public; checkout/payment; multi-role permissions; offline/field; personal data/consent; critical audit; i18n; destructive action; AI agency |
| Optional | **[Hipótese]** melhora qualidade sem bloquear decisão atual | aesthetic nuance; secondary metrics; future channel; low-impact preferences |
| Deferred | **[Hipótese]** decisão pode aguardar prototype/implementation sem risco oculto | microcopy variation; non-critical motion; exact component anatomy; optimization detail |

**[Heurística]** Mandatory é contextual: uma legal constraint pode dominar produto simples; um large product conhecido pode precisar menos discovery que uma novidade pequena e ambígua.

## Trigger matrix para perguntas condicionais

| Trigger observado | Perguntas ativadas | Risco se omitido |
|---|---|---|
| Public/indexable content | SEO, content ownership, accessibility, analytics/privacy | invisibilidade, non-compliance, unreliable content |
| Commerce/payment | pricing, checkout, failure/refund, fraud, consent, support | financial loss e abandonment |
| Multiple roles | identity, permission, visibility, approval, audit | privilege/confidentiality failure |
| Sensitive/regulated data | legal basis, minimization, display/export/delete, retention, audit | privacy/legal harm |
| Offline/poor network | critical tasks, cache/sync/conflict, degraded states | data loss ou blocked work |
| Destructive/irreversible action | confirmation, authority, preview, undo/compensation, evidence | irreversible harm |
| AI action/content | sources, uncertainty, grants, approval, interrupt, audit, takeover | false trust ou excessive agency |
| Multiple markets/languages | language, locale, culture, legal/content ownership | exclusion/inconsistency |
| Critical/public service | inclusion, assisted routes, continuity, security, evidence | denial of essential outcome |

Todas as linhas são **[Heurística]** e exigem adaptação.

## Complexity and risk assessment

**[Hipótese]** Classificar qualitativamente:

- uncertainty/novelty: known, mixed, novel;
- actor/flow complexity: single, multiple, interdependent;
- impact: low, material, severe;
- data/authority: public/read-only, personal/mutable, sensitive/privileged;
- reversibility: easy, costly, irreversible;
- operational criticality: optional, important, essential;
- regulation/audit: none known, applicable, stringent.

**[Hipótese]** O maior fator relevante pode elevar o tier; média simples não é segura.

## Discovery sufficiency e readiness

| Check | Ready quando | Não pronto quando |
|---|---|---|
| Problem/outcome | **[Hipótese]** problem e desired change distinguem-se de solução | solução pré-escolhida sem problem verificável |
| Actors/tasks/context | atores críticos e primary tasks/context estão identificados | usuário genérico ou actor/authority crítico unknown |
| Product/success | scope, non-goals e success/evidence intent são claros | feature list sem outcome ou metric intent |
| Constraints/risks | hard/soft constraints e high risks têm owner/treatment | risk crítico oculto ou sem authority |
| Content/platform | material mínimo, ownership e target contexts conhecidos | conteúdo/plataforma central desconhecidos |
| Accessibility/security/privacy | applicability e questions críticas registradas | sensitive data, exclusion ou destructive behavior ignorados |
| Uncertainty/conflict | unknowns/assumptions são bounded e conflicts decididos/escalados | contradiction crítica sem prioridade |
| Next package | artifact option e rationale são proporcionais | documentação escolhida por hábito |

**[Hipótese]** Outcomes de readiness:

- `Ready`: critical checks suficientes;
- `Ready with bounded assumptions`: gaps possuem owner, expiry e baixo/controlled impact;
- `Not ready — missing critical information`: pergunta/research/decision externa necessária;
- `Stop/redirect`: evidence indica que não construir ou outro intervention resolve melhor.

## Contradiction handling

**[Heurística]** Processo candidato:

1. registrar claims e respectivas categorias/fontes;
2. explicitar incompatibilidade e artifacts/actors afetados;
3. estimar impact, reversibility e evidence gap;
4. identificar decision authority;
5. solicitar priority/trade-off ou research;
6. registrar decision, rationale e rejected alternative;
7. propagar change impact.

Exemplos candidatos: simple versus many features; mobile-first versus desktop operation; no account versus history; accessible versus brand contrast; fast versus heavy motion; premium versus budget; secure versus broad permissions; frictionless versus regulation; like competitor versus originality; simple dashboard versus dense tasks.

## Assumptions, preferences e change impact

**[Hipótese]** Assumption Register pode ser uma seção com source, confidence, impact, validation, owner, deadline/status e affected artifacts. Critical assumption expirada invalida readiness.

**[Preferência]** Estética, technology, interaction, brand, personal, organizational e cultural preferences são inputs legítimos. **[Heurística]** Avaliar compatibilidade com outcomes, accessibility, performance, security, maintenance e evidence; preservar quando não causam dano e explicitar trade-offs.

**[Hipótese]** Mudança em requirement, actor, platform, content, brand, policy, risk, accessibility ou integration deve navegar relações para journeys, flows, states, content, tests, frontend architecture, analytics e docs. Não criar engine/schema.

## Research method selection

| Gap | Método candidato | Categoria |
|---|---|---|
| comportamento/contexto unknown | interview, observation/contextual inquiry | Heurística |
| current performance/failure | analytics, support/search logs, operational data | Heurística |
| information grouping/labels | card sorting/tree testing | Heurística |
| task/flow comprehension | prototype/usability test | Heurística |
| accessibility applicability/use | standards review + disabled user/manual AT evaluation | Heurística |
| technical feasibility high-impact | technical spike posterior e autorizado | Heurística |
| market/alternative context | desk/competitive research sem copiar solution | Heurística |

**[Evidência empírica]** Literatura revisada no report sustenta que user involvement pode contribuir, mas efeito é contextual; método e qualidade devem responder ao gap. Não inventar usuário/persona nem exigir formal research quando existing evidence é suficiente.

## Saída documental candidata

**[Hipótese]** Uma saída mínima pode conter: problem/outcome/non-goals; actors/tasks/context; business/content/platform; critical accessibility/security/privacy; requirements/constraints/preferences separados; success/evidence intent; assumptions/conflicts/unknowns; readiness; package recommendation; provenance e decision authority.

## Limitações

**[Lacuna]** Perguntas não foram testadas com projetos ou usuários. Mandatory/conditional classes, triggers, thresholds e readiness são hipóteses. A próxima decisão deve avaliar se benchmark documental ou casos reais são necessários antes de schema/engine.

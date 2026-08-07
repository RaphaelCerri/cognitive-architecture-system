---
schema_version: 0.1.0-experimental
document_role: research_evidence_report
title: Experience Foundations Research Report
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

# Experience Foundations Research Report

## Objetivo, método e classificação

**[Decisão]** Esta slice investiga o processo mínimo, adaptativo e governado para transformar intenção em uma fundação de experiência confiável, sem criar UI, schema, engine ou contrato estável.

Foram consultadas fontes oficiais/normativas e literatura empírica selecionada. Cada afirmação substantiva usa uma categoria: **Fato normativo**, **Evidência empírica**, **Heurística**, **Preferência**, **Hipótese** ou **Decisão**. Orientação institucional é classificada como heurística fora da jurisdição que a emitiu, mesmo quando obrigatória internamente.

## Evidência externa

| Categoria | Fonte e achado limitado | Implicação para a slice |
|---|---|---|
| Fato normativo | ISO 9241-210:2019 fornece requisitos e recomendações para princípios e atividades de human-centred design ao longo do lifecycle de sistemas interativos; não detalha todos os métodos. | Experience Foundations deve atravessar lifecycle e não fingir que um questionário esgota human-centred design. |
| Fato normativo | ISO/IEC/IEEE 29148:2018 especifica processos e information items de requirements engineering ao longo do lifecycle. | PRD/requirements e experiência precisam de ownership e traceability, sem duplicar informação. |
| Fato normativo | WCAG 2.2 é W3C Recommendation para acessibilidade de web content; declara que nem todas as necessidades das pessoas com deficiência são cobertas. | Acessibilidade começa no discovery, mas conformidade WCAG não prova experiência inclusiva completa nem se aplica sem adaptação a todo produto/plataforma. |
| Heurística institucional | GOV.UK Service Standard orienta entender usuários, contexto e problema antes da solução, não construir durante discovery, explicitar constraints, success e decisão de seguir/parar. | Apoia discovery problem-first, readiness explícita e possibilidade de não construir; não é norma universal para todos os arquétipos. |
| Heurística institucional | GOV.UK orienta tratar opiniões não originadas de usuários como assumptions e pesquisar usuários diversos; USWDS recomenda real user needs e testes contextuais. | Stakeholder preference não substitui user evidence; assumptions precisam de status e validação proporcional. |
| Heurística institucional | W3C WAI recomenda integrar acessibilidade ao processo, avaliar cedo/repetidamente e envolver pessoas com deficiência; USWDS combina automação e testes manuais/contextuais. | Accessibility discovery e validation plan são transversais; checklist tardio e automação isolada são insuficientes. |
| Heurística institucional | NIST Privacy Framework é voluntário e orienta identificar data processing, privacy risks, values e legal requirements antes de planos de ação. | Data, privacy, consent, roles e risk precisam ser perguntas condicionais precoces. |
| Evidência empírica | Bano e Zowghi sintetizaram 87 estudos: o efeito geral de user involvement foi positivo, mas não direto nem simples; resultados dependem de condições e gestão. | Não impor participação uniforme nem presumir causalidade automática; selecionar método, participantes e profundidade pelo caso. |
| Evidência empírica | Saarinen e Sääksjärvi analisaram 48 projetos e reportaram que qualidade/equilíbrio da participação importaram mais que quantidade. | Mais entrevistas ou artefatos não significam melhor discovery; qualidade, competência e decisão produzida importam. |
| Evidência empírica | Harris e Weistroffer revisaram 28 estudos e encontraram importância de user involvement, com pontos condicionais para eficácia. | Apoia involvement com governança e outcome definido, não como ritual universal. |

## Conceitos e definições candidatas

- **[Hipótese] Experience Foundations:** conjunto mínimo de conhecimento confirmado, incertezas, assumptions, constraints, risks, outcomes e relações necessários para decidir se e como avançar para Experience Architecture.
- **[Hipótese] Experience Discovery:** processo adaptativo de reduzir incerteza relevante e testar assumptions sobre problema, atores, tasks, context, content, business, technology, accessibility, security e success; não é formulário fixo.
- **[Hipótese] Experience Architecture:** composição governada de decisões e relações que traduz product requirements e user needs em journeys, information, flows, states, content, interaction, accessibility e validation requirements. Pode ser package/visão, não necessariamente documento ou tipo único.
- **[Hipótese] Experience Architecture Package:** seleção proporcional de artefatos ou seções que materializam Experience Architecture para um caso; Minimal, Standard, Complex e Critical são opções analíticas, não perfis aprovados.
- **[Hipótese] Discovery readiness:** decisão explícita de que informação crítica está suficiente para avançar, com unknowns e risks residuais registrados; não significa certeza completa.
- **[Hipótese] Experience requirement:** obrigação sobre outcome, task, content, state, interaction, accessibility ou quality que liga product intent a design/implementation/test, sem prescrever UI prematuramente.

## Princípios candidatos avaliados

- **[Heurística] Experience before interface:** compreender problema, usuários, tasks, context, content, constraints, risks e success antes de materializar UI reduz solution bias; profundidade depende do caso.
- **[Heurística] Proportional discovery:** aumentar rigor com uncertainty, novelty, roles, flows, impact, data sensitivity, irreversibility e criticality; reduzir documentação que não muda decisão.
- **[Hipótese] Traceability:** toda decisão relevante deve apontar para intent, need, requirement, constraint, evidence, risk, preference ou Council decision e permitir navegação reversa.
- **[Heurística] Explicit uncertainty:** marcar confirmed, inferred, assumed, unknown, conflicting e outdated evita converter silêncio em fato.
- **[Heurística] No premature UI:** missing critical information deve produzir pergunta, bounded assumption ou escalation; template/default/model preference não pode mascarar ausência crítica.
- **[Hipótese] Minimum sufficient artifact set:** produzir o menor conjunto que suporte decisão, traceability, implementation e evaluation proporcionais.

## Discovery adaptativo

**[Hipótese]** O Question Selection Engine futuro deve extrair fatos já presentes, identificar gaps/dependencies, classificar complexity/risk, selecionar mandatory/conditional questions, suprimir baixo valor, testar respostas e contradições e então emitir readiness. Nenhum engine foi implementado.

**[Heurística]** Perguntas mandatory são as cuja ausência impede uma decisão responsável naquele caso, não uma lista universal. Um núcleo candidato é: problem/outcome, primary actors/tasks, platform/context, critical constraints/risks, sensitive data/authority e success. Conditional questions são ativadas por triggers como public discoverability, commerce, multi-role, offline, regulated data, destructive actions, AI agency ou multiple markets. Optional refinam; Deferred aguardam prototyping/implementation sem ocultar risk.

**[Hipótese]** Discovery suficiente requer problem e outcomes compreendidos, actors/tasks/context identificados, critical constraints/risks e success registrados, content/platform minimamente conhecidos, contradictions resolvidas/escaladas e unknowns classificados. O resultado pode ser `Ready`, `Ready with bounded assumptions` ou `Not ready — critical information missing`.

## PRD, Experience Architecture e Frontend Architecture

- **[Hipótese] PRD:** owns problem/opportunity, target users/market, outcomes, scope/non-goals, business rules, product/functional/non-functional requirements, priorities, dependencies, constraints, risk and success.
- **[Hipótese] Experience Architecture:** owns user/actor interpretation, needs/tasks, journeys, IA/navigation, flows/states, content/interaction requirements, accessibility/responsive implications, experience risks and acceptance/test intent.
- **[Hipótese] Frontend Architecture:** owns technical realization: rendering, routing, data/state/forms, auth integration, component/feature boundaries, error/loading, caching, observability, testing and deployment.
- **[Heurística] Shared concerns:** accessibility, security, performance, privacy, analytics, localization, content and branding devem ter uma fonte responsável e referências bidirecionais, não cópias divergentes.

## Traceability candidata

```text
Intent → Problem → User Need → Product Requirement → Experience Requirement
       → Journey / Flow / State → Screen / Interaction / Content
       → Implementation Requirement → Test → Evidence
```

**[Hipótese]** Relações são muitos-para-muitos e etapas podem ser omitidas quando sem valor, desde que a razão permaneça verificável. Checks futuros devem detectar requirement órfão, UI sem need, feature sem success, decisão sem authority/evidence e test sem acceptance criterion. Não criar schema.

## Proporcionalidade, arquétipos e tiers

**[Heurística]** Landing/marketing/content, commerce, SaaS/dashboard, internal/enterprise, mobile, public/regulated, AI-native, data-heavy/collaborative e multi-sided products ativam riscos e artefatos diferentes. Arquétipo informa perguntas; não determina solução.

**[Hipótese]** Quatro tiers analíticos ajudam a comparar opções: Simple, Product, Complex e Critical. Tier não deriva apenas do tipo de produto: impact, data, roles, irreversibility, regulation, novelty e ambiguity podem elevar rigor. Os tiers e seus artifact sets não estão aprovados.

## Accessibility, security, privacy e AI-native

- **[Fato normativo]** Para web content no escopo, WCAG 2.2 estabelece success criteria de conformidade; applicability e legislação precisam ser determinadas por projeto/jurisdição.
- **[Heurística]** Discovery deve identificar assistive technologies, keyboard/zoom/screen readers, time limits, dynamic content, media, complex data, language needs e situational constraints antes de patterns/flows.
- **[Heurística]** Security/privacy discovery deve identificar data collected/displayed, roles, destructive/approved actions, exposure, shared devices, sessions, upload/download, external/AI content, automated decisions, consent/deletion e dark-pattern risk, consumindo autoridade do ARP-0007.
- **[Hipótese]** AI-native products acrescentam action authority, approval, uncertainty, sources/tool visibility, interrupt/cancel/correct, memory/context, sensitive content, failure/audit e human takeover como inputs obrigatórios quando aplicáveis.

## Contradições, assumptions e preferências

**[Heurística]** Contradições devem ser nomeadas, ter impacto explicado, exigir priorização, registrar decision/authority e preservar alternatives relevantes. Exemplos: simple versus scope amplo; mobile-first versus desktop operation; frictionless versus regulation; brand palette versus contrast; fast versus heavy motion; secure versus broad permissions.

**[Hipótese]** Assumption Register leve pode guardar assumption, source, confidence, impact, validation, owner, deadline, status e affected artifacts como seção documental, sem novo tipo.

**[Preferência]** Estética, technology, interaction, brand, personal, organizational e cultural choices devem ser preservadas quando compatíveis com outcomes, accessibility, performance, security e maintenance. Preferência não é requirement absoluto nem evidence.

## Anti-patterns

**[Heurística]** Evitar: começar por home/framework/design system/visual; stakeholder como proxy automático; persona fictícia como fato; competitor/reference como requirement; perguntar tudo em todo projeto ou pouco em sistema crítico; preference como requirement; mobile-first como dogma; PRD como especificação completa; screen sem state/need; flow sem exceptions; requirement sem test; feature sem success; heurística como única evidência; accessibility/security tardias; documentação excessiva sem decisão ou insuficiente por pressa.

## Recomendações preliminares

1. **[Recomendação preliminar derivada de heurística/evidência]** Adotar discovery adaptativo orientado a gaps, risk e decisions, não questionário universal.
2. **[Recomendação preliminar derivada de norma/heurística]** Manter accessibility, privacy, security e success desde o início e com ownership explícito.
3. **[Recomendação preliminar derivada de hipótese]** Tratar Experience Architecture como composição/visão antes de considerar identidade canônica.
4. **[Recomendação preliminar derivada de heurística]** Usar artifact packages proporcionais e exigir justificativa para incluir/omitir itens.
5. **[Recomendação preliminar derivada de evidência]** Avaliar qualidade/resultado da participação, não quantidade de research ceremonies.
6. **[Recomendação preliminar]** Deferir schema, engine, types, UI, technology selection e próxima slice até Council review.

## Ambiguidades e lacunas

- **[Hipótese aberta]** Se Experience Architecture precisa de identidade ou é view composta.
- **[Hipótese aberta]** Qual item owns shared qualities e qual relação mínima garante traceability sem duplicação.
- **[Hipótese aberta]** Como calibrar tiers/thresholds e validar minimum sufficient artifact sets empiricamente.
- **[Lacuna de evidência]** Esta slice não executou user research, benchmark ou comparação quantitativa de artifact packages.
- **[Lacuna normativa]** Legislação e standards setoriais dependem de jurisdição/produto; não foram generalizados.
- **[Lacuna operacional]** Question selection, readiness, change impact e traceability ainda não têm schema ou engine autorizados.

## Fontes e proveniência

Todas acessadas em 2026-07-22:

- ISO 9241-210:2019: https://www.iso.org/standard/77520.html
- ISO/IEC/IEEE 29148:2018: https://www.iso.org/standard/72089.html
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- W3C WAI Planning and Managing Web Accessibility: https://www.w3.org/WAI/planning-and-managing/
- W3C WAI Involving Users: https://www.w3.org/WAI/planning/involving-users/
- GOV.UK Understand users and their needs: https://www.gov.uk/service-manual/service-standard/point-1-understand-user-needs
- GOV.UK Learning about users and needs: https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs
- GOV.UK Discovery phase: https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works
- GOV.UK Define success: https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data
- USWDS Design Principles: https://designsystem.digital.gov/design-principles/
- USWDS Accessibility: https://designsystem.digital.gov/documentation/accessibility/
- NIST Privacy Framework: https://www.nist.gov/privacy-framework
- Bano and Zowghi systematic review: https://doi.org/10.1016/j.infsof.2014.06.011
- Saarinen and Sääksjärvi empirical study: https://aisel.aisnet.org/sjis/vol2/iss1/6/
- Harris and Weistroffer review: https://doi.org/10.17705/1CAIS.02442

Limitação de proveniência: os abstracts oficiais da ISO foram consultados, não o texto integral pago; portanto nenhum requisito detalhado além do abstract foi atribuído às normas.

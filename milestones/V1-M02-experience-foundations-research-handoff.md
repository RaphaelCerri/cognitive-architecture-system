---
schema_version: 0.1.0-experimental
id: IHR-0008
kind: knowledge
knowledge_type: implementation_handoff_report
title: Experience Foundations Research Slice — Handoff
status: pending_review
version: "1.0"
created_at: 2026-07-22
milestone: V1-M02
related_commits: []
language: pt-BR
relations:
  - type: reports
    target: V1-M02
  - type: governed_by
    target: IHP-001
  - type: documents
    target: ARP-0009
---

# IHR-0008 — Experience Foundations Research Slice

## 1. Identificação

Pacote para revisão do CSA da slice **Experience Foundations — Discovery, PRD Boundaries and Experience Architecture**, autorizada sobre ARP-0009 após o checkpoint `149923ba68c7bd241e8288f563f590f5432c9245`.

## 2. Objetivo autorizado

Investigar o processo mínimo, adaptativo e governado para compreender, perguntar, registrar e validar uma fundação de experiência antes de UI. A slice é exclusivamente documental: sem PRD changes, schema, questionnaire/engine, frontend, component, design system, technology selection, catalog, benchmark ou implementação.

## 3. Resultado

**[Hipótese]** Experience Discovery foi definido como uncertainty reduction adaptativa, não formulário fixo; Experience Architecture como composição governada entre PRD e realization; e Experience Architecture Package como core+modules proporcionais. **[Heurística]** Readiness, traceability, contradiction handling e minimum sufficient artifact set reduzem tanto UI prematura quanto bureaucracy sem valor. Nenhuma definição foi canonizada.

Distinções preservadas: norma não é heurística; empirical evidence não é preference; preference não é requirement; hypothesis não é Council decision; PRD, Experience Architecture, Visual Direction, Design System, Frontend Architecture, Implementation, Evaluation e Production Evidence possuem candidate ownership separado.

## 4. Execution Loop Report

1. **Pergunta:** quais fundamentos e fontes normativas delimitam a slice? **Fontes:** ISO 9241-210, ISO/IEC/IEEE 29148, WCAG/WAI. **Evidência/classificação:** facts normativos limitados ao scope publicado; WAI como institutional guidance. **Comparação:** lifecycle/requirements/accessibility versus questionnaire. **Conclusão provisória:** foundations atravessam lifecycle e não se esgotam em perguntas. **Lacuna:** textos ISO completos não consultados. **Decisão:** continuar.
2. **Pergunta:** como discovery pode ser proporcional? **Fontes:** GOV.UK Service Manual, USWDS e estudos de user involvement. **Evidência/classificação:** institutional heuristics; empirical syntheses mostram efeito contextual e importância da qualidade. **Comparação:** uniform ceremony versus gap/risk selection. **Conclusão:** mandatory é contextual e low-value questions devem ser suprimidas. **Lacuna:** framework não testado. **Decisão:** continuar.
3. **Pergunta:** onde termina PRD e começa Experience Architecture? **Fontes:** ISO 29148, official service guidance e project boundaries. **Evidência/classificação:** normative requirements framing + hypothesis de ownership. **Comparação:** duplication versus source+references. **Conclusão:** PRD owns product intent/requirements; Experience owns user-facing behavior; Frontend owns technical realization. **Lacuna:** canonicality/cardinalities abertas. **Decisão:** continuar.
4. **Pergunta:** qual package mínimo serve casos distintos? **Fontes:** achados 1–3 e archetype/risk analysis. **Evidência/classificação:** heuristic/hypothesis, sem empirical package benchmark. **Comparação:** single document, fixed collection, adaptive package, composed view e process-only. **Conclusão:** core+modules Minimal/Standard/Complex/Critical é opção preferida para pesquisa, não decisão. **Lacuna:** thresholds/cost/quality. **Decisão:** continuar.
5. **Pergunta:** a síntese cobre accessibility, security, AI, contradictions e anti-patterns? **Fontes:** WCAG/WAI, NIST Privacy Framework, GOV.UK, USWDS e ARP-0007 boundary. **Evidência/classificação:** normative/official heuristics + local hypotheses. **Comparação:** late checklist versus discovery integration. **Conclusão:** concerns devem surgir por applicability/triggers e manter ownership externo. **Lacuna:** sector law/standards. **Decisão:** validar.
6. **Pergunta:** pacote respeita epistemologia, governança e escopo? **Fontes:** directive, IHP-001, repository e outputs. **Evidência/classificação:** validation facts. **Comparação:** expected versus actual six-file set. **Conclusão:** pronto para CSA se checks passarem. **Lacuna:** Council decisions futuras. **Decisão:** commit e stop; nenhuma próxima slice.

Todas as iterações tiveram progresso; limites de seis arquivos, seis iterações e duas no-progress iterations foram respeitados.

## 5. Fontes e classificação

- **Fato normativo:** ISO 9241-210:2019; ISO/IEC/IEEE 29148:2018; WCAG 2.2 dentro de scope/applicability.
- **Heurística institucional:** W3C WAI planning/user involvement, GOV.UK Service Manual, USWDS principles/accessibility e NIST Privacy Framework fora de suas obrigações específicas.
- **Evidência empírica:** Bano/Zowghi; Saarinen/Sääksjärvi; Harris/Weistroffer sobre user participation/involvement e system success.
- **Preferências identificadas:** estética, technology, interaction, brand, personal, organizational e cultural, sempre separadas de evidence/requirements.

URLs, access date, provenance, limitações e achados constam no research report.

## 6. Entregáveis e arquivos

Alterado:

- `knowledge/research/ARP-0009-experience-engineering-and-interface-architecture.md`.

Criados:

- `knowledge/research/evidence/experience-foundations-research-report.md`;
- `knowledge/research/evidence/experience-discovery-question-framework.md`;
- `knowledge/research/evidence/prd-experience-responsibility-matrix.md`;
- `knowledge/research/evidence/experience-architecture-package-options.md`;
- `milestones/V1-M02-experience-foundations-research-handoff.md`.

Total: seis arquivos autorizados. Outros ARPs, APs, PRDs, `.obsidian` e draft não foram alterados/stageados.

## 7. Definições, matrix e package options

- **Experience Foundations [Hipótese]:** knowledge, uncertainty, assumptions, constraints, risks, outcomes e relations mínimos para readiness.
- **Experience Discovery [Hipótese]:** evidence gathering e uncertainty reduction adaptativas.
- **Experience Architecture [Hipótese]:** composition/view de decisions que traduz product requirements/needs em journeys, IA, flows, states, content, interaction, accessibility e validation.
- **Package [Hipótese]:** core+modules Minimal, Standard, Complex ou Critical; nomes/sets/tier não aprovados.
- **Traceability [Hipótese]:** Intent → Problem → Need → Product Requirement → Experience Requirement → Flow/State/Content → Implementation → Test → Evidence, com omissions justificáveis e reverse impact.

A Responsibility Matrix separa ownership de Intent, PRD, Experience Architecture, Visual Direction, Design System, Frontend Architecture, Implementation, Evaluation e Production Evidence.

## 8. Validação

Validação documental proporcional antes do commit: YAML; JSON; next/unique IDs; relations; links/URLs; source/access dates/provenance; epistemological labels; ausência de unclassified claims materiais; state de ARP-0009; six-file scope; ausência de implementation/technology selection/PRD change; IHP 12/12; UTF-8 sem mojibake; e `git diff --check`. Build, lint e typecheck não se aplicam.

## 9. Desvios e limitações

Nenhum benchmark ou user research primário foi executado. Evidence empírica é literatura selecionada e não valida o framework local. ISO abstracts oficiais foram consultados, não os textos pagos integrais. GOV.UK/USWDS/NIST são contextual guidance, não norms universais. Tier/package/readiness/mandatory classes permanecem hypothesis/heuristic. Não houve ACP, schema ou implementação.

## 10. Riscos e questões abertas

Riscos: labels epistemológicos inconsistentes; heurística parecer norma; package virar bureaucracy; readiness virar gate arbitrário; tiers parecerem risk certification; PRD/Experience duplication; assumptions expirarem; traceability virar overhead; user involvement virar ritual; accessibility/security serem aplicadas como checklist; e artifact view virar novo Source of Truth.

Questões: identidade/canonicality de Experience Architecture; source owner de shared qualities; thresholds/tier authority; empirical validation dos packages; cardinalities; change-impact mechanism; quando decision vira ADR; applicability setorial; e eventual necessidade de schema/engine após evidência.

## 11. Recomendação e pacote CSA

Recomendação preliminar: aceitar os documentos como evidence/analysis, preservar adaptive discovery e core+modules como leading hypotheses, e deferir schema, Question Selection Engine, profiles, frontend e próxima slice. O CSA deve revisar epistemic discipline, PRD ownership, proportionality, accessibility/security integration, evidence limitations e risco de burocratização.

Decisões futuras do Conselho: aceitar/revisar/rejeitar definitions/options; determinar evidence/cases adicionais; decidir authority de readiness/tier; e escolher explicitamente se/qual próxima slice será autorizada. Não iniciar Information Architecture/User Flows, Visual References, Design System, Catalog, Frontend Architecture ou benchmark automaticamente.

## 12. Project Status Snapshot

```json
{
  "current_milestone": {
    "id": "V1-M02",
    "status": "in_progress",
    "current_checkpoint": "experience_foundations_review",
    "closure_recommended": false
  },
  "completed": [
    "Experience Foundations Research Report",
    "Discovery Question Framework",
    "PRD and Experience Responsibility Matrix",
    "Experience Architecture Package Options"
  ],
  "pending": [
    "CSA review",
    "Council decision on candidate foundations and package options",
    "Empirical validation or explicit selection of any future slice"
  ],
  "blocked": [
    "Question Selection Engine",
    "Schemas and canonical Experience types",
    "Information Architecture and User Flows slice",
    "Visual Reference, Design System and Technology Catalog research",
    "Frontend and benchmarks"
  ],
  "decisions_required": [
    "Accept, revise or reject candidate definitions and boundaries",
    "Determine evidence needed to validate tiers and minimum artifact sets",
    "Assign future authority for readiness and package selection",
    "Choose and authorize a future bounded slice or pause"
  ],
  "research_program": {
    "id": "ARP-0009",
    "governance_state": "authorized",
    "research_state": "active",
    "knowledge_maturity": "evidence_gathering",
    "outcome": null,
    "implementation_state": "not_started",
    "operational_state": "not_applicable"
  },
  "documentation_status": {
    "synchronized": true,
    "files_changed": 6,
    "missing_updates": []
  },
  "validation": {
    "documentary_checks_passed": true,
    "build_passed": null,
    "lint_passed": null,
    "typecheck_passed": null
  },
  "recommended_next_action": "CSA and Council review Experience Foundations; do not start another slice, frontend, catalog or benchmark automatically."
}
```

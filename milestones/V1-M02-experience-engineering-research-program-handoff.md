---
schema_version: 0.1.0-experimental
id: IHR-0007
kind: knowledge
knowledge_type: implementation_handoff_report
title: Experience Engineering and Interface Architecture Research Program — Handoff
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

# IHR-0007 — Experience Engineering and Interface Architecture

## 1. Identificação

Pacote para revisão do CSA referente ao registro do programa experimental `ARP-0009 — Experience Engineering and Interface Architecture` em 2026-07-22. O checkpoint anterior `e6fd7f51bf480591e7cca452a1fbdf4394e44acf` foi reconhecido pelo Conselho como pesquisa experimental aprovada, sem canonizar suas definições candidatas nem encerrar ARP-0008.

## 2. Objetivo autorizado

Registrar documentalmente um novo Architectural Research Program e seu backlog macro-to-micro. Não autoriza Deep Research, frontend, páginas, components, design system, schemas, bibliotecas, downloads, integrações, benchmarks, Core Types, Ontologia, ARCH-001, PRD, Roadmap V1, AP/ADR/RFC ou nova slice de ARP-0008.

## 3. Resultado

Criado `ARP-0009` com título final **Experience Engineering and Interface Architecture**, `research_form: program`, `status: experimental`, `governance_state: approved_experimental`, `research_state: scoped`, `knowledge_maturity: hypothesis`, `outcome: null`, `implementation_state: not_started` e `operational_state: not_applicable`.

Justificativa: interfaces não são consequência superficial de backend, prompt, template ou biblioteca; exigem investigação coordenada de produto, usuários, informação, conteúdo, interação, visual, acessibilidade, plataforma, tecnologia, risco, avaliação e evolução. A natureza ontológica da disciplina permanece aberta.

## 4. Execução por iteração

1. **Precondições e IDs:** branch `main`, HEAD aprovado/ancestral, tracked worktree limpo, staging vazio e untracked preservados; próximos IDs `ARP-0009` e `IHR-0007`. Progresso confirmado; continuar.
2. **Fronteiras:** ARP-0002/0004/0007/0008 e AP-0015/0016 inspecionados. Sobreposição delimitada sem ACP ou alteração externa. Progresso confirmado; continuar.
3. **Programa:** visão, objetivo, tracks, backlog, roadmap, guardrails, questões e lifecycle registrados em um único ARP. Nenhuma evidência externa foi coletada. Progresso confirmado; continuar.
4. **Handoff:** decisão contextual, execução, escopo, riscos, pendências e pacote CSA registrados em IHR-0007. Progresso confirmado; validar.
5. **Validação:** YAML, JSON, IDs, relações, links, UTF-8, escopo, lifecycle, hipóteses, ausência de implementação/adoção/pesquisa, consistência, IHP 12/12 e diff verificados. Progresso confirmado; stage explícito.
6. **Checkpoint:** somente os dois arquivos autorizados revisados, stageados e preparados para commit atômico. Encerrar após commit, sem primeira slice ou frontend.

Nenhuma iteração sem progresso ocorreu e nenhum limite do loop documental foi excedido.

## 5. Arquivos e escopo

Criados:

- `knowledge/research/ARP-0009-experience-engineering-and-interface-architecture.md`;
- `milestones/V1-M02-experience-engineering-research-program-handoff.md`.

O terceiro arquivo opcional não foi necessário. ARP-0008 e todos os APs/ARPs vizinhos permaneceram inalterados; `.obsidian` e o draft não rastreado permaneceram fora do escopo.

## 6. Fronteiras e decisões técnicas locais

- ARP-0002 retém planejamento, compilação, coordenação e execução cognitiva; ARP-0009 pesquisa requisitos de experiência/interface.
- ARP-0004 retém runtime augmentation/economia; ARP-0009 pesquisa frontend e experiência.
- ARP-0007 retém security/assurance/guardrails transversais; ARP-0009 identifica riscos de interface para futura relação.
- ARP-0008 retém artifacts cognitivos; ARP-0009 cobre experiência, design, interface e frontend.
- AP-0015 é o caso especializado de frontend de visualização arquitetural; AP-0016 é o caso especializado de onboarding. Ambos poderão ser casos/benchmarks, sem duplicação.
- Nenhum conceito, artefato candidato, Technology Catalog, Profile ou Package foi promovido a tipo ou contrato.

## 7. Backlog de pesquisa registrado

**PRD:** hipótese separa Product Requirements, Experience Architecture Package e Frontend Architecture, exigindo ownership, proporcionalidade, não duplicação, traceability e feedback sem alterar PRD.

**Experience Discovery:** produto, usuários, marca, conteúdo, tecnologia e operação; nenhuma entrevista implementada.

**Experience/Information Architecture:** necessidades, jobs, segments/personas, journeys, blueprints, information/content/navigation, flows, screens, interactions, states, recovery, trust, consent e permissions, escolhidos proporcionalmente.

**User Flow e Interaction:** caminhos completos, falhas, interrupções, permissions e recuperação; affordances, feedback, focus/keyboard, input, motion e multimodalidade.

**Visual Engineering e Reference Interpretation:** composição, typography, color, tokens, responsive/platform design e separação rigorosa entre observação, inferência e decisão, com provenance, originalidade, acessibilidade e IP.

**Bibliotecas e repositórios:** estratégia governada por fontes oficiais, manutenção, releases, licença, dependencies, provenance, SBOM, accessibility, security, compatibility e maturity; nada instalado ou aprovado.

**Technology Selection Engine e Catalog:** hipóteses de seleção explicável e catálogo por evidência, constraints, use cases, contraindications e disposition, nunca por popularidade.

**Accessibility:** transversal, baseada futuramente em padrões oficiais e combinação de automação, revisão manual e usuários; automação não é prova completa.

**Frontend Architecture:** rendering, routing, data/state, forms, auth, boundaries, streaming, i18n, observability, security, testing, deployment, offline/sync e contracts; biblioteca visual não define arquitetura.

**Evaluation:** usability, task outcomes, accessibility, responsiveness, visual/content quality, performance, security, regressions, trust e human review. Nenhuma ferramenta foi adotada.

**Roadmap:** Foundations; Discovery and Architecture; Design Language; Technology Selection; Generation; Evaluation; Production and Evolution.

**Benchmarks futuros:** frontend do próprio Cognitive Architecture System e uma aplicação fictícia end-to-end. Nenhum benchmark foi iniciado.

## 8. Validação

Validação documental proporcional antes do commit: próximo ID, frontmatter YAML, campos obrigatórios, unicidade de IDs, relações resolvidas, links, UTF-8 sem mojibake, escopo de dois arquivos, lifecycle correto, hipótese versus decisão, ausência de implementação, adoção tecnológica, evidência externa e Deep Research, consistência com programas existentes, IHP 12/12, JSON do snapshot e `git diff --check`. Build, lint e typecheck não se aplicam.

## 9. Plano versus execução e desvios

O limite permitia três arquivos, mas apenas ARP e handoff foram necessários. A Parte I foi preservada como autorização contextual, sem commit vazio ou alteração de ARP-0008. Nenhuma fonte externa foi pesquisada, biblioteca instalada ou repositório baixado. O programa contém backlog amplo, mas permanece `scoped`; a largura não implica execução simultânea das tracks.

## 10. Pendências, questões e riscos

Decisões futuras: natureza de Experience Engineering; composição/ownership de Experience Architecture; natureza de Design System/Tokens/Components; classificação de Reference Analysis, Accessibility/Evaluation Profiles, Technology Catalog, Selection Profiles, Visual Direction e Experience Decision Record; fronteiras de compilação; escolha e autorização de uma primeira slice.

Riscos: backlog amplo parecer autorização; artefatos candidatos virarem tipos prematuros; framework/catalog/runtime virar Source of Truth; design ser reduzido a estética; acessibilidade/conteúdo/estados/segurança serem tardios; referências causarem cópia ou phishing; catálogo ficar popularidade-driven ou stale; e sobreposição futura com ARP-0007/0008.

## 11. Recomendação e pacote CSA

Recomenda-se aceitar ARP-0009 como programa experimental `scoped` e revisar se sua delimitação evita duplicação com os programas e propostas relacionados. O CSA deve verificar especialmente: natureza não canônica, independência de framework, relação com PRD, acessibilidade transversal, provenance/originalidade, tecnologia baseada em evidência, ausência de implementação e proporcionalidade do roadmap.

Após revisão, o Conselho poderá manter o programa no backlog, revisar limites, pausar ou autorizar uma única slice bounded. Não iniciar Deep Research, frontend ou nova slice automaticamente.

## 12. Project Status Snapshot

```json
{
  "current_milestone": {
    "id": "V1-M02",
    "status": "in_progress",
    "current_checkpoint": "experience_engineering_program_review",
    "closure_recommended": false
  },
  "completed": [
    "Cognitive Artifact Foundations checkpoint approved as experimental research",
    "ARP-0009 Experience Engineering program registered",
    "Experience research backlog and macro-to-micro roadmap recorded",
    "Boundaries with ARP-0002, ARP-0004, ARP-0007, ARP-0008, AP-0015 and AP-0016 documented"
  ],
  "pending": [
    "CSA review of ARP-0009",
    "Council decision on program boundaries",
    "Explicit selection and authorization of any first research slice"
  ],
  "blocked": [
    "Deep Research",
    "Frontend implementation",
    "Schema or Core Type creation",
    "Library selection or installation",
    "Technology integration",
    "Executable benchmarks"
  ],
  "decisions_required": [
    "Accept, revise, pause or reject ARP-0009",
    "Determine the nature of Experience Engineering",
    "Choose whether and which bounded slice may run later"
  ],
  "research_program": {
    "id": "ARP-0009",
    "governance_state": "approved_experimental",
    "research_state": "scoped",
    "knowledge_maturity": "hypothesis",
    "outcome": null,
    "implementation_state": "not_started",
    "operational_state": "not_applicable"
  },
  "documentation_status": {
    "synchronized": true,
    "files_changed": 2,
    "missing_updates": []
  },
  "validation": {
    "documentary_checks_passed": true,
    "build_passed": null,
    "lint_passed": null,
    "typecheck_passed": null
  },
  "recommended_next_action": "CSA and Council review ARP-0009; do not start Deep Research, frontend or a first slice automatically."
}
```

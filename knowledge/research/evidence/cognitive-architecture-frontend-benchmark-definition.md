---
schema_version: 0.1.0-experimental
id: ARP-0009-E17
kind: knowledge
knowledge_type: research_evidence
title: Cognitive Architecture Frontend Benchmark Definition
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

# Cognitive Architecture Frontend Benchmark Definition

## Natureza e limite epistêmico

Definição documental candidata, acessada em `2026-07-22`. Não é benchmark executado, PRD, prototype, wireframe, dataset, schema, architecture decision ou autorização de implementação. Termos, estados, objetos, journeys, critérios e recommendation permanecem hipóteses para revisão do Conselho.

```text
Benchmark Definition != Benchmark Execution != Prototype
Benchmark Result != Product Quality != Release Approval
```

## Base externa mínima

| Fonte | Status/data | Uso limitado nesta definição |
|---|---|---|
| [ISO/IEC 25040:2024](https://www.iso.org/standard/83467.html) | International Standard, edition 2, published 2024-09 | evaluation target/process framework; não fornece test methods locais |
| [SPEC CPU 2026 Run and Reporting Rules](https://www.spec.org/cpu2026/docs/runrules.html) | regras vivas acessadas em 2026-07-22 | result as observation, versioned rules, conditions, disclosure e reproducibility; domínio CPU não é transferido como métrica UX |
| [NIST AI TEVV](https://www.nist.gov/ai-test-evaluation-validation-and-verification-tevv) | programa institucional corrente | context-specific portfolios, limitations e trustworthy measurement; não define este benchmark |
| [NIST AI 800-3](https://www.nist.gov/news-events/news/2026/02/new-report-expanding-ai-evaluation-toolbox-statistical-models) | report announced 2026-02-19 | explicitar construct, assumptions, target e uncertainty; não autoriza score |
| [NIST AI 800-2 IPD](https://www.nist.gov/news-events/news/2026/01/towards-best-practices-automated-benchmark-evaluations) | Initial Public Draft announced 2026-01-30 | transparency/reproducibility warning, non-normative and automated-LM-specific |
| [W3C WCAG-EM 2.0](https://www.w3.org/TR/wcag-em-2/) | Group Note Draft 2026-02-05 | explicit scope, representative sample, complete processes, expertise e reporting; não produz conformance claim aqui |
| [GOV.UK usability benchmarking](https://www.gov.uk/service-manual/measuring-success/usability-benchmarking-a-website-or-whole-service) | institutional guidance, accessed 2026-07-22 | believable/stable tasks and repeated comparison; participant counts não são adotados nesta definition-only slice |

**[Fato normativo]** ISO/IEC 25040:2024 estabelece seu próprio framework de quality evaluation. **[Regra de benchmark contextual]** SPEC trata resultado como observação condicionada e exige regras/reporting versionados em seu domínio. **[Orientação institucional]** W3C, NIST e GOV.UK informam scope, complete tasks, uncertainty e repeatability. **[Hipótese]** Esses princípios justificam um caso vertical versionado; não tornam o caso aprovado ou representativo por si mesmos.

## Thesis candidata

Se o sistema conseguir arquitetar coerentemente “Tenho uma ideia” até uma única pesquisa governada, sua revisão e atualização de Project Memory, então terá produzido evidência material — ainda não prova completa — de integração entre Product, Experience, Cognitive Artifacts, Governance, Frontend Architecture e Evaluation.

O construct avaliado futuramente seria **capacidade de derivar uma experiência governada end-to-end no nível autorizado**, não beleza, velocidade de geração, quantidade de artifacts ou familiaridade com uma stack.

## Scope options

| Opção | Cobertura | Custo/risco | Lacuna decisiva |
|---|---|---|---|
| A — Idea Intake Only | entrada, discovery, assumptions, criação inicial | baixo | não cobre authority, execution, evidence, review ou return |
| B — Idea to Governed Plan | A + plan, artifacts, approval, memory | médio | cobre governance, mas não long-running execution, failure ou evidence review |
| C — Idea to Reviewed Research Execution | B + execution, progress, evidence, review, recovery | alto | representativa, porém ampla se incluir plataforma inteira |
| C-lite — One Governed Research Cycle | B + uma pesquisa, um deliverable, evidence inspection, one failure/recovery e memory update | médio-alto | não cobre múltiplos execution kinds, collaboration ou production |

## Recommendation candidata

**[Recomendação, confiança moderada]** Adotar futuramente **C-lite**, sujeito a decisão do Conselho. É o menor recorte encontrado que inclui intention-first discovery, explicit assumptions, plan/authority, long-running work, evidence, review outcomes, recovery e return context sem simular toda a plataforma.

Razões: A falha no construct end-to-end; B não testa a principal complexidade AI-native; C adiciona amplitude não necessária. C-lite preserva uma cadeia profunda e comparável.

Pré-requisitos: owner e requirement baseline; frozen scope/version; uma research task fictícia; authority matrix; artifacts esperados; evaluation protocol; accessibility/security review plan; non-sensitive dataset plan; evaluator independence; stop rules. Recommendation não autoriza nenhum deles.

## Primary actor e grupos

Primary benchmark actor candidato: **individual creator/technical founder atuando como Chief**, capaz de descrever uma intenção mas não obrigado a conhecer a Ontologia ou layout do repositório. Isso testa progressive disclosure sem excluir profundidade técnica.

Future coverage groups: product manager, architect, developer, designer, researcher, executive/non-technical stakeholder, regulated organization, small team e enterprise team. Nenhum grupo é alegado como representado até participação real.

## Roles e separation of duties

| Papel candidato | Goal/visibility | Authority boundary e risco |
|---|---|---|
| Chief / Product Owner | express intent, review scope/outcome | não substitui Council em decisão reservada |
| Council / Approver | review proposal, risk, exception | approval scoped; não cria evidência |
| CSA / Reviewer | assess architecture package | review não é implementation authority |
| CEA/Codex | derive artifacts and execute authorized work | proposal/execution não implica self-approval |
| Research Agent | bounded evidence gathering | only authorized tools/scope; sources visible |
| Observer / Auditor | inspect lineage/history | read visibility does not imply edit/approval |
| Administrator | system operation | technical access não equivale a domain authority |
| External Collaborator | scoped contribution | minimum visibility, provenance and revocation |

## Jobs to be done

- transformar intenção vaga em project context sem exigir jargon;
- tornar lacunas, contradictions e assumptions revisáveis;
- entender proposta, affected artifacts, riscos e autoridade antes de agir;
- acompanhar trabalho longo sem fake progress;
- localizar output, source, evidence, decision e owner;
- pause/cancel/retry/resume quando permitido e compreender consequências;
- accept, revise ou reject sem confundir artifact state, decision e execution;
- retornar, entender mudanças/pending decisions e retomar o contexto;
- auditar lineage e compreender risco sem navegar pela estrutura física do repo.

## Domain objects candidatos

Project, Intent, Question, Answer, Assumption, Requirement, Plan, Artifact, Research Program, Proposal, Decision, Execution, Task, Agent, Skill, Capability, Workflow, Evidence, Finding, Risk, Approval, Handoff e Project Memory Entry.

Para cada objeto, Stage 1 deverá declarar identity, lifecycle, relationships, owner/authority, allowed actions, history/provenance e views necessárias. Esta lista não altera Ontologia nem define tipos canônicos. Capability, Skill e Tool; Agent Blueprint, Runtime Agent e Execution; Skill e Permission permanecem distintos.

## Benchmark boundaries

Inclui conceptualmente: one project; “Tenho uma ideia”; adaptive discovery; assumptions review; one governed plan; one approval; one bounded research execution; progress/input/failure/recovery; one deliverable with sources/evidence; accept/revise/reject; Project Memory update; return journey; keyboard/status/authority scenarios.

Exclui: complete administration, billing, Skill marketplace, advanced collaboration, full enterprise tenancy, native mobile, complete plugin system, public production, exhaustive Knowledge Types, all agents/executions, real monitoring, deploy e external benchmark.

## Candidate success claims

Não há score total. Futuro sucesso exigiria evidência separada de: intent comprehension; assumption visibility; plan/authority clarity; complete-task and recovery; state awareness; evidence findability; proposal/decision/execution distinction; return-context recovery; keyboard and status accessibility; security/privacy boundaries; architectural coverage; repeatability and traceability. Critical authority, accessibility, security, data-integrity ou recovery blockers não são compensáveis.

## Risks e unknowns

- C-lite ainda pode ser amplo para o primeiro Stage 1 ou artificial por usar o próprio sistema.
- Primary actor pode favorecer technical language e esconder necessidades de non-technical users.
- Benchmark authors podem ensinar para o caso, escolher evidence favorável ou autoaprovar sucesso.
- Candidate objects/states podem conflitar com Ontology futura.
- No dataset, protocol, evaluator, implementation ou participant exists; representativeness is unknown.
- AI/model variance, source drift e environment changes limitam comparison.
- Council ainda deve decidir owner, construct, scope, representative research task, authorities e readiness.

---
schema_version: "0.1.0-experimental"
id: ARP-0008
kind: knowledge
knowledge_type: architectural_research_program
title: "Cognitive Artifact Engineering"
status: experimental
research_form: program
document_state: complete
governance_state: approved_experimental
research_state: scoped
knowledge_maturity: hypothesis
outcome: null
implementation_state: not_started
operational_state: not_applicable
created_at: 2026-07-22
owner: "Architecture Council"
language: pt-BR
problem_statement: "Investigar como descrever, validar, proteger, compilar, portar, avaliar, certificar e evoluir artefatos cognitivos sem reduzi-los a prompts ou configurações específicas de runtime."
research_tracks:
  - "Agent Engineering"
  - "Skill Engineering"
  - "Capability Engineering"
  - "Workflow Engineering"
  - "Strategy Engineering"
  - "Task Force Engineering"
  - "Guardrail Engineering"
  - "Security Profile Derivation"
  - "Evaluation Engineering"
  - "Cognitive Artifact Certification"
  - "Cognitive Artifact Compilation"
  - "Runtime Portability"
research_questions:
  - "Quais artefatos possuem identidade canônica e quais são configurações, componentes, visões derivadas ou representações compiladas?"
  - "Quais contratos permitem portabilidade, governança, segurança, avaliação e proveniência sem acoplamento a runtime?"
  - "Como derivar artefatos executáveis preservando autoridade, limites, lifecycle e Source of Truth?"
  - "Como impedir autoaprovação, claims falsos de capacidade, escalada de privilégio e autocertificação?"
scope: ["Artifact identity", "Canonical contracts", "Lifecycle", "Versioning", "Portability", "Risk derivation", "Evaluation", "Certification", "Compilation boundaries"]
out_of_scope: ["Implementation", "Executable Agents or Skills", "Schemas", "Core Type promotion", "Framework integration", "Runtime changes", "ARCH-001 changes", "Ontology decisions"]
evidence_method: []
budget_or_timebox: null
start_criteria: ["Council authorization for substantive research", "Prioritized artifact slice", "Primary-source evidence plan", "Explicit timebox", "Overlap boundary confirmed"]
split_criteria: ["Independent artifact family", "Distinct evidence method", "Different owner or authority", "Scope incompatible with timebox", "Implementation question requiring AP"]
pause_criteria: ["Ontological conflict", "Missing primary evidence", "Unresolved authority", "Overlap with active ARP", "Budget reached", "Two iterations without evidence"]
closure_criteria: ["Artifact identities classified", "Alternatives compared", "Canonical and derived boundaries explicit", "Security and evaluation requirements assessed", "Residual questions recorded", "Council review"]
evaluation_criteria: ["Problem fit", "Identity clarity", "No duplication", "Ontology compatibility", "Source of Truth", "Lifecycle", "Authority", "Security", "Evaluation", "Observability", "Portability", "Cost"]
expected_outputs: ["Artifact taxonomy hypothesis", "Blueprint and contract options", "Guardrail and Security Profile boundaries", "Compilation model", "Evaluation and certification model", "Possible APs or no-change conclusions"]
evidence: []
risks: ["Schemas prematuros podem conflitar com a Ontologia.", "Frameworks podem definir indevidamente o Core.", "Perfis derivados podem virar fontes canônicas paralelas.", "Artefatos podem autocertificar autoridade ou capacidades.", "Guardrails genéricos podem ser insuficientes ou excessivos."]
relations:
  - type: established_by
    target: AD-004
  - type: related_to
    target: ARP-0002
  - type: related_to
    target: ARP-0004
  - type: related_to
    target: ARP-0007
---

# ARP-0008 — Cognitive Artifact Engineering

## Visão experimental

Este programa preserva a transição conceitual:

```text
Macro Architecture
        ↓
Artifact Engineering Standards
        ↓
Canonical Cognitive Contracts
        ↓
Security and Guardrail Derivation
        ↓
Compilation
        ↓
Runtime-specific Artifacts
        ↓
Evaluation and Certification
        ↓
Execution
        ↓
Evidence and Evolution
```

A sequência é hipótese de pesquisa, não pipeline obrigatório, decisão arquitetural, schema ou autorização de implementação.

## Hipótese central

Nenhum Agent, Skill, Workflow ou artefato cognitivo relevante deveria nascer apenas como prompt ou configuração isolada. Um contrato arquitetural canônico candidato descreveria propósito, responsabilidades, limites, autoridade, capacidades, dependências, entradas, saídas, ferramentas, dados, riscos, segurança, guardrails, avaliação, observabilidade, proveniência e versionamento. Representações executáveis seriam compiladas ou adaptadas para runtimes; a Project Memory permaneceria Source of Truth.

Esta hipótese não está canonizada.

## Fronteira com programas existentes

- ARP-0008 investiga identidade, contratos, lifecycle, portabilidade, avaliação e certificação de artefatos.
- ARP-0002 continua responsável por padrões de compilação, planejamento, workflow e coordenação multiagente.
- ARP-0004 continua responsável por economia, long context e augmentação runtime-neutral.
- ARP-0007 continua responsável por pesquisa substantiva de segurança, assurance e derivação proporcional de guardrails.
- ARP-0008 consome futuras evidências desses programas; não redefine seus resultados nem autoriza Compiler, Runtime, Orchestrator ou Guardrail Profile Generator.

## Classificação a investigar

Para Agents, Skills, Capabilities, Workflows, Strategies, Policies, Guardrail Profiles, Security Profiles, Evaluation Profiles, Runtime Adapters, Task Forces, execution contracts e cognitive artifact manifests, determinar quais possuem identidade própria e quais são configurações, contratos, visões derivadas, componentes, artefatos compilados ou conceitos que devem permanecer experimentais.

Nenhum item desta lista é promovido a tipo ontológico.

## Agent Engineering

### Problema

Tratar Agent como nome, prompt, descrição genérica, lista de ferramentas ou configuração de framework não oferece governança, portabilidade ou verificabilidade suficientes.

### Agent Blueprint candidato

```text
Agent Identity; Purpose; Problem Domain; Responsibilities; Non-responsibilities;
Expected Outcomes; Required Capabilities; Required Skills; Supported Strategies;
Input Contract; Output Contract; Tool Access; Data Access; Authority Level;
Autonomy Level; Human Oversight Mode; Context Policy; Memory Policy;
Security Profile; Guardrail Profile; Risk Profile; Side-effect Policy;
Failure Modes; Recovery Strategy; Escalation Rules; Stopping Conditions;
Evaluation Criteria; Observability Requirements; Audit Requirements;
Runtime Constraints; Compatibility; Version; Provenance; Lifecycle.
```

### Perguntas

- O que diferencia Agent de Workflow, Skill ou Runtime Configuration?
- Agent é Knowledge Object canônico ou representação derivada?
- Deve ser compilado a partir de Capabilities e Skills e possuir memória própria?
- Pode alterar sua configuração, e quem autoriza ferramentas, autoridade e autonomia?
- Como representar efeitos colaterais, impedir autoaprovação e declarar compatibilidade?
- Como versionar, testar, certificar, desativar, revogar e rastrear a versão que executou uma ação?

## Skill Engineering

Princípio candidato: Skills pertencem ao sistema, não ao modelo ou runtime que as aplica.

### Skill Contract candidato

```text
Skill Identity; Purpose; Problem Solved; Capabilities Supported; When to Use;
When Not to Use; Preconditions; Required Context; Inputs; Outputs; Procedure;
Decision Points; Dependencies; Tools; Permissions; Expected Effects;
Possible Side Effects; Failure Conditions; Recovery; Validation;
Security Constraints; Guardrails; Observability; Examples; Counterexamples;
Tests; Compatibility; Version; Provenance; Lifecycle.
```

### Perguntas

- Como diferenciar Skill, Strategy, Workflow e Procedure?
- Skill é determinística, pode chamar Skills ou ferramentas e recebe autoridade ou conhecimento procedural?
- Como declarar precondições, efeitos, incompatibilidades e impedir uso fora de contexto?
- Como testar, versionar, compilar por runtime, avaliar regressão e tratar Skills externas, proveniência e licença?

## Capability Engineering

Definição candidata: Capability descreve algo que o sistema pode realizar sem impor executor, ferramenta ou runtime.

```text
Capability Identity; Purpose; Outcome; Preconditions; Inputs; Outputs; Effects;
Constraints; Required Authority; Required Evidence; Supported Skills;
Supported Strategies; Possible Executors; Security Classification;
Risk Classification; Evaluation Criteria; Dependencies; Version; Provenance.
```

Investigar se Capability é declarativa, possui implementação ou identidade independente, pode ser composta em grafo, representa precondições e efeitos, é selecionável por intenção, distingue negócio de técnica e permite verificar claims de Agents sem falsificação.

## Workflow and Strategy Engineering

Hipótese de distinção:

```text
Strategy = abordagem reutilizável para resolver um tipo de problema.
Workflow = composição executável de etapas, decisões, gates e transições.
```

Strategy Contract candidato: Purpose, Applicable Context, Assumptions, Decision Principles, Phases, Adaptation Rules, Failure Signals, Escalation, Evaluation e Security Constraints.

Workflow Contract candidato: Identity, Trigger, Inputs, States, Steps, Transitions, Conditions, Gates, Approvals, Retries, Timeouts, Compensation, Rollback, Stopping Conditions, Outputs, Observability, Security e Version.

Investigar grafos e loops opcionais; escolha entre pipeline, loop, workflow e operação única; Human-in/on-the-Loop; irreversibilidade; persistência e retomada; idempotência; compensação; e versionamento de workflows em execução.

## Task Force Engineering

Task Force é hipótese de composição temporária de Agents e capacidades para um objetivo específico.

```text
Objective; Scope; Required Capabilities; Participating Agents; Roles;
Authority Distribution; Coordination Model; Shared Context; Shared Memory Rules;
Communication Rules; Conflict Resolution; Security Boundaries; Budget;
Stopping Conditions; Dissolution Criteria; Evaluation.
```

Investigar necessidade real, seleção e não duplicação de participantes, conflitos, collusion, escalada coletiva de privilégio, divisão de contexto, proteção de dados, descarte de memória temporária e consolidação governada de evidência.

## Guardrail Engineering

Todo Agent, Skill, Workflow, Tool ou Task Force é candidato a análise de risco, mas controles devem ser proporcionais ao tipo, ferramentas, dados, autonomia, impacto, reversibilidade, ambiente, autoridade, duração, exposição, criticidade e regulação.

### Guardrail Profile Generator — hipótese

Responsabilidade candidata: analisar artefato, classificar risco, identificar superfícies e efeitos, determinar supervisão, recomendar controles, produzir Guardrail Profile justificável, evitar controles desnecessários e impedir ausência de controles críticos. Não implementar.

```text
Intent Guardrails
        ↓
Planning Guardrails
        ↓
Context Guardrails
        ↓
Memory Guardrails
        ↓
Capability Guardrails
        ↓
Tool Guardrails
        ↓
Execution Guardrails
        ↓
Output Guardrails
        ↓
Canonicalization Guardrails
        ↓
Operational Guardrails
```

Avaliar controles preventivos, detectivos, responsivos, recuperativos, determinísticos, baseados em política ou modelo, humanos, técnicos e processuais. Guardrail exclusivamente baseado em LLM não é hipótese suficiente para operação crítica.

## Security Profile Derivation

Investigar identidade, autenticação, autorização, permissões, secrets, dados pessoais/regulados, rede, filesystem, shell, banco, cloud, terceiros, modelos, plugins, MCP, A2A, supply chain, logging e incident response.

```text
Asset Classification; Data Classification; Threat Model; Trust Boundaries;
Identity Model; Authorization Model; Tool Permissions; Network Policy;
Filesystem Policy; Secrets Policy; Logging Policy; Retention Policy;
Incident Response; Recovery Strategy; Required Security Tests;
Residual Risks; Risk Owner; Approval Requirements.
```

ARP-0007 mantém autoridade sobre a pesquisa substantiva desta linha.

## Exemplos proporcionais de risco

- Documentation Agent: código somente leitura, escrita documental limitada, citações obrigatórias, proibição de criar decisões, autoridade preservada e limite de arquivos.
- Database Read Agent: credencial read-only, queries parametrizadas, limite de resultados, proteção de PII, timeout, logging e exportação controlada.
- Database Migration Agent: aprovação humana, transação, rollback, teste, backup, bloqueio destrutivo, janela de manutenção e validação posterior.
- Terminal Agent: allowlist, sandbox, diretório limitado, timeout, limite de processos, bloqueio destrutivo/elevação, telemetria e kill switch.
- Financial Agent: segregação de funções, limites monetários, dupla aprovação, trilha imutável, não autoaprovação, anomalias e reconciliação.
- Healthcare Agent: proteção de dados de saúde, consentimento, minimização, need-to-know, logs restritos, revisão humana, explicabilidade e retenção regulada.

São hipóteses para futura pesquisa, não perfis aprovados.

## Evaluation Engineering

Resposta aparentemente boa não certifica Agent ou Skill.

```text
Evaluation Objective; Test Cases; Golden Cases; Adversarial Cases;
Failure Cases; Security Tests; Policy Tests; Quality Metrics; Cost Metrics;
Latency Metrics; Token Metrics; Authority Preservation; Provenance Preservation;
Regression Thresholds; Human Review Criteria; Release Gate.
```

Avaliar unit tests para Skills, contract/integration tests, simulation, scenario/adversarial testing, red teaming, policy/tool-use/memory/context-retrieval testing, security regression e runtime compatibility.

## Certification and Trust

Níveis candidatos, ainda não aprovados: Draft, Validated, Security Reviewed, Approved, Runtime Compatible, Certified for Limited Use, Certified for Production, Deprecated e Revoked.

Investigar autoridade certificadora, evidências, prevenção de autocertificação, mudança de runtime, perda e revogação de certificação, risco residual e integridade de compilados.

## Compilation and Runtime Portability

```text
Canonical Blueprint
        ↓
Compiler
        ↓
Runtime Adapter
        ↓
Runtime-specific Agent / Skill / Workflow
```

Investigar seleção/adaptação de campos, prompts, manifests, policies, ferramentas, memória, guardrails, observabilidade, testes, proveniência, hash e versão; e portabilidade futura para Codex, OpenAI runtimes, Claude, LangGraph, n8n, Temporal, MCP, A2A e outros runtimes. Nenhum runtime define a estrutura canônica.

ARP-0002 mantém a pesquisa sobre compilação; ARP-0004 mantém economia e augmentação do runtime.

## Estratégia de pesquisa externa futura

Antes de schemas próprios, pesquisar agent specifications/cards, A2A Agent Cards, MCP contracts, OpenAI Agents SDK, LangGraph, Semantic Kernel, AutoGen, CrewAI, Letta, BeeAI, Google ADK, Claude Skills/tool patterns, workflow specifications, policy engines, capability-based security, NIST, OWASP, secure agent architectures e evaluation frameworks.

Classificações futuras permitidas: Adopt, Adapt, Absorb, Integrate, Reject, Defer ou Insufficient Evidence. Esta sessão não coletou nem avaliou evidência externa.

## Roadmap macro-to-micro — hipótese

1. Macro Architecture: Ontologia, Project Memory, Governance, Context Engineering, Compiler, Runtime, Orchestrator, Security e Evolution.
2. Artifact Research: Agent, Skill, Capability, Workflow, Strategy, Guardrail e Evaluation Engineering.
3. Canonical Contracts: Agent Blueprint, Skill/Capability/Workflow Contracts, Guardrail/Security/Evaluation Profiles.
4. Compiler and Adapters: representação canônica, compilação runtime/policy, validação, proveniência e compatibilidade.
5. Evaluation and Certification: benchmarks, testes adversariais, segurança, certificação runtime e release gates.
6. Production Execution: execução monitorada, estado durável, incident response, avaliação contínua e evolution.

O Roadmap V1 não é alterado por esta hipótese.

## Relações arquiteturais candidatas

```text
Intent
    ↓
Capabilities Required
    ↓
Skills Required
    ↓
Strategies / Workflows
    ↓
Agent or Task Force Composition
    ↓
Risk Assessment
    ↓
Guardrail and Security Profiles
    ↓
Compilation
    ↓
Runtime Execution
    ↓
Evaluation
    ↓
Evidence
    ↓
Evolution
```

As setas não obrigam pipeline; composição poderá variar por complexidade, risco, custo, duração, reversibilidade, contexto e autoridade.

## Questões ontológicas abertas

- Agent é Knowledge Object? Blueprint e executável são objetos distintos?
- Skill é Knowledge, Capability ou Procedure?
- Workflow é Knowledge, Execution ou ambos?
- Guardrail Profile é Policy ou derivado?
- Security Profile pertence ao sistema criado ou ao artefato?
- Capability possui identidade independente? Task Force deve persistir?
- Evaluation Profile é Policy, Knowledge ou contrato?
- Certification é estado, evidência ou decisão?
- Runtime Adapter pertence ao Core ou Integration?
- Qual parte é canônica e qual é derivada?

Nenhuma questão é decidida nesta sessão.

## Critérios para futura implementação

Antes de implementação, qualquer contrato deverá demonstrar problema real, identidade clara, ausência de duplicação, compatibilidade com Ontologia, Source of Truth, lifecycle, versionamento, autoridade, segurança, guardrails, avaliação, observabilidade, portabilidade e custo justificável. Nenhum framework externo poderá definir sozinho o Core.

## Restrições e próximo checkpoint

Não criar schemas, código, Agent, Skill, Task Force, Orchestrator, Compiler, Runtime Adapter ou integração. Não alterar ARCH-001, Ontologia ou Roadmap V1. Pesquisa substantiva requer nova autorização, slice priorizado, fontes primárias, timebox e confirmação de fronteira com ARP-0002, ARP-0004 e ARP-0007.

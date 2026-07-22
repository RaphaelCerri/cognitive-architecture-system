---
schema_version: "0.1.0-experimental"
id: ARP-0007
kind: knowledge
knowledge_type: architectural_research_program
title: "Security Architecture, Guardrails and Assurance"
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
problem_statement: "Investigar como derivar controles de segurança e guardrails proporcionais para todo sistema produzido, sem transformar segurança em checklist tardio ou dependência tecnológica."
research_questions:
  - "Como derivar Security Profile e Guardrail Profile adequados ao tipo, risco, dados, usuários, ferramentas e ambiente?"
  - "Como preservar usabilidade, autonomia, rastreabilidade e defesa em profundidade?"
  - "Quais controles, evidências e gates são necessários para cada perfil de sistema?"
scope: ["Governance and risk", "Identity and authorization", "Data and privacy", "Execution and tools", "AI security", "Supply chain", "Applications and infrastructure", "Observability and response", "Verification and assurance"]
out_of_scope: ["Implementation", "Tool adoption", "Vendor selection", "Core Type creation", "Security profile generation", "Integration"]
evidence_method: []
budget_or_timebox: null
start_criteria: ["Council authorization for substantive research", "Primary-source evidence plan", "Prioritized first research slice", "Explicit timebox"]
split_criteria: ["Independent risk domain", "Different evidence method", "Distinct authority or owner", "Scope incompatible with timebox"]
pause_criteria: ["Missing primary evidence", "Unresolved authority", "Untreated risk", "Budget reached", "Two iterations without new evidence"]
closure_criteria: ["Questions answered or inconclusive", "Alternatives compared", "Evidence and provenance recorded", "Costs and risks explicit", "Outcome reviewed by Council"]
evaluation_criteria: ["Risk reduction", "Usability", "Least privilege", "Defense in depth", "Auditability", "Recovery", "Vendor agnosticism", "No parallel Source of Truth"]
expected_outputs: ["Security Profile hypothesis", "Guardrail Profile hypothesis", "Threat modeling approach", "Assurance evidence model", "Possible APs or no-change conclusions"]
evidence: []
risks: ["Security virar checklist genérico.", "Guardrails reduzirem autonomia sem proporcionalidade.", "Controles baseados apenas em LLM serem tratados como suficientes.", "Compliance ser confundido com segurança.", "Exceções serem autoaprovadas por agentes."]
relations:
  - type: established_by
    target: AD-004
  - type: informs
    target: AP-0020
  - type: evaluates
    target: AP-0007
  - type: related_to
    target: ARP-0001
  - type: related_to
    target: ARP-0002
  - type: related_to
    target: ARP-0003
  - type: related_to
    target: ARP-0004
---

# ARP-0007 — Security Architecture, Guardrails and Assurance

## Hipótese estratégica

**Security and Guardrails by Design:** software, automação, Agent, integração, Workflow ou arquitetura devem receber controles proporcionais ao risco desde a concepção, não como checklist opcional ao final.

Esta pesquisa não promove domínio oficial, implementação, ferramenta ou novo Core Type.

## Pergunta central

Como permitir que o sistema derive automaticamente Security Profile e Guardrail Profile adequados para cada arquitetura, preservando usabilidade, autonomia, rastreabilidade e defesa em profundidade?

## Linhas obrigatórias

### Governança e risco

- classificação de risco, threat modeling, abuse cases e trust boundaries;
- security requirements e acceptance criteria;
- risk ownership, exceções e compensating controls;
- gates humanos proporcionais;
- secure-by-default, fail-safe defaults, least privilege, separation of duties e defense in depth.

### Identidade e autorização

- autenticação e autorização;
- RBAC, ABAC e capability-based security;
- identidade de usuários, Agents e workloads;
- delegação, impersonation e confused deputy;
- elevação de privilégio e credenciais de curta duração.

### Dados e privacidade

- classificação, minimização, retenção, criptografia e segregação;
- residência, consentimento, PII e segredos;
- logs sensíveis, backup seguro e exclusão verificável;
- privacy by design.

### Execução e ferramentas

- sandboxing, isolamento, allowlists e validação de parâmetros;
- efeitos colaterais, idempotência, rate limits, budgets e timeouts;
- rollback, kill switches e approval gates;
- execução privilegiada e acesso a filesystem, rede, shell, banco e cloud.

### Segurança específica para IA

- prompt injection e indirect prompt injection;
- tool poisoning, memory poisoning, RAG poisoning, data poisoning e model poisoning;
- exfiltração por ferramentas e insecure output handling;
- hallucinated actions, unauthorized tool selection e excessive agency;
- model manipulation, cross-agent contamination e multi-agent collusion;
- context confusion, poisoned summaries e memória derivada tratada como canônica;
- retrieval manipulation e instruções maliciosas em documentos;
- MCP servers maliciosos e peers A2A comprometidos.

### Cadeia de suprimentos

- dependências, provenance, SBOM, assinaturas e integridade;
- artefatos, Skills, Agents, plugins, MCP servers, modelos e datasets externos;
- prompts, templates, licenças e vulnerabilidades transitivas;
- typosquatting e atualizações comprometidas.

### Aplicações e infraestrutura

- web, APIs, mobile, desktop, cloud, containers e serverless;
- CI/CD, bancos, eventos, filas, Workflows e sistemas distribuídos;
- IoT, OT, edge, multi-tenant e sistemas regulados;
- pagamentos, saúde, finanças e identidade.

### Observabilidade e resposta

- audit trails, security telemetry, anomaly detection, provenance e tracing;
- detecção de abuso, incident response, containment e recovery;
- forensic readiness, aprendizado pós-incidente e evidências imutáveis;
- alertas proporcionais e métricas de segurança.

### Verificação e assurance

- static e dynamic analysis;
- dependency, secret, IaC e container scanning;
- fuzzing, penetration testing, red teaming e adversarial evaluation;
- policy, authorization e regression testing;
- chaos engineering, resilience testing e métodos formais quando justificáveis.

## Perfis derivados sob investigação

- aplicação web pública, API e SaaS multi-tenant;
- automação interna, Agent com ferramentas e sistema multiagente;
- pipeline de dados e produto com IA generativa;
- sistemas financeiro, de saúde e de identidade;
- infraestrutura cloud, embarcado e IoT/OT;
- aplicações com dados sensíveis ou execução de código;
- sistemas que utilizam MCP ou A2A.

Cada perfil poderá futuramente determinar ameaças, guardrails, aprovações, testes, telemetria, políticas, controles e evidências de release. Nenhum perfil será implementado nesta pesquisa documental.

## Guardrail Architecture sob investigação

`Intent → Planning → Context and Retrieval → Tool and Capability → Execution → Output → Memory and Canonicalization → Operational and Security Guardrails`

Avaliar controles preventivos, detectivos, responsivos, recuperativos, humanos, determinísticos, baseados em política, modelo ou evidência. Nenhum guardrail exclusivamente baseado em LLM será presumido suficiente para decisão crítica.

## Deliverables candidatos

- Security Profile, Threat Model e Abuse Case Catalog;
- Data Classification e Trust Boundary Map;
- Access Control Model e Secrets Strategy;
- Dependency and Supply Chain Policy;
- Guardrail Plan e Security Test Plan;
- Incident Response e Security Observability Plans;
- Risk Register, Security Decision Records e Release Security Evidence.

Os nomes são experimentais e não representam Core Types.

## Restrições

- não presumir ferramenta ou fornecedor;
- não criar Source of Truth paralela;
- não tratar compliance como sinônimo de segurança;
- não usar segurança como bloqueio absoluto de autonomia;
- não aplicar o mesmo checklist a todos os sistemas;
- não esconder riscos do usuário;
- não permitir autoaprovação de exceções;
- não permitir que memória derivada altere regras canônicas de segurança.

Nenhuma pesquisa externa substantiva foi iniciada.

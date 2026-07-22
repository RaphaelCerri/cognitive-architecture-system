---
schema_version: 0.1.0-experimental
document_role: research_external_model_comparison
title: Cognitive Artifact External Model Comparison
status: pending_review
created_at: 2026-07-22
related_programs: [ARP-0008]
language: pt-BR
---

# Cognitive Artifact External Model Comparison

## Método e escala de decisão

Foram consultadas somente fontes oficiais/primárias, todas acessadas em 2026-07-22. **Fato externo** resume o que a fonte declara. **Inferência local** avalia a fronteira no ARP-0008. Disposições possíveis: Adopt, Adapt, Absorb, Integrate, Reject, Defer ou Insufficient Evidence. Nenhuma disposição equivale a adoção de framework.

## Comparação sintética

| Fonte | Problema e vocabulário | Agent / Skill / Tool | Workflow e estado | Autoridade / guardrails | Portabilidade, limitação e disposição |
|---|---|---|---|---|---|
| A2A | Interoperabilidade e descoberta: Agent Card, Client, Remote Agent, Message, Task, Part | Agent Card publica identidade, endpoint, capabilities e skills; não expõe internals | Task possui lifecycle e estado; não modela workflow interno | Auth e cards protegidos são tratados no protocolo/ecossistema, não como autogrant | Bom boundary externo, não blueprint canônico. **Adapt** discovery metadata; **Reject** tratá-lo como Ontologia interna |
| MCP | Interface cliente-servidor: tools, resources, prompts e capabilities | Tool é ação executável com I/O tipado; resource é dado passivo; prompt é template reutilizável | Não fornece modelo completo de workflow/agent | Consentimento e controle do host são relevantes; Tool não representa permissão | Protocolo portátil de integração, não Capability/Skill. **Absorb** separação de primitivas; **Defer** integração |
| OpenAI Agents SDK | Runtime para agents, runner, tools, handoffs, sessions e guardrails | Agent é LLM configurado com instructions/tools/handoffs/guardrails; agents podem ser tools ou receber handoff | Runner gerencia turnos; handoff transfere controle | Guardrails de input/output/tool e approvals são pontos distintos | Modelo runtime-specific, útil como target futuro. **Adapt** separação de runner/handoff/guardrails; **Reject** como schema Core |
| Google ADK | Construção de agents e workflows multiagent/multinode | LlmAgent, workflow agents e subagents; nós determinísticos também participam | Graph, dynamic, collaborative e template workflows; sequência/loop/paralelo | Context isolation e modos de colaboração aparecem; autoridade empresarial não é o foco | Demonstra que Agent e Workflow podem ter representações sobrepostas no framework. **Absorb** padrões; **Reject** nomes de classes como tipos canônicos |
| LangGraph | Runtime/orquestração stateful e durável | Agents usam tools dinamicamente; skills aparecem como prompts/knowledge sob demanda em padrões | Workflows seguem caminhos predeterminados; graphs têm state/nodes/edges, checkpoint e HITL | Interrupção/HITL e controle ficam no runtime; IAM não é modelo central | Útil para separar definição, estado e execução. **Adapt** durable execution concepts; **Defer** integração |
| NIST NCCoE concept paper | Identidade e autorização de software/AI agents | Agent é software autônomo; pergunta quais metadados identificam instância/entidade | Não propõe workflow | Discute least privilege, zero trust, delegation, proof of authority, revocation, HITL, audit/non-repudiation | Initial Public Draft e agenda de perguntas, não norma. **Absorb** problem set; **Reject** uso como requisito final |
| OWASP | Reduzir blast radius e excessive agency | Processo/programa recebe apenas permissões mínimas; acesso a Tools deve ser restrito | Aprovação proporcional a ações e reversibilidade | Least privilege, allowlist, aprovação humana e separação de controle | Guidance de segurança, não modelo de artefatos. **Integrate** como input futuro de ARP-0007; **Adapt** constraints nesta slice |

## Achados por referência

### A2A Agent Cards e Tasks

**Fato externo:** a especificação A2A define um padrão para sistemas de agents independentes descobrirem capabilities, modalidades e skills e colaborarem por Messages e Tasks. Agent Card é metadata JSON; Task é unidade stateful com lifecycle. O guia de discovery admite cards protegidos, credenciais fora do card e cache/versionamento.

**Inferência local:** capability/skill no card é declaração de interoperabilidade, não prova, contrato interno ou grant. A separação Agent Card–Task apoia Blueprint/Execution Instance, mas não decide a identidade canônica.

### MCP

**Fato externo:** MCP servers expõem capabilities por interfaces padronizadas. Tools são executáveis/model-controlled e podem ter efeitos; resources são dados passivos/application-controlled; prompts são templates user-controlled. A arquitetura negocia versão e capabilities.

**Inferência local:** Tool é mecanismo invocável, não Capability, Skill ou autoridade. Prompt pode transportar instrução, mas não deve definir sozinho Agent/Skill.

### OpenAI Agents SDK

**Fato externo:** a documentação descreve Agent como LLM com instructions, tools e comportamento opcional como handoffs, guardrails e structured outputs; Runner administra o loop. Handoffs transferem controle, agents-as-tools mantêm um manager, e guardrails operam em pontos distintos. Tools podem exigir aprovação humana.

**Inferência local:** é um modelo operacional coerente, mas reúne elementos que o Core candidato precisa manter referenciáveis e governáveis separadamente. Agent Blueprint não deve ser reduzido à classe de runtime.

### Google ADK

**Fato externo:** ADK compõe agents e nós executáveis em graph-based, dynamic, collaborative e template workflows. Sequential workflow executa subagents em ordem determinística; graphs suportam branching e state. A documentação atual informa que ADK 2.0 amplia graph/dynamic workflows e marca routing como experimental.

**Inferência local:** sequência, loop e grafo são formas de Workflow; chamar algumas delas de Agent é escolha do framework. Isso reforça a necessidade de fronteira conceitual independente de classes externas.

### LangGraph

**Fato externo:** LangGraph se apresenta como runtime/orquestração para workflows e agents stateful, com durable execution, persistence e human-in-the-loop. Sua documentação distingue workflows com caminhos predeterminados de agents que escolhem dinamicamente o uso de processo/ferramentas.

**Inferência local:** a distinção é útil, mas Strategy pode ocupar espaço intermediário e não deve ser apagada pela dicotomia framework-specific.

### NIST e OWASP

**Fato externo:** o concept paper NIST/NCCoE de 2026 pergunta como identificar agents, provar autoridade, aplicar least privilege/zero trust, delegar, revogar, vincular autorização humana e auditar ações. É Initial Public Draft. OWASP define least privilege como acesso mínimo necessário e recomenda limitar Tools e exigir aprovação explícita para mudanças sensíveis.

**Inferência local:** conhecimento e capability claims não podem originar autoridade. Identity, grant, revocation e evidence precisam sobreviver fora do Agent e da Task Force.

## Fontes oficiais

- A2A Protocol Specification: https://a2a-protocol.org/v0.3.0/specification/
- A2A Agent Discovery: https://a2a-protocol.org/latest/topics/agent-discovery/
- MCP Server Concepts: https://modelcontextprotocol.io/docs/learn/server-concepts
- MCP Architecture: https://modelcontextprotocol.io/docs/learn/architecture
- OpenAI Agents SDK — Agents: https://openai.github.io/openai-agents-python/agents/
- OpenAI Agents SDK — Handoffs: https://openai.github.io/openai-agents-python/handoffs/
- OpenAI Agents SDK — Multi-agent: https://openai.github.io/openai-agents-python/multi_agent/
- OpenAI Agents SDK — Guardrails: https://openai.github.io/openai-agents-python/guardrails/
- OpenAI Agents SDK — Human-in-the-loop: https://openai.github.io/openai-agents-python/human_in_the_loop/
- Google ADK — Agents: https://adk.dev/agents/
- Google ADK — Workflows: https://adk.dev/workflows/
- Google ADK — Graph workflows: https://adk.dev/graphs/
- LangGraph overview: https://langchain-ai.github.io/langgraph/index.html
- LangGraph tools and agent/workflow distinction: https://langchain-ai.github.io/langgraph/agents/tools/
- LangGraph multi-agent concepts: https://langchain-ai.github.io/langgraph/concepts/multi_agent/
- NIST NCCoE concept paper landing page: https://csrc.nist.gov/pubs/other/2026/02/05/accelerating-the-adoption-of-software-and-ai-agent/ipd
- OWASP Least Privilege Principle: https://owasp.org/www-community/controls/Least_Privilege_Principle

## Limitações e fontes deferidas

Semantic Kernel, AutoGen, CrewAI, Letta, BeeAI, Claude Skills, capability-security systems, policy engines, evaluation frameworks e especificações gerais de workflow não foram necessários para a fronteira mínima e ficam **Defer**. A ausência não é rejeição. Releases e features mudam; URLs/data preservam a proveniência desta observação. Nenhuma claim de fornecedor foi tratada como validação independente.

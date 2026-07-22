---
schema_version: "0.1.0-experimental"
id: ARCH-001
kind: knowledge
knowledge_type: architecture_document
title: "System Overview"
status: draft
version: "0.1-structure"
created_at: 2026-07-22
owner: "Architecture Council"
audience: [human, ai]
language: pt-BR
relations:
  - type: authorized_by
    target: AD-003
  - type: produced_in
    target: V1-M02
  - type: governed_by
    target: PMM-001
  - type: constrained_by
    target: AIP-001
---

# System Overview

> **Checkpoint estrutural:** este documento contém somente a arquitetura editorial aprovada para revisão. A redação definitiva não foi iniciada. Conceitos experimentais são identificados explicitamente e não se tornam Core Types por aparecerem aqui.

## 0. Como usar este documento

**Finalidade:** explicar autoridade, ordem de leitura, convenções, estados de maturidade e como seguir referências canônicas.

**Deverá responder:** o que este documento resume, o que ele não substitui e como humanos ou IAs verificam uma afirmação.

## 1. Resumo executivo

**Finalidade:** apresentar em uma página por que o sistema existe, o problema central, a proposta de valor e o estado atual.

## 2. Origem, problema e motivação

**Finalidade:** explicar por que coleções de prompts, agentes ou documentos não resolvem tomada de decisão e continuidade arquitetural.

**Fontes previstas:** PMM-001, AIP-001 e histórico canônico de decisões.

## 3. Filosofia e visão

**Finalidade:** consolidar os princípios de engenharia cognitiva, conhecimento compilável, decisões antes de execução e evolução sem perda de coerência.

**Restrição:** o CEA organizará fontes aprovadas; não criará filosofia nova.

## 4. Escopo, fronteiras e não objetivos

**Finalidade:** declarar o que o sistema é, o que não é e quais responsabilidades pertencem a consumidores, adapters e humanos.

## 5. Arquitetura geral

**Finalidade:** fornecer o mapa de alto nível e mostrar como Foundation, Knowledge, Intelligence, Governance, Runtime e Evolution cooperam.

**Maturidade:** Taxonomia V1 lógica e revisável; não representa Ontologia definitiva nem estrutura física obrigatória.

## 6. Fluxo cognitivo ponta a ponta

**Finalidade:** estruturar o percurso futuro:

`Intent → Context → Knowledge → Capabilities → Policies → Strategies → Workflow → Runtime → Validation → Evolution`

**Questões abertas:** quais etapas são objetos, processos, decisões ou artefatos derivados?

## 7. Metamodelo e Ontologia

**Finalidade:** explicar a diferença entre critérios de existência, identidade e mudança; vocabulário de domínio; schemas; e representações físicas.

**Maturidade:** experimental, governada por AP-0006 e ASSESS-0001.

## 8. Knowledge Objects

**Finalidade:** explicar fonte canônica Markdown + YAML, identidade, proveniência, maturidade, relações explícitas e inferidas e compilação futura.

## 9. Capability System

**Finalidade:** definir Capability como descrição do que o sistema pode realizar, separada de ferramenta, agente ou runtime.

**Questões abertas:** composição, pré-condições, efeitos, seleção e relação com Strategy, Skill e Workflow.

## 10. Strategies e Workflows

**Finalidade:** distinguir abordagem reutilizável de composição executável. Ralph Loop será tratado como possível Strategy, não exceção arquitetural.

## 11. Skills

**Finalidade:** documentar Skills como conhecimento procedural reutilizável que pode apoiar Capabilities e ser aplicado por Agents ou runtimes.

**Relação inicial, ainda não ontológica:**

- Capability descreve **o que** precisa ser possível.
- Skill encapsula conhecimento procedural reutilizável que ajuda a realizar uma Capability.
- Agent representa um possível executor configurado para aplicar Capabilities e Skills.
- Orchestrator poderá selecionar e coordenar esses elementos.

**Restrições:** não migrar Skills, não criar integração, não atribuir propriedade a Claude, Codex ou outro runtime e não estabilizar schema antes da Ontologia.

**Levantamento futuro deverá registrar:** origem, finalidade, capacidades relacionadas, dependências, compatibilidade, maturidade, licença, proveniência e necessidade de adaptação.

## 12. Agents

**Finalidade:** explicar Agents como artefatos ou configurações de execução derivados de capacidades, estratégias, políticas e contexto — nunca origem da arquitetura.

## 13. Orchestrator

**Finalidade:** apresentar a hipótese registrada em AP-0012: compreender contexto, selecionar Capabilities, Skills e Agents e coordenar execução.

**Maturidade:** proposta; nenhuma implementação ou promoção arquitetural autorizada.

## 14. Governance

**Finalidade:** reunir papéis, autoridade, escalada, AIP, ACP, ADF, IHP, políticas, risco, aprovação e auditoria.

## 15. Project Memory

**Finalidade:** explicar a responsabilidade institucional de persistir decisões, hierarquia de autoridade, ADRs, APs, milestones e handoffs sem criar uma fonte paralela.

## 16. Compiler

**Finalidade:** explicar como fontes canônicas poderão gerar JSON, índices, grafos, documentação, adapters e outros artefatos reproduzíveis.

**Maturidade:** planejado; não implementado.

## 17. Graph

**Finalidade:** distinguir Knowledge Graph, Capability Graph, Dependency Graph, Decision Graph, Memory Graph e Execution Graph como visões derivadas, não novas fontes de verdade.

## 18. Runtime e Adapters

**Finalidade:** documentar runtime agnosticism, contratos de distribuição e isolamento de Codex, Claude Code, Fable, n8n e outros consumidores.

**Maturidade:** AP-0007 proposta; nenhum adapter implementado.

## 19. Evolution

**Finalidade:** explicar avaliações, aprendizado, propostas, backlog, milestones e a regra “A IA propõe; o humano aprova”.

## 20. AI Developer Experience

**Finalidade:** introduzir a hipótese AP-0011 para que uma nova IA saiba como pensar, navegar, decidir, usar capacidades e contribuir com coerência.

**Maturidade:** proposta experimental; nenhuma camada, capability ou skill permanente foi criada.

## 21. Exemplos completos

**Finalidade:** futuramente demonstrar fluxos ponta a ponta com decisões, políticas, capacidades, Skills, Agents, runtime, validação e evolução.

**Exemplos previstos:** construir software, avaliar uma proposta arquitetural e reconstruir o PVA Knowledge Inbox.

## 22. Roadmap e milestones

**Finalidade:** apresentar estado atual, sequência da V1, gates de encerramento e dependências sem duplicar o Roadmap canônico.

## 23. Backlog arquitetural

**Finalidade:** explicar APs ativas, dependências, critérios de revisão e por que backlog arquitetural não é lista de tarefas.

## 24. Glossário

**Finalidade:** oferecer definições oficiais e referências para termos arquiteturais, indicando quando uma definição ainda é experimental.

**Termos iniciais:** Knowledge, Knowledge Object, Capability, Strategy, Skill, Agent, Workflow, Policy, Runtime, Adapter, Orchestrator, Compiler, Graph, Project Memory, AP, ADR, milestone, ADF, ACP, AIP e IHP.

## 25. Lacunas e decisões abertas

**Finalidade:** tornar explícitas ambiguidades, hipóteses, propostas e informações ainda ausentes.

## 26. Próximos passos

**Finalidade:** orientar a próxima contribuição sem confundir recomendação com autoridade para executar.

## 27. Referências canônicas

**Finalidade:** indexar manifestos, governança, princípios, protocolos, diretivas, ADRs, APs, roadmap, milestones e artefatos implementados utilizados na redação.

---
schema_version: "0.1.0-experimental"
id: ARCH-001
kind: knowledge
knowledge_type: architecture_document
title: "System Overview"
status: draft
version: "0.2-structure"
created_at: 2026-07-22
updated_at: 2026-07-22
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

> **Checkpoint estrutural:** este documento contém somente a arquitetura editorial submetida à revisão. A redação definitiva não foi iniciada. Conceitos experimentais são identificados explicitamente e não se tornam Core Types por aparecerem aqui.

> **Estado atual (ponteiro datado — 2026-07-23, auditoria macro E71/CSA-34-4):**
> este esqueleto reflete a visão de 2026-07-22 e **não descreve o sistema
> real atual**. O que existe de fato vive em: camada de bootstrap
> (`foundation/bootstrap/`), programas ARP-0008/ARP-0009 e suas evidências
> (E01–E77), experimentos executáveis (`experiments/EXPERIMENTS.md`),
> GOV-002 (modos de operação) e PROJECT_STATUS. A redação incremental deste
> documento é proposta Tier B pendente de decisão do Council (gap G-A01).

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

## 6. Cognitive Pipeline

**Finalidade:** documentar a visão inicial do fluxo cognitivo completo:

`Idea → Knowledge Capture → Architecture Interview → RFC → Council Review → ADR → Planning → Orchestrator → Capability Selection → Skill Selection → Agent Selection → Execution → Validation → Documentation → Project Memory → Evolution`

**Maturidade:** direção conceitual registrada em AP-0014. A cadeia ainda não define tipos, contratos, obrigatoriedade universal nem automação.

**Questões abertas:** quais etapas são objetos, processos, decisões, gates ou artefatos derivados; quais são opcionais; e como registrar transições e autoridade.

## 7. Metamodelo e Ontologia

**Finalidade:** explicar a diferença entre critérios de existência, identidade e mudança; vocabulário de domínio; schemas; e representações físicas.

**Maturidade:** experimental, governada por AP-0006 e ASSESS-0001.

## 8. Knowledge Objects

**Finalidade:** explicar fonte canônica Markdown + YAML, identidade, proveniência, maturidade, relações explícitas e inferidas e compilação futura.

## 9. RFC

**Finalidade:** apresentar RFC como Knowledge Object especializado para especificar mudanças antes da implementação, derivado da Project Memory e consistente com Manifestos, Principles, ADRs, APs e demais Knowledge Objects.

**Autoridade:** RFC não é uma Source of Truth independente e não supera a hierarquia de autoridade do PMM-001.

**Maturidade:** conceito aprovado em ADR-0013; schema, relações obrigatórias e lifecycle permanecem experimentais.

## 10. Capability System

**Finalidade:** definir Capability como descrição do que o sistema pode realizar, separada de ferramenta, agente ou runtime.

**Questões abertas:** composição, pré-condições, efeitos, seleção e relação com Strategy, Skill e Workflow.

## 11. Strategies e Workflows

**Finalidade:** distinguir abordagem reutilizável de composição executável. Ralph Loop será tratado como possível Strategy, não exceção arquitetural.

## 12. Skills

**Finalidade:** documentar Skills como conhecimento procedural reutilizável pertencente ao sistema, capaz de apoiar Capabilities e ser aplicado por Agents ou runtimes.

**Relação inicial, ainda não ontológica:**

- Capability descreve **o que** precisa ser possível.
- Skill encapsula conhecimento procedural reutilizável que ajuda a realizar uma Capability.
- Agent representa um possível executor configurado para aplicar Capabilities e Skills.
- Orchestrator poderá selecionar e coordenar esses elementos.

**Restrições:** não migrar Skills, não criar integração, não atribuir propriedade a Claude, Codex ou outro runtime e não estabilizar schema antes da Ontologia.

**Levantamento futuro deverá registrar:** origem, finalidade, capacidades relacionadas, dependências, compatibilidade, maturidade, licença, proveniência e necessidade de adaptação.

## 13. Architecture Interview

**Finalidade:** apresentar a candidata a Skill que conduz questionamento arquitetural exaustivo antes de um RFC, inspirada no padrão “Grill Me”.

**Maturidade:** candidata aprovada em AP-0013; conteúdo, contrato, gatilhos e integração não foram implementados.

## 14. Agents

**Finalidade:** explicar Agents como artefatos ou configurações de execução derivados de capacidades, estratégias, políticas e contexto — nunca origem da arquitetura.

## 15. Orchestrator

**Finalidade:** apresentar a hipótese AP-0012: compreender contexto; coordenar o processo cognitivo; avaliar necessidade de RFC; selecionar processos, Capabilities, Skills e Agents; e aplicar regras de escalada e autonomia.

**Maturidade:** proposta; sua natureza como componente, Capability ou outra forma permanece aberta. Nenhuma implementação ou promoção arquitetural foi autorizada.

## 16. Governance

**Finalidade:** reunir papéis, autoridade, escalada, AIP, ACP, ADF, IHP, políticas, risco, aprovação e auditoria.

## 17. Project Memory

**Finalidade:** explicar a responsabilidade institucional de persistir decisões, hierarquia de autoridade, ADRs, APs, RFCs, milestones e handoffs sem criar uma fonte paralela.

## 18. Compiler

**Finalidade:** explicar como fontes canônicas poderão gerar JSON, índices, grafos, documentação, adapters e outros artefatos reproduzíveis.

**Maturidade:** planejado; não implementado.

## 19. Graph

**Finalidade:** distinguir Knowledge Graph, Capability Graph, Dependency Graph, Decision Graph, Memory Graph e Execution Graph como visões derivadas, não novas fontes de verdade.

## 20. Runtime e Adapters

**Finalidade:** documentar runtime agnosticism, contratos de distribuição e isolamento de Codex, Claude Code, Fable, n8n e outros consumidores.

**Maturidade:** AP-0007 proposta; nenhum adapter implementado.

## 21. Evolution

**Finalidade:** explicar avaliações, aprendizado, propostas, backlog, milestones e a regra “A IA propõe; o humano aprova”.

## 22. AI Developer Experience

**Finalidade:** introduzir a hipótese AP-0011 para que uma nova IA saiba como pensar, navegar, decidir, usar capacidades e contribuir com coerência.

**Maturidade:** proposta experimental; nenhuma camada, Capability ou Skill permanente foi criada.

## 23. Exemplos completos

**Finalidade:** futuramente demonstrar fluxos ponta a ponta com decisões, políticas, RFCs, capacidades, Skills, Agents, runtime, validação e evolução.

**Exemplos previstos:** construir software, avaliar uma proposta arquitetural e reconstruir o PVA Knowledge Inbox.

## 24. Roadmap e milestones

**Finalidade:** apresentar estado atual, sequência da V1, gates de encerramento e dependências sem duplicar o Roadmap canônico.

## 25. Backlog arquitetural

**Finalidade:** explicar APs ativas, dependências, critérios de revisão e por que backlog arquitetural não é lista de tarefas.

## 26. Glossário

**Finalidade:** oferecer definições oficiais e referências para termos arquiteturais, indicando quando uma definição ainda é experimental.

**Termos iniciais:** Knowledge, Knowledge Object, Capability, Strategy, Skill, Architecture Interview, Agent, Workflow, Policy, RFC, Runtime, Adapter, Orchestrator, Cognitive Pipeline, Compiler, Graph, Project Memory, AP, ADR, milestone, ADF, ACP, AIP e IHP.

## 27. Lacunas e decisões abertas

**Finalidade:** tornar explícitas ambiguidades, hipóteses, propostas e informações ainda ausentes.

## 28. Próximos passos

**Finalidade:** orientar a próxima contribuição sem confundir recomendação com autoridade para executar.

## 29. Referências canônicas

**Finalidade:** indexar manifestos, governança, princípios, protocolos, diretivas, ADRs, APs, roadmap, milestones e artefatos implementados utilizados na redação.

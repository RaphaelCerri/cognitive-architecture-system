---
schema_version: 0.1.0-experimental
id: BOOT-002
kind: knowledge
knowledge_type: bootstrap_charter
title: Project Charter
status: experimental
version: "1.0"
canonicality: stable_canonical_orientation
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: governed_by
    target: PMM-001
  - type: constrained_by
    target: AIP-001
  - type: refers_to
    target: GOV-001
  - type: related_to
    target: AP-0002
---

# PROJECT_CHARTER — Cognitive Architecture System

Orientação canônica **estável e consolidada** do projeto. Este Charter não cria
autoridade nova: ele consolida, para leitura rápida de qualquer executor, o que os
artifacts canônicos já estabelecem (PMM-001, GOV-001, AIP-001, ADRs, ADs). Ele
**não é** a Constitution Layer de AP-0002 (proposta ainda `proposed`). Em conflito,
a fonte original prevalece. Muda somente quando princípios ou estrutura
institucional mudarem — nunca por checkpoint.

## Visão

Uma camada de engenharia cognitiva e governança que transforma intenções humanas
("Tenho uma ideia") em trabalho estruturado, rastreável e executável: discovery
adaptativo, assumptions explícitas, planos governados, autorização humana,
execução limitada, evidência honesta, revisão com consequência e memória de
projeto que reconstrói contexto. O usuário final não precisa entender agentes,
Ontologia ou arquitetura interna para obter valor.

## Problema

Trabalho assistido por IA perde contexto, autoridade e continuidade entre
conversas, modelos e pessoas. Decisões viram memória de chat; recomendações
viram autorizações por engano; estado vira arqueologia.

## Princípios do produto

- ideia incompleta é entrada válida; o sistema pergunta, não inventa;
- assumptions, contradições e unknowns são visíveis e corrigíveis;
- propor ≠ aprovar ≠ executar ≠ aceitar — sempre, também na interface;
- progresso desconhecido é dito como desconhecido (nunca percentual falso);
- falha preserva trabalho e oferece recuperação;
- evidência sustenta claims específicas, com freshness e limitação; evidência
  indisponível bloqueia a claim, não desaparece;
- o usuário sempre pode voltar e reconstruir o contexto.

## Princípios arquiteturais

1. Project Memory canônica é Markdown/YAML no repositório; relações explícitas
   nos artifacts são autoritativas (grafos/índices/embeddings são derivados).
2. Runtime não é Source of Truth; o Compiler deriva representações operacionais
   dos artifacts canônicos.
3. O executor não aprova o próprio resultado; loops são limitados e rastreáveis.
4. Guardrails proporcionais ao risco; blockers não são compensáveis por média.
5. Authority ≠ visibility ≠ capability ≠ permission; os estados de projeto,
   execução, artifact, evidência, revisão e interface não se fundem num status.
6. Capability ≠ Skill ≠ Tool; Agent Blueprint ≠ Runtime Agent ≠ Execution;
   Artifact ≠ Evidence; user evidence não pode ser inventada.

## Governança e papéis

Papéis (GOV-001): **CVO** (Raphael — visão), **CSA** (arquitetura e revisão),
**CEA/executor** (implementação dentro de contratos; hoje exercível por qualquer
modelo compatível — ver EXECUTION_CONTRACT), **Council** (decisões). Instrumentos:
Council Decisions/ADs, ADRs, APs, ARPs (programas de pesquisa), IHRs (handoffs
via IHP-001), evidence artifacts, milestones, bounded loops.

Hierarquia de autoridade em conflito: a de **PMM-001 §Authority Hierarchy**
(Manifestos → Governance → Principles → ADRs → Architecture → Knowledge →
Roadmap → Milestones → Implementation; Constitution é futura). O refinamento
operacional para executores está no EXECUTION_CONTRACT.

## Hierarquia de artifacts (onde cada coisa vive)

Ver `REPOSITORY_MAP.yaml`. Em resumo: `foundation/` (protocolos, decisões,
governança, princípios, manifestos, bootstrap), `knowledge/research/` (ARPs e
evidence), `milestones/` (IHRs), `architecture/`, `roadmap/`,
`experiments/` (código descartável autorizado), `knowledge/backlog/` (APs).

## Distinções críticas (repetidas porque executores erram nelas)

```text
Recommendation != Authorization        Proposal != Approval != Execution != Acceptance
Prototype != Runtime                   Displayed State != Runtime State
Visible Permission != Enforcement      Internal Review != User Evidence
Derived Status != Canonical Decision   Repository Context != Conversation Memory
```

## Disciplina de evidência e loops

Toda slice roda em bounded loop (iterações/tempo/arquivos/commits declarados),
valida o que pode validar, **declara o que não executou** (nunca inventa teste,
build ou observação humana) e termina com IHR de 12 seções (IHP-001) + retorno
no RETURN_SCHEMA. Checks empíricos exigem operador humano.

## Portabilidade e substituição de executor

O sistema deve sobreviver à troca de modelo, fornecedor ou pessoa: o bootstrap
(`AGENT_START_HERE` → Charter → Status → Contract → Manifest) permite que um
executor novo reconstrua contexto sem conversas anteriores. Estilo de resposta é
livre; o contrato de retorno, não. Nenhum executor herda autoridade — herda
somente o trabalho autorizado.

## Glossário mínimo

**ARP** programa de pesquisa arquitetural · **AP** proposta arquitetural ·
**ADR** decisão arquitetural registrada · **AD/ACD** diretivas do Council ·
**IHP/IHR** protocolo/relatório de handoff · **CSA/CVO/CEA** papéis (GOV-001) ·
**Slice** unidade de trabalho autorizada e limitada · **Evidence artifact**
resultado de pesquisa com proveniência · **Context Manifest** envelope de
contexto por tarefa · **C-lite** benchmark de um ciclo governado de pesquisa.

## Limites deste Charter

Não contém estado transitório (HEAD, tarefa atual — ver PROJECT_STATUS); não
substitui nenhuma fonte canônica; não decide questões ontológicas abertas; não
autoriza trabalho. Alterações exigem decisão do Council.

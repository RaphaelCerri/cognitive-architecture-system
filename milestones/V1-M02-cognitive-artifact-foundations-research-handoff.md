---
schema_version: 0.1.0-experimental
id: IHR-0006
kind: knowledge
knowledge_type: implementation_handoff_report
title: Cognitive Artifact Foundations Research Slice — Handoff
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
    target: ARP-0008
---

# IHR-0006 — Cognitive Artifact Foundations Research Slice

## 1. Identificação

Pacote para revisão do CSA sobre a primeira slice substantiva do ARP-0008: **Capability, Skill, Strategy, Workflow and Agent Boundaries**. Data de evidência e execução: 2026-07-22.

## 2. Objetivo autorizado

Esclarecer responsabilidades e relações entre Capability, Skill, Strategy, Workflow, Agent, Task Force, Policy, Guardrail Profile, Runtime Configuration e Execution Instance sem canonizar definição, criar schema, contrato estável, exemplo executável ou implementação. Limites: seis iterações, quarenta minutos, seis arquivos e duas iterações sem progresso.

## 3. Resultado

Foram produzidos quatro entregáveis proporcionais. A hipótese central foi refinada, não aprovada: Capability descreve potencial/resultado; Skill preserva conhecimento procedural; Strategy orienta adaptação; Workflow define controle executável; Agent Blueprint descreve possível executor; Task Force compõe participantes temporariamente; Policy obriga; Guardrail Profile deriva controles; Runtime Configuration compila uma representação; Execution Instance contém o estado concreto.

Distinções principais: `Capability != Skill != Tool`; `Skill != Permission`; `Strategy != Workflow Instance`; `Agent Blueprint != Model != Runtime`; `Policy != Guardrail Profile != Test/Evidence`; `Artifact lifecycle != Execution lifecycle`; `Canonical Blueprint != Runtime Configuration != Execution Instance`.

## 4. Execução por iteração

1. **Pergunta:** requisitos de início e overlap estão satisfeitos? **Fontes:** diretiva, ARP-0008, ARP-0002/0004/0007. **Evidência:** autorização, slice, timebox e ownership explícitos. **Comparação:** escopo versus programas vizinhos. **Conclusão provisória:** iniciar sem alterar owners. **Progresso:** sim. **Decisão:** continuar.
2. **Pergunta:** discovery, capability claim e Tool são equivalentes? **Fontes:** A2A e MCP oficiais. **Evidência:** Agent Card/Task e Tool/Resource/Prompt são primitivas separadas. **Comparação:** interoperabilidade versus modelo interno. **Conclusão:** claim, Tool, Skill e autoridade são distintos. **Progresso:** sim. **Decisão:** continuar.
3. **Pergunta:** como runtimes modelam Agent e Workflow? **Fontes:** OpenAI Agents SDK, Google ADK e LangGraph. **Evidência:** runners, handoffs, graph/dynamic/template workflows, state e durable execution. **Comparação:** classes runtime-specific sobrepõem nomes. **Conclusão:** preservar blueprint/config/run e não importar Ontologia. **Progresso:** sim. **Decisão:** continuar.
4. **Pergunta:** onde ficam autoridade e guardrails? **Fontes:** NIST NCCoE Initial Public Draft e OWASP. **Evidência:** least privilege, proof of authority, delegation, revocation, approval e audit. **Comparação:** conhecimento versus grant. **Conclusão:** autoridade externa e fail-closed. **Progresso:** sim. **Decisão:** continuar.
5. **Pergunta:** as fronteiras cobrem relações e anti-patterns? **Fontes:** evidência das iterações 2–4 e perguntas da diretiva. **Evidência:** matriz e mapa expõem ownership, muitos-para-muitos provisório e lifecycles distintos. **Comparação:** agente monolítico versus objetos referenciados. **Conclusão:** entregáveis proporcionais completos. **Progresso:** sim. **Decisão:** validar.
6. **Pergunta:** o pacote respeita governança e escopo? **Fontes:** IHP-001, repositório e diretiva. **Evidência:** validações descritas na seção 7. **Comparação:** conjunto esperado versus diff/staging. **Conclusão provisória:** pronto para revisão se todos os checks passarem. **Progresso:** sim. **Decisão:** encerrar a slice sem iniciar outra.

## 5. Arquivos

Alterado: `knowledge/research/ARP-0008-cognitive-artifact-engineering.md`.

Criados:

- `knowledge/research/evidence/cognitive-artifact-boundary-report.md`;
- `knowledge/research/evidence/cognitive-artifact-responsibility-matrix.md`;
- `knowledge/research/evidence/cognitive-artifact-relationship-map.md`;
- `knowledge/research/evidence/cognitive-artifact-external-model-comparison.md`;
- `milestones/V1-M02-cognitive-artifact-foundations-research-handoff.md`.

Nenhum outro arquivo foi alterado. `.obsidian` e o draft não rastreado permaneceram fora do escopo e do staging.

## 6. Decisões técnicas locais

- Nenhum conceito foi promovido a tipo; definições e cardinalidades permanecem hipóteses.
- Agent Blueprint, Runtime Configuration e Execution Instance foram separados analiticamente.
- Capability claim exige evidência; Skill/Strategy não concedem autoridade; Tool não equivale a Capability.
- Policy é candidata canônica; Guardrail Profile é derivado; Test e Evidence são separados.
- Task Force é plano/instância temporária por padrão, sem privilege aggregation.
- Modelos externos são comparativos, não fontes da Ontologia.

## 7. Validação

Validação documental proporcional executada antes do commit: frontmatter YAML; JSON do snapshot; unicidade de IDs; relações; links e URLs; fontes e datas; proveniência; marcação de fato/inferência/hipótese/recomendação; ausência de implementação/schema/contrato estável; estados do ARP-0008; seis arquivos; escopo; IHP 12/12; UTF-8 sem mojibake; e `git diff --check`. Build, lint e typecheck não se aplicam a esta slice documental.

## 8. Desvios

A amostra externa foi proporcional: A2A, MCP, OpenAI Agents SDK, Google ADK, LangGraph, NIST e OWASP. Semantic Kernel, AutoGen, CrewAI, Letta, BeeAI, Claude Skills, policy engines e outras famílias ficaram deferidas por não serem necessárias para a fronteira mínima. O mecanismo integrado de patch apresentou limitação do wrapper Windows para path absoluto; o mesmo mecanismo foi invocado com path relativo dentro da raiz gravável, sem elevação.

## 9. Pendências

Ambiguidades: identidade canônica dos conceitos; granularidade de Capability; fronteira Skill/Strategy; natureza dual de Workflow; necessidade de blueprint de Task Force; ownership de Policy/exceções; prova e revogação de claims; compatibilidade/perda semântica; e thresholds de certificação.

Decisões futuras do Conselho: aceitar/revisar as fronteiras; decidir se algum conceito merece pesquisa ontológica; escolher e autorizar a próxima slice; definir autoridade para Policy, grants, exceções e certificação. Não há escolha automática por Agent Engineering ou Skill Engineering.

## 10. Riscos

Riscos residuais: definições candidatas parecerem decisões; framework vocabulary contaminar o Core; Agent voltar a concentrar prompt, Tools, Workflow e autoridade; claims sem evidência; Guardrail Profile divergir de Policy; Task Force agregar privilégios/contexto; compilação ocultar perda semântica; runtime virar Source of Truth; e evidência operacional ser promovida sem revisão.

## 11. Recomendação

CSA e Conselho devem revisar o boundary report, a matriz, o mapa e a comparação externa como um pacote. Recomendação preliminar: **Adapt/Absorb** separações conceituais e guardrails; **Defer** schemas, identidade ontológica, integração e implementação; manter ARP-0008 `active`/`evidence_gathering`. Não iniciar nova slice até decisão explícita.

## 12. Project Status Snapshot

```json
{
  "current_milestone": {
    "id": "V1-M02",
    "status": "in_progress",
    "current_checkpoint": "cognitive_artifact_foundations_review",
    "closure_recommended": false
  },
  "completed": [
    "Cognitive Artifact Boundary Report",
    "Responsibility Matrix",
    "Artifact Relationship Map",
    "External Model Comparison"
  ],
  "pending": [
    "CSA review",
    "Council decision on candidate boundaries",
    "Explicit selection of any future slice"
  ],
  "blocked": [
    "Schemas",
    "Executable cognitive artifacts",
    "Implementation",
    "Core Type promotion",
    "Framework adoption"
  ],
  "decisions_required": [
    "Accept, revise or reject candidate boundaries",
    "Determine whether more evidence is needed",
    "Choose and authorize a future slice or pause"
  ],
  "research_program": {
    "id": "ARP-0008",
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
  "recommended_next_action": "CSA and Council review this slice; do not start another slice or implementation automatically."
}
```

---
schema_version: 0.1.0-experimental
document_role: research_responsibility_matrix
title: Cognitive Artifact Responsibility Matrix
status: pending_review
created_at: 2026-07-22
related_programs: [ARP-0008]
language: pt-BR
---

# Cognitive Artifact Responsibility Matrix

## Leitura

Todas as classificações são **hipóteses de trabalho**. `Candidato` não significa tipo aprovado; `derivado` não significa descartável. Autoridade significa poder de permitir ações, não conhecimento de como agir.

| Conceito | Propósito | Canonicidade | Executabilidade | Autoridade | Estado/memória | Tools e composição | Lifecycle/runtime | Segurança, avaliação e proveniência |
|---|---|---|---|---|---|---|---|---|
| Capability | Declarar resultado/potencial verificável | Candidato, se identidade e uso justificarem | Não executa | Nenhuma; pode declarar autoridade requerida | Sem estado/memória de execução | Pode compor/dependender; relaciona Skills e executores | Lifecycle do claim; runtime-neutral | Claim exige evidência externa, versão e origem |
| Skill | Preservar conhecimento procedural reutilizável | Candidato como Knowledge | Aplicada por executor; não executa sozinha | Nenhuma; nunca contém grant/credencial | Sem memória privada obrigatória | Pode referenciar Tools/Skills; muitos-para-muitos com Capabilities | Versionada; compilável por runtime | Testes, critérios de uso/não uso, efeitos, licença e proveniência |
| Strategy | Orientar decisões e adaptação | Candidato como Knowledge | Não é instância executável | Nenhuma | Pode consumir contexto, não possuir estado operacional | Seleciona/ordena Skills e Workflows | Runtime-neutral; evolui por evidência | Critérios, falhas, escalonamento e avaliação independente |
| Workflow | Definir controle executável | Candidato quando reutilizável/versionável | Sim, por engine/executor | Não concede; aplica gates e respeita Policy | Define modelo de estado; instância guarda estado | Compõe etapas, Skills, Strategies, Tools e participantes | Blueprint versionado; execução runtime-dependent | Parada, retry, timeout, HITL/HOTL, auditabilidade e proveniência |
| Agent | Descrever possível executor configurado | Blueprint candidato; executável derivado | Configuração é executável via runtime | Recebe grant externo por execução | Memória por referência/política; não essência da identidade | Referencia Skills, Strategies, Tools, Policies e claims | Blueprint, configuração e instância têm lifecycles distintos | Least privilege, pinning, revogação, avaliação e não autocertificação |
| Task Force | Compor participantes temporariamente | Plano/derivado por padrão; blueprint a decidir | Instância coordena execução | Distribuída explicitamente, sem união automática | Contexto/memória temporários e compartimentados | Vários Agents/roles; segregação de funções | Nasce por objetivo e se dissolve; runtime-dependent na execução | Prevenir collusion/privilege aggregation; consolidar evidência governada |
| Policy | Estabelecer regra obrigatória | Canônica sob autoridade competente | Enforced por mecanismos externos | Define/limita grants e exceções | Estado de vigência, sem memória operacional | Aplica-se a múltiplos artefatos/ações | Lifecycle governado; runtime-neutral na intenção | Precedência, ownership, auditoria, exceção e versionamento |
| Guardrail Profile | Agrupar controles proporcionais ao risco | Derivado de Policy, risco e contexto | Controles podem executar/enforce | Não cria autoridade | Estado de aplicação/eficácia separado | Pode cobrir Agent, Skill, Tool, Workflow e execução | Compilável; dependência runtime explícita | Traceabilidade a risco/Policy; teste e evidência separados |
| Runtime Configuration | Materializar representação para runtime | Derivada e implantável | Sim, se compatível | Carrega grants/referências, não os origina | Defaults/configuração; estado de run fica fora | Resolve adapters, Tools e features | Identidade/versionamento operacional; runtime-specific | Hash/pinning, perda semântica, compatibilidade e origem do blueprint |
| Execution Instance | Registrar ocorrência concreta | Não canônica como definição; evidência operacional durável | É a execução | Grant efetivo, limitado por escopo/tempo | Estado, checkpoint, budgets, contexto e memória temporária | Invoca componentes autorizados | Lifecycle operacional: start/pause/resume/stop/revoke | Logs, decisões, versões, efeitos, approvers e evidência imutável |

## Ownership e responsabilidade negativa

| Responsabilidade | Owner candidato | Não deve pertencer a |
|---|---|---|
| Descrever resultado requerido | Intent/Capability governance | Tool ou Agent individual |
| Preservar conhecimento procedural | Skill governance | Credencial/runtime |
| Escolher abordagem adaptativa | Strategy/executor autorizado | Policy ou evidência |
| Controlar sequência e estado | Workflow/engine | Prompt monolítico do Agent |
| Executar dentro de limites | Agent/executor e Runtime Configuration | Blueprint sozinho |
| Conceder autoridade | Autoridade/Policy externa e grant de execução | Skill, Agent ou Task Force |
| Derivar controles | Processo de risco/Guardrail Profile | Artefato avaliado isoladamente |
| Provar eficácia/capacidade | Avaliação independente e evidência | Claim ou autocertificação |
| Persistir estado operacional | Execution Instance/store governado | Documento canônico |
| Preservar Source of Truth | Project Memory/governança | Configuração de framework |

## Guardrails transversais exigidos

- Least privilege, grants explícitos, tool allowlists e data/memory boundaries.
- Budgets, stopping conditions, approval gates, escalation e fail-closed.
- Observabilidade, proveniência, revogação, version pinning e security evaluation.
- Separação de funções entre autor, aprovador, executor e avaliador.

## Pontos ainda não decididos

Identidade canônica de Capability, Skill, Workflow, Agent e Task Force; cardinalidades; fronteira Strategy/Skill; granularidade de Policy; ownership do processo de derivação; formato de perda semântica; e critérios de certificação. Esta matriz compara responsabilidades e não cria essas decisões.

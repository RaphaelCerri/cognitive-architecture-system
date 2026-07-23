---
schema_version: 0.1.0-experimental
id: ARP-0009-E43
kind: knowledge
knowledge_type: research_evidence
title: C-lite Stage 3 Readiness Assessment
status: experimental
version: "1.0"
created_at: 2026-07-23
owner: Architecture Council
language: pt-BR
relations:
  - type: evidence_for
    target: ARP-0009
  - type: refines
    target: ARP-0009-E42
  - type: related_to
    target: ARP-0009-E41
  - type: related_to
    target: ARP-0009-E40
---

# C-lite Stage 3 Readiness Assessment

## Natureza e limites

**[Decisão]** Avaliação interna de readiness para uma futura **proposta** de Stage 3, autorizada pelo Chief após `d3c8d43`. Baseia-se em E41 (renderer) e E42 (walkthrough/findings).

```text
Readiness assessment != Stage 3 proposal != Stage 3 authorization
Internal review != user evidence
Recommendation != decision
```

Este documento **não autoriza** Stage 3, frontend, código, framework ou implementação. A avaliação externa com participantes permanece adiada e seus gates (E40) permanecem abertos.

## Respostas às dez perguntas de readiness

### 1. As jornadas principais podem ser implementadas sem redefinir o produto?

**Sim.** J1–J6 descrevem um ciclo governado coeso (ideia → discovery → plano → autorização → execução → revisão → memória → retorno) cujas superfícies e transições são internamente consistentes. Os unknowns do cenário (identidade da aprovação externa, permissões por papel, retenção) são perguntas do domínio fictício, não lacunas do produto: um vertical slice pode implementá-los como perguntas abertas visíveis, exatamente como o protótipo faz.

### 2. Os estados possuem transições suficientemente compreensíveis?

**Sim, documentalmente.** As famílias de estado permanecem separadas (Interface, Discovery, Plan, Decision, Execution, Artifact, Evidence, Review, Project); cada transição tem gatilho, ator e efeito declarados; nenhuma colisão foi encontrada (E42/F-08). Compreensão por usuários reais permanece hipótese (HP-05) — esta resposta é sobre implementabilidade, não sobre usabilidade.

### 3. A autoridade está clara o bastante para modelagem experimental?

**Sim, com uma correção pendente.** Ator, autoridade, escopo, expiração e separação proposal/approval/queue/start/acceptance são consistentes em todas as superfícies (E42/F-07) e mapeiam diretamente para uma matriz de autoridade implementável. Pendências: o rótulo `CEA simulado` (E42/F-01, material) deve ser substituído por vocabulário neutro antes de qualquer versão exposta a usuários; delegação e cancelamento de emergência permanecem questões de runtime declaradas em E31.

### 4. O protótipo contém comportamento tecnicamente impossível ou enganoso?

**Não.** Nenhum comportamento impossível foi encontrado (E42/F-11). As simplificações existentes (retry→completed sem re-exibir running, F-03; superfície de running imutável após input, F-04) são elipses do meio estático, declaradas como tal, e desaparecem com estado real. Os disclaimers de fronteira epistêmica estão presentes em todas as superfícies sensíveis.

### 5. Os contratos de dados necessários podem ser identificados?

**Sim.** O par E29/E30 permite derivar contratos candidatos para: Project, Understanding (com assumptions/unknowns/non-goals), Plan (com versões), Authorization (ator/escopo/risco/expiração/output), Execution (estados, checkpoint, atividades, outputs parciais), Requested Input (falta/motivo/impacto/opções), Failure/Recovery (opções e efeitos), Artifact (versão/status/findings/limitações), Evidence (claim/proveniência/freshness/confidence/limitação), Review Decision (outcome/razão/consequência) e Project Memory (o YAML de E29 é um contrato mínimo pronto). A derivação é trabalho da futura proposta de Stage 3, não deste documento.

### 6. Failure e recovery podem ser representados em um vertical slice?

**Sim.** F-01 (fonte indisponível) é um ramo determinístico com preservação de checkpoint/notas/output parcial e seis opções de efeito conhecido — implementável com fonte sintética e state machine determinística, sem rede ou backend.

### 7. Project Memory possui escopo mínimo implementável?

**Sim.** O bloco `Project Memory update` de E29 define o conjunto mínimo: intent, current_state, recent_changes, decisions, artifact, evidence, unresolved, pending_action, provenance, resume_entry. Um arquivo estruturado local satisfaz o escopo do vertical slice; graph e busca permanecem excluídos (decisão do Conselho preservada).

### 8. Existem blockers que somente usuários podem resolver?

**Sim.** HP-01–09 integralmente: compreensão de terminologia ("evidência", "pendência", estados), suficiência da lista de relações sem graph (HP-09), calibração de expectativa com progresso desconhecido (HP-05) e a eficácia real da distinção artifact/evidence (HP-06). Nenhuma revisão interna ou implementação substitui isso; dependem do fechamento dos gates E40.

### 9. Existem blockers que somente implementação pode revelar?

**Sim.** Comportamento real de foco/teclado/reflow em interface implementada; consistência da state machine sob interação livre (ordem não determinística); refresh de contexto/autoridade stale no retorno (SV-24 é candidato a stale-view); persistência e reconstrução da Memory após interrupção; e o custo real de manter as famílias de estado separadas na UI. São argumentos a favor de um vertical slice experimental antes de qualquer frontend de produto.

### 10. Qual é o menor vertical slice executável recomendado?

**[Recomendação, sem autorização]** Um **protótipo executável local-only de um único ciclo governado**, nos limites da fronteira candidata da diretiva:

```text
Escopo: J1–J6 em caminho feliz + ramo de falha/retry + um outcome de review (accept)
Motor: state machine determinística; dados 100% sintéticos (conteúdo E29)
Superfícies: as 8 famílias SF-01–08, sem novas superfícies nem novas variantes
Memory: arquivo estruturado local, escopo do YAML E29
Excluído: backend de produção, autenticação real, execução real de agente,
          ferramentas externas, deploy público, dados pessoais, claims de segurança,
          busca, graph, Design System, branding
Correção prévia: F-01 (terminologia) na versão de conteúdo usada pelo slice
Objetivo: responder às perguntas do item 9 e produzir evidência de implementabilidade,
          não validar produto nem substituir avaliação com usuários
```

## Readiness recommendation

**Ready with conditions para preparar uma proposta separada de Stage 3.**

Base: nenhum blocker interno (E42); renderer suitable with limitations para trabalho interno (E41); jornadas, estados, autoridade, contratos de dados, failure/recovery e Memory implementáveis sem redefinição do produto.

Condições para a futura proposta:

1. decisão do Conselho sobre a correção de F-01 (nova versão 1.1 do par E29/E30 ou correção restrita ao conteúdo do slice);
2. definição de owners, budget, timebox e critérios de aceitação do vertical slice;
3. manutenção explícita da fronteira candidata (local-only, sintético, sem claims);
4. registro de que o slice não fecha nenhum gate de E40 e não substitui user evaluation.

Esta recomendação **não inicia** Stage 3. A avaliação externa permanece adiada; Evaluation Authorization, Evaluation Execution e frontend permanecem bloqueados.

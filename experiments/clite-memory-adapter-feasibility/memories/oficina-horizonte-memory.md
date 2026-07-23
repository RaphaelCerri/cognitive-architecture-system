---
memory_id: MEM-OFICINA-01
format_version: memory-format-0.1-experimental
project_id: PRJ-01
project_title: Oficina Horizonte — pesquisa de atendimento
scenario_id: oficina-horizonte
scenario_fixture_version: clite-fixture-oficina-1.0
created_from: clite-extracted-domain-experiment
last_accepted_checkpoint: IHR-0029
content_version: 1

intent:
  initial_intent: >-
    Quero criar um sistema para organizar o atendimento da minha oficina e
    parar de perder orçamento no WhatsApp.
  understanding_confirmed: true
  unknowns:
    - Identidade exigida para aprovação externa
    - Permissões por papel
    - Retenção de fotos e mensagens
  assumptions:
    - id: A-01
      status: corrected
  contradictions:
    - id: C-01
      status: resolved
      chosen_interpretation: 1
  answers:
    - question_id: DQ-01
      value: Eu e as duas pessoas da recepção.
      is_unknown: false
    - question_id: DQ-02
      value: Os mecânicos também precisam atualizar quando começam e terminam.
      is_unknown: false
    - question_id: DQ-03
      value: Preferia continuar aprovando pelo aplicativo de mensagens, sem conta.
      is_unknown: false

governance:
  plan_state: submitted
  plan_version: 2
  plan_revision_comments:
    - Deixe explícito que estoque e pagamento estão fora e que nenhuma conta de cliente será definida.
  authorization_state: approved
  approval_decision:
    decision: approved
    approver_label: Quem decide (autoridade fictícia)
    approver_role: decision_authority
    authority_basis: "RoleAssignment simulada do cenário: decision_authority (E56, experimental_only)"
    reason: Escopo limitado a fontes públicas declaradas.
    validity: Válida apenas para esta execução.

execution:
  execution_state: awaiting_input
  scenario_cursor: 3
  last_tick: 21
  last_seq: 17
  requested_input:
    id: RI-01
    status: requested
  scope_revisions: []

result:
  artifact_state: none
  artifact_ref: null
  evidence_refs: []
  review_state: not_started
  review_decision: null

continuity:
  pending_action: Responder à pendência da pesquisa.
  unresolved_items:
    - Identidade exigida para aprovação externa
    - Permissões por papel
    - Retenção de fotos e mensagens
  recent_changes:
    - A pesquisa aguarda uma decisão sua.
    - Pesquisa em andamento; progresso desconhecido.
  provenance_refs:
    - IHR-0029
    - ARP-0009-E55
  limitations:
    - O histórico evento-a-evento não é reconstruível a partir desta Memory.
    - Conteúdo sintético e fictício; nenhum dado de pessoa ou operação real.
---

# Project Memory — Oficina Horizonte (experimental)

Memory canônica **candidata e experimental** de um projeto fictício, capturada
no ponto de retomada "pesquisa aguardando decisão da proprietária" (pendência
RI-01 aberta). O plano versão 2 foi aprovado pela autoridade de decisão; a
pesquisa foi enfileirada, iniciada e avançou até a pendência.

Este documento é a **entrada canônica candidata** do experimento de adapter:
o runtime, o snapshot e o event log continuam **não** sendo Source of Truth.
Conteúdo narrativo é contexto humano; a inicialização do domínio usa somente o
bloco estruturado acima.

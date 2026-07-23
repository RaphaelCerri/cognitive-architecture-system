---
memory_id: MEM-ESTUFA-01
format_version: memory-format-0.1-experimental
project_id: PRJ-02
project_title: Estufa Vertical — pesquisa de irrigação
scenario_id: estufa-vertical
scenario_fixture_version: clite-fixture-estufa-1.0
created_from: clite-extracted-domain-experiment
last_accepted_checkpoint: IHR-0029
content_version: 2

intent:
  initial_intent: >-
    Quero comparar regimes de irrigação para os módulos da estufa e parar de
    depender de anotações dispersas em cadernos.
  understanding_confirmed: true
  unknowns:
    - Tolerância das mudas a atraso de rega
  assumptions:
    - id: B-01
      status: corrected
  contradictions:
    - id: D-01
      status: resolved
      chosen_interpretation: 1
  answers:
    - question_id: EQ-01
      value: Seis módulos em duas colunas.
      is_unknown: false
    - question_id: EQ-02
      value: Eu ajusto, mas o temporizador antigo também muda o horário sozinho.
      is_unknown: false

governance:
  plan_state: submitted
  plan_version: 2
  plan_revision_comments:
    - Deixar explícito que nenhuma recomendação de equipamento será feita.
  authorization_state: approved
  approval_decision:
    decision: approved
    approver_label: Quem decide (autoridade fictícia)
    approver_role: decision_authority
    authority_basis: "RoleAssignment simulada do cenário: decision_authority (E56, experimental_only)"
    reason: Escopo limitado a fontes públicas; nenhum dado de produção real.
    validity: Válida apenas para esta execução.
  solo_operator_exception:
    active: true
    risk_class: low
    independent_review: false
    reversible: true
    external_effect: false
    reason: >-
      Cenário sintético local e reversível operado por uma única pessoa
      fictícia; registrado explicitamente, nunca apresentado como revisão
      independente.

execution:
  execution_state: completed
  scenario_cursor: 6
  last_tick: 30
  last_seq: 24
  requested_input:
    id: RI-02
    status: provided
    answer: Incluir o temporizador
  scope_revisions: []

result:
  artifact_state: under_review
  artifact_ref: CMP-A01
  evidence_refs:
    - id: EX-02
      status: unavailable
    - id: EX-01
      status: current
  review_state: in_review
  review_decision: null

continuity:
  pending_action: Escolher aceitar, pedir revisão ou rejeitar.
  unresolved_items:
    - Tolerância das mudas a atraso de rega
  recent_changes:
    - Resultado em revisão; concluído não significa aceito.
    - Pesquisa concluída; o resultado ainda não foi aceito.
  provenance_refs:
    - IHR-0029
    - ARP-0009-E55
  limitations:
    - O histórico evento-a-evento não é reconstruível a partir desta Memory.
    - A falha intermediária e a retomada estão resumidas nas evidence_refs, não em log.
    - Conteúdo sintético e fictício; nenhum dado de pessoa ou operação real.
---

# Project Memory — Estufa Vertical (experimental)

Memory canônica **candidata e experimental** do segundo cenário, capturada no
ponto de retomada "resultado produzido, aguardando decisão de revisão". A
pesquisa passou por uma pendência respondida ("Incluir o temporizador") e por
uma falha de fonte com nova tentativa — o resumo canônico preserva as
consequências (evidência indisponível EX-02; comparativo CMP-A01 em revisão),
não o log completo.

Inclui uma `solo_operator_exception` de **baixo risco** explícita (política
candidata do CSA), que nunca é apresentada como revisão independente.

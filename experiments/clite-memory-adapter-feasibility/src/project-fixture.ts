/**
 * Real Project Intake (G-A03) — builds a real-project ScenarioFixture from
 * user answers instead of a hand-written synthetic scenario. EXPERIMENTAL.
 *
 * Honest scope (v0): discovery, understanding and plan carry REAL user
 * content; execution-phase fields are explicit placeholders until the real
 * execution engine exists (E77). Placeholders are labeled, never disguised.
 */
import type { ScenarioFixture } from '../../clite-domain-extraction-feasibility/src/fixture-contract.ts';

export interface IntakeAnswers {
  project_title: string;
  initial_intent: string;
  /** Who uses/benefits — feeds understanding.users. */
  users?: string;
  /** Optional real discovery questions; defaults provided when absent. */
  discovery_questions?: { text: string; reason: string }[];
  /** Optional plan draft; placeholders when absent. */
  plan?: { objective?: string; steps?: string[]; risks?: string[]; limits?: string[] };
  non_goals?: string[];
  unknowns?: string[];
}

export const INTAKE_FIXTURE_VERSION_PREFIX = 'clite-fixture-real-0.1';
const PLACEHOLDER = 'A DEFINIR — conteúdo real será preenchido nas fases seguintes.';

export function slugify(title: string): string {
  return title
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    .slice(0, 48) || 'projeto';
}

const DEFAULT_QUESTIONS = [
  { text: 'Quem vai usar isso no dia a dia, e com que frequência?', reason: 'Define os atores reais e o ritmo de uso.' },
  { text: 'O que você já tentou antes, e por que não bastou?', reason: 'Evita repetir soluções descartadas e revela restrições.' },
  { text: 'O que NÃO pode acontecer de jeito nenhum?', reason: 'Delimita riscos e não-objetivos desde o início.' },
];

export function buildProjectFixture(a: IntakeAnswers): ScenarioFixture {
  if (!a.project_title?.trim()) throw new Error('project_title é obrigatório.');
  if (!a.initial_intent?.trim()) throw new Error('initial_intent é obrigatório.');
  const slug = slugify(a.project_title);
  const questions = (a.discovery_questions?.length ? a.discovery_questions : DEFAULT_QUESTIONS)
    .map((q, i) => ({
      id: `RQ-${String(i + 1).padStart(2, '0')}`,
      text: q.text, reason: q.reason, status: 'asked' as const,
    }));

  return {
    version: `${INTAKE_FIXTURE_VERSION_PREFIX}-${slug}`,
    projectId: `PRJ-REAL-${slug}`,
    projectName: a.project_title.trim(),
    roleLabels: {
      product_owner: 'Você (dono do projeto)',
      decision_authority: 'Você (autoridade de decisão — operador único registrado)',
      research_executor: 'Responsável pela pesquisa',
      system: 'Sistema',
    },
    initialPendingAction: 'Responder às perguntas de descoberta.',
    questions,
    initialAssumptions: [{
      id: 'RA-01',
      text: 'A descrição inicial reflete o problema real (a confirmar na descoberta).',
      origin: 'Intake do projeto',
      confidence: 'baixa',
      impact: 'Toda a descoberta revisita esta suposição.',
      status: 'active',
    }],
    contradictionTriggerQuestionId: questions[questions.length - 1]!.id,
    contradiction: {
      id: 'RC-01',
      statements: ['(nenhuma contradição real detectada ainda)', '(será substituída quando a descoberta encontrar uma)'],
      whyItMatters: PLACEHOLDER,
      interpretations: ['Manter como está', 'Revisar na descoberta'],
      status: 'open',
    },
    correctedAssumptionText: PLACEHOLDER,
    understanding: {
      version: 1,
      problem: a.initial_intent.trim(),
      users: a.users?.trim() || PLACEHOLDER,
      inScope: [PLACEHOLDER],
      nonGoals: a.non_goals?.length ? a.non_goals : [PLACEHOLDER],
      assumptions: ['A descrição inicial reflete o problema real.'],
      unknowns: a.unknowns?.length ? a.unknowns : ['A levantar na descoberta.'],
    },
    plan: {
      version: 1,
      objective: a.plan?.objective?.trim() || PLACEHOLDER,
      steps: a.plan?.steps?.length ? a.plan.steps : [PLACEHOLDER],
      expectedArtifacts: ['Resultado inicial do projeto (a definir no plano)'],
      risks: a.plan?.risks?.length ? a.plan.risks : [PLACEHOLDER],
      limits: a.plan?.limits?.length ? a.plan.limits : ['Sem execução real — motor de execução ainda não existe (E77).'],
    },
    planRevisionAddedLimit: 'Limite adicional registrado na revisão do plano.',
    authorizationRequest: {
      id: 'RAR-01',
      action: 'Executar o plano aprovado deste projeto',
      requestingActorLabel: 'Você (dono do projeto)',
      executorRole: 'research_executor',
      authorityLabel: 'Você (autoridade de decisão)',
      scope: 'Somente o escopo aprovado no plano vigente',
      risks: ['Execução ainda é simulada — nenhum efeito externo real.'],
      reversibility: 'Alta — nada externo é alterado.',
      expiry: 'Válida apenas para este ciclo.',
      expectedOutput: 'Artifact inicial com evidências.',
    },
    executionId: `EX-REAL-${slug}`,
    requestedInput: {
      id: 'RIN-01',
      missing: 'Decisão sua necessária durante a execução (placeholder).',
      reason: PLACEHOLDER,
      impactIfAbsent: 'A execução permanece pausada.',
      options: ['Continuar', 'Ajustar escopo'],
      status: 'requested',
    },
    failureReason: 'Falha simulada (placeholder até execução real).',
    failureEvidence: [],
    completionArtifact: {
      id: `ART-REAL-${slug}`,
      title: `Resultado inicial — ${a.project_title.trim()}`,
      version: '0.1',
      findings: [{ id: 'RF-01', text: PLACEHOLDER }],
      limitations: ['Gerado com execução simulada; substituir quando houver motor real.'],
      contentSections: [{ heading: 'Aviso', body: 'Conteúdo placeholder do intake v0 — a execução real ainda não existe.' }],
    },
    completionEvidence: [],
    scenarioSteps: [
      { kind: 'activity', text: 'Execução simulada (placeholder do intake v0).', note: 'Substituir por execução real — E77.' },
      { kind: 'completion' },
    ],
    ticksPerStep: 1,
    scopeRevisionClaim: PLACEHOLDER,
  };
}

/** Initial Memory document (memory-format-0.1-experimental) at the starting
 * resumption point: intent captured, discovery not yet answered. */
export function buildInitialMemoryDocument(a: IntakeAnswers, fx: ScenarioFixture): string {
  const esc = (s: string): string => s.replace(/"/g, "'").replace(/\r?\n/g, ' ').trim();
  return `---
memory_id: MEM-REAL-${slugify(a.project_title)}
format_version: memory-format-0.1-experimental
project_id: ${fx.projectId}
project_title: "${esc(a.project_title)}"
scenario_id: ${fx.projectId}
scenario_fixture_version: ${fx.version}
created_from: real-project-intake-v0
last_accepted_checkpoint: none-yet
content_version: 1

intent:
  initial_intent: "${esc(a.initial_intent)}"
  understanding_confirmed: false
  unknowns: []
  assumptions:
    - id: RA-01
      status: active
  contradictions: []
  answers: []

governance:
  plan_state: none
  plan_version: 0
  plan_revision_comments: []
  authorization_state: none
  approval_decision: null
  solo_operator_exception:
    active: true
    risk_class: low
    independent_review: false
    reversible: true
    external_effect: false
    reason: "Projeto pessoal local do dono; operador único registrado (GOV-002)."

execution:
  execution_state: none
  scenario_cursor: 0
  last_tick: 0
  last_seq: 0
  requested_input: null
  scope_revisions: []

result:
  artifact_state: none
  artifact_ref: null
  evidence_refs: []
  review_state: not_started
  review_decision: null

continuity:
  pending_action: "Responder às perguntas de descoberta."
  unresolved_items: []
  recent_changes:
    - "Projeto criado pelo intake; descoberta ainda não iniciada."
  provenance_refs:
    - real-project-intake-v0
  limitations:
    - "Execução ainda simulada (placeholders do intake v0 — ver E77)."
    - "Este arquivo NÃO deve ser commitado no repositório institucional (CSA-34-3)."
---

# Project Memory — ${esc(a.project_title)}

Memory inicial gerada pelo Real Project Intake v0 em formato experimental.
Conteúdo real do dono do projeto; mantida FORA do controle de versão
institucional por padrão (dados pessoais — G-A18/CSA-34-3).
`;
}

/**
 * Canonical synthetic fixture — versioned, deterministic, fictitious.
 * Semantically derived from ARP-0009-E29 (C-lite Scenario and Content Pack)
 * with finding F-01 corrected: the internal role `research_executor` is
 * rendered exclusively as "Responsável pela pesquisa".
 * No real person, company, source, agent or data. No personal data.
 */
import type {
  ActorRole, Artifact, Assumption, AuthorizationRequest, Contradiction,
  DiscoveryQuestion, EvidenceItem, PlanVersion, RequestedInput, Understanding,
} from './types.ts';

export const FIXTURE_VERSION = 'clite-fixture-1.0';

/** F-01: interface labels for internal role IDs. Internal IDs are never rendered. */
export const ROLE_LABELS: Record<ActorRole, string> = {
  product_owner: 'Marina (proprietária fictícia)',
  decision_authority: 'Quem decide (autoridade fictícia)',
  research_executor: 'Responsável pela pesquisa',
  system: 'Sistema',
};

/** Terms that must never appear in renderable strings (F-01 guard). */
export const FORBIDDEN_INTERFACE_TERMS = [
  'CEA', 'Codex', 'Agent Blueprint', 'ARP', 'IHR', 'Ontologia', 'research_executor',
];

export const PROJECT_NAME = 'Oficina Horizonte — pesquisa de atendimento';

export const INITIAL_IDEA =
  'Quero criar um sistema para organizar o atendimento da minha oficina e parar de perder orçamento no WhatsApp.';

export const QUESTIONS: DiscoveryQuestion[] = [
  {
    id: 'DQ-01',
    text: 'Quem acompanha o atendimento?',
    reason: 'A resposta define atores e quem pode agir.',
    status: 'asked',
  },
  {
    id: 'DQ-02',
    text: 'Quem atualiza o estado do serviço?',
    reason: 'A resposta muda os papéis e as ações que precisam ser pesquisados.',
    status: 'asked',
  },
  {
    id: 'DQ-03',
    text: 'O cliente precisa entrar no sistema?',
    reason: 'A resposta delimita o acesso externo.',
    status: 'asked',
  },
];

/** Deterministic synthetic answers offered by the scenario. */
export const SCENARIO_ANSWERS: Record<string, string> = {
  'DQ-01': 'Eu e as duas pessoas da recepção.',
  'DQ-02': 'Os mecânicos também precisam atualizar quando começam e terminam.',
  'DQ-03': 'Preferia continuar aprovando pelo WhatsApp, sem conta.',
};

export const ASSUMPTION_SINGLE_USER: Assumption = {
  id: 'A-01',
  text: 'Haverá um único usuário do sistema.',
  origin: 'Resposta inicial da primeira pergunta',
  confidence: 'baixa',
  impact: 'Define papéis, ações permitidas e informação visível.',
  status: 'active',
};

export const CONTRADICTION_C01: Contradiction = {
  id: 'C-01',
  statements: [
    'Só eu usaria o sistema.',
    'Recepção organiza atendimentos e mecânicos atualizam estados.',
  ],
  whyItMatters: 'Papéis, ações permitidas e informação visível mudam.',
  interpretations: [
    'Somente a proprietária edita; a equipe informa fora do sistema.',
    'Recepção e mecânicos possuem ações limitadas, ainda a definir.',
    'Manter sem resolução e bloquear conclusões dependentes.',
  ],
  status: 'open',
};

export const CORRECTED_ASSUMPTION_TEXT =
  'Proprietária, recepção e mecânicos podem ter papéis distintos; permissões permanecem desconhecidas.';

export const UNDERSTANDING_V1: Understanding = {
  version: 1,
  problem: 'Solicitações, orçamentos, aprovações e estados dispersos em mensagens.',
  users: 'Proprietária, recepção e mecânicos; cliente como ator externo possível.',
  inScope: [
    'Entrada de solicitações',
    'Histórico',
    'Estados do serviço',
    'Orçamento e aprovação',
    'Notificações como necessidade',
  ],
  nonGoals: ['Estoque', 'Pagamento', 'Envio real de mensagens', 'Implementação'],
  assumptions: ['Cliente talvez não precise de conta.'],
  unknowns: [
    'Identidade exigida para aprovação externa',
    'Permissões por papel',
    'Retenção de fotos e mensagens',
  ],
};

export const PLAN_V1: PlanVersion = {
  version: 1,
  objective:
    'Comparar padrões públicos de entrada, acompanhamento e aprovação rastreável em serviços, produzindo requisitos iniciais para revisão.',
  steps: [
    'Confirmar perguntas e exclusões',
    'Consultar fontes públicas declaradas',
    'Comparar alternativas e limitações',
    'Produzir relatório e pequeno conjunto de evidências',
    'Submeter resultado à revisão',
  ],
  expectedArtifacts: ['Relatório inicial de escopo e requisitos', 'Conjunto pequeno de evidências'],
  risks: [
    'Confundir aprovação visível com identidade verificada',
    'Fonte indisponível',
    'Inferência excessiva',
  ],
  limits: ['Sem entrevistas', 'Sem dados reais', 'Sem validação jurídica', 'Sem implementação'],
};

export const PLAN_REVISION_COMMENT =
  'Deixe explícito que estoque e pagamento estão fora e que nenhuma conta de cliente será definida.';

export const AUTHORIZATION_REQUEST: AuthorizationRequest = {
  id: 'AR-01',
  action: 'Executar somente a pesquisa proposta (versão atual do plano)',
  requestingActorLabel: ROLE_LABELS.product_owner,
  executorRole: 'research_executor',
  authorityLabel: ROLE_LABELS.decision_authority,
  scope: 'Fontes públicas declaradas; nenhum dado de cliente.',
  risks: ['Identidade', 'Privacidade', 'Fonte indisponível', 'Inferência excessiva'],
  reversibility: 'Cancelamento preserva histórico e materiais parciais.',
  expiry: 'Válida apenas para esta execução.',
  expectedOutput: 'Relatório e conjunto pequeno de evidências.',
};

export const EXECUTION_ID = 'PESQ-01';

export const REQUESTED_INPUT_RI01: RequestedInput = {
  id: 'RI-01',
  missing: 'Preferência de escopo entre aprovação anônima e autenticada.',
  reason: 'A escolha muda perguntas, riscos e critérios de evidência.',
  impactIfAbsent: 'A comparação não pode concluir sobre identidade.',
  options: ['Comparar ambas', 'Limitar à autenticada', 'Adiar essa questão'],
  status: 'requested',
};

export const FAILURE_REASON =
  'Fonte primária temporariamente indisponível após coleta parcial.';

export const ARTIFACT_A01: Artifact = {
  id: 'REL-01',
  title: 'Relatório inicial de fluxo de atendimento e aprovação',
  version: '1.0',
  findings: [
    { id: 'ACH-01', text: 'Separar solicitação, orçamento e aprovação melhora a rastreabilidade.' },
    { id: 'ACH-02', text: 'Aprovação sem identidade verificada não sustenta, por si, o requisito de autoria.' },
  ],
  limitations: [
    'Conteúdo sintético e fontes simuladas; não prova adequação ao domínio.',
    'Nenhuma observação com usuários reais.',
  ],
  contentSections: [
    {
      heading: 'Escopo e atores',
      body: 'Proprietária, recepção e mecânicos com papéis a definir; cliente externo aprova orçamentos.',
    },
    {
      heading: 'Estados candidatos',
      body: 'Solicitado, avaliando, aguardando aprovação, em serviço e pronto.',
    },
    {
      heading: 'Questões abertas',
      body: 'Identidade da aprovação externa permanece sem resposta e bloqueia a conclusão de autoria.',
    },
  ],
};

export const EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    id: 'EV-01',
    claim: 'Estados distintos ajudam a localizar pendências.',
    supportsFinding: 'ACH-01',
    source: 'Guia público fictício, v1',
    provenance: 'Consulta simulada na data do cenário',
    status: 'current',
    freshness: 'Atual no cenário',
    limitation: 'Não observado com usuários.',
    confidence: 'low',
  },
  {
    id: 'EV-02',
    claim: 'A aprovação precisa registrar objeto e momento.',
    supportsFinding: 'ACH-01',
    source: 'Especificação pública fictícia, v2',
    provenance: 'Consulta simulada na data do cenário',
    status: 'partial',
    freshness: 'Parcial',
    limitation: 'Identidade ainda sem resolução.',
    confidence: 'low',
  },
  {
    id: 'EV-03',
    claim: 'Uma fonte primária era necessária à hipótese de identidade.',
    supportsFinding: 'ACH-02',
    source: 'Fonte fictícia indisponível',
    provenance: 'Tentativa de consulta simulada',
    status: 'unavailable',
    freshness: 'Indisponível',
    limitation: 'Conclusão dependente bloqueada.',
    confidence: 'none',
  },
];

/* ---------- Deterministic scenario steps (long-running simulation) ----------
 * Advanced only by explicit interaction (ADVANCE_SCENARIO). No timers,
 * no percentages, no randomness, no real AI, no network. */

export type ScenarioStep =
  | { kind: 'activity'; text: string; note?: string }
  | { kind: 'input_request' }
  | { kind: 'failure' }
  | { kind: 'completion' };

export const SCENARIO_STEPS: ScenarioStep[] = [
  { kind: 'activity', text: 'Preparando consulta às fontes públicas declaradas' },
  { kind: 'activity', text: 'Comparando fluxos públicos de atendimento', note: 'Nota provisória 1 registrada' },
  { kind: 'input_request' },
  { kind: 'activity', text: 'Comparando aprovação anônima e autenticada', note: 'Nota provisória 2 registrada' },
  { kind: 'failure' },
  { kind: 'activity', text: 'Repetindo consulta à fonte primária' },
  { kind: 'completion' },
];

export const TICKS_PER_STEP = 6; // synthetic minutes per advance; deterministic

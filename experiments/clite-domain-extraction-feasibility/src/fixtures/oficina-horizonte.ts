/**
 * Oficina Horizonte fixture, ported to the ScenarioFixture contract.
 * Content is identical in substance to the Stage 3 fixture (derived from
 * evidence E29 of the research program, F-01 corrected). Fictitious; no
 * personal data. The Stage 3
 * original remains untouched in experiments/clite-stage3-vertical-slice/.
 */
import type { ScenarioFixture } from '../fixture-contract.ts';

/** Terms that must never appear in renderable strings (F-01 guard). */
export const FORBIDDEN_INTERFACE_TERMS = [
  'CEA', 'Codex', 'Agent Blueprint', 'ARP', 'IHR', 'Ontologia', 'research_executor',
];

export const OFICINA_HORIZONTE: ScenarioFixture = {
  version: 'clite-fixture-oficina-1.0',
  projectId: 'PRJ-01',
  projectName: 'Oficina Horizonte — pesquisa de atendimento',
  roleLabels: {
    product_owner: 'Marina (proprietária fictícia)',
    decision_authority: 'Quem decide (autoridade fictícia)',
    research_executor: 'Responsável pela pesquisa',
    system: 'Sistema',
  },
  initialPendingAction: 'Enviar a ideia inicial.',
  questions: [
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
  ],
  initialAssumptions: [
    {
      id: 'A-01',
      text: 'Haverá um único usuário do sistema.',
      origin: 'Resposta inicial da primeira pergunta',
      confidence: 'baixa',
      impact: 'Define papéis, ações permitidas e informação visível.',
      status: 'active',
    },
  ],
  contradictionTriggerQuestionId: 'DQ-02',
  contradiction: {
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
  },
  correctedAssumptionText:
    'Proprietária, recepção e mecânicos podem ter papéis distintos; permissões permanecem desconhecidas.',
  understanding: {
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
  },
  plan: {
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
  },
  planRevisionAddedLimit:
    'Estoque e pagamento explicitamente fora; nenhuma conta de cliente será definida.',
  authorizationRequest: {
    id: 'AR-01',
    action: 'Executar somente a pesquisa proposta (versão atual do plano)',
    requestingActorLabel: 'Marina (proprietária fictícia)',
    executorRole: 'research_executor',
    authorityLabel: 'Quem decide (autoridade fictícia)',
    scope: 'Fontes públicas declaradas; nenhum dado de cliente.',
    risks: ['Identidade', 'Privacidade', 'Fonte indisponível', 'Inferência excessiva'],
    reversibility: 'Cancelamento preserva histórico e materiais parciais.',
    expiry: 'Válida apenas para esta execução.',
    expectedOutput: 'Relatório e conjunto pequeno de evidências.',
  },
  executionId: 'PESQ-01',
  requestedInput: {
    id: 'RI-01',
    missing: 'Preferência de escopo entre aprovação anônima e autenticada.',
    reason: 'A escolha muda perguntas, riscos e critérios de evidência.',
    impactIfAbsent: 'A comparação não pode concluir sobre identidade.',
    options: ['Comparar ambas', 'Limitar à autenticada', 'Adiar essa questão'],
    status: 'requested',
  },
  failureReason: 'Fonte primária temporariamente indisponível após coleta parcial.',
  failureEvidence: [
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
  ],
  completionArtifact: {
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
  },
  completionEvidence: [
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
  ],
  scenarioSteps: [
    { kind: 'activity', text: 'Preparando consulta às fontes públicas declaradas' },
    { kind: 'activity', text: 'Comparando fluxos públicos de atendimento', note: 'Nota provisória 1 registrada' },
    { kind: 'input_request' },
    { kind: 'activity', text: 'Comparando aprovação anônima e autenticada', note: 'Nota provisória 2 registrada' },
    { kind: 'failure' },
    { kind: 'activity', text: 'Repetindo consulta à fonte primária' },
    { kind: 'completion' },
  ],
  ticksPerStep: 6,
  scopeRevisionClaim: 'Conclusão sobre identidade da aprovação removida deste ciclo.',
};

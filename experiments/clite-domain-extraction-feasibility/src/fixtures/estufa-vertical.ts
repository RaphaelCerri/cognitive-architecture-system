/**
 * Second minimal synthetic fixture — proves the domain does not depend
 * semantically on the Oficina Horizonte scenario. Deliberately small; same
 * journey shape (no new flow, no new product), different subject matter.
 * Fictitious; no personal data.
 */
import type { ScenarioFixture } from '../fixture-contract.ts';

export const ESTUFA_VERTICAL: ScenarioFixture = {
  version: 'clite-fixture-estufa-1.0',
  projectId: 'PRJ-02',
  projectName: 'Estufa Vertical — pesquisa de irrigação',
  roleLabels: {
    product_owner: 'Tomás (produtor fictício)',
    decision_authority: 'Quem decide (autoridade fictícia)',
    research_executor: 'Responsável pela pesquisa',
    system: 'Sistema',
  },
  initialPendingAction: 'Enviar a ideia inicial.',
  questions: [
    {
      id: 'EQ-01',
      text: 'Quantos módulos de cultivo existem hoje?',
      reason: 'A resposta delimita a escala da comparação.',
      status: 'asked',
    },
    {
      id: 'EQ-02',
      text: 'Quem ajusta a irrigação quando o clima muda?',
      reason: 'A resposta define atores e frequência de intervenção.',
      status: 'asked',
    },
  ],
  initialAssumptions: [
    {
      id: 'B-01',
      text: 'O ajuste de irrigação é sempre manual.',
      origin: 'Descrição inicial da ideia',
      confidence: 'baixa',
      impact: 'Muda o tipo de solução a pesquisar.',
      status: 'active',
    },
  ],
  contradictionTriggerQuestionId: 'EQ-02',
  contradiction: {
    id: 'D-01',
    statements: [
      'Só eu mexo na irrigação.',
      'O temporizador antigo muda sozinho o horário de rega.',
    ],
    whyItMatters: 'Define se a pesquisa cobre ajuste manual, automático ou ambos.',
    interpretations: [
      'O temporizador será desativado; tudo passa a ser manual.',
      'Manual e automático coexistem e ambos entram na pesquisa.',
    ],
    status: 'open',
  },
  correctedAssumptionText:
    'O ajuste combina intervenção manual e um temporizador automático antigo.',
  understanding: {
    version: 1,
    problem: 'Regas irregulares entre módulos com registro disperso em cadernos.',
    users: 'Produtor responsável; ajudante ocasional.',
    inScope: ['Registro de regas', 'Comparação de regimes de irrigação'],
    nonGoals: ['Compra de sensores', 'Automação real', 'Implementação'],
    assumptions: ['O caderno atual pode ser abandonado.'],
    unknowns: ['Tolerância das mudas a atraso de rega'],
  },
  plan: {
    version: 1,
    objective: 'Comparar regimes públicos de irrigação para cultivo vertical em pequena escala.',
    steps: [
      'Confirmar módulos e exclusões',
      'Consultar fontes públicas declaradas',
      'Produzir comparativo e evidências',
    ],
    expectedArtifacts: ['Comparativo inicial de regimes de irrigação'],
    risks: ['Fonte indisponível', 'Generalizar clima de outra região'],
    limits: ['Sem visita técnica', 'Sem dados reais de colheita'],
  },
  planRevisionAddedLimit: 'Nenhuma recomendação de equipamento será feita.',
  authorizationRequest: {
    id: 'AR-02',
    action: 'Executar somente a pesquisa proposta (versão atual do plano)',
    requestingActorLabel: 'Tomás (produtor fictício)',
    executorRole: 'research_executor',
    authorityLabel: 'Quem decide (autoridade fictícia)',
    scope: 'Fontes públicas declaradas; nenhum dado de produção real.',
    risks: ['Fonte indisponível', 'Inferência excessiva'],
    reversibility: 'Cancelamento preserva histórico e materiais parciais.',
    expiry: 'Válida apenas para esta execução.',
    expectedOutput: 'Comparativo e conjunto pequeno de evidências.',
  },
  executionId: 'PESQ-02',
  requestedInput: {
    id: 'RI-02',
    missing: 'Se o comparativo deve incluir o regime do temporizador antigo.',
    reason: 'Incluí-lo muda as fontes e o critério de comparação.',
    impactIfAbsent: 'O comparativo não pode concluir sobre o regime atual.',
    options: ['Incluir o temporizador', 'Somente regimes manuais'],
    status: 'requested',
  },
  failureReason: 'Tabela pública de referência fora do ar após coleta parcial.',
  failureEvidence: [
    {
      id: 'EX-02',
      claim: 'A tabela de referência sustentaria a comparação de intervalos.',
      supportsFinding: 'CMP-01',
      source: 'Tabela pública fictícia indisponível',
      provenance: 'Tentativa de consulta simulada',
      status: 'unavailable',
      freshness: 'Indisponível',
      limitation: 'Conclusão dependente bloqueada.',
      confidence: 'none',
    },
  ],
  completionArtifact: {
    id: 'CMP-A01',
    title: 'Comparativo inicial de regimes de irrigação',
    version: '1.0',
    findings: [
      { id: 'CMP-01', text: 'Registrar horário e volume por módulo permite comparar regimes.' },
    ],
    limitations: ['Conteúdo sintético; nenhuma medição real de campo.'],
    contentSections: [
      {
        heading: 'Regimes comparados',
        body: 'Rega manual por turno e temporizador de horário fixo, ambos em pequena escala.',
      },
    ],
  },
  completionEvidence: [
    {
      id: 'EX-01',
      claim: 'Registro por módulo reduz regas duplicadas.',
      supportsFinding: 'CMP-01',
      source: 'Guia público fictício de cultivo, v1',
      provenance: 'Consulta simulada na data do cenário',
      status: 'current',
      freshness: 'Atual no cenário',
      limitation: 'Não observado em campo.',
      confidence: 'low',
    },
  ],
  scenarioSteps: [
    { kind: 'activity', text: 'Levantando fontes públicas de irrigação' },
    { kind: 'input_request' },
    { kind: 'activity', text: 'Comparando regimes selecionados', note: 'Nota provisória registrada' },
    { kind: 'failure' },
    { kind: 'activity', text: 'Repetindo consulta à tabela de referência' },
    { kind: 'completion' },
  ],
  ticksPerStep: 4,
  scopeRevisionClaim: 'Conclusão sobre o regime do temporizador removida deste ciclo.',
};

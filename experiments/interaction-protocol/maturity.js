'use strict';

const MATURITY_LEVELS = Object.freeze([
  {
    id: 'idea_seed',
    label: 'Só tenho a ideia',
    short_label: 'Semente',
    description: 'Existe uma intenção, mas problema, público, formato ou caminho ainda estão abertos.',
    route: 'discovery',
    next_question: 'Qual problema ou desejo fez essa ideia aparecer agora?',
  },
  {
    id: 'partly_structured',
    label: 'Já organizei uma parte',
    short_label: 'Estruturada',
    description: 'A ideia já tem decisões, referências ou um esboço, mas ainda possui lacunas importantes.',
    route: 'structure_and_close_gaps',
    next_question: 'O que já está decidido e qual parte ainda está mais nebulosa?',
  },
  {
    id: 'tangible',
    label: 'Já tenho algo concreto',
    short_label: 'Concreta',
    description: 'Já existe pasta, código, site, protótipo, documento detalhado ou explicação pronta para refinamento.',
    route: 'inspect_refine_and_generate_insights',
    next_question: 'O que já existe hoje e qual parte você quer refinar primeiro?',
  },
  {
    id: 'operational',
    label: 'Já está em uso',
    short_label: 'Em operação',
    description: 'A solução já roda ou é usada e possui comportamento, feedback, dados, resultados ou problemas reais.',
    route: 'audit_optimize_and_evolve',
    next_question: 'Qual resultado ou problema real mostra que chegou a hora de evoluir isso?',
  },
]);

function maturityQuestion() {
  return {
    prompt: 'Em que ponto essa iniciativa está hoje?',
    options: MATURITY_LEVELS.map(({ id, label, description }) => ({ id, label, description })),
  };
}

function routeByMaturity(levelId) {
  const level = MATURITY_LEVELS.find((candidate) => candidate.id === levelId);
  if (!level) throw new Error(`Unknown maturity level: ${levelId}`);
  return level;
}

module.exports = { MATURITY_LEVELS, maturityQuestion, routeByMaturity };

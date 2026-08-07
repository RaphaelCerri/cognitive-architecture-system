'use strict';

/**
 * Demonstração executável do Protocolo de Interação v0.2.
 * A primeira pergunta após a intenção calibra a maturidade e muda a rota.
 * O roteiro usa o nível tangible para provar que definições já resolvidas são puladas.
 */

const { maturityQuestion, routeByMaturity } = require('./maturity');

const TOTAL_ETAPAS = 6;
const session = {
  fase_atual: null,
  intencao: null,
  maturity_level: null,
  route: null,
  respostas_coletadas: {},
  threads_abertas: [],
  insights_gerados: [],
  lacunas_detectadas: [],
};

function fase(n, id, titulo) {
  session.fase_atual = id;
  console.log(`\n[Etapa ${n} de ${TOTAL_ETAPAS}] ${titulo}`);
}

function sistema(texto) {
  console.log(`Sistema: ${texto}`);
}

function usuario(texto) {
  console.log(`Usuário: ${texto}`);
}

fase(1, 'enquadrar', 'Entender a intenção');
sistema('O que você quer criar ou melhorar?');
usuario('Quero melhorar um organizador pessoal de projetos que comecei a programar.');
session.intencao = 'melhorar um organizador pessoal de projetos';

fase(2, 'calibrar_maturidade', 'Calibrar sem repetir definições');
const calibration = maturityQuestion();
sistema(calibration.prompt);
for (const [index, option] of calibration.options.entries()) {
  sistema(`  ${index + 1}. ${option.label}: ${option.description}`);
}
usuario('Já tenho algo concreto: uma pasta com um CLI simples e um README.');

const selected = routeByMaturity('tangible');
session.maturity_level = selected.id;
session.route = selected.route;
session.respostas_coletadas.evidencia_maturidade = 'pasta com CLI simples e README';
sistema(`Ótimo, então não vou te pedir para redefinir a ideia. Rota: inspecionar, refinar e gerar insights.`);

fase(3, 'elicitar_adaptativamente', 'Perguntar só o que falta para esta rota');
sistema(selected.next_question);
usuario('O CLI cria projetos, mas quero refinar a retomada de contexto depois de alguns dias sem usar.');
session.respostas_coletadas.alvo_refinamento = 'retomada de contexto após alguns dias';
session.threads_abertas.push('estado salvo hoje', 'sinal de contexto suficiente', 'falha de retomada');

fase(4, 'aprofundar', 'Inspecionar a lacuna mais relevante');
sistema('Quando você volta depois de alguns dias, o que o CLI mostra hoje e o que ainda precisa reconstruir de cabeça?');
usuario('Ele mostra nome e status, mas não a última decisão nem por que a próxima ação foi escolhida.');
session.respostas_coletadas.estado_atual = 'nome e status';
session.respostas_coletadas.contexto_ausente = 'última decisão, rationale e próxima ação';
session.lacunas_detectadas.push('Status sem decisão e rationale não recompõe o contexto de retomada.');

fase(5, 'brainstorm_insight', 'Gerar insight sobre o que já existe');
const insight =
  'O problema não é falta de mais status: é falta de continuidade decisória. ' +
  'Registrar a última decisão, seu motivo e a próxima ação deve gerar mais valor que adicionar novas definições do projeto.';
session.insights_gerados.push(insight);
sistema(insight);

fase(6, 'sintetizar', 'Fechar com uma ação proporcional à maturidade');
session.resumo_final =
  'A iniciativa já é concreta e possui CLI e README. O refinamento prioritário é fazer a retomada preservar decisão, rationale e próxima ação.';
session.proxima_acao =
  'Inspecionar o formato de persistência atual e desenhar um único registro de continuidade com decisão, motivo e próxima ação.';
sistema(session.resumo_final);
sistema(`Próxima ação: ${session.proxima_acao}`);
session.fase_atual = 'concluido';

console.log('\nRegistro estruturado:');
console.log(JSON.stringify({
  schema_version: '0.2.0-experimental',
  kind: 'interaction_session',
  protocol: 'interaction-protocol-v0.2',
  canonicality: 'experimental_prototype_not_canon',
  ...session,
}, null, 2));

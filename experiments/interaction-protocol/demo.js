'use strict';

/**
 * Demonstração executável do Protocolo de Interação (Slice 1).
 * Roteiro fixo, sem input real, sem rede, sem dependências: `node demo.js`.
 * Não é o Motor de Descoberta nem um Braço de domínio — só a espinha de comunicação.
 */

const TOTAL_ETAPAS = 6;

const session = {
  fase_atual: null,
  respostas_coletadas: {},
  threads_abertas: [],
  insights_gerados: [],
  lacunas_detectadas: [],
};

function linha() {
  console.log('-'.repeat(72));
}

function faseHeader(n, nomeFase, tituloHumano) {
  session.fase_atual = nomeFase;
  linha();
  console.log(`[Etapa ${n} de ${TOTAL_ETAPAS}] ${tituloHumano}`);
  linha();
}

function sistema(texto) {
  console.log(`Sistema: ${texto}`);
}

function usuario(texto) {
  console.log(`Usuário: ${texto}`);
}

function recap(texto) {
  console.log(`(recap) ${texto}`);
}

// ---------------------------------------------------------------------------
// Etapa 1 — Enquadrar
// ---------------------------------------------------------------------------
faseHeader(1, 'enquadrar', 'Enquadrar');
sistema(
  'Vou te ajudar a mapear um mini-processo seu em poucas perguntas. ' +
    'São 6 etapas curtas — vamos por partes, nunca uma lista gigante de uma vez.'
);
session.threads_abertas.push(
  'qual processo',
  'frequencia',
  'etapa chata',
  'plano B da etapa chata',
  'contexto pos-processo'
);

// ---------------------------------------------------------------------------
// Etapa 2 — Elicitar (1 a 3 perguntas amplas, nunca a lista toda)
// ---------------------------------------------------------------------------
faseHeader(2, 'elicitar', 'Elicitar (1 a 3 perguntas por turno)');
sistema('Três perguntas pra começar:');
sistema('  1. Qual processo você quer mapear?');
sistema('  2. Quantas vezes por semana você faz isso?');
sistema('  3. Existe alguma etapa que você considera chata ou repetitiva?');

usuario('Fazer café de manhã antes de começar a trabalhar.');
usuario('Todo dia útil, uns 5x por semana.');
usuario('Sim — moer o grão manualmente é meio chato.');

session.respostas_coletadas.processo = 'preparar café de manhã';
session.respostas_coletadas.frequencia = '5x por semana (dias úteis)';
session.respostas_coletadas.etapa_chata = 'moer o grão manualmente';
session.threads_abertas = session.threads_abertas.filter(
  (t) => !['qual processo', 'frequencia', 'etapa chata'].includes(t)
);

sistema('Legal — já temos o processo e a frequência, e já achamos o ponto de atrito.');

// ---------------------------------------------------------------------------
// Etapa 3 — Ramificar (a resposta anterior escolhe o próximo conjunto de
// perguntas: é uma árvore, não uma lista fixa. Se a resposta da etapa 2 tivesse
// sido "coar é chato" em vez de "moer é chato", este bloco perguntaria sobre
// coador/filtro — não sobre moedor.)
// ---------------------------------------------------------------------------
faseHeader(3, 'ramificar', 'Ramificar (a resposta anterior escolhe a próxima pergunta)');
recap('Etapa chata identificada = moer o grão manualmente. Ramificando para esse tópico específico.');
sistema('Como moer na mão foi o ponto chato, vou perguntar direto sobre isso:');
sistema('  1. Você já pensou em trocar o moedor manual por um elétrico?');
sistema('  2. Essa etapa chata acontece todo dia, ou só às vezes?');

usuario('Já pensei, mas nunca cheguei a pesquisar preço.');
usuario('Todo dia, porque não guardo café moído de véspera.');

session.respostas_coletadas.cogitou_automatizar = 'sim, mas nunca pesquisou preço';
session.respostas_coletadas.frequencia_etapa_chata = 'diária (não guarda café moído de véspera)';

sistema('Entendido — é diário e nunca foi pesquisado.');

// ---------------------------------------------------------------------------
// Etapa 4 — Aprofundar (sondar ativamente algo que NÃO foi perguntado antes)
// ---------------------------------------------------------------------------
faseHeader(4, 'aprofundar', 'Aprofundar (sondar o que ainda não foi dito)');
recap('Até aqui: processo, frequência, etapa chata e se já cogitou resolver. Ainda não perguntamos sobre falha.');
sistema(
  'Você descreveu moer, coar e servir — mas não disse o que acontece se o moedor falha ' +
    'ou fica sem grão. Existe um plano B pra esse dia?'
);

usuario(
  'Não, se isso acontece eu simplesmente não tomo café ou vou comprar pronto — o que atrasa uns 20 minutos.'
);

session.respostas_coletadas.plano_b_etapa_chata =
  'inexistente — sem café ou compra externa (~20min de atraso)';
session.threads_abertas = session.threads_abertas.filter((t) => t !== 'plano B da etapa chata');
session.lacunas_detectadas.push(
  'Não existe plano de contingência para falha do moedor/falta de grão — ponto único de falha do processo diário.'
);

sistema('Essa é uma lacuna real, que só apareceu porque perguntamos algo fora do óbvio. Guardando isso.');

// ---------------------------------------------------------------------------
// Etapa 5 — Brainstorm/Insight (devolver padrões, não só coletar)
// ---------------------------------------------------------------------------
faseHeader(5, 'brainstorm_insight', 'Brainstorm / Insight (devolver padrões)');
recap('Juntando os pontos: etapa chata + diária + sem plano B + já cogitou resolver, mas nunca pesquisou.');

const insight1 =
  'A etapa mais chata do processo (moer na mão) é diária e é também a única sem plano B — ' +
  'ela concentra o maior desgaste e o maior risco do processo ao mesmo tempo.';
const insight2 =
  'Você já cogitou resolver isso (moedor elétrico) mas nunca pesquisou preço — parece mais ' +
  'fricção de decisão do que falta de prioridade real.';

session.insights_gerados.push(insight1, insight2);
sistema(`Insight 1: ${insight1}`);
sistema(`Insight 2: ${insight2}`);

// ---------------------------------------------------------------------------
// Etapa 6 — Sintetizar (resumo digerível + UMA próxima ação)
// ---------------------------------------------------------------------------
faseHeader(6, 'sintetizar', 'Sintetizar (resumo + uma próxima ação)');

const resumoFinal =
  'Você prepara café 5x por semana; a etapa de moer o grão na mão é a mais chata, acontece ' +
  'todo dia, e não tem plano B — se falha, você fica sem café ou perde ~20min comprando fora. ' +
  'Você já pensou em automatizar mas nunca pesquisou preço.';
const proximaAcao =
  'Pesquisar hoje o preço de um moedor elétrico simples — resolve a etapa chata e elimina ' +
  'o ponto único de falha do processo.';

sistema(resumoFinal);
sistema(`Próxima ação (uma só): ${proximaAcao}`);

session.fase_atual = 'concluido';
session.resumo_final = resumoFinal;
session.proxima_acao = proximaAcao;

// Nota de honestidade: 'contexto pos-processo' nunca foi perguntado nesta sessão
// curta — fica aberto de propósito. Progresso desconhecido é dito como
// desconhecido, não escondido nem forçado a "completo".

// ---------------------------------------------------------------------------
// Contrato de saída — registro estruturado da sessão
// ---------------------------------------------------------------------------
linha();
console.log(
  'Registro estruturado da sessão (contrato de saída — reaproveita a taxonomia de'
);
console.log('campos YAML/frontmatter já usada no repositório, sem promovê-la a canon):');
linha();

const registro = {
  schema_version: '0.1.0-experimental',
  kind: 'interaction_session',
  protocol: 'interaction-protocol-v0',
  canonicality: 'experimental_prototype_not_canon',
  topico: session.respostas_coletadas.processo,
  fase_atual: session.fase_atual,
  respostas_coletadas: session.respostas_coletadas,
  threads_abertas: session.threads_abertas,
  insights_gerados: session.insights_gerados,
  lacunas_detectadas: session.lacunas_detectadas,
  resumo_final: session.resumo_final,
  proxima_acao: session.proxima_acao,
};

console.log(JSON.stringify(registro, null, 2));

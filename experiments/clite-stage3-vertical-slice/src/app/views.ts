/**
 * Six views covering SF-01–SF-08. States are substates within views, not
 * separate pages. All content is inserted with textContent (never innerHTML).
 * Visible controls represent intent; guards give them consequence — this is
 * not security enforcement.
 */
import type { AppState, ViewId } from '../domain/types.ts';
import type { Command } from '../domain/commands.ts';
import { deriveMemory } from '../domain/memory.ts';
import * as FX from '../domain/fixture.ts';

export interface ViewContext {
  state: AppState;
  dispatch(cmd: Command): void;
  navigate(view: ViewId): void;
  resetApp(): void;
}

export const VIEW_TITLES: Record<ViewId, string> = {
  entry: 'Início e ideia',
  discovery: 'Descoberta e entendimento',
  plan: 'Plano e aprovação',
  execution: 'Pesquisa e recuperação',
  review: 'Resultado, fontes e decisão',
  memory: 'Histórico do projeto e retorno',
};

/* ---------- DOM helpers (textContent only) ---------- */

type Child = Node | string;

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: Record<string, string> = {},
  ...children: Child[]
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
  for (const c of children) node.append(c);
  return node;
}

function button(label: string, onClick: () => void, attrs: Record<string, string> = {}): HTMLButtonElement {
  const b = el('button', { type: 'button', ...attrs }, label);
  b.addEventListener('click', onClick);
  return b;
}

function disabledAction(label: string, why: string): HTMLElement {
  const wrap = el('span');
  const b = el('button', { type: 'button', disabled: 'true', 'aria-describedby': `why-${label.length}` }, label);
  wrap.append(b, el('span', { class: 'muted', id: `why-${label.length}` }, ` Indisponível: ${why}`));
  return wrap;
}

function fields(pairs: [string, string][]): HTMLElement {
  const dl = el('dl', { class: 'fields' });
  for (const [dt, dd] of pairs) dl.append(el('dt', {}, dt), el('dd', {}, dd));
  return dl;
}

function stateTag(text: string): HTMLElement {
  return el('span', { class: 'state-tag' }, text);
}

function list(items: string[]): HTMLElement {
  const ul = el('ul');
  items.forEach((i) => ul.append(el('li', {}, i)));
  return ul;
}

/* ---------- View: Entry and Idea (SF-01) ---------- */

function renderEntry(ctx: ViewContext): HTMLElement {
  const { state, dispatch } = ctx;
  const root = el('div');
  root.append(el('h1', {}, VIEW_TITLES.entry));

  if (state.project.state === 'draft') {
    root.append(el('p', {},
      'Transforme uma ideia incompleta em um projeto compreensível e governado. ',
      'Descreva o que você quer melhorar; o sistema fará perguntas antes de qualquer pesquisa.'));
    const form = el('form');
    const label = el('label', { for: 'idea-input' }, 'Sua ideia');
    const area = el('textarea', { id: 'idea-input', rows: '3', 'aria-describedby': 'idea-help' });
    area.value = FX.INITIAL_IDEA;
    const help = el('p', { class: 'muted', id: 'idea-help' },
      'Uma ideia incompleta é suficiente para começar; detalhes desconhecidos não serão inventados.');
    const submit = el('button', { type: 'submit' }, 'Enviar ideia e começar a descoberta');
    form.append(label, area, help, submit);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      dispatch({ kind: 'SubmitIdea', actor: 'product_owner', text: area.value });
      ctx.navigate('discovery');
    });
    root.append(el('section', {}, form));
  } else {
    root.append(
      el('p', {}, 'A ideia já foi enviada e o projeto está em andamento.'),
      el('section', {},
        el('h2', {}, 'Ideia registrada'),
        el('blockquote', {}, state.idea?.text ?? ''),
        button('Ver histórico do projeto', () => ctx.navigate('memory')),
      ),
    );
  }
  return root;
}

/* ---------- View: Discovery and Understanding (SF-02/SF-03) ---------- */

function renderDiscovery(ctx: ViewContext): HTMLElement {
  const { state, dispatch } = ctx;
  const d = state.discovery;
  const root = el('div');
  root.append(el('h1', {}, VIEW_TITLES.discovery), el('p', {}, 'Modo atual: ', stateTag(translateDiscovery(d.state))));

  if (state.project.state === 'draft') {
    root.append(el('p', {}, 'Envie a ideia inicial para começar a descoberta.'),
      button('Ir para o início', () => ctx.navigate('entry')));
    return root;
  }

  // Contradiction substate (F-05: same view, explicit mode)
  if (d.state === 'resolving_conflict' && d.contradiction?.status === 'open') {
    const c = d.contradiction;
    const sec = el('section', { 'aria-labelledby': 'conflict-h' });
    sec.append(
      el('h2', { id: 'conflict-h' }, 'Precisamos resolver uma contradição'),
      el('p', {}, `Antes: “${c.statements[0]}” · Agora: “${c.statements[1]}”`),
      el('p', {}, `Por que importa: ${c.whyItMatters}`),
      el('h3', {}, 'Interpretações possíveis'),
    );
    const ol = el('ol');
    c.interpretations.forEach((text, i) => {
      const li = el('li', {}, text + ' ');
      li.append(button(`Escolher interpretação ${i + 1}`, () =>
        dispatch({ kind: 'ResolveContradiction', actor: 'product_owner', chosenInterpretation: i })));
      ol.append(li);
    });
    sec.append(ol);
    root.append(sec);
  }

  // Questions
  const qSec = el('section', { 'aria-labelledby': 'questions-h' });
  qSec.append(el('h2', { id: 'questions-h' }, 'Perguntas de descoberta'));
  qSec.append(el('p', { class: 'muted' },
    'O conjunto é adaptativo; não sabemos ainda quantas perguntas serão necessárias. “Não sei” é uma resposta válida.'));
  for (const q of d.questions) {
    const art = el('article');
    art.append(el('h3', {}, `${q.text} `, stateTag(translateQuestion(q.status))));
    art.append(el('p', { class: 'muted' }, `Por que perguntamos: ${q.reason}`));
    if (q.status === 'asked' && d.state !== 'resolving_conflict') {
      const suggested = FX.SCENARIO_ANSWERS[q.id] ?? '';
      art.append(
        button(`Responder: “${suggested}”`, () =>
          dispatch({ kind: 'AnswerQuestion', actor: 'product_owner', questionId: q.id, value: suggested, isUnknown: false })),
        button('Marcar “não sei” e manter em aberto', () =>
          dispatch({ kind: 'AnswerQuestion', actor: 'product_owner', questionId: q.id, value: '', isUnknown: true })),
      );
    } else {
      const a = d.answers.find((x) => x.questionId === q.id);
      if (a) art.append(el('p', {}, a.isUnknown ? 'Registrado como “não sei”.' : `Resposta: ${a.value}`));
    }
    qSec.append(art);
  }
  root.append(qSec);

  // Assumptions (inspection substate)
  const aSec = el('section', { 'aria-labelledby': 'assumptions-h' });
  aSec.append(el('h2', { id: 'assumptions-h' }, 'Suposições inspecionáveis'));
  for (const a of d.assumptions) {
    const art = el('article');
    if (a.status === 'active') {
      art.append(
        el('h3', {}, `${a.text} `, stateTag('ativa')),
        fields([
          ['Origem', a.origin],
          ['Confiança', a.confidence],
          ['Impacto', a.impact],
        ]),
        button('Inspecionar esta suposição', () =>
          dispatch({ kind: 'InspectAssumption', actor: 'product_owner', assumptionId: a.id })),
        button('Corrigir a suposição', () =>
          dispatch({ kind: 'CorrectAssumption', actor: 'product_owner', assumptionId: a.id })),
      );
    } else {
      art.append(
        el('h3', {}, 'Suposição corrigida ', stateTag('corrigida')),
        fields([
          ['Antes', a.text],
          ['Agora', a.correctedText ?? ''],
          ['Impacto registrado', 'O plano deverá pesquisar responsabilidades e não poderá presumir autorização.'],
        ]),
      );
    }
    aSec.append(art);
  }
  root.append(aSec);

  // Understanding
  const uSec = el('section', { 'aria-labelledby': 'understanding-h' });
  uSec.append(el('h2', { id: 'understanding-h' }, 'Entendimento atual'));
  if (state.understanding) {
    const u = state.understanding;
    uSec.append(
      el('p', {}, `Versão ${u.version} — “revisado” não significa completo ou verdadeiro.`),
      el('h3', {}, 'Problema'), el('p', {}, u.problem),
      el('h3', {}, 'Quem usa'), el('p', {}, u.users),
      el('h3', {}, 'No escopo'), list(u.inScope),
      el('h3', {}, 'Fora do escopo'), list(u.nonGoals),
      el('h3', {}, 'Ainda desconhecido'), list(u.unknowns),
      button('Preparar o plano de pesquisa', () => { ctx.navigate('plan'); }),
    );
  } else {
    uSec.append(
      el('p', {}, 'O entendimento ainda não foi confirmado.'),
      button('Confirmar entendimento para preparar o plano', () =>
        dispatch({ kind: 'ConfirmUnderstanding', actor: 'product_owner' })),
    );
  }
  root.append(uSec);
  return root;
}

/* ---------- View: Plan and Authorization (SF-04/SF-05) ---------- */

function renderPlan(ctx: ViewContext): HTMLElement {
  const { state, dispatch } = ctx;
  const root = el('div');
  root.append(el('h1', {}, VIEW_TITLES.plan));

  if (!state.understanding) {
    root.append(el('p', {}, 'Confirme o entendimento antes de preparar o plano.'),
      button('Ir para a descoberta', () => ctx.navigate('discovery')));
    return root;
  }

  const planSec = el('section', { 'aria-labelledby': 'plan-h' });
  planSec.append(el('h2', { id: 'plan-h' }, 'Plano de pesquisa ', stateTag(translatePlan(state.plan.state))));

  if (state.plan.state === 'none') {
    planSec.append(button('Propor plano de pesquisa', () =>
      dispatch({ kind: 'ProposePlan', actor: 'product_owner' })));
  } else {
    const current = state.plan.versions[state.plan.versions.length - 1]!;
    planSec.append(
      el('p', {}, `Versão ${current.version} de ${state.plan.versions.length} (versões anteriores permanecem no histórico).`),
      el('h3', {}, 'Objetivo'), el('p', {}, current.objective),
      el('h3', {}, 'Etapas'), list(current.steps),
      el('h3', {}, 'Riscos'), list(current.risks),
      el('h3', {}, 'Limites'), list(current.limits),
    );
    if (state.plan.state === 'proposed') {
      planSec.append(
        el('p', { class: 'muted' }, 'Um plano proposto não executa nada.'),
        button(`Pedir revisão: “${FX.PLAN_REVISION_COMMENT}”`, () =>
          dispatch({ kind: 'RequestPlanRevision', actor: 'product_owner', comment: FX.PLAN_REVISION_COMMENT })),
        button('Enviar para aprovação', () => dispatch({ kind: 'SubmitPlan', actor: 'product_owner' })),
      );
    }
    if (state.plan.state === 'revision_requested' && state.authorization.state !== 'denied') {
      planSec.append(
        el('p', {}, `Comentário registrado: ${state.plan.revisionComments.at(-1) ?? ''}`),
        button('Produzir versão revisada', () => dispatch({ kind: 'RevisePlan', actor: 'product_owner' })),
      );
    }
    if (state.authorization.state === 'denied') {
      planSec.append(
        el('p', {}, 'A aprovação foi negada; revise o plano para uma nova proposta.'),
        button('Produzir versão revisada', () => dispatch({ kind: 'RevisePlan', actor: 'product_owner' })),
      );
    }
  }
  root.append(planSec);

  // Authorization
  if (state.authorization.request) {
    const req = state.authorization.request;
    const sec = el('section', { 'aria-labelledby': 'auth-h' });
    sec.append(el('h2', { id: 'auth-h' }, 'Aprovação ', stateTag(translateAuthorization(state.authorization.state))));
    sec.append(el('div', { class: 'table-wrap' }, (() => {
      const t = el('table');
      t.append(el('caption', {}, 'O que está sendo autorizado'));
      const rows: [string, string][] = [
        ['Ação', req.action],
        ['Solicitante', req.requestingActorLabel],
        ['Executor', FX.ROLE_LABELS[req.executorRole]],
        ['Quem decide', req.authorityLabel],
        ['Escopo', req.scope],
        ['Riscos', req.risks.join('; ')],
        ['Reversibilidade', req.reversibility],
        ['Validade', req.expiry],
        ['Resultado esperado', req.expectedOutput],
      ];
      for (const [k, v] of rows) {
        const tr = el('tr');
        tr.append(el('th', { scope: 'row' }, k), el('td', {}, v));
        t.append(tr);
      }
      return t;
    })()));
    sec.append(el('p', { class: 'boundary' },
      'Esta tela representa intenção e compreensão. Aprovar não inicia a pesquisa; iniciar é um passo separado.'));

    if (state.authorization.state === 'pending') {
      sec.append(
        button(`Aprovar o escopo (como ${FX.ROLE_LABELS.decision_authority})`, () =>
          dispatch({ kind: 'Authorize', actor: 'decision_authority', reason: 'Escopo limitado a fontes públicas.' })),
        button(`Negar (como ${FX.ROLE_LABELS.decision_authority})`, () =>
          dispatch({ kind: 'Deny', actor: 'decision_authority', reason: 'O escopo de identidade ainda está amplo.' })),
      );
    }
    if (state.authorization.state === 'approved' && state.execution.state === 'none') {
      sec.append(
        el('p', {}, 'Execução autorizada — ainda não iniciada.'),
        button('Enfileirar a pesquisa', () => {
          dispatch({ kind: 'QueueExecution', actor: 'product_owner' });
          ctx.navigate('execution');
        }),
      );
    }
    root.append(sec);
  }
  return root;
}

/* ---------- View: Execution and Recovery (SF-06) ---------- */

function renderExecution(ctx: ViewContext): HTMLElement {
  const { state, dispatch } = ctx;
  const x = state.execution;
  const root = el('div');
  root.append(el('h1', {}, VIEW_TITLES.execution));

  if (x.state === 'none') {
    root.append(el('p', {}, 'Nenhuma pesquisa foi enfileirada. A pesquisa exige plano aprovado.'),
      button('Ir para plano e aprovação', () => ctx.navigate('plan')));
    return root;
  }

  const sec = el('section', { 'aria-labelledby': 'exec-h' });
  sec.append(
    el('h2', { id: 'exec-h' }, `Pesquisa ${x.id ?? ''} `, stateTag(translateExecution(x.state))),
    fields([
      ['Atividade atual', x.activities.at(-1)?.text ?? 'Aguardando início'],
      ['Tempo decorrido (simulado)', `t+${state.clockTick} min`],
      ['Progresso', 'desconhecido — o total verificável não existe'],
      ['Última transição', state.log.at(-1)?.eventType ?? '—'],
      ['Pendência', state.pendingAction],
    ]),
  );

  if (x.state === 'queued') {
    sec.append(
      button('Iniciar a pesquisa (representação)', () => dispatch({ kind: 'StartExecution', actor: 'system' })),
      button('Cancelar antes do início', () =>
        dispatch({ kind: 'CancelExecution', actor: 'product_owner', reason: 'Cancelada antes do início.' })),
    );
  }

  if (x.state === 'running') {
    sec.append(
      el('p', { class: 'muted' },
        'Simulação determinística: cada avanço executa o próximo passo roteirizado do cenário. Nada real é consultado.'),
      button('Avançar cenário simulado', () => dispatch({ kind: 'AdvanceScenario', actor: 'system' })),
      button('Pausar', () => dispatch({ kind: 'PauseExecution', actor: 'product_owner' })),
      button('Cancelar com efeitos', () =>
        dispatch({ kind: 'CancelExecution', actor: 'product_owner', reason: 'Cancelamento durante a execução.' })),
    );
  }

  if (x.state === 'paused') {
    sec.append(
      el('p', {}, 'Ponto de retomada, notas e pendências foram preservados.'),
      button('Retomar do ponto preservado', () => dispatch({ kind: 'ResumeExecution', actor: 'product_owner' })),
      button('Revisar escopo (remove a conclusão dependente)', () => dispatch({ kind: 'ReviseScope', actor: 'product_owner' })),
      button('Cancelar', () => dispatch({ kind: 'CancelExecution', actor: 'product_owner', reason: 'Cancelada em pausa.' })),
    );
  }

  if (x.state === 'awaiting_input' && x.requestedInput) {
    const ri = x.requestedInput;
    const riSec = el('section', { 'aria-labelledby': 'ri-h' });
    riSec.append(
      el('h3', { id: 'ri-h' }, 'Aguardando sua decisão'),
      fields([
        ['Falta', ri.missing],
        ['Motivo', ri.reason],
        ['Sem resposta', ri.impactIfAbsent],
        ['Depois', 'A pesquisa retoma do ponto preservado com o escopo registrado.'],
      ]),
    );
    ri.options.forEach((opt) => {
      riSec.append(button(`Responder: ${opt}`, () =>
        dispatch({ kind: 'ProvideInput', actor: 'product_owner', answer: opt })));
    });
    sec.append(riSec);
  }

  if (x.state === 'failed' && x.failure) {
    const f = el('section', { 'aria-labelledby': 'fail-h' });
    f.append(
      el('h3', { id: 'fail-h' }, 'Falha na pesquisa'),
      el('p', {}, `Motivo: ${x.failure.reason}`),
      el('h4' as 'h3', {}, 'Preservado'),
      list(x.failure.preserved),
      el('h4' as 'h3', {}, 'Opções de recuperação'),
      button('Tentar novamente (nada preservado será apagado)', () =>
        dispatch({ kind: 'RequestRetry', actor: 'product_owner' })),
      button('Revisar escopo (remove a conclusão dependente)', () =>
        dispatch({ kind: 'ReviseScope', actor: 'product_owner' })),
      button('Cancelar e preservar histórico', () =>
        dispatch({ kind: 'CancelExecution', actor: 'product_owner', reason: 'Cancelada após falha de fonte.' })),
      el('p', {}),
      disabledAction('Usar fonte alternativa', 'exigiria autorizar uma nova fonte, o que está fora deste ciclo.'),
      el('p', {}),
      disabledAction('Escalar para decisão', 'pede uma decisão de autoridade que este ciclo não simula.'),
    );
    sec.append(f);
  }

  if (x.state === 'cancelled') {
    sec.append(el('p', {}, 'A tentativa foi encerrada. Notas, resultado parcial e a razão permanecem no histórico. Cancelar não apaga o projeto.'),
      button('Ver histórico do projeto', () => ctx.navigate('memory')));
  }

  if (x.state === 'completed') {
    sec.append(
      el('p', {}, 'Pesquisa concluída. O resultado foi produzido, mas ainda não foi aceito — concluir não aceita.'),
      button('Inspecionar o resultado', () => {
        if (state.artifact.state === 'generated') dispatch({ kind: 'StartReview', actor: 'product_owner' });
        ctx.navigate('review');
      }),
    );
  }

  // Activity log
  if (x.activities.length > 0) {
    const act = el('section', { 'aria-labelledby': 'act-h' });
    act.append(el('h3', { id: 'act-h' }, 'Atividades registradas'));
    const ul = el('ul');
    x.activities.forEach((a) => {
      const li = el('li', {}, a.text + (a.note ? ` — ${a.note}` : ''));
      ul.append(li);
    });
    act.append(ul);
    if (x.scopeRevisions.length > 0) {
      act.append(el('h3', {}, 'Revisões de escopo'), list(x.scopeRevisions));
    }
    sec.append(act);
  }

  root.append(sec);
  return root;
}

/* ---------- View: Artifact, Evidence and Review (SF-07) ---------- */

function renderReview(ctx: ViewContext): HTMLElement {
  const { state, dispatch } = ctx;
  const root = el('div');
  root.append(el('h1', {}, VIEW_TITLES.review));

  if (!state.artifact.item) {
    root.append(el('p', {}, 'Ainda não há resultado para revisar. O resultado surge quando a pesquisa é concluída.'),
      button('Ir para a pesquisa', () => ctx.navigate('execution')));
    return root;
  }

  const art = state.artifact.item;
  const sec = el('section', { 'aria-labelledby': 'artifact-h' });
  sec.append(
    el('h2', { id: 'artifact-h' }, `${art.title} — versão ${art.version} `, stateTag(translateArtifact(state.artifact.state))),
  );
  art.contentSections.forEach((cs) => sec.append(el('h3', {}, cs.heading), el('p', {}, cs.body)));
  sec.append(el('h3', {}, 'Achados'), list(art.findings.map((f) => f.text)));
  sec.append(el('h3', {}, 'Limitações'), list(art.limitations));
  root.append(sec);

  // Evidence — separate contract, claim-level
  const evSec = el('section', { 'aria-labelledby': 'ev-h' });
  evSec.append(
    el('h2', { id: 'ev-h' }, 'Fontes e evidências'),
    el('p', { class: 'muted' },
      'O resultado é o relatório; cada evidência sustenta uma afirmação específica e limitada. Fonte indisponível não desaparece: ela bloqueia a afirmação dependente.'),
  );
  const wrap = el('div', { class: 'table-wrap' });
  const t = el('table');
  t.append(el('caption', {}, 'Evidências e o que cada uma sustenta'));
  const head = el('tr');
  ['Evidência', 'Sustenta', 'Situação', 'Confiança', 'Limitação'].forEach((h) => head.append(el('th', { scope: 'col' }, h)));
  t.append(head);
  state.evidence.forEach((e) => {
    const tr = el('tr');
    tr.append(
      el('td', {}, `${e.id} — ${e.source}`),
      el('td', {}, e.claim),
      el('td', {}, translateEvidence(e.status)),
      el('td', {}, e.confidence === 'none' ? 'nenhuma' : e.confidence === 'low' ? 'baixa' : 'média'),
      el('td', {}, e.limitation),
    );
    t.append(tr);
  });
  wrap.append(t);
  evSec.append(wrap);
  root.append(evSec);

  // Decision
  if (state.artifact.state === 'under_review') {
    const dec = el('section', { 'aria-labelledby': 'dec-h' });
    dec.append(
      el('h2', { id: 'dec-h' }, 'Decisão sobre o resultado'),
      el('p', {}, `Quem executa a pesquisa (${FX.ROLE_LABELS.research_executor}) não pode aceitar o próprio resultado. A decisão é de: ${FX.ROLE_LABELS.decision_authority}.`),
      button('Aceitar para este ciclo', () =>
        dispatch({ kind: 'DecideReview', actor: 'decision_authority', outcome: 'accept', reason: 'Aceito somente para este ciclo; limitações registradas.' })),
      button('Pedir revisão do resultado', () =>
        dispatch({
          kind: 'DecideReview', actor: 'decision_authority', outcome: 'revise',
          reason: 'Separar a afirmação sobre autoria da afirmação sobre registro do momento.',
          affectedScope: 'Seção de aprovação externa',
        })),
      button('Rejeitar', () =>
        dispatch({ kind: 'DecideReview', actor: 'decision_authority', outcome: 'reject', reason: 'Evidência insuficiente para a conclusão de identidade.' })),
    );
    root.append(dec);
  } else if (state.review.state === 'decided') {
    const d = state.decisions.filter((k) => k.type.startsWith('review_')).pop();
    if (d) {
      root.append(el('section', {},
        el('h2', {}, 'Decisão registrada'),
        fields([
          ['Decisão', translateArtifact(state.artifact.state)],
          ['Quem decidiu', d.actorLabel],
          ['Razão', d.reason],
          ['Consequência', d.consequence],
        ]),
        button('Ver histórico do projeto', () => ctx.navigate('memory')),
      ));
    }
  } else if (state.artifact.state === 'generated') {
    root.append(button('Iniciar a revisão do resultado', () => dispatch({ kind: 'StartReview', actor: 'product_owner' })));
  }
  return root;
}

/* ---------- View: Project Memory and Return (SF-08) ---------- */

function renderMemory(ctx: ViewContext): HTMLElement {
  const { state, dispatch } = ctx;
  const m = deriveMemory(state);
  const root = el('div');
  root.append(el('h1', {}, VIEW_TITLES.memory));

  if (state.ui.state === 'stale_view') {
    const stale = el('section', { 'aria-labelledby': 'stale-h' });
    stale.append(
      el('h2', { id: 'stale-h' }, 'Você voltou a um projeto salvo'),
      el('p', {}, 'O contexto exibido veio do estado salvo e pode estar desatualizado. Atualize antes de ações sensíveis.'),
      button('Atualizar a visão do projeto', () => dispatch({ kind: 'RefreshView', actor: 'product_owner' })),
    );
    root.append(stale);
  }

  root.append(el('section', {},
    el('h2', {}, 'Resumo'),
    fields([
      ['Projeto', m.projectSummary],
      ['Ideia inicial', m.initialIntent],
      ['Plano', m.plan],
      ['Decisão de aprovação', m.authorizationDecision],
      ['Resultado', m.artifact],
      ['Decisão de revisão', m.reviewDecision],
      ['Pendência atual', m.pendingAction],
    ]),
  ));

  root.append(el('section', {},
    el('h2', {}, 'Entendimento atual'), list(m.currentUnderstanding),
    el('h2', {}, 'Suposições'), list(m.assumptions),
    el('h2', {}, 'Evidências'), list(m.evidence.length ? m.evidence : ['Nenhuma evidência registrada.']),
    el('h2', {}, 'Ainda sem resolução'), list(m.unresolvedItems.length ? m.unresolvedItems : ['Nada registrado.']),
    el('h2', {}, 'Mudanças recentes'), list(m.recentChanges.length ? m.recentChanges : ['Nenhuma mudança registrada.']),
  ));

  // Event history — deterministic local log (observability; not telemetry)
  const hist = el('section', { 'aria-labelledby': 'hist-h' });
  hist.append(el('h2', { id: 'hist-h' }, 'Histórico de eventos'));
  const wrap = el('div', { class: 'table-wrap' });
  const t = el('table');
  t.append(el('caption', {}, 'Eventos registrados nesta simulação'));
  const head = el('tr');
  ['#', 'Evento', 'Tempo', 'Quem', 'Origem', 'Estado resultante'].forEach((h) => head.append(el('th', { scope: 'col' }, h)));
  t.append(head);
  state.log.forEach((l) => {
    const tr = el('tr');
    tr.append(
      el('td', {}, String(l.seq)),
      el('td', {}, l.eventType),
      el('td', {}, `t+${l.atTick}min`),
      el('td', {}, FX.ROLE_LABELS[l.actorRole]),
      el('td', {}, l.commandOrigin),
      el('td', {}, l.resultingState),
    );
    t.append(tr);
  });
  wrap.append(t);
  hist.append(wrap);
  root.append(hist);

  root.append(el('section', {},
    el('h2', {}, 'Reiniciar'),
    el('p', { class: 'muted' },
      'Reiniciar descarta o estado salvo e reconstrói o cenário do zero, de forma determinística.'),
    button('Reiniciar o protótipo do zero', () => ctx.resetApp()),
  ));
  return root;
}

/* ---------- Translations (states are communicated by text) ---------- */

function translateDiscovery(s: AppState['discovery']['state']): string {
  return ({ asking: 'perguntando', inspecting: 'inspecionando suposição', resolving_conflict: 'resolvendo contradição', reviewed: 'revisado' } as const)[s];
}
function translateQuestion(s: 'asked' | 'answered' | 'unknown'): string {
  return ({ asked: 'aguardando resposta', answered: 'respondida', unknown: 'mantida como “não sei”' } as const)[s];
}
function translatePlan(s: AppState['plan']['state']): string {
  return ({ none: 'inexistente', proposed: 'proposto — não autorizado', revision_requested: 'revisão solicitada', submitted: 'aguardando aprovação' } as const)[s];
}
function translateAuthorization(s: AppState['authorization']['state']): string {
  return ({ none: 'não solicitada', pending: 'pendente', approved: 'aprovada', denied: 'negada' } as const)[s];
}
function translateExecution(s: AppState['execution']['state']): string {
  return ({
    none: 'inexistente', queued: 'na fila', running: 'em andamento', awaiting_input: 'aguardando sua decisão',
    paused: 'pausada', failed: 'falhou', retry_requested: 'nova tentativa solicitada',
    cancelled: 'cancelada', completed: 'concluída',
  } as const)[s];
}
function translateArtifact(s: AppState['artifact']['state']): string {
  return ({
    none: 'inexistente', generated: 'produzido — não aceito', under_review: 'em revisão',
    accepted: 'aceito para este ciclo', revision_requested: 'revisão solicitada', rejected: 'rejeitado',
  } as const)[s];
}
function translateEvidence(s: 'current' | 'partial' | 'unavailable' | 'stale'): string {
  return ({ current: 'atual', partial: 'parcial', unavailable: 'indisponível', stale: 'desatualizada' } as const)[s];
}

export function translateProjectState(s: AppState['project']['state']): string {
  return ({
    draft: 'rascunho', discovering: 'em descoberta', contextualized: 'contexto definido',
    planning: 'em planejamento', researching: 'pesquisa ativa', reviewing: 'resultado em revisão',
    resolved: 'ciclo decidido',
  } as const)[s];
}

export const RENDERERS: Record<ViewId, (ctx: ViewContext) => HTMLElement> = {
  entry: renderEntry,
  discovery: renderDiscovery,
  plan: renderPlan,
  execution: renderExecution,
  review: renderReview,
  memory: renderMemory,
};

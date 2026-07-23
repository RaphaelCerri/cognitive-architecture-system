/**
 * Bootstrap: wires domain, persistence and views.
 * Focus moves to the main region after every render so keyboard users land
 * on the updated content. Status changes are announced via the live region.
 */
import type { AppState, ViewId } from '../domain/types.ts';
import type { Command } from '../domain/commands.ts';
import { handleCommand } from '../domain/commands.ts';
import { applyEvent, initialState } from '../domain/machine.ts';
import {
  loadSnapshot, reset, saveSnapshot, type StorageAdapter,
} from './persistence.ts';
import { RENDERERS, translateProjectState, VIEW_TITLES, type ViewContext } from './views.ts';

const storage: StorageAdapter = {
  get: (k) => window.localStorage.getItem(k),
  set: (k, v) => window.localStorage.setItem(k, v),
  remove: (k) => window.localStorage.removeItem(k),
};

let state: AppState;
let startupNotice = '';

const snapshot = loadSnapshot(storage);
if (snapshot.kind === 'restored') {
  // Return journey: restored context is explicitly stale until refreshed.
  state = applyEvent(snapshot.state, { type: 'PROJECT_RESUMED', actor: 'product_owner' }, 'ResumeProject');
  startupNotice = 'Projeto retomado do estado salvo.';
} else {
  state = initialState();
  if (snapshot.kind === 'invalidated') startupNotice = snapshot.reason;
}

const main = document.getElementById('main') as HTMLElement;
const nav = document.getElementById('main-nav') as HTMLElement;
const banner = document.getElementById('context-banner') as HTMLElement;
const statusRegion = document.getElementById('status-region') as HTMLElement;
const errorRegion = document.getElementById('error-region') as HTMLElement;

function announce(message: string): void {
  statusRegion.textContent = message;
}

function showError(message: string): void {
  errorRegion.textContent = message ? `Não foi possível concluir a ação: ${message}` : '';
}

function dispatch(cmd: Command): void {
  const result = handleCommand(state, cmd);
  if (!result.ok) {
    showError(result.reason);
    render();
    return;
  }
  showError('');
  state = result.events.reduce((s, ev) => applyEvent(s, ev, cmd.kind), state);
  saveSnapshot(storage, state);
  announce(state.recentChanges[0] ?? `Ação registrada: ${cmd.kind}.`);
  render();
}

function navigate(view: ViewId): void {
  state = { ...state, ui: { ...state.ui, view } };
  saveSnapshot(storage, state);
  showError('');
  render();
}

function resetApp(): void {
  state = reset(storage);
  showError('');
  announce('Protótipo reiniciado do zero de forma determinística.');
  render();
}

function renderNav(): void {
  const ul = document.createElement('ul');
  (Object.keys(VIEW_TITLES) as ViewId[]).forEach((view) => {
    const li = document.createElement('li');
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = VIEW_TITLES[view];
    if (state.ui.view === view) b.setAttribute('aria-current', 'page');
    b.addEventListener('click', () => navigate(view));
    li.append(b);
    ul.append(li);
  });
  nav.replaceChildren(ul);
}

function renderBanner(): void {
  const name = document.createElement('p');
  const strong = document.createElement('strong');
  strong.textContent = state.project.name;
  name.append(strong);
  const line = document.createElement('p');
  line.textContent = `Estado do projeto: ${translateProjectState(state.project.state)} · Pendência: ${state.pendingAction}`;
  const note = document.createElement('p');
  note.className = 'muted';
  note.textContent = 'Conteúdo fictício. Nenhum dado de cliente ou operação real.';
  banner.replaceChildren(name, line, note);
}

function render(): void {
  renderNav();
  renderBanner();
  const ctx: ViewContext = { state, dispatch, navigate, resetApp };
  main.replaceChildren(RENDERERS[state.ui.view](ctx));
  main.focus();
}

if (startupNotice) announce(startupNotice);
render();

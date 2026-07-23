/**
 * Project Memory — derived view over events and synthetic state.
 * Never a physical repository path listing; never a separate Source of Truth.
 */
import type { AppState } from './types.ts';

export interface ProjectMemoryView {
  projectSummary: string;
  initialIntent: string;
  currentUnderstanding: string[];
  assumptions: string[];
  plan: string;
  authorizationDecision: string;
  executionHistory: string[];
  artifact: string;
  evidence: string[];
  reviewDecision: string;
  unresolvedItems: string[];
  pendingAction: string;
  recentChanges: string[];
}

export function deriveMemory(s: AppState): ProjectMemoryView {
  const lastPlan = s.plan.versions[s.plan.versions.length - 1];
  const decision = s.decisions.filter((d) => d.type.startsWith('review_')).pop();
  const authDecision = s.decisions.find((d) => d.type === 'authorization' || d.type === 'denial');

  return {
    projectSummary: `${s.project.name} — estado: ${translateProject(s.project.state)}`,
    initialIntent: s.idea?.text ?? 'Ainda não enviada.',
    currentUnderstanding: s.understanding
      ? [
          `Problema: ${s.understanding.problem}`,
          `Quem usa: ${s.understanding.users}`,
          `No escopo: ${s.understanding.inScope.join('; ')}`,
          `Fora do escopo: ${s.understanding.nonGoals.join('; ')}`,
        ]
      : ['Entendimento ainda não confirmado.'],
    assumptions: s.discovery.assumptions.map((a) =>
      a.status === 'corrected'
        ? `Corrigida — antes: "${a.text}" · agora: "${a.correctedText}"`
        : `Ativa — ${a.text} (confiança ${a.confidence})`,
    ),
    plan: lastPlan
      ? `Versão ${lastPlan.version} — ${translatePlan(s.plan.state)}`
      : 'Nenhum plano proposto.',
    authorizationDecision: authDecision
      ? `${authDecision.actorLabel}: ${authDecision.reason} (${authDecision.consequence})`
      : 'Nenhuma decisão de aprovação registrada.',
    executionHistory: s.log
      .filter((l) => l.eventType.startsWith('EXECUTION') || l.eventType === 'SCENARIO_ADVANCED'
        || l.eventType === 'RETRY_REQUESTED' || l.eventType === 'INPUT_PROVIDED')
      .map((l) => `t+${l.atTick}min · ${l.resultingState.split(' ').find((p) => p.startsWith('execução:')) ?? l.eventType}`),
    artifact: s.artifact.item
      ? `${s.artifact.item.title} v${s.artifact.item.version} — ${translateArtifact(s.artifact.state)}`
      : 'Nenhum resultado produzido.',
    evidence: s.evidence.map((e) => `${e.id} (${translateEvidence(e.status)}) — sustenta: ${e.claim}`),
    reviewDecision: decision
      ? `${decision.actorLabel} — ${decision.reason} · Consequência: ${decision.consequence}`
      : 'Nenhuma decisão de revisão registrada.',
    unresolvedItems: s.unresolved,
    pendingAction: s.pendingAction,
    recentChanges: s.recentChanges,
  };
}

function translateProject(p: AppState['project']['state']): string {
  const map = {
    draft: 'rascunho', discovering: 'em descoberta', contextualized: 'contexto definido',
    planning: 'em planejamento', researching: 'pesquisa ativa',
    reviewing: 'resultado em revisão', resolved: 'ciclo decidido',
  } as const;
  return map[p];
}
function translatePlan(p: AppState['plan']['state']): string {
  const map = {
    none: 'inexistente', proposed: 'proposto (ainda não autorizado)',
    revision_requested: 'revisão solicitada', submitted: 'aguardando aprovação',
  } as const;
  return map[p];
}
function translateArtifact(a: AppState['artifact']['state']): string {
  const map = {
    none: 'inexistente', generated: 'produzido (não aceito)', under_review: 'em revisão',
    accepted: 'aceito para este ciclo', revision_requested: 'revisão solicitada', rejected: 'rejeitado',
  } as const;
  return map[a];
}
function translateEvidence(e: 'current' | 'partial' | 'unavailable' | 'stale'): string {
  const map = { current: 'atual', partial: 'parcial', unavailable: 'indisponível', stale: 'desatualizada' } as const;
  return map[e];
}

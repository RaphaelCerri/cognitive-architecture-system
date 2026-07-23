/**
 * Persistence — approved Option D (hybrid):
 * canonical synthetic fixture (versioned in the repository) + in-memory
 * runtime state + OPTIONAL local snapshot. The snapshot is disposable,
 * carries version markers and is NEVER a Source of Truth. It is invalidated
 * whenever fixture or contract versions change. Reset removes the snapshot
 * and deterministically rebuilds the initial state from the fixture.
 */
import type { AppState } from '../domain/types.ts';
import { CONTRACT_VERSION } from '../domain/types.ts';
import { FIXTURE_VERSION } from '../domain/fixture.ts';
import { initialState } from '../domain/machine.ts';

export interface StorageAdapter {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
}

export const SNAPSHOT_KEY = 'clite-stage3-slice-snapshot';

interface SnapshotEnvelope {
  fixtureVersion: string;
  contractVersion: string;
  state: AppState;
}

export function serializeSnapshot(state: AppState): string {
  const envelope: SnapshotEnvelope = {
    fixtureVersion: FIXTURE_VERSION,
    contractVersion: CONTRACT_VERSION,
    state,
  };
  return JSON.stringify(envelope);
}

export type SnapshotResult =
  | { kind: 'restored'; state: AppState }
  | { kind: 'absent' }
  | { kind: 'invalidated'; reason: string };

export function loadSnapshot(storage: StorageAdapter): SnapshotResult {
  const raw = storage.get(SNAPSHOT_KEY);
  if (raw === null) return { kind: 'absent' };
  try {
    const env = JSON.parse(raw) as SnapshotEnvelope;
    if (env.fixtureVersion !== FIXTURE_VERSION) {
      storage.remove(SNAPSHOT_KEY);
      return { kind: 'invalidated', reason: 'Versão do cenário mudou; o estado salvo foi descartado.' };
    }
    if (env.contractVersion !== CONTRACT_VERSION) {
      storage.remove(SNAPSHOT_KEY);
      return { kind: 'invalidated', reason: 'Versão dos contratos mudou; o estado salvo foi descartado.' };
    }
    if (!env.state || typeof env.state.seq !== 'number') {
      storage.remove(SNAPSHOT_KEY);
      return { kind: 'invalidated', reason: 'Estado salvo ilegível; descartado.' };
    }
    return { kind: 'restored', state: env.state };
  } catch {
    storage.remove(SNAPSHOT_KEY);
    return { kind: 'invalidated', reason: 'Estado salvo corrompido; descartado.' };
  }
}

export function saveSnapshot(storage: StorageAdapter, state: AppState): void {
  storage.set(SNAPSHOT_KEY, serializeSnapshot(state));
}

/** Deterministic reset: remove snapshot, rebuild from fixture. */
export function reset(storage: StorageAdapter): AppState {
  storage.remove(SNAPSHOT_KEY);
  return initialState();
}

/**
 * Experimental persistence boundary — load/save interface + in-memory adapter.
 * The domain never knows the storage mechanism; no browser storage involved.
 * Snapshots are disposable and NEVER a Source of Truth; they are invalidated
 * whenever fixture or contract versions change. NOT product persistence.
 */
import type { AppState } from './types.ts';
import { CONTRACT_VERSION } from './types.ts';
import type { ScenarioFixture } from './fixture-contract.ts';
import { initialState } from './machine.ts';

export interface StorageAdapter {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
}

/** In-memory adapter — proves the domain operates with no browser storage. */
export function createMemoryStorage(): StorageAdapter {
  const map = new Map<string, string>();
  return {
    get: (k) => map.get(k) ?? null,
    set: (k, v) => void map.set(k, v),
    remove: (k) => void map.delete(k),
  };
}

export const SNAPSHOT_KEY = 'clite-extracted-domain-snapshot';

interface SnapshotEnvelope {
  fixtureVersion: string;
  contractVersion: string;
  state: AppState;
}

export function serializeSnapshot(fx: ScenarioFixture, state: AppState): string {
  const envelope: SnapshotEnvelope = {
    fixtureVersion: fx.version,
    contractVersion: CONTRACT_VERSION,
    state,
  };
  return JSON.stringify(envelope);
}

export type SnapshotResult =
  | { kind: 'restored'; state: AppState }
  | { kind: 'absent' }
  | { kind: 'invalidated'; reason: string };

export function loadSnapshot(fx: ScenarioFixture, storage: StorageAdapter): SnapshotResult {
  const raw = storage.get(SNAPSHOT_KEY);
  if (raw === null) return { kind: 'absent' };
  try {
    const env = JSON.parse(raw) as SnapshotEnvelope;
    if (env.fixtureVersion !== fx.version) {
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

export function saveSnapshot(fx: ScenarioFixture, storage: StorageAdapter, state: AppState): void {
  storage.set(SNAPSHOT_KEY, serializeSnapshot(fx, state));
}

/** Deterministic reset: remove snapshot, rebuild from fixture. */
export function reset(fx: ScenarioFixture, storage: StorageAdapter): AppState {
  storage.remove(SNAPSHOT_KEY);
  return initialState(fx);
}

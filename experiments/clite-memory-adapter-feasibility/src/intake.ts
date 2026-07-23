/**
 * Real Project Intake CLI (G-A03, v0) — turns a real idea into a valid
 * Project Memory + generated fixture WITHOUT hand-editing YAML.
 *
 * Usage:
 *   node src/intake.ts --answers <answers.json> [--out <dir>]
 *
 * answers.json shape: see IntakeAnswers in project-fixture.ts. Minimum:
 *   { "project_title": "…", "initial_intent": "…" }
 *
 * Output (default <repo-root>/projects/<slug>/ — UNTRACKED by design,
 * CSA-34-3: real-project content never enters the institutional Git):
 *   memory.md     — initial Project Memory (validated by the adapter itself
 *                   before being written; generation fails loudly otherwise)
 *   fixture.json  — generated real-project fixture consumed via override
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parseMemoryDocument } from './reader.ts';
import { normalizeMemory } from './normalize.ts';
import { initializeFromMemory } from './initialize.ts';
import {
  buildInitialMemoryDocument, buildProjectFixture, slugify, type IntakeAnswers,
} from './project-fixture.ts';
import type { ScenarioFixture } from '../../clite-domain-extraction-feasibility/src/fixture-contract.ts';

export interface IntakeResult {
  dir: string;
  memoryPath: string;
  fixturePath: string;
  projectName: string;
  pendingAction: string;
}

/** Pure core — testable without filesystem. Throws if the generated pair
 * cannot be parsed, normalized and initialized by the real adapter. */
export function generateProject(a: IntakeAnswers): { fixture: ScenarioFixture; memoryDocument: string } {
  const fixture = buildProjectFixture(a);
  const memoryDocument = buildInitialMemoryDocument(a, fixture);
  // Self-check with the REAL pipeline: never emit files the adapter rejects.
  const record = normalizeMemory(parseMemoryDocument(memoryDocument));
  const { state } = initializeFromMemory(record, fixture);
  if (state.project.state !== 'discovering') {
    throw new Error(`Intake gerou estado inicial inesperado: ${state.project.state}`);
  }
  return { fixture, memoryDocument };
}

export function runIntake(a: IntakeAnswers, outRoot: string): IntakeResult {
  const { fixture, memoryDocument } = generateProject(a);
  const dir = join(outRoot, slugify(a.project_title));
  if (existsSync(join(dir, 'memory.md'))) {
    throw new Error(`Já existe um projeto em ${dir} — não sobrescrevo Memory existente (use E75 para atualizá-la).`);
  }
  mkdirSync(dir, { recursive: true });
  const memoryPath = join(dir, 'memory.md');
  const fixturePath = join(dir, 'fixture.json');
  writeFileSync(memoryPath, memoryDocument, 'utf-8');
  writeFileSync(fixturePath, JSON.stringify(fixture, null, 2), 'utf-8');
  return {
    dir, memoryPath, fixturePath,
    projectName: fixture.projectName,
    pendingAction: fixture.initialPendingAction,
  };
}

/** Load a generated fixture back (validated minimally). */
export function loadProjectFixture(path: string): ScenarioFixture {
  const raw: unknown = JSON.parse(readFileSync(path, 'utf-8'));
  const fx = raw as ScenarioFixture;
  if (!fx?.version || !fx.projectId || !Array.isArray(fx.questions) || !Array.isArray(fx.scenarioSteps)) {
    throw new Error(`Fixture inválido em ${path}: campos essenciais ausentes.`);
  }
  return fx;
}

const isMain = process.argv[1]?.replace(/\\/g, '/').endsWith('/intake.ts');
if (isMain) {
  const args = process.argv.slice(2);
  const get = (flag: string): string | undefined => {
    const i = args.indexOf(flag);
    return i >= 0 ? args[i + 1] : undefined;
  };
  const answersPath = get('--answers');
  if (!answersPath) {
    console.error('Uso: node src/intake.ts --answers <answers.json> [--out <dir>]');
    process.exit(2);
  }
  const answers = JSON.parse(readFileSync(answersPath, 'utf-8')) as IntakeAnswers;
  // Default output: <repo-root>/projects (kept out of Git via root .gitignore).
  const outRoot = resolve(get('--out') ?? join(import.meta.dirname, '..', '..', '..', 'projects'));
  const result = runIntake(answers, outRoot);
  console.log(`Projeto criado: ${result.projectName}`);
  console.log(`  Memory:  ${result.memoryPath}`);
  console.log(`  Fixture: ${result.fixturePath}`);
  console.log(`  Próxima ação: ${result.pendingAction}`);
  console.log('  Nota: a pasta projects/ fica FORA do Git institucional (CSA-34-3).');
}

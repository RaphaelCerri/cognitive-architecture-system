import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { generateProject, runIntake, loadProjectFixture } from '../src/intake.ts';
import { slugify } from '../src/project-fixture.ts';
import { parseMemoryDocument } from '../src/reader.ts';
import { normalizeMemory } from '../src/normalize.ts';
import { initializeFromMemory } from '../src/initialize.ts';
import { handleCommand } from '../../clite-domain-extraction-feasibility/src/commands.ts';
import { applyEvent } from '../../clite-domain-extraction-feasibility/src/machine.ts';
import { mkdtempSync, rmSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const ANSWERS = {
  project_title: 'Organizador de Estudos de Certificação',
  initial_intent: 'Quero organizar meus estudos para uma certificação de nuvem sem perder o fio entre semanas.',
  users: 'Eu mesmo, algumas noites por semana.',
  unknowns: ['Quanto tempo semanal é realista'],
};

describe('real project intake (G-A03, v0)', () => {
  it('generates a memory+fixture pair that the REAL adapter accepts', () => {
    const { fixture, memoryDocument } = generateProject(ANSWERS);
    const record = normalizeMemory(parseMemoryDocument(memoryDocument));
    const { state, warnings } = initializeFromMemory(record, fixture);
    assert.equal(state.project.state, 'discovering');
    assert.equal(state.project.name, ANSWERS.project_title);
    assert.equal(state.idea?.text, ANSWERS.initial_intent);
    assert.equal(state.pendingAction, 'Responder às perguntas de descoberta.');
    assert.ok(warnings.every((w) => w.severity !== 'reject'));
  });

  it('the reconstructed real project accepts the next valid command (AnswerQuestion)', () => {
    const { fixture, memoryDocument } = generateProject(ANSWERS);
    const record = normalizeMemory(parseMemoryDocument(memoryDocument));
    let { state } = initializeFromMemory(record, fixture);
    const result = handleCommand(fixture, state, {
      kind: 'AnswerQuestion', actor: 'product_owner',
      questionId: fixture.questions[0]!.id, value: 'Eu mesmo, três noites por semana.', isUnknown: false,
    });
    assert.ok(result.ok, `AnswerQuestion rejeitado: ${result.ok ? '' : result.reason}`);
    state = (result as { ok: true; events: Parameters<typeof applyEvent>[2][] }).events
      .reduce((s, ev) => applyEvent(fixture, s, ev, 'AnswerQuestion'), state);
    assert.equal(state.discovery.answers.length, 1);
  });

  it('placeholders are labeled, never disguised as real content', () => {
    const { fixture } = generateProject(ANSWERS);
    assert.match(fixture.plan.objective, /A DEFINIR/);
    assert.match(fixture.completionArtifact.limitations.join(' '), /execução simulada/i);
  });

  it('rejects missing required answers with clear errors', () => {
    assert.throws(() => generateProject({ project_title: '', initial_intent: 'x' }), /project_title/);
    assert.throws(() => generateProject({ project_title: 'x', initial_intent: ' ' }), /initial_intent/);
  });

  it('fixture override validation still applies (mismatch rejected)', () => {
    const a = generateProject(ANSWERS);
    const b = generateProject({ ...ANSWERS, project_title: 'Outro Projeto' });
    const record = normalizeMemory(parseMemoryDocument(a.memoryDocument));
    assert.throws(() => initializeFromMemory(record, b.fixture), /não corresponde|incompatível/);
  });

  it('writes to disk, refuses overwrite, and the pair round-trips from files', () => {
    const out = mkdtempSync(join(tmpdir(), 'intake-'));
    try {
      const res = runIntake(ANSWERS, out);
      assert.match(res.memoryPath, /memory\.md$/);
      const fx = loadProjectFixture(res.fixturePath);
      const record = normalizeMemory(parseMemoryDocument(readFileSync(res.memoryPath, 'utf-8')));
      const { state } = initializeFromMemory(record, fx);
      assert.equal(state.project.state, 'discovering');
      assert.throws(() => runIntake(ANSWERS, out), /não sobrescrevo/);
    } finally {
      rmSync(out, { recursive: true, force: true });
    }
  });

  it('slugify is filesystem-safe and stable', () => {
    assert.equal(slugify('Organizador de Estudos de Certificação'), 'organizador-de-estudos-de-certificacao');
    assert.equal(slugify('  ***  '), 'projeto');
  });
});

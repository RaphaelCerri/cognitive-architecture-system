import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import * as FX from '../src/domain/fixture.ts';
import { initialState } from '../src/domain/machine.ts';

/** Collect every renderable string from an exported fixture value. */
function collectStrings(value: unknown, out: string[]): void {
  if (typeof value === 'string') out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => collectStrings(v, out));
  else if (value && typeof value === 'object') {
    Object.entries(value as Record<string, unknown>).forEach(([key, v]) => {
      // internal identifiers are not rendered; labels are.
      if (key === 'executorRole') return;
      collectStrings(v, out);
    });
  }
}

function renderableFixtureStrings(): string[] {
  const out: string[] = [];
  collectStrings(
    [
      FX.ROLE_LABELS, FX.PROJECT_NAME, FX.INITIAL_IDEA, FX.QUESTIONS, FX.SCENARIO_ANSWERS,
      FX.ASSUMPTION_SINGLE_USER, FX.CONTRADICTION_C01, FX.CORRECTED_ASSUMPTION_TEXT,
      FX.UNDERSTANDING_V1, FX.PLAN_V1, FX.PLAN_REVISION_COMMENT, FX.AUTHORIZATION_REQUEST,
      FX.REQUESTED_INPUT_RI01, FX.FAILURE_REASON, FX.ARTIFACT_A01, FX.EVIDENCE_ITEMS,
      FX.SCENARIO_STEPS,
    ],
    out,
  );
  return out;
}

describe('fixture validation', () => {
  it('renders no forbidden internal vocabulary (F-01)', () => {
    const strings = renderableFixtureStrings();
    for (const term of FX.FORBIDDEN_INTERFACE_TERMS) {
      const pattern = new RegExp(`(^|[^\\p{L}\\p{N}_])${term}([^\\p{L}\\p{N}_]|$)`, 'u');
      const hit = strings.find((s) => pattern.test(s));
      assert.equal(hit, undefined, `Termo proibido "${term}" encontrado em: "${hit}"`);
    }
  });

  it('renders the research executor exclusively via its approved label', () => {
    assert.equal(FX.ROLE_LABELS.research_executor, 'Responsável pela pesquisa');
    assert.equal(FX.AUTHORIZATION_REQUEST.executorRole, 'research_executor'); // internal only
  });

  it('contains no personal-data patterns (phones, plates, emails)', () => {
    const strings = renderableFixtureStrings().join('\n');
    assert.doesNotMatch(strings, /\b\d{2}\s?9?\d{4}-?\d{4}\b/, 'padrão de telefone encontrado');
    assert.doesNotMatch(strings, /\b[A-Z]{3}-?\d[A-Z0-9]\d{2}\b/, 'padrão de placa encontrado');
    assert.doesNotMatch(strings, /\b[\w.+-]+@[\w-]+\.[\w.]+\b/, 'padrão de e-mail encontrado');
  });

  it('scenario is deterministic and ends in completion', () => {
    assert.equal(FX.SCENARIO_STEPS.at(-1)?.kind, 'completion');
    assert.equal(FX.SCENARIO_STEPS.filter((s) => s.kind === 'failure').length, 1);
    assert.equal(FX.SCENARIO_STEPS.filter((s) => s.kind === 'input_request').length, 1);
  });

  it('initial state is reproducible from the fixture', () => {
    assert.deepEqual(initialState(), initialState());
  });

  it('every evidence item supports an identifiable claim (never a bare link list)', () => {
    for (const e of FX.EVIDENCE_ITEMS) {
      assert.ok(e.claim.length > 10, `${e.id} sem claim`);
      assert.ok(e.supportsFinding.startsWith('ACH-'), `${e.id} sem vínculo a achado`);
      assert.ok(e.limitation.length > 0, `${e.id} sem limitação`);
    }
  });
});

describe('security boundary — source scan', () => {
  const SRC = join(import.meta.dirname, '..', 'src');

  function walk(dir: string): string[] {
    return readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
      entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)],
    );
  }

  it('source contains no external URLs, network APIs or dynamic code execution', () => {
    for (const file of walk(SRC)) {
      const text = readFileSync(file, 'utf-8');
      assert.doesNotMatch(text, /https?:\/\//, `URL externa em ${file}`);
      assert.doesNotMatch(text, /\bfetch\s*\(/, `fetch em ${file}`);
      assert.doesNotMatch(text, /XMLHttpRequest|WebSocket|EventSource|navigator\.sendBeacon/, `API de rede em ${file}`);
      assert.doesNotMatch(text, /\beval\s*\(|new Function\s*\(/, `execução dinâmica em ${file}`);
      assert.doesNotMatch(text, /\binnerHTML\s*=/, `innerHTML em ${file} (conteúdo deve usar textContent)`);
    }
  });
});

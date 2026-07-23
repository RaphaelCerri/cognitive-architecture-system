import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { OFICINA_HORIZONTE, FORBIDDEN_INTERFACE_TERMS } from '../src/fixtures/oficina-horizonte.ts';
import { ESTUFA_VERTICAL } from '../src/fixtures/estufa-vertical.ts';
import { runUntil } from './helpers.ts';

const SRC = join(import.meta.dirname, '..', 'src');

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)],
  );
}

describe('browser independence — extracted domain source', () => {
  it('references no browser/DOM globals or types anywhere in src', () => {
    for (const file of walk(SRC)) {
      const text = readFileSync(file, 'utf-8');
      assert.doesNotMatch(text, /\bwindow\b/, `window em ${file}`);
      assert.doesNotMatch(text, /\bdocument\b/, `document em ${file}`);
      assert.doesNotMatch(text, /\bHTMLElement\b|\bElement\b/, `tipo DOM em ${file}`);
      assert.doesNotMatch(text, /\blocalStorage\b|\bsessionStorage\b/, `storage de browser em ${file}`);
      assert.doesNotMatch(text, /\bnavigator\b/, `navigator em ${file}`);
      assert.doesNotMatch(text, /addEventListener|dispatchEvent/, `evento de browser em ${file}`);
      assert.doesNotMatch(text, /\bCSS\b|classList|innerHTML|textContent/, `API de renderização em ${file}`);
    }
  });

  it('contains no external URLs, network APIs or dynamic code execution', () => {
    for (const file of walk(SRC)) {
      const text = readFileSync(file, 'utf-8');
      assert.doesNotMatch(text, /https?:\/\//, `URL externa em ${file}`);
      assert.doesNotMatch(text, /\bfetch\s*\(/, `fetch em ${file}`);
      assert.doesNotMatch(text, /XMLHttpRequest|WebSocket|EventSource|sendBeacon/, `API de rede em ${file}`);
      assert.doesNotMatch(text, /\beval\s*\(|new Function\s*\(/, `execução dinâmica em ${file}`);
    }
  });

  it('tsconfig compiles without the DOM lib (type-level independence)', () => {
    const tsconfig = JSON.parse(readFileSync(join(SRC, '..', 'tsconfig.json'), 'utf-8'));
    const libs: string[] = tsconfig.compilerOptions.lib;
    assert.ok(!libs.some((l) => /dom/i.test(l)), 'lib DOM presente no tsconfig');
  });
});

describe('scenario independence — fixtures', () => {
  it('both fixtures complete the identical journey shape (mechanics != content)', () => {
    const a = runUntil(OFICINA_HORIZONTE, 'accepted');
    const b = runUntil(ESTUFA_VERTICAL, 'accepted');
    for (const s of [a, b]) {
      assert.equal(s.project.state, 'resolved');
      assert.equal(s.artifact.state, 'accepted');
      assert.ok(s.evidence.some((e) => e.status === 'unavailable')); // failure evidence surfaced
      assert.ok(s.decisions.some((d) => d.type === 'authorization'));
      assert.ok(s.decisions.some((d) => d.type === 'review_accept'));
    }
    // Content differs; mechanics agree.
    assert.notEqual(a.project.name, b.project.name);
    assert.notEqual(a.artifact.item?.id, b.artifact.item?.id);
  });

  it('no Oficina Horizonte content leaks into machine, commands, events, types or memory', () => {
    const domainFiles = walk(SRC).filter((f) => !f.includes('fixtures'));
    for (const file of domainFiles) {
      const text = readFileSync(file, 'utf-8');
      assert.doesNotMatch(text, /[Oo]ficina|Horizonte|Marina|mecânic|orçamento|DQ-0\d|A-01|RI-01|PESQ-01|REL-01|ACH-0\d|EV-0\d/,
        `conteúdo do cenário da oficina em ${file}`);
    }
  });

  it('renders no forbidden internal vocabulary in fixture strings (F-01)', () => {
    for (const fx of [OFICINA_HORIZONTE, ESTUFA_VERTICAL]) {
      const strings: string[] = [];
      const collect = (value: unknown, parentKey?: string): void => {
        if (typeof value === 'string') { if (parentKey !== 'executorRole') strings.push(value); }
        else if (Array.isArray(value)) value.forEach((v) => collect(v));
        else if (value && typeof value === 'object') {
          Object.entries(value as Record<string, unknown>).forEach(([k, v]) => {
            if (k === 'executorRole' || k === 'roleLabels') return; // internal IDs / keyed by role ID
            collect(v, k);
          });
          if ('roleLabels' in (value as object)) {
            Object.values((value as { roleLabels?: Record<string, string> }).roleLabels ?? {}).forEach((v) => strings.push(v));
          }
        }
      };
      collect(fx);
      for (const term of FORBIDDEN_INTERFACE_TERMS) {
        const pattern = new RegExp(`(^|[^\\p{L}\\p{N}_])${term}([^\\p{L}\\p{N}_]|$)`, 'u');
        const hit = strings.find((s) => pattern.test(s));
        assert.equal(hit, undefined, `Termo proibido "${term}" em: "${hit}"`);
      }
    }
  });

  it('contains no personal-data patterns (phones, plates, emails)', () => {
    for (const file of walk(SRC)) {
      const text = readFileSync(file, 'utf-8');
      assert.doesNotMatch(text, /\b\d{2}\s?9?\d{4}-?\d{4}\b/, `padrão de telefone em ${file}`);
      assert.doesNotMatch(text, /\b[A-Z]{3}-?\d[A-Z0-9]\d{2}\b/, `padrão de placa em ${file}`);
      assert.doesNotMatch(text, /\b[\w.+-]+@[\w-]+\.[\w.]+\b/, `padrão de e-mail em ${file}`);
    }
  });

  it('each scenario is deterministic and ends in completion', () => {
    for (const fx of [OFICINA_HORIZONTE, ESTUFA_VERTICAL]) {
      assert.equal(fx.scenarioSteps.at(-1)?.kind, 'completion');
      assert.equal(fx.scenarioSteps.filter((s) => s.kind === 'failure').length, 1);
      assert.equal(fx.scenarioSteps.filter((s) => s.kind === 'input_request').length, 1);
    }
  });
});

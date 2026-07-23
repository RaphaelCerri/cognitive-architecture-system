import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { FIELD_CLASSIFICATION } from '../src/memory-types.ts';

const ROOT = join(import.meta.dirname, '..');
const SRC = join(ROOT, 'src');
const MEMORIES = join(ROOT, 'memories');

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)],
  );
}

describe('browser independence — adapter source', () => {
  it('references no browser/DOM globals, storage or rendering APIs', () => {
    for (const file of walk(SRC)) {
      const text = readFileSync(file, 'utf-8');
      assert.doesNotMatch(text, /\bwindow\b/, `window em ${file}`);
      assert.doesNotMatch(text, /\bdocument\s*\.\s*\w|\bdocument\s*\[/, `global document em ${file}`);
      assert.doesNotMatch(text, /\bHTMLElement\b/, `tipo DOM em ${file}`);
      assert.doesNotMatch(text, /\blocalStorage\b|\bsessionStorage\b/, `storage de browser em ${file}`);
      assert.doesNotMatch(text, /\bnavigator\b/, `navigator em ${file}`);
      assert.doesNotMatch(text, /addEventListener|innerHTML|textContent/, `API de renderização em ${file}`);
    }
  });

  it('makes no network requests and executes no dynamic code', () => {
    for (const file of walk(SRC)) {
      const text = readFileSync(file, 'utf-8');
      assert.doesNotMatch(text, /https?:\/\//, `URL externa em ${file}`);
      assert.doesNotMatch(text, /\bfetch\s*\(/, `fetch em ${file}`);
      assert.doesNotMatch(text, /XMLHttpRequest|WebSocket|EventSource|sendBeacon/, `API de rede em ${file}`);
      assert.doesNotMatch(text, /\beval\s*\(|new Function\s*\(/, `execução dinâmica em ${file}`);
    }
  });

  it('READ adapter: src never imports any fs write capability', () => {
    for (const file of walk(SRC)) {
      const text = readFileSync(file, 'utf-8');
      assert.doesNotMatch(text, /writeFile|appendFile|createWriteStream|\bunlink|\brmSync|\bmkdir/, `escrita de arquivo em ${file}`);
    }
  });

  it('tsconfig compiles without the DOM lib', () => {
    const tsconfig = JSON.parse(readFileSync(join(ROOT, 'tsconfig.json'), 'utf-8'));
    const libs: string[] = tsconfig.compilerOptions.lib;
    assert.ok(!libs.some((l) => /dom/i.test(l)), 'lib DOM presente');
  });
});

describe('scenario independence — adapter has no scenario rules', () => {
  it('no scenario content leaks into reader/normalize/proposal (registry is the only scenario knowledge)', () => {
    const nonRegistry = walk(SRC).filter((f) => !f.endsWith('initialize.ts'));
    for (const file of nonRegistry) {
      const text = readFileSync(file, 'utf-8');
      assert.doesNotMatch(text, /[Oo]ficina|Horizonte|Marina|[Ee]stufa|irrigaç|DQ-0\d|EQ-0\d|RI-0\d|CMP-A01|REL-01/,
        `conteúdo de cenário em ${file}`);
    }
  });
});

describe('content boundaries — no secrets, no personal data', () => {
  it('memories contain no personal-data patterns (phones, plates, emails)', () => {
    for (const file of walk(MEMORIES)) {
      // Institutional document refs (IHR-0029, ARP-0009-E55, …) are not plates:
      // strip them before scanning so the plate pattern targets real plates only.
      const text = readFileSync(file, 'utf-8')
        .replace(/\b(ARP|IHR|GOV|PMM|BOOT|MEM|DEC|PRJ|AD|AP|CM)-[\dA-Z-]+\b/g, '');
      assert.doesNotMatch(text, /\b\d{2}\s?9?\d{4}-?\d{4}\b/, `telefone em ${file}`);
      assert.doesNotMatch(text, /\b[A-Z]{3}-?\d[A-Z0-9]\d{2}\b/, `placa em ${file}`);
      assert.doesNotMatch(text, /\b[\w.+-]+@[\w-]+\.[\w.]+\b/, `e-mail em ${file}`);
    }
  });

  it('memories contain no secret-like material', () => {
    for (const file of walk(MEMORIES)) {
      const text = readFileSync(file, 'utf-8');
      assert.doesNotMatch(text, /password|senha|api[_-]?key|secret|token|Bearer|BEGIN (RSA|EC|OPENSSH)/i, `material sensível em ${file}`);
    }
  });

  it('memories contain no external URLs', () => {
    for (const file of walk(MEMORIES)) {
      assert.doesNotMatch(readFileSync(file, 'utf-8'), /https?:\/\//, `URL externa em ${file}`);
    }
  });
});

describe('classification matrix — canonical vs derived vs runtime', () => {
  it('declares the critical boundaries explicitly', () => {
    assert.equal(FIELD_CLASSIFICATION['log.event_sequence'], 'audit_only');       // event log is NOT Memory
    assert.equal(FIELD_CLASSIFICATION['context.stale'], 'derived');               // computed, never stored
    assert.equal(FIELD_CLASSIFICATION['ui.view'], 'reject_from_memory');          // presentation never enters
    assert.equal(FIELD_CLASSIFICATION['evidence.confidence'], 'reject_from_memory'); // belongs to evidence artifact
    assert.equal(FIELD_CLASSIFICATION['project.state'], 'derived');
    assert.equal(FIELD_CLASSIFICATION['intent.answers'], 'canonical_required');   // user input is not derivable
    assert.equal(FIELD_CLASSIFICATION['execution.last_tick'], 'canonical_optional');
  });

  it('no field is classified as both canonical and runtime (single classification each)', () => {
    const values = Object.values(FIELD_CLASSIFICATION);
    assert.ok(values.length >= 20);
    assert.ok(values.every((v) => typeof v === 'string'));
  });
});

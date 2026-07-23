import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { FORBIDDEN_INTERFACE_TERMS } from '../src/domain/fixture.ts';

const ROOT = join(import.meta.dirname, '..');
const BUNDLE = join(ROOT, 'dist', 'app.js');
const HTML = join(ROOT, 'index.html');

describe('delivered bundle — security and content boundary', () => {
  it('bundle exists after build (run `npm run build` first)', (t) => {
    if (!existsSync(BUNDLE)) {
      t.skip('dist/app.js ausente; execute npm run build');
      return;
    }
    assert.ok(readFileSync(BUNDLE, 'utf-8').length > 0);
  });

  it('bundle contains no network APIs, external URLs or dynamic code execution', (t) => {
    if (!existsSync(BUNDLE)) { t.skip('bundle ausente'); return; }
    const js = readFileSync(BUNDLE, 'utf-8');
    assert.doesNotMatch(js, /https?:\/\//, 'URL externa no bundle');
    assert.doesNotMatch(js, /\bfetch\s*\(/, 'fetch no bundle');
    assert.doesNotMatch(js, /XMLHttpRequest|WebSocket|EventSource|sendBeacon/, 'API de rede no bundle');
    assert.doesNotMatch(js, /\beval\s*\(|new Function\s*\(/, 'execução dinâmica no bundle');
    assert.doesNotMatch(js, /\binnerHTML\s*=/, 'innerHTML no bundle');
  });

  it('bundle renders no forbidden internal vocabulary inside string literals', (t) => {
    if (!existsSync(BUNDLE)) { t.skip('bundle ausente'); return; }
    const js = readFileSync(BUNDLE, 'utf-8');
    // Collect string literals only (identifiers like research_executor are
    // legitimate internal IDs; what matters is renderable text).
    const literals = [...js.matchAll(/"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'|`((?:[^`\\]|\\.)*)`/g)]
      .map((m) => m[1] ?? m[2] ?? m[3] ?? '')
      // `${expr}` placeholders are code, not rendered text — what renders is
      // the evaluated label; strip them before scanning.
      .map((s) => s.replace(/\$\{[^}]*\}/g, ''));
    const renderable = literals.filter((s) => /[\sÀ-ſ]/.test(s) && s.length > 12);
    for (const term of FORBIDDEN_INTERFACE_TERMS) {
      const pattern = new RegExp(`(^|[^\\p{L}\\p{N}_])${term}([^\\p{L}\\p{N}_]|$)`, 'u');
      const hit = renderable.find((s) => pattern.test(s));
      assert.equal(hit, undefined, `Termo proibido "${term}" em texto renderizável: "${hit}"`);
    }
  });
});

describe('index.html — semantic and security structure', () => {
  const html = readFileSync(HTML, 'utf-8');

  it('declares language, CSP and no external resources', () => {
    assert.match(html, /<html lang="pt-BR">/);
    assert.match(html, /Content-Security-Policy/);
    assert.match(html, /connect-src 'none'/);
    assert.doesNotMatch(html, /https?:\/\//, 'recurso externo no HTML');
  });

  it('provides landmarks, skip link, live regions and focusable main', () => {
    assert.match(html, /<header>/);
    assert.match(html, /<main id="main" tabindex="-1">/);
    assert.match(html, /<footer>/);
    assert.match(html, /class="skip-link"/);
    assert.match(html, /role="status" aria-live="polite"/);
    assert.match(html, /role="alert"/);
    assert.match(html, /aria-label="Etapas do projeto"/);
  });

  it('shows the epistemic boundary before any interaction', () => {
    assert.match(html, /Não aplica controle de acesso real/);
    assert.match(html, /não executa pesquisa real/);
  });
});

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseMemoryDocument, readMemoryFile } from '../src/reader.ts';
import { normalizeMemory } from '../src/normalize.ts';
import { MemoryValidationError, SUPPORTED_FORMAT_VERSION } from '../src/memory-types.ts';

const MEMORIES = join(import.meta.dirname, '..', 'memories');
const OFICINA_PATH = join(MEMORIES, 'oficina-horizonte-memory.md');

function oficinaContent(): string {
  return readFileSync(OFICINA_PATH, 'utf-8');
}

describe('reader — parse and structural validation', () => {
  it('reads a real memory file into frontmatter and narrative body', () => {
    const doc = readMemoryFile(OFICINA_PATH);
    assert.equal(doc.frontmatter['memory_id'], 'MEM-OFICINA-01');
    assert.match(doc.narrativeBody, /Project Memory — Oficina Horizonte/);
    assert.deepEqual(doc.unknownTopLevelFields, []);
  });

  it('rejects a document without frontmatter, with an explainable error', () => {
    assert.throws(
      () => parseMemoryDocument('# Só narrativa\n\nSem bloco estruturado.'),
      (err: unknown) => err instanceof MemoryValidationError
        && err.issues.some((i) => i.code === 'missing_frontmatter'),
    );
  });

  it('rejects unreadable YAML with an explainable error', () => {
    assert.throws(
      () => parseMemoryDocument('---\nmemory_id: [unclosed\n---\ncorpo'),
      (err: unknown) => err instanceof MemoryValidationError
        && err.issues.some((i) => i.code === 'yaml_parse_error'),
    );
  });

  it('rejects missing critical fields, naming each one', () => {
    try {
      parseMemoryDocument('---\nmemory_id: X\nformat_version: memory-format-0.1-experimental\n---\ncorpo');
      assert.fail('deveria rejeitar');
    } catch (err) {
      assert.ok(err instanceof MemoryValidationError);
      const named = err.issues.map((i) => i.message).join(' ');
      for (const field of ['project_id', 'scenario_id', 'content_version', 'intent', 'governance', 'execution', 'result', 'continuity']) {
        assert.match(named, new RegExp(field));
      }
    }
  });

  it('rejects an unsupported format version', () => {
    const tampered = oficinaContent().replace(SUPPORTED_FORMAT_VERSION, 'memory-format-9.9');
    assert.throws(
      () => parseMemoryDocument(tampered),
      (err: unknown) => err instanceof MemoryValidationError
        && err.issues.some((i) => i.code === 'unsupported_format_version'),
    );
  });

  it('surfaces unknown top-level fields explicitly as warnings, never silently', () => {
    const withUnknown = oficinaContent().replace('\nintent:', '\ncampo_inventado: 42\nintent:');
    const doc = parseMemoryDocument(withUnknown);
    assert.deepEqual(doc.unknownTopLevelFields, ['campo_inventado']);
    const record = normalizeMemory(doc);
    assert.ok(record.issues.some((i) => i.severity === 'warn' && i.code === 'unknown_field' && i.message.includes('campo_inventado')));
  });

  it('is deterministic: YAML key order does not change the normalized record', () => {
    const content = oficinaContent();
    // Move `continuity` block before `intent` by rebuilding the frontmatter order.
    const doc1 = normalizeMemory(parseMemoryDocument(content));
    const reordered = content
      .replace(/^---\n/, '---\nproject_title: Oficina Horizonte — pesquisa de atendimento\n')
      .replace('\nproject_title: Oficina Horizonte — pesquisa de atendimento\nscenario_id', '\nscenario_id');
    const doc2 = normalizeMemory(parseMemoryDocument(reordered));
    assert.deepEqual(doc1, doc2);
  });

  it('is deterministic: markdown body whitespace does not change the structured record', () => {
    const content = oficinaContent();
    const doc1 = normalizeMemory(parseMemoryDocument(content));
    const doc2 = normalizeMemory(parseMemoryDocument(content.replace(/\n# Project Memory/, '\n\n\n# Project Memory')));
    assert.deepEqual(doc1, doc2);
  });

  it('two reads of the same file produce deep-equal records', () => {
    const a = normalizeMemory(readMemoryFile(OFICINA_PATH));
    const b = normalizeMemory(readMemoryFile(OFICINA_PATH));
    assert.deepEqual(a, b);
  });
});

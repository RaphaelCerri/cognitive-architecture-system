'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { parseYamlFrontmatter, splitFrontmatter } = require('./yaml-frontmatter-reader');
const { CATEGORIES, classifyRepositoryCorpus } = require('./corpus-classifier');
const { evaluateContractExperiment } = require('./evaluate-contract-experiment');

const fixtures = path.join(__dirname, 'fixtures', 'contract-parser');

test('frontmatter split supports BOM, CRLF and body delimiters without rewriting', () => {
  const source = '\ufeff---\r\nid: TEST-BOM\r\nkind: knowledge\r\nknowledge_type: research_evidence\r\n---\r\n# Body\r\n---\r\nend';
  const split = splitFrontmatter(source);
  assert.equal(split.valid, true);
  assert.match(split.body, /^# Body\r\n---/);
  assert.equal(source.startsWith('\ufeff---\r\n'), true);
});

test('real YAML parser preserves nested unknown values in a read-only view', () => {
  const source = fs.readFileSync(path.join(fixtures, 'valid-complex.md'), 'utf8');
  const parsed = parseYamlFrontmatter(source, 'valid-complex.md');
  assert.equal(parsed.valid, true);
  assert.deepEqual(parsed.data.unknown_nested.flags, [true, false]);
  assert.match(parsed.data.unknown_nested.note, /linha dois/);
  assert.equal(parsed.preservation, 'parsed_view_only_source_bytes_untouched');
});

test('duplicate keys and custom tags are rejected', () => {
  const duplicate = parseYamlFrontmatter(fs.readFileSync(path.join(fixtures, 'invalid-duplicate-key.md'), 'utf8'));
  const customTag = parseYamlFrontmatter('---\nvalue: !execute payload\n---\nbody');
  assert.equal(duplicate.valid, false);
  assert.equal(duplicate.errors[0].code, 'duplicate-key');
  assert.equal(customTag.valid, false);
  assert.equal(customTag.errors[0].code, 'custom-tag-rejected');
});

test('alias expansion is bounded and prototype-shaped keys stay ordinary data', () => {
  const aliases = Array.from({ length: 60 }, () => '*base').join(', ');
  const bomb = parseYamlFrontmatter(`---\nbase: &base [x]\nexpanded: [${aliases}]\n---\nbody`);
  const shaped = parseYamlFrontmatter('---\n__proto__:\n  polluted: true\n---\nbody');
  assert.equal(bomb.valid, false);
  assert.equal(bomb.errors[0].code, 'alias-expansion-limit');
  assert.equal(shaped.valid, true);
  assert.equal(Object.prototype.polluted, undefined);
  assert.equal(Object.prototype.hasOwnProperty.call(shaped.data, '__proto__'), true);
});

test('missing, misplaced and malformed frontmatter are classified explicitly', () => {
  assert.equal(parseYamlFrontmatter('# body\n---\nid: LATE\n---').has_frontmatter, false);
  assert.equal(parseYamlFrontmatter('---\nid: OPEN').valid, false);
  assert.equal(parseYamlFrontmatter('---\n- item\n---\nbody').errors[0].code, 'frontmatter-root-not-mapping');
});

test('real repository corpus is total, disjoint, bounded and byte-preserving', () => {
  const result = classifyRepositoryCorpus();
  assert.equal(result.total_files, result.category_total);
  assert.equal(result.source_mutated, false);
  assert.deepEqual(result.hash_drift, []);
  assert.deepEqual(Object.keys(result.category_counts), [...CATEGORIES]);
  assert.ok(result.items.every((item) => !/^(\.git|projects|\.obsidian|graphify-out)\//.test(item.relative_path)));
  assert.ok(result.items.every((item) => CATEGORIES.includes(item.category)));
});

test('candidate profiles are compositional and preserve declared types', () => {
  const result = classifyRepositoryCorpus();
  const candidates = result.items.filter((item) => item.category === 'knowledge_object_candidate');
  assert.ok(candidates.length > 0);
  assert.ok(candidates.every((item) => item.profile.candidate_profiles[0] === 'base_knowledge_object'));
  assert.ok(candidates.every((item) => item.profile.candidate_profiles.length <= 2));
  assert.ok(candidates.every((item) => item.profile.declared_knowledge_type === item.data.knowledge_type));
});

test('experiment remains diagnostic and cannot claim schema or authority', () => {
  const result = evaluateContractExperiment();
  assert.equal(result.status, 'experimental_evidence_ready_for_review');
  assert.equal(result.canonicality, 'diagnostic_experiment_not_schema');
  assert.equal(result.corpus.source_mutated, false);
  assert.ok(result.limitations.includes('does_not_define_or_validate_a_canonical_schema'));
  assert.ok(result.limitations.includes('does_not_validate_authority_or_body_semantics'));
  assert.equal(result.next_gate, 'independent_review_then_human_authorship_decision');
});

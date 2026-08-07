'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { candidate, validateCandidate, validateExtension } = require('./model');
const { scanRepository } = require('./inventory');

test('candidate separates metamodel, ontology and representations', () => {
  assert.deepEqual(candidate.layers.map((layer) => layer.id), [
    'constitutional_metamodel', 'system_ontology', 'representations',
  ]);
  assert.equal(validateCandidate().valid, true);
});

test('every candidate axiom has explicit provenance', () => {
  assert.ok(candidate.axioms.every((axiom) => axiom.sources.length > 0));
});

test('every competency question is answered and covered by known axioms', () => {
  const known = new Set(candidate.axioms.map((axiom) => axiom.id));
  assert.ok(candidate.competency_questions.every((question) => question.answer));
  assert.ok(candidate.competency_questions.every((question) => question.covered_by.every((id) => known.has(id))));
});

test('a namespaced extension can add vocabulary without shadowing governing concepts', () => {
  const result = validateExtension({
    namespace: 'process-arm',
    version: '0.1.0',
    terms: [{ id: 'process-arm:bottleneck' }, { id: 'process-arm:handoff' }],
  });
  assert.equal(result.valid, true);
});

test('an extension cannot redefine a governing concept', () => {
  const result = validateExtension({
    namespace: 'unsafe',
    version: '1.0.0',
    terms: [{ id: 'identity_rule' }],
  });
  assert.equal(result.valid, false);
  assert.ok(result.errors.some((error) => error.startsWith('governing-term-shadowed')));
});

test('candidate rejects canonicality and vendor leakage', () => {
  const invalid = {
    ...candidate,
    canonicality: 'canonical',
    layers: candidate.layers.map((layer, index) => index === 0 ? { ...layer, responsibility: 'Defined by Codex.' } : layer),
  };
  const result = validateCandidate(invalid);
  assert.ok(result.errors.includes('candidate-must-not-claim-canonicality'));
  assert.ok(result.errors.includes('vendor-or-runtime-leakage'));
});

test('repository inventory exposes vocabulary drift without mutating sources', () => {
  const inventory = scanRepository();
  assert.ok(inventory.scanned_files >= 200);
  assert.equal(inventory.duplicate_ids.length, 0);
  assert.ok(inventory.findings.some((finding) => finding.code === 'directive-type-alias-drift'));
  assert.ok(inventory.relation_type_count > 40);
});

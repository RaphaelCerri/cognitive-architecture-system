'use strict';

const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert/strict');
const { AUTHORING_CRITERIA } = require('./authoring-criteria');
const { validateEnvelopeFile } = require('./envelope');
const { evaluateEnvelope } = require('./evaluate-envelope');

const ROOT = path.resolve(__dirname, '..', '..');
const fixture = (name) => path.join(__dirname, 'fixtures', name);

test('authorship criteria are small, explicit and actionable', () => {
  assert.equal(AUTHORING_CRITERIA.length, 8);
  assert.ok(AUTHORING_CRITERIA.every((criterion) => criterion.id && criterion.rule));
});

test('namespaced extension is valid and preserves unknown fields', () => {
  const result = validateEnvelopeFile(fixture('valid-namespaced-extension.md'));
  assert.equal(result.valid, true);
  assert.equal(result.authorship.unknown_fields_preserved, true);
});

test('multiple state dimensions remain valid with an explanatory warning', () => {
  const result = validateEnvelopeFile(fixture('valid-multidimensional-research.md'));
  assert.equal(result.valid, true);
  assert.ok(result.warnings.some((warning) => warning.code === 'status-is-summary-only'));
});

test('governed artifact without authority fails with a suggested fix', () => {
  const result = validateEnvelopeFile(fixture('invalid-missing-authority.md'));
  const error = result.errors.find((item) => item.code === 'missing-governed-authority');
  assert.equal(result.valid, false);
  assert.ok(error.message);
  assert.ok(error.suggested_fix);
});

test('extension cannot shadow a governing concept', () => {
  const result = validateEnvelopeFile(fixture('invalid-shadowed-concept.md'));
  assert.equal(result.valid, false);
  assert.ok(result.errors.some((error) => error.code === 'governing-concept-shadowed'));
});

test('creation provenance is required', () => {
  const result = validateEnvelopeFile(fixture('invalid-missing-provenance.md'));
  assert.equal(result.valid, false);
  assert.ok(result.errors.some((error) => error.code === 'missing-required-field' && error.field === 'created_at'));
});

test('the slice artifacts dogfood their own candidate envelope', () => {
  const files = [
    path.join(ROOT, 'foundation', 'directives', 'AD-009-knowledge-object-envelope-candidate.md'),
    path.join(ROOT, 'knowledge', 'research', 'evidence', 'knowledge-object-envelope-candidate.md'),
    path.join(ROOT, 'milestones', 'V1-M02-knowledge-object-envelope-candidate-handoff.md'),
  ];
  for (const file of files) {
    const result = validateEnvelopeFile(file);
    assert.equal(result.valid, true, `${file}: ${JSON.stringify(result.errors)}`);
  }
});

test('repository compatibility is measured without requiring mass migration', () => {
  const report = evaluateEnvelope();
  assert.ok(report.markdown_files >= 225);
  assert.ok(report.valid > 100);
  assert.ok(report.invalid > 0);
  assert.ok(report.error_counts['missing-required-field'] > 0);
});

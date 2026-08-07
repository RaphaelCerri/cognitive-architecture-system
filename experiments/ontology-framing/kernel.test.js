'use strict';

const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert/strict');
const { kernel, normalizeType, relationFamily, validateKernel } = require('./kernel');
const { consumeFile } = require('./knowledge-object-contract');
const { proposeAliasMigration } = require('./migration');
const { evaluateRepository } = require('./evaluate');

const ROOT = path.resolve(__dirname, '..', '..');

test('kernel remains a minimal experimental candidate', () => {
  assert.equal(validateKernel().valid, true);
  assert.equal(kernel.dimensions.length, 6);
  assert.equal(kernel.canonicality, 'experimental_candidate_not_canon');
});

test('compatibility alias preserves declared type and exposes normalization', () => {
  assert.deepEqual(normalizeType('architectural_directive'), {
    declared: 'architectural_directive',
    normalized: 'architecture_directive',
    alias_applied: true,
    disposition: 'compatibility_alias',
  });
});

test('relation family is derived without replacing the declared predicate', () => {
  assert.equal(relationFamily('authorized_by'), 'governance');
  assert.equal(relationFamily('unknown_relation'), 'unclassified');
});

test('candidate contract consumes a real canonical ADR', () => {
  const artifact = consumeFile(path.join(ROOT, 'foundation', 'decisions', 'ADR-0001-canonical-knowledge-object-format.md'));
  assert.equal(artifact.valid, true);
  assert.equal(artifact.identity.id, 'ADR-0001');
  assert.equal(artifact.classification.normalized, 'architectural_decision_record');
  assert.equal(artifact.authority.explicit, true);
  assert.equal(artifact.representation.locator_is_semantic_identity, false);
});

test('alias migration stays proposal-only and does not rewrite the source', () => {
  const file = path.join(ROOT, 'foundation', 'directives', 'AD-006-temporary-dual-role-execution.md');
  const before = fs.readFileSync(file, 'utf8');
  const artifact = consumeFile(file);
  const proposals = proposeAliasMigration([artifact]);
  const after = fs.readFileSync(file, 'utf8');
  assert.equal(artifact.classification.declared, 'architectural_directive');
  assert.equal(proposals.length, 1);
  assert.equal(proposals[0].canonicality, 'proposal_only');
  assert.equal(proposals[0].apply_automatically, false);
  assert.equal(after, before);
});

test('repository evaluation uses the candidate contract on real artifacts', () => {
  const report = evaluateRepository();
  assert.ok(report.contract_valid >= 180);
  assert.ok(report.coverage_percent >= 80);
  assert.ok(report.alias_occurrences.includes('AD-006'));
  assert.ok(report.alias_occurrences.includes('AD-011'));
  assert.deepEqual(
    report.migration_proposals.map((proposal) => proposal.artifact_ref),
    report.alias_occurrences,
  );
  assert.ok(report.migration_proposals.every((proposal) => (
    proposal.canonicality === 'proposal_only' && proposal.apply_automatically === false
  )));
  assert.ok(report.relation_family_coverage_percent > 50);
  assert.ok(report.unclassified_relation_predicates.length > 0);
});

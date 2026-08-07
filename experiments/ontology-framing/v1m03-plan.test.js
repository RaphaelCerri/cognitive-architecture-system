'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { CANDIDATE_PROFILES, evaluateContractReadiness } = require('./v1m03-plan');

test('planning can proceed while schema stabilization remains blocked', () => {
  const result = evaluateContractReadiness({
    ontology_boundary_confirmed: true,
    confirmed_contract_profiles: [],
    human_authorship_trials: 0,
    authority_normalization: 'unresolved',
    unknown_field_preservation: true,
    non_destructive_migration_dry_run: false,
  });
  assert.equal(result.planning_status, 'ready');
  assert.equal(result.stabilization_status, 'blocked');
  assert.ok(result.blockers.includes('missing_or_insufficient:confirmed_contract_profiles'));
});

test('candidate profiles are examples, not Core Type claims', () => {
  assert.equal(CANDIDATE_PROFILES.length, 4);
  assert.ok(CANDIDATE_PROFILES.every((profile) => profile.purpose.length > 0));
  assert.ok(CANDIDATE_PROFILES[0].purpose.includes('sem declarar um Core Type'));
});

test('all readiness evidence is required before another ADF', () => {
  const result = evaluateContractReadiness({
    ontology_boundary_confirmed: true,
    confirmed_contract_profiles: ['base_knowledge_object'],
    human_authorship_trials: 1,
    authority_normalization: 'resolved',
    robust_yaml_parser: true,
    profile_owners_confirmed: true,
    semantic_validation_boundary: 'defined',
    unknown_field_preservation: true,
    non_destructive_migration_dry_run: true,
  });
  assert.equal(result.stabilization_status, 'eligible_for_adf');
  assert.deepEqual(result.blockers, []);
});

test('validation never grants authority', () => {
  const result = evaluateContractReadiness({});
  assert.ok(result.invariants.includes('validation_does_not_grant_authority'));
});

test('unknown-field loss blocks stabilization', () => {
  const result = evaluateContractReadiness({
    ontology_boundary_confirmed: true,
    confirmed_contract_profiles: ['base_knowledge_object'],
    human_authorship_trials: 1,
    authority_normalization: 'resolved',
    robust_yaml_parser: true,
    profile_owners_confirmed: true,
    semantic_validation_boundary: 'defined',
    unknown_field_preservation: false,
    non_destructive_migration_dry_run: true,
  });
  assert.ok(result.blockers.includes('missing_or_insufficient:unknown_field_preservation'));
});

test('the plan explicitly prohibits premature implementation', () => {
  const result = evaluateContractReadiness({});
  assert.ok(result.prohibited_actions.includes('implement_type_registry'));
  assert.ok(result.prohibited_actions.includes('mass_migrate_repository'));
  assert.ok(result.prohibited_actions.includes('stabilize_public_schema'));
});

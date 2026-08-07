'use strict';

const REQUIRED_EVIDENCE = [
  ['ontology_boundary_confirmed', (value) => value === true],
  ['confirmed_contract_profiles', (value) => Array.isArray(value) && value.length > 0],
  ['human_authorship_trials', (value) => Number.isInteger(value) && value > 0],
  ['authority_normalization', (value) => value === 'resolved'],
  ['robust_yaml_parser', (value) => value === true],
  ['profile_owners_confirmed', (value) => value === true],
  ['semantic_validation_boundary', (value) => value === 'defined'],
  ['unknown_field_preservation', (value) => value === true],
  ['non_destructive_migration_dry_run', (value) => value === true],
];

const CANDIDATE_PROFILES = Object.freeze([
  {
    id: 'base_knowledge_object',
    purpose: 'Envelope comum candidato, sem declarar um Core Type novo.',
    examples: ['ADR-0001', 'AP-0006', 'IHR-0040'],
  },
  {
    id: 'governed_decision_artifact',
    purpose: 'Testar authority explícita em decisions, directives, policies e protocols.',
    examples: ['ADR-0001', 'AD-011', 'GOV-003', 'GRP-001'],
  },
  {
    id: 'proposal_and_research_artifact',
    purpose: 'Testar proposals e pesquisa sem estabilizar lifecycle ou taxonomia.',
    examples: ['AP-0006', 'ARP-0010', 'RFC via ADR-0013'],
  },
  {
    id: 'evidence_and_handoff_artifact',
    purpose: 'Testar scope, método, validações e limitações sem transformar evidência em decisão.',
    examples: ['IHR-0040', 'ASSESS-0002', 'ARP-0010-E03'],
  },
]);

function evaluateContractReadiness(evidence = {}) {
  const blockers = REQUIRED_EVIDENCE
    .filter(([field, predicate]) => !predicate(evidence[field]))
    .map(([field]) => `missing_or_insufficient:${field}`);

  return {
    schema_version: '0.1.0-experimental',
    planning_status: 'ready',
    stabilization_status: blockers.length === 0 ? 'eligible_for_adf' : 'blocked',
    blockers,
    candidate_profiles: CANDIDATE_PROFILES,
    invariants: [
      'markdown_yaml_remains_canonical_source',
      'unknown_fields_are_preserved',
      'status_does_not_collapse_independent_dimensions',
      'aliases_are_views_not_silent_rewrites',
      'validation_does_not_grant_authority',
      'common_markdown_is_not_forced_into_knowledge_objects',
      'structural_validity_is_not_semantic_validity',
    ],
    prohibited_actions: [
      'stabilize_public_schema',
      'promote_core_types',
      'implement_type_registry',
      'mass_migrate_repository',
      'discard_unknown_fields',
      'treat_observed_labels_as_registry',
    ],
  };
}

module.exports = { CANDIDATE_PROFILES, REQUIRED_EVIDENCE, evaluateContractReadiness };

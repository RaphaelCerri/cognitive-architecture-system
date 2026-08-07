'use strict';

const { classifyRepositoryCorpus } = require('./corpus-classifier');
const { evaluateCandidateProfiles } = require('./contract-profile-candidates');

function evaluateContractExperiment(repositoryRoot) {
  const corpus = classifyRepositoryCorpus(repositoryRoot);
  const candidates = corpus.items.filter((item) => item.category === 'knowledge_object_candidate');
  const profileEvaluation = evaluateCandidateProfiles(candidates);
  const invariants = {
    categories_total_and_disjoint: corpus.category_total === corpus.total_files,
    source_bytes_unchanged: !corpus.source_mutated,
    declared_types_preserved: candidates.every((item) => item.profile.declared_knowledge_type === item.data.knowledge_type),
    base_profile_on_every_candidate: candidates.every((item) => item.profile.candidate_profiles.includes('base_knowledge_object')),
    at_most_one_specialization: candidates.every((item) => item.profile.candidate_profiles.length <= 2),
  };
  const failedInvariants = Object.entries(invariants).filter(([, passed]) => !passed).map(([name]) => name);
  return {
    schema_version: '0.1.0-experimental',
    experiment: 'V1-M03-contract-parser-corpus-E05',
    canonicality: 'diagnostic_experiment_not_schema',
    status: failedInvariants.length === 0 ? 'experimental_evidence_ready_for_review' : 'stopped_on_invariant_failure',
    parser: { implementation: 'yaml', version: '2.8.1', mode: 'yaml_1_2_core_read_only', max_alias_count: 50 },
    corpus: {
      roots: corpus.corpus_roots,
      excluded_roots: corpus.excluded_roots,
      total_files: corpus.total_files,
      categories: corpus.category_counts,
      source_mutated: corpus.source_mutated,
      hash_drift: corpus.hash_drift,
    },
    profiles: profileEvaluation,
    invariants,
    failed_invariants: failedInvariants,
    limitations: [
      'does_not_define_or_validate_a_canonical_schema',
      'does_not_confirm_candidate_profiles_or_core_types',
      'does_not_validate_authority_or_body_semantics',
      'does_not_migrate_or_rewrite_sources',
      'raw_repository_coverage_is_diagnostic_only',
    ],
    next_gate: 'independent_review_then_human_authorship_decision',
  };
}

module.exports = { evaluateContractExperiment };

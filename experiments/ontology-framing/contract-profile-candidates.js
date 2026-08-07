'use strict';

const PROFILE_IDS = Object.freeze([
  'base_knowledge_object',
  'governed_decision_artifact',
  'proposal_and_research_artifact',
  'evidence_and_handoff_artifact',
]);

const SPECIALIZATIONS = Object.freeze({
  governed_decision_artifact: new Set([
    'architectural_decision_record', 'architecture_directive', 'architectural_directive',
    'architecture_council_directive', 'architectural_manifesto', 'architectural_principle',
    'architectural_protocol', 'governance_policy',
  ]),
  proposal_and_research_artifact: new Set([
    'architectural_proposal', 'architectural_research_program',
  ]),
  evidence_and_handoff_artifact: new Set([
    'adf_assessment', 'governance_review_assessment', 'implementation_handoff_report', 'research_evidence',
  ]),
});

function claim(data, field) {
  return typeof data[field] === 'string' && data[field].trim() ? data[field] : null;
}

function assignCandidateProfiles(data) {
  const declaredType = claim(data, 'knowledge_type');
  const matches = Object.entries(SPECIALIZATIONS)
    .filter(([, labels]) => labels.has(declaredType))
    .map(([profile]) => profile);
  const specialization = matches.length === 1 ? matches[0]
    : matches.length === 0 ? 'unclassified_candidate_profile' : 'overlapping_candidate_profiles';
  return {
    declared_knowledge_type: declaredType,
    candidate_profiles: ['base_knowledge_object', ...(matches.length === 1 ? matches : [])],
    specialization,
    mapping_basis: 'declared_knowledge_type_snapshot_not_registry',
  };
}

function evaluateCandidateProfiles(artifacts) {
  const profiles = Object.fromEntries(PROFILE_IDS.map((id) => [id, { count: 0, examples: [], gaps: [] }]));
  const unclassified = [];
  const overlapping = [];
  const authorityFields = ['decision_authority', 'owner', 'author', 'decision_authority_role', 'review_authority'];
  const baseFields = ['schema_version', 'id', 'kind', 'knowledge_type', 'title', 'status', 'language', 'created_at'];

  for (const artifact of artifacts) {
    for (const profile of artifact.profile.candidate_profiles) {
      profiles[profile].count += 1;
      if (profiles[profile].examples.length < 5) profiles[profile].examples.push(artifact.id || artifact.relative_path);
    }
    const missingBase = baseFields.filter((field) => artifact.data[field] === undefined || artifact.data[field] === null);
    if (missingBase.length > 0) profiles.base_knowledge_object.gaps.push({ artifact: artifact.id || artifact.relative_path, reason: `missing:${missingBase.join(',')}` });
    if (artifact.profile.specialization === 'governed_decision_artifact'
      && !authorityFields.some((field) => claim(artifact.data, field))) {
      profiles.governed_decision_artifact.gaps.push({ artifact: artifact.id || artifact.relative_path, reason: 'missing:declared_authority_claim' });
    }
    if (artifact.profile.specialization === 'unclassified_candidate_profile') unclassified.push(artifact.id || artifact.relative_path);
    if (artifact.profile.specialization === 'overlapping_candidate_profiles') overlapping.push(artifact.id || artifact.relative_path);
  }

  return {
    canonicality: 'candidate_profile_diagnostics_not_schema_or_registry',
    profiles,
    unclassified,
    overlapping,
    raw_coverage_is_gate: false,
  };
}

module.exports = { PROFILE_IDS, SPECIALIZATIONS, assignCandidateProfiles, evaluateCandidateProfiles };

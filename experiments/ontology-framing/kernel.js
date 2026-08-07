'use strict';

const kernel = Object.freeze({
  schema_version: 'ontology-kernel-0.1-experimental',
  canonicality: 'experimental_candidate_not_canon',
  root_contract: 'knowledge_object_candidate',
  dimensions: ['identity', 'classification', 'authority', 'provenance', 'state', 'representation'],
  type_aliases: {
    architectural_directive: {
      normalized: 'architecture_directive',
      disposition: 'compatibility_alias',
      rationale: 'The repository uses both labels for the same directive family; declared values remain preserved.',
    },
  },
  relation_families: {
    governance: ['governed_by', 'constrained_by', 'authorized_by', 'approved_by', 'ratified_by'],
    provenance: ['established_by', 'produced_in', 'recorded_by', 'documented_in', 'handed_off_by'],
    dependency: ['depends_on', 'follows', 'prepares'],
    evolution: ['refines', 'revises', 'supersedes', 'amends'],
    evidence: ['evidence_for', 'informs', 'evaluates', 'documents'],
    association: ['related_to', 'contextualizes', 'supports'],
  },
});

function normalizeType(declaredType) {
  const alias = kernel.type_aliases[declaredType];
  return {
    declared: declaredType,
    normalized: alias ? alias.normalized : declaredType,
    alias_applied: Boolean(alias),
    disposition: alias ? alias.disposition : 'unchanged',
  };
}

function relationFamily(predicate) {
  for (const [family, predicates] of Object.entries(kernel.relation_families)) {
    if (predicates.includes(predicate)) return family;
  }
  return 'unclassified';
}

function validateKernel(candidate = kernel) {
  const errors = [];
  if (candidate.canonicality !== 'experimental_candidate_not_canon') errors.push('kernel-must-remain-experimental');
  if (candidate.root_contract !== 'knowledge_object_candidate') errors.push('root-contract-must-remain-candidate');
  if (new Set(candidate.dimensions).size !== 6) errors.push('six-minimum-dimensions-required');
  for (const [declared, alias] of Object.entries(candidate.type_aliases)) {
    if (declared === alias.normalized) errors.push(`identity-alias:${declared}`);
    if (alias.disposition !== 'compatibility_alias') errors.push(`destructive-alias:${declared}`);
  }
  return { valid: errors.length === 0, errors };
}

module.exports = { kernel, normalizeType, relationFamily, validateKernel };

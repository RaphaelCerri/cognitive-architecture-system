'use strict';

function proposeAliasMigration(consumedArtifacts) {
  return consumedArtifacts
    .filter((artifact) => artifact.valid && artifact.classification.alias_applied)
    .map((artifact) => ({
      kind: 'ontology_alias_migration_proposal',
      canonicality: 'proposal_only',
      artifact_ref: artifact.identity.id,
      field: 'knowledge_type',
      before: artifact.classification.declared,
      after: artifact.classification.normalized,
      reason: 'Replace a compatibility alias only after human review and repository-wide migration validation.',
      apply_automatically: false,
    }));
}

module.exports = { proposeAliasMigration };

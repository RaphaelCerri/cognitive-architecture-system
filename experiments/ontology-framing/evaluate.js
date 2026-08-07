'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { consumeFile } = require('./knowledge-object-contract');
const { proposeAliasMigration } = require('./migration');

const ROOT = path.resolve(__dirname, '..', '..');
const AREAS = ['foundation', 'knowledge', 'architecture', 'milestones', 'roadmap'];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function evaluateRepository(root = ROOT) {
  const files = AREAS.flatMap((area) => walk(path.join(root, area))).filter((file) => file.endsWith('.md'));
  const results = files.map((file) => consumeFile(file));
  const valid = results.filter((result) => result.valid);
  const invalid = results.filter((result) => !result.valid);
  const allRelations = valid.flatMap((result) => result.provenance.relations);
  const unclassifiedRelations = allRelations.filter((relation) => relation.family === 'unclassified');
  const classifiedRelations = allRelations.filter((relation) => relation.family !== 'unclassified');
  const aliases = valid.filter((result) => result.classification.alias_applied);
  return {
    schema_version: '0.1.0-experimental',
    canonicality: 'derived_evaluation_not_source_of_truth',
    markdown_files: files.length,
    contract_valid: valid.length,
    contract_invalid: invalid.length,
    coverage_percent: Number(((valid.length / files.length) * 100).toFixed(1)),
    explicit_authority: valid.filter((result) => result.authority.explicit).length,
    relation_instances: allRelations.length,
    classified_relation_instances: classifiedRelations.length,
    relation_family_coverage_percent: allRelations.length === 0 ? 0 : Number(((classifiedRelations.length / allRelations.length) * 100).toFixed(1)),
    alias_occurrences: aliases.map((result) => result.identity.id),
    migration_proposals: proposeAliasMigration(valid),
    unclassified_relation_predicates: [...new Set(unclassifiedRelations.map((relation) => relation.predicate))].sort(),
    invalid_reasons: Object.fromEntries([...new Set(invalid.flatMap((result) => result.errors))].sort().map((reason) => [
      reason,
      invalid.filter((result) => result.errors.includes(reason)).length,
    ])),
  };
}

if (require.main === module) console.log(JSON.stringify(evaluateRepository(), null, 2));

module.exports = { evaluateRepository };

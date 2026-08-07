'use strict';

const fs = require('node:fs');
const path = require('node:path');

const AREAS = ['foundation', 'knowledge', 'architecture', 'milestones', 'roadmap'];

function walk(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function field(frontmatter, name) {
  const match = frontmatter.match(new RegExp(`^${name}:\\s*["']?([^"'\\r\\n#]+)`, 'm'));
  return match ? match[1].trim() : null;
}

function parseArtifact(file) {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.startsWith('---')) return null;
  const end = content.indexOf('\n---', 3);
  if (end < 0) return null;
  const frontmatter = content.slice(3, end);
  const relations = [...frontmatter.matchAll(/^\s+- type:\s*["']?([^"'\r\n#]+)/gm)].map((match) => match[1].trim());
  return {
    file,
    id: field(frontmatter, 'id'),
    kind: field(frontmatter, 'kind'),
    knowledge_type: field(frontmatter, 'knowledge_type'),
    relations,
  };
}

function count(values) {
  return Object.fromEntries([...new Set(values)].sort().map((value) => [value, values.filter((item) => item === value).length]));
}

function scanRepository(root = path.resolve(__dirname, '..', '..')) {
  const files = AREAS.flatMap((area) => walk(path.join(root, area)))
    .filter((file) => /\.(md|ya?ml)$/i.test(file));
  const artifacts = files.map(parseArtifact).filter(Boolean);
  const ids = artifacts.map((artifact) => artifact.id).filter(Boolean);
  const duplicatedIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  const knowledgeTypes = artifacts.map((artifact) => artifact.knowledge_type).filter(Boolean);
  const relations = artifacts.flatMap((artifact) => artifact.relations);
  const findings = [];

  if (knowledgeTypes.includes('architecture_directive') && knowledgeTypes.includes('architectural_directive')) {
    findings.push({ severity: 'material', code: 'directive-type-alias-drift', detail: 'Two near-equivalent directive type labels coexist.' });
  }
  if (new Set(relations).size > 40) {
    findings.push({ severity: 'observation', code: 'relation-vocabulary-proliferation', detail: `${new Set(relations).size} relation labels exist without an ontology registry.` });
  }
  if (duplicatedIds.length > 0) {
    findings.push({ severity: 'blocker', code: 'duplicate-artifact-identity', detail: duplicatedIds.join(', ') });
  }

  return {
    schema_version: '0.1.0-experimental',
    canonicality: 'derived_inventory_not_source_of_truth',
    scanned_files: files.length,
    artifacts_with_frontmatter: artifacts.length,
    artifacts_with_id: ids.length,
    knowledge_types: count(knowledgeTypes),
    relation_types: count(relations),
    relation_type_count: new Set(relations).size,
    duplicate_ids: duplicatedIds,
    findings,
  };
}

if (require.main === module) console.log(JSON.stringify(scanRepository(), null, 2));

module.exports = { scanRepository };

'use strict';

const fs = require('node:fs');
const { normalizeType, relationFamily } = require('./kernel');

function scalar(frontmatter, name) {
  const match = frontmatter.match(new RegExp(`^${name}:\\s*["']?([^"'\\r\\n#]+)`, 'm'));
  return match ? match[1].trim() : null;
}

function parseFrontmatter(content) {
  if (!content.startsWith('---')) return null;
  const end = content.indexOf('\n---', 3);
  if (end < 0) return null;
  const frontmatter = content.slice(3, end);
  const relations = [];
  const lines = frontmatter.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const type = lines[index].match(/^\s+- type:\s*["']?([^"'#]+)/);
    if (!type) continue;
    const target = (lines[index + 1] || '').match(/^\s+target:\s*["']?([^"'#]+)/);
    relations.push({ predicate: type[1].trim(), target: target ? target[1].trim() : null });
  }
  return { frontmatter, relations };
}

function consumeContent(content, sourceRef = 'in-memory') {
  const parsed = parseFrontmatter(content);
  const errors = [];
  if (!parsed) return { valid: false, errors: ['missing-yaml-frontmatter'], source_ref: sourceRef };

  const required = ['schema_version', 'id', 'kind', 'knowledge_type'];
  const fields = Object.fromEntries(required.map((name) => [name, scalar(parsed.frontmatter, name)]));
  for (const [name, value] of Object.entries(fields)) if (!value) errors.push(`missing-required-field:${name}`);
  if (errors.length > 0) return { valid: false, errors, source_ref: sourceRef };

  const authorityFields = ['decision_authority', 'owner', 'author', 'decision_authority_role', 'review_authority'];
  const authorityClaims = authorityFields
    .map((name) => ({ field: name, value: scalar(parsed.frontmatter, name) }))
    .filter((claim) => claim.value);
  const stateDimensions = [...parsed.frontmatter.matchAll(/^([a-z_]+_state):\s*["']?([^"'\r\n#]+)/gm)]
    .map((match) => ({ dimension: match[1], value: match[2].trim() }));
  const classification = normalizeType(fields.knowledge_type);

  return {
    valid: true,
    errors: [],
    contract_version: 'knowledge-object-contract-0.1-experimental',
    canonicality: 'normalized_view_not_source_of_truth',
    source_ref: sourceRef,
    identity: { id: fields.id },
    classification: { kind: fields.kind, ...classification },
    authority: {
      claims: authorityClaims,
      explicit: authorityClaims.length > 0,
      interpretation: authorityClaims.length > 0 ? 'declared_claim_requires_governance_context' : 'unknown',
    },
    provenance: {
      created_at: scalar(parsed.frontmatter, 'created_at'),
      relations: parsed.relations.map((relation) => ({
        ...relation,
        family: relationFamily(relation.predicate),
        declared: true,
      })),
    },
    state: {
      status: scalar(parsed.frontmatter, 'status'),
      dimensions: stateDimensions,
    },
    representation: {
      source_format: 'markdown_with_yaml_frontmatter',
      schema_version: fields.schema_version,
      locator_is_semantic_identity: false,
    },
  };
}

function consumeFile(file) {
  return consumeContent(fs.readFileSync(file, 'utf8'), file);
}

module.exports = { consumeContent, consumeFile, parseFrontmatter, scalar };

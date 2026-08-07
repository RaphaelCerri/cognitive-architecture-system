'use strict';

const fs = require('node:fs');
const { candidate } = require('./model');
const { normalizeType } = require('./kernel');
const { parseFrontmatter, scalar } = require('./knowledge-object-contract');

const REQUIRED_FIELDS = ['schema_version', 'id', 'kind', 'knowledge_type', 'title', 'status', 'language', 'created_at'];
const OBSERVED_COMPATIBLE_TYPES = new Set([
  'adf_assessment', 'architectural_decision_record', 'architectural_directive',
  'architectural_manifesto', 'architectural_principle', 'architectural_proposal',
  'architectural_protocol', 'architectural_research_program',
  'architecture_council_directive', 'architecture_directive', 'architecture_document',
  'bootstrap_charter', 'bootstrap_execution_protocol', 'governance_policy',
  'implementation_handoff_report', 'milestone_record', 'research_evidence', 'roadmap',
]);
const GOVERNED_TYPES = new Set([
  'architectural_decision_record', 'architectural_directive', 'architecture_council_directive',
  'architecture_directive', 'architectural_manifesto', 'architectural_principle',
  'architectural_protocol', 'governance_policy',
]);
const AUTHORITY_FIELDS = ['decision_authority', 'owner', 'author', 'decision_authority_role', 'review_authority'];

function issue(code, field, message, suggestedFix) {
  return { code, field, message, suggested_fix: suggestedFix };
}

function bodyFrom(content) {
  if (!content.startsWith('---')) return '';
  const end = content.indexOf('\n---', 3);
  return end < 0 ? '' : content.slice(end + 4).trim();
}

function validateEnvelopeContent(content, sourceRef = 'in-memory') {
  const parsed = parseFrontmatter(content);
  const errors = [];
  const warnings = [];
  if (!parsed) {
    errors.push(issue('missing-frontmatter', 'frontmatter', 'Knowledge Objects require YAML frontmatter.', 'Add a YAML block delimited by --- at the start of the file.'));
    return { valid: false, source_ref: sourceRef, errors, warnings };
  }

  const fields = Object.fromEntries(REQUIRED_FIELDS.map((name) => [name, scalar(parsed.frontmatter, name)]));
  for (const [name, value] of Object.entries(fields)) {
    if (!value) errors.push(issue('missing-required-field', name, `Required field ${name} is absent.`, `Declare ${name} in frontmatter.`));
  }

  if (fields.id && !/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/.test(fields.id)) {
    errors.push(issue('invalid-semantic-id', 'id', 'ID must be stable, uppercase and segment-based.', 'Use a form such as AP-0006 or ARP-0010-E03.'));
  }

  if (!bodyFrom(content)) {
    errors.push(issue('empty-human-body', 'body', 'Frontmatter alone is not a complete Knowledge Object.', 'Add human-readable purpose, decision or evidence content.'));
  }

  const authorityClaims = AUTHORITY_FIELDS.map((name) => ({ field: name, value: scalar(parsed.frontmatter, name) })).filter((claim) => claim.value);
  const normalizedType = fields.knowledge_type ? normalizeType(fields.knowledge_type) : null;
  const effectiveType = normalizedType ? normalizedType.normalized : null;
  if (effectiveType && GOVERNED_TYPES.has(effectiveType) && authorityClaims.length === 0) {
    errors.push(issue('missing-governed-authority', 'authority', 'Governed artifacts require an explicit authority claim.', 'Declare decision_authority, owner, author or another profile-appropriate authority field.'));
  }

  const reserved = new Set(candidate.candidate_concepts.map((concept) => concept.id));
  if (fields.knowledge_type && reserved.has(fields.knowledge_type)) {
    errors.push(issue('governing-concept-shadowed', 'knowledge_type', 'An artifact type cannot redefine a governing metamodel concept.', 'Choose an observed compatible type or use a namespaced extension such as domain:term.'));
  } else if (fields.knowledge_type && !OBSERVED_COMPATIBLE_TYPES.has(fields.knowledge_type) && !fields.knowledge_type.includes(':')) {
    warnings.push(issue('unnamespaced-unregistered-type', 'knowledge_type', 'The type is neither observed-compatible nor namespaced.', 'Use a namespace for experimental extensions or propose registry inclusion.'));
  }

  if (normalizedType && normalizedType.alias_applied) {
    warnings.push(issue('compatibility-alias-used', 'knowledge_type', 'A compatibility alias is accepted but remains migration debt.', `Prefer ${normalizedType.normalized} in new artifacts; migrate existing sources only after approval.`));
  }

  for (const relation of parsed.relations) {
    if (!relation.target) errors.push(issue('relation-without-target', 'relations', `Relation ${relation.predicate} has no target.`, 'Declare a stable target identity on the following line.'));
  }

  const stateDimensions = [...parsed.frontmatter.matchAll(/^([a-z_]+_state):/gm)].map((match) => match[1]);
  if (stateDimensions.length > 1) {
    warnings.push(issue('status-is-summary-only', 'status', 'Multiple state dimensions exist; status cannot replace them.', 'Treat status as compatibility summary and preserve each explicit state dimension.'));
  }

  return {
    valid: errors.length === 0,
    source_ref: sourceRef,
    contract_version: 'knowledge-object-envelope-0.1-experimental',
    canonicality: 'validation_result_not_source_of_truth',
    errors,
    warnings,
    authorship: {
      required_fields: REQUIRED_FIELDS,
      authority_claims: authorityClaims,
      normalized_type: normalizedType,
      state_dimensions: stateDimensions,
      unknown_fields_preserved: true,
    },
  };
}

function validateEnvelopeFile(file) {
  return validateEnvelopeContent(fs.readFileSync(file, 'utf8'), file);
}

module.exports = { REQUIRED_FIELDS, validateEnvelopeContent, validateEnvelopeFile };

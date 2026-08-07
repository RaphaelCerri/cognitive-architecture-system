'use strict';

const candidate = Object.freeze({
  schema_version: '0.1.0-experimental',
  canonicality: 'research_candidate_not_canon',
  layers: [
    {
      id: 'constitutional_metamodel',
      responsibility: 'Define admissibility rules for identity, authority, provenance, change and extension.',
      does_not_define: ['domain vocabulary', 'file format', 'runtime behavior'],
    },
    {
      id: 'system_ontology',
      responsibility: 'Defines versioned domain terms, relations, constraints and state dimensions that obey the metamodel.',
      does_not_define: ['constitutional authority', 'physical directories', 'serialization syntax'],
    },
    {
      id: 'representations',
      responsibility: 'Encodes or derives ontology-governed knowledge as Markdown/YAML, JSON, graphs, indexes or runtime views.',
      does_not_define: ['new semantic authority', 'independent source of truth', 'silent ontology mutation'],
    },
  ],
  candidate_concepts: [
    { id: 'identity_rule', layer: 'constitutional_metamodel' },
    { id: 'authority_rule', layer: 'constitutional_metamodel' },
    { id: 'provenance_rule', layer: 'constitutional_metamodel' },
    { id: 'change_rule', layer: 'constitutional_metamodel' },
    { id: 'extension_rule', layer: 'constitutional_metamodel' },
    { id: 'type_definition', layer: 'system_ontology' },
    { id: 'relation_definition', layer: 'system_ontology' },
    { id: 'constraint_definition', layer: 'system_ontology' },
    { id: 'state_dimension_definition', layer: 'system_ontology' },
    { id: 'canonical_document', layer: 'representations' },
    { id: 'compiled_view', layer: 'representations' },
    { id: 'graph_view', layer: 'representations' },
    { id: 'index_view', layer: 'representations' },
  ],
  axioms: [
    { id: 'AX-01', statement: 'Canonical knowledge has stable identity and a declared authoritative artifact.', sources: ['ADR-0001', 'PMM-001'] },
    { id: 'AX-02', statement: 'A representation or physical location is not the ontology and does not create semantic authority.', sources: ['AP-0006', 'ADR-0009'] },
    { id: 'AX-03', statement: 'Explicit relations prevail over inferred relations.', sources: ['ADR-0002'] },
    { id: 'AX-04', statement: 'Derived relations and views are reproducible, attributable and cannot silently mutate canonical sources.', sources: ['ADR-0002', 'PROJECT_CHARTER'] },
    { id: 'AX-05', statement: 'Proposal, approval, execution and acceptance are distinct acts and states.', sources: ['PROJECT_CHARTER', 'GOV-001'] },
    { id: 'AX-06', statement: 'Authority is explicit, scoped and cannot be inferred from model capability or tool access.', sources: ['GOV-001', 'E57', 'E77'] },
    { id: 'AX-07', statement: 'Provenance and superseded history remain traceable across change.', sources: ['PMM-001', 'AIP-001'] },
    { id: 'AX-08', statement: 'Independent state dimensions must not be collapsed into one overloaded status field.', sources: ['AD-004'] },
    { id: 'AX-09', statement: 'Extensions may add namespaced vocabulary but cannot redefine governing semantics without a new decision.', sources: ['AP-0006', 'ADF-001'] },
    { id: 'AX-10', statement: 'Constitutional and ontological meaning remains independent of model, runtime, vendor and language.', sources: ['AD-005', 'GOV-001', 'AP-0006'] },
    { id: 'AX-11', statement: 'Canonical change requires authority and review; generated proposals never apply themselves.', sources: ['E75', 'PMM-001'] },
    { id: 'AX-12', statement: 'Unknown or insufficient evidence remains explicit and cannot be promoted into fact by omission.', sources: ['PROJECT_CHARTER', 'AIP-001'] },
  ],
  competency_questions: [
    { id: 'CQ-01', question: 'What gives an object stable identity across files, views and runtimes?', answer: 'A declared identity governed independently from its representations.', covered_by: ['AX-01', 'AX-02', 'AX-10'] },
    { id: 'CQ-02', question: 'Which artifact is authoritative when two representations disagree?', answer: 'The declared canonical artifact under the Project Memory authority hierarchy.', covered_by: ['AX-01', 'AX-04'] },
    { id: 'CQ-03', question: 'Was a relation authored or inferred, and which wins on conflict?', answer: 'Its provenance records the mode; the explicit authored relation prevails.', covered_by: ['AX-03', 'AX-04'] },
    { id: 'CQ-04', question: 'Who may propose, approve, execute and accept a change?', answer: 'Actors with explicit scoped authority for each distinct act.', covered_by: ['AX-05', 'AX-06'] },
    { id: 'CQ-05', question: 'How can a decision be superseded without erasing history?', answer: 'Create a traceable new decision/change record and retain provenance to the superseded artifact.', covered_by: ['AX-07'] },
    { id: 'CQ-06', question: 'How are documentary, governance, research, implementation and operational state distinguished?', answer: 'As separate state dimensions with their own vocabularies and transition authority.', covered_by: ['AX-08'] },
    { id: 'CQ-07', question: 'Can a directory, YAML field, database table or graph node become a type by existing?', answer: 'No. Physical and serialization forms are representations, not existence criteria.', covered_by: ['AX-02'] },
    { id: 'CQ-08', question: 'Can a compiler or model create canonical relations or decisions automatically?', answer: 'It may derive attributed views or proposals, but canonical change requires authority and review.', covered_by: ['AX-04', 'AX-11'] },
    { id: 'CQ-09', question: 'How can a capability package add vocabulary without changing the system foundation?', answer: 'Through a versioned namespace that does not shadow governing terms.', covered_by: ['AX-09'] },
    { id: 'CQ-10', question: 'Would changing model, runtime, language or vendor change the meaning of an object?', answer: 'No. Adapters may change representation or execution, not governing meaning.', covered_by: ['AX-10'] },
    { id: 'CQ-11', question: 'What happens when required evidence is absent?', answer: 'The claim remains unknown or insufficiently supported and cannot be silently promoted.', covered_by: ['AX-12'] },
    { id: 'CQ-12', question: 'How is a proposed memory update distinguished from an accepted memory change?', answer: 'They are separate acts with separate authority, provenance and state transitions.', covered_by: ['AX-05', 'AX-11'] },
  ],
});

function validateCandidate(model = candidate) {
  const errors = [];
  const layerIds = model.layers.map((layer) => layer.id);
  const axiomIds = new Set(model.axioms.map((axiom) => axiom.id));

  if (model.canonicality !== 'research_candidate_not_canon') errors.push('candidate-must-not-claim-canonicality');
  if (new Set(layerIds).size !== 3 || !['constitutional_metamodel', 'system_ontology', 'representations'].every((id) => layerIds.includes(id))) {
    errors.push('three-layer-boundary-required');
  }

  for (const concept of model.candidate_concepts) {
    if (!layerIds.includes(concept.layer)) errors.push(`unknown-layer:${concept.id}`);
  }

  for (const axiom of model.axioms) {
    if (!axiom.sources || axiom.sources.length === 0) errors.push(`axiom-without-source:${axiom.id}`);
  }

  for (const question of model.competency_questions) {
    if (!question.answer) errors.push(`unanswered-question:${question.id}`);
    if (!question.covered_by.every((id) => axiomIds.has(id))) errors.push(`unknown-axiom-coverage:${question.id}`);
  }

  const governingText = JSON.stringify({ layers: model.layers, concepts: model.candidate_concepts, axioms: model.axioms });
  if (/\b(OpenAI|Anthropic|Claude|Codex|Copilot|VS Code)\b/i.test(governingText)) errors.push('vendor-or-runtime-leakage');

  return { valid: errors.length === 0, errors };
}

function validateExtension(extension, model = candidate) {
  const errors = [];
  const reserved = new Set(model.candidate_concepts.map((concept) => concept.id));
  if (!extension.namespace || !/^[a-z][a-z0-9_-]*$/.test(extension.namespace)) errors.push('invalid-namespace');
  if (!extension.version) errors.push('missing-version');
  for (const term of extension.terms || []) {
    if (reserved.has(term.id)) errors.push(`governing-term-shadowed:${term.id}`);
    if (!term.id.startsWith(`${extension.namespace}:`)) errors.push(`term-not-namespaced:${term.id}`);
  }
  return { valid: errors.length === 0, errors };
}

module.exports = { candidate, validateCandidate, validateExtension };

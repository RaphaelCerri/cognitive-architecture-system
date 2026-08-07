const { createEnvelope } = require('./envelope');
const { evaluateGovernance } = require('./guard');

const directiveDigest = 'a'.repeat(64);
const envelope = createEnvelope({
  work_id: 'WORK-DEMO', envelope_id: 'ENV-DEMO',
  from: {
    actor_ref: 'agent-csa', runtime_identity: 'runtime-s-csa',
    role: 'csa', session_ref: 's-csa',
  },
  to_role: 'cea', separation_mode: 'independent_multi_agent',
  authority_basis: 'AD-010', directive_ref: 'AD-010', directive_digest: directiveDigest,
  base_head: 'e014c51', artifact_refs: [], artifact_hashes: {},
  evidence_refs: [], limitations: [],
});
const make = (type, role, session_ref, kind = 'agent') => ({
  type, role, session_ref,
  actor: { ref: `${kind}-${role}`, kind, runtime_identity: `runtime-${session_ref}` },
  directive_digest: directiveDigest,
});
const events = [
  make('INTENT_REGISTERED', 'cvo', 's-cvo', 'human'),
  make('ARCHITECTURE_PROPOSED', 'csa', 's-csa'),
  { ...make('WORK_AUTHORIZED', 'cvo', 's-cvo', 'human'), authority_basis: 'AD-010' },
  { ...make('EXECUTION_STARTED', 'cea', 's-cea'), envelope_digest: envelope.envelope_digest },
  make('HANDOFF_SUBMITTED', 'cea', 's-cea'),
  make('REVIEW_RECOMMENDED', 'reviewer', 's-review'),
  { ...make('RESULT_ACCEPTED', 'cvo', 's-cvo', 'human'), authority_basis: 'AD-010' },
];

console.log(JSON.stringify(evaluateGovernance({
  mode: 'independent_multi_agent', envelope, events,
  referenceVerifier(kind) {
    if (kind === 'authority_basis' || kind === 'base_head') return true;
    if (kind === 'directive') return directiveDigest;
    return undefined;
  },
}), null, 2));

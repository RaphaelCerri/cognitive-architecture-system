const test = require('node:test');
const assert = require('node:assert/strict');
const { createEnvelope, verifyEnvelope } = require('./envelope');
const { evaluateGovernance } = require('./guard');

const directiveDigest = 'a'.repeat(64);

function envelope(mode = 'independent_multi_agent', overrides = {}) {
  return createEnvelope({
    work_id: 'WORK-001',
    envelope_id: 'ENV-001',
    from: {
      actor_ref: 'agent-csa', runtime_identity: 'runtime-session-csa',
      role: 'csa', session_ref: 'session-csa',
    },
    to_role: 'cea',
    separation_mode: mode,
    authority_basis: 'AD-010',
    directive_ref: 'foundation/directives/AD-010-governed-role-orchestration.md',
    directive_digest: directiveDigest,
    base_head: 'e014c51',
    artifact_refs: [],
    artifact_hashes: {},
    evidence_refs: [],
    limitations: [],
    ...overrides,
  });
}

function event(type, role, session_ref, kind = 'agent', extra = {}) {
  return {
    type, role, session_ref,
    actor: { ref: `${kind}-${role}`, kind, runtime_identity: `runtime-${session_ref}` },
    directive_digest: directiveDigest, ...extra,
  };
}

function independentEvents(env = envelope()) {
  return [
    event('INTENT_REGISTERED', 'cvo', 'session-cvo', 'human'),
    event('ARCHITECTURE_PROPOSED', 'csa', 'session-csa'),
    event('WORK_AUTHORIZED', 'cvo', 'session-cvo', 'human', {
      authority_basis: env.authority_basis,
    }),
    event('EXECUTION_STARTED', 'cea', 'session-cea', 'agent', {
      envelope_digest: env.envelope_digest,
    }),
    event('HANDOFF_SUBMITTED', 'cea', 'session-cea'),
    event('REVIEW_RECOMMENDED', 'reviewer', 'session-review'),
    event('RESULT_ACCEPTED', 'cvo', 'session-cvo', 'human', {
      authority_basis: env.authority_basis,
    }),
    event('MEMORY_UPDATE_APPLIED', 'cea', 'session-memory', 'agent', {
      authority_basis: env.authority_basis,
    }),
  ];
}

function referenceVerifier(kind) {
  if (kind === 'authority_basis' || kind === 'base_head') return true;
  if (kind === 'directive') return directiveDigest;
  return undefined;
}

function evaluate(mode, env, events, extra = {}) {
  return evaluateGovernance({
    mode, envelope: env, events, referenceVerifier, ...extra,
  });
}

test('accepts an independently separated flow', () => {
  const env = envelope();
  assert.equal(evaluate('independent_multi_agent', env, independentEvents(env)).valid, true);
});

test('detects envelope tampering', () => {
  const value = { ...envelope(), to_role: 'reviewer' };
  assert.deepEqual(verifyEnvelope(value).errors, ['envelope_digest_mismatch']);
});

test('blocks CSA and CEA sharing a session in independent mode', () => {
  const events = independentEvents();
  events[3].session_ref = 'session-csa';
  assert.ok(evaluate('independent_multi_agent', envelope(), events)
    .blockers.includes('csa_cea_not_independent'));
});

test('allows declared logical transition but marks it non-independent', () => {
  const env = envelope('single_session_logical', {
    from: {
      actor_ref: 'agent-csa', runtime_identity: 'runtime-session-shared',
      role: 'csa', session_ref: 'session-shared',
    },
  });
  const events = independentEvents(env);
  events[1].session_ref = 'session-shared';
  events[1].actor.runtime_identity = 'runtime-session-shared';
  events[3].session_ref = 'session-shared';
  events[3].actor.runtime_identity = 'runtime-session-shared';
  events.splice(3, 0,
    event('ROLE_EXITED', 'csa', 'session-shared'),
    event('ROLE_ENTERED', 'cea', 'session-shared'));
  const result = evaluate('single_session_logical', env, events);
  assert.equal(result.valid, true);
  assert.ok(result.limitations.includes('accumulated_role:no_independent_review_claim'));
});

test('blocks an undeclared same-session role transition', () => {
  const env = envelope('single_session_logical');
  const events = independentEvents(env);
  events[1].session_ref = events[3].session_ref;
  assert.ok(evaluate('single_session_logical', env, events)
    .blockers.includes('unregistered_or_invalid_role_transition'));
});

test('blocks executor self-acceptance after changing role label', () => {
  const events = independentEvents();
  events[6] = event('RESULT_ACCEPTED', 'csa', 'session-cea');
  assert.ok(evaluate('independent_multi_agent', envelope(), events)
    .blockers.includes('self_acceptance'));
});

test('blocks a router performing an authority act', () => {
  const events = independentEvents();
  events[2] = event('WORK_AUTHORIZED', 'orchestrator', 'session-router', 'router');
  assert.ok(evaluate('independent_multi_agent', envelope(), events)
    .blockers.includes('router_authority_violation:WORK_AUTHORIZED'));
});

test('blocks an agent acting outside the authority matrix', () => {
  const events = independentEvents();
  events[2] = event('WORK_AUTHORIZED', 'csa', 'session-csa');
  assert.ok(evaluate('independent_multi_agent', envelope(), events)
    .blockers.includes('role_not_authorized:WORK_AUTHORIZED:csa'));
});

test('blocks duplicate core events that could shadow later acts', () => {
  const events = independentEvents();
  events.splice(4, 0, event('EXECUTION_STARTED', 'cea', 'session-cea-2'));
  assert.ok(evaluate('independent_multi_agent', envelope(), events)
    .blockers.includes('duplicate_core_event:EXECUTION_STARTED'));
});

test('blocks a directive changed after authorization', () => {
  const events = independentEvents();
  events[4].directive_digest = 'b'.repeat(64);
  assert.ok(evaluate('independent_multi_agent', envelope(), events)
    .blockers.includes('directive_digest_changed:HANDOFF_SUBMITTED'));
});

test('blocks memory application before acceptance', () => {
  const events = independentEvents();
  const memory = events.pop();
  events.splice(5, 0, memory);
  assert.ok(evaluate('independent_multi_agent', envelope(), events)
    .blockers.includes('memory_applied_before_acceptance'));
});

test('blocks a broken manual air-gap chain', () => {
  const env = envelope('manual_air_gap', { previous_envelope_digest: 'old' });
  const result = evaluate('manual_air_gap', env, independentEvents(env), {
    expectedPreviousDigest: 'expected',
  });
  assert.ok(result.blockers.includes('envelope_chain_mismatch'));
  assert.ok(result.blockers.includes('air_gap_envelope_unverified'));
});

test('blocks a false independence claim in same-session review', () => {
  const env = envelope('single_session_logical', {
    from: {
      actor_ref: 'agent-csa', runtime_identity: 'runtime-session-shared',
      role: 'csa', session_ref: 'session-shared',
    },
  });
  const events = independentEvents(env);
  events[1].session_ref = 'session-shared';
  events[1].actor.runtime_identity = 'runtime-session-shared';
  events[3].session_ref = 'session-shared';
  events[3].actor.runtime_identity = 'runtime-session-shared';
  events[5].session_ref = 'session-shared';
  events[5].actor.runtime_identity = 'runtime-session-shared';
  events.splice(3, 0,
    event('ROLE_EXITED', 'csa', 'session-shared'),
    event('ROLE_ENTERED', 'cea', 'session-shared'));
  const result = evaluate('single_session_logical', env, events);
  assert.ok(result.blockers.includes('false_independence_claim'));
});

test('blocks one runtime impersonating every role across sessions', () => {
  const env = envelope();
  const events = independentEvents(env);
  events.forEach((item) => { item.actor.runtime_identity = 'same-runtime'; });
  assert.ok(evaluate('independent_multi_agent', env, events)
    .blockers.includes('csa_cea_same_identity'));
});

test('blocks an agent impersonating the human CVO', () => {
  const env = envelope();
  const events = independentEvents(env);
  events[2].actor.kind = 'agent';
  assert.ok(evaluate('independent_multi_agent', env, events)
    .blockers.includes('human_authority_required:WORK_AUTHORIZED:cvo'));
});

test('requires an explicit chain expectation for manual air gap', () => {
  const env = envelope('manual_air_gap', { previous_envelope_digest: null });
  const result = evaluate('manual_air_gap', env, independentEvents(env));
  assert.ok(result.blockers.includes('air_gap_chain_expectation_missing'));
  assert.equal(result.separation_claim, 'unverified');
});

test('blocks envelope sender not matching the architecture event', () => {
  const env = envelope('independent_multi_agent', {
    from: {
      actor_ref: 'someone-else', runtime_identity: 'runtime-session-csa',
      role: 'csa', session_ref: 'session-csa',
    },
  });
  assert.ok(evaluate('independent_multi_agent', env, independentEvents(env))
    .blockers.includes('envelope_sender_not_bound'));
});

test('blocks references when no trusted verifier is supplied', () => {
  const env = envelope();
  const result = evaluateGovernance({
    mode: 'independent_multi_agent', envelope: env, events: independentEvents(env),
  });
  assert.ok(result.blockers.includes('reference_verifier_missing'));
  assert.equal(result.separation_claim, 'unverified');
});

test('blocks role entry occurring before role exit', () => {
  const env = envelope('single_session_logical', {
    from: {
      actor_ref: 'agent-csa', runtime_identity: 'runtime-session-shared',
      role: 'csa', session_ref: 'session-shared',
    },
  });
  const events = independentEvents(env);
  events[1].session_ref = 'session-shared';
  events[1].actor.runtime_identity = 'runtime-session-shared';
  events[3].session_ref = 'session-shared';
  events[3].actor.runtime_identity = 'runtime-session-shared';
  events.splice(3, 0,
    event('ROLE_ENTERED', 'cea', 'session-shared'),
    event('ROLE_EXITED', 'csa', 'session-shared'));
  assert.ok(evaluate('single_session_logical', env, events)
    .blockers.includes('unregistered_or_invalid_role_transition'));
});

test('blocks memory application by a non-executor role', () => {
  const env = envelope();
  const events = independentEvents(env);
  events[7].role = 'csa';
  assert.ok(evaluate('independent_multi_agent', env, events)
    .blockers.includes('role_not_authorized:MEMORY_UPDATE_APPLIED:csa'));
});

test('blocks same runtime claiming independent review in logical mode', () => {
  const env = envelope('single_session_logical', {
    from: {
      actor_ref: 'agent-csa', runtime_identity: 'runtime-session-shared',
      role: 'csa', session_ref: 'session-shared',
    },
  });
  const events = independentEvents(env);
  events[1].session_ref = 'session-shared';
  events[1].actor.runtime_identity = 'runtime-session-shared';
  events[3].session_ref = 'session-shared';
  events[3].actor.runtime_identity = 'runtime-session-shared';
  events[5].actor.runtime_identity = 'runtime-session-shared';
  events[5].independence = 'independent';
  events.splice(3, 0,
    event('ROLE_EXITED', 'csa', 'session-shared'),
    event('ROLE_ENTERED', 'cea', 'session-shared'));
  assert.ok(evaluate('single_session_logical', env, events)
    .blockers.includes('false_independence_claim'));
});

test('blocks manual air gap without distinct sessions and identities', () => {
  const env = envelope('manual_air_gap');
  const events = independentEvents(env);
  for (const index of [1, 3, 5]) {
    events[index].session_ref = 'same-session';
    events[index].actor.runtime_identity = 'same-runtime';
  }
  const result = evaluate('manual_air_gap', env, events, { expectedPreviousDigest: null });
  assert.ok(result.blockers.includes('air_gap_sessions_not_distinct'));
  assert.ok(result.blockers.includes('air_gap_identities_not_distinct'));
  assert.equal(result.separation_claim, 'unverified');
});

test('blocks logical single-session mode when CSA and CEA sessions differ', () => {
  const env = envelope('single_session_logical');
  const result = evaluate('single_session_logical', env, independentEvents(env));
  assert.ok(result.blockers.includes('logical_mode_sessions_not_shared'));
  assert.equal(result.separation_claim, 'unverified');
});

const { verifyEnvelope } = require('./envelope');

const MODES = new Set([
  'independent_multi_agent',
  'manual_air_gap',
  'single_session_logical',
]);

const CORE_FLOW = [
  'INTENT_REGISTERED',
  'ARCHITECTURE_PROPOSED',
  'WORK_AUTHORIZED',
  'EXECUTION_STARTED',
  'HANDOFF_SUBMITTED',
  'REVIEW_RECOMMENDED',
  'RESULT_ACCEPTED',
];

const ROUTER_FORBIDDEN = new Set([
  'ARCHITECTURE_PROPOSED',
  'WORK_AUTHORIZED',
  'EXECUTION_STARTED',
  'REVIEW_RECOMMENDED',
  'RESULT_ACCEPTED',
  'MEMORY_UPDATE_APPLIED',
]);

const EVENT_ROLES = {
  INTENT_REGISTERED: new Set(['cvo']),
  ARCHITECTURE_PROPOSED: new Set(['csa']),
  WORK_AUTHORIZED: new Set(['cvo', 'council']),
  EXECUTION_STARTED: new Set(['cea']),
  HANDOFF_SUBMITTED: new Set(['cea']),
  REVIEW_RECOMMENDED: new Set(['csa', 'reviewer']),
  RESULT_ACCEPTED: new Set(['cvo', 'council', 'csa']),
  MEMORY_UPDATE_PROPOSED: new Set(['cea']),
  MEMORY_UPDATE_APPLIED: new Set(['cea']),
};

function actorOf(event) {
  return event.actor || {};
}

function first(events, type) {
  return events.find((event) => event.type === type);
}

function evaluateGovernance(input) {
  const {
    mode, envelope, events = [], expectedPreviousDigest, referenceVerifier,
  } = input;
  const blockers = [];
  const limitations = [];
  const block = (code) => {
    if (!blockers.includes(code)) blockers.push(code);
  };

  if (!MODES.has(mode)) block('unknown_separation_mode');
  const hasExpectedPrevious = Object.prototype.hasOwnProperty.call(
    input, 'expectedPreviousDigest',
  );
  const envelopeCheck = verifyEnvelope(
    envelope || {}, hasExpectedPrevious ? expectedPreviousDigest : undefined,
  );
  envelopeCheck.errors.forEach(block);
  if (envelope?.separation_mode !== mode) block('mode_envelope_mismatch');

  for (const event of events) {
    const actor = actorOf(event);
    if (!actor.ref || !actor.kind || !actor.runtime_identity
        || !event.role || !event.session_ref) {
      block(`unidentified_event_actor:${event.type || 'unknown'}`);
    }
    if (actor.kind === 'router' && ROUTER_FORBIDDEN.has(event.type)) {
      block(`router_authority_violation:${event.type}`);
    }
    if (EVENT_ROLES[event.type] && !EVENT_ROLES[event.type].has(event.role)) {
      block(`role_not_authorized:${event.type}:${event.role}`);
    }
    if (['cvo', 'council'].includes(event.role) && actor.kind !== 'human') {
      block(`human_authority_required:${event.type}:${event.role}`);
    }
  }

  if (typeof referenceVerifier !== 'function') {
    block('reference_verifier_missing');
  } else if (envelope) {
    if (referenceVerifier('authority_basis', envelope.authority_basis) !== true) {
      block('authority_basis_unverified');
    }
    if (referenceVerifier('base_head', envelope.base_head) !== true) {
      block('base_head_unverified');
    }
    if (referenceVerifier('directive', envelope.directive_ref) !== envelope.directive_digest) {
      block('directive_reference_digest_mismatch');
    }
    for (const ref of envelope.artifact_refs || []) {
      if (referenceVerifier('artifact', ref) !== envelope.artifact_hashes?.[ref]) {
        block(`artifact_reference_digest_mismatch:${ref}`);
      }
    }
  }

  let previousIndex = -1;
  for (const type of CORE_FLOW) {
    const matches = events.reduce((indexes, event, index) => {
      if (event.type === type) indexes.push(index);
      return indexes;
    }, []);
    const index = matches[0] ?? -1;
    if (index === -1) block(`missing_event:${type}`);
    else if (index <= previousIndex) block(`invalid_event_order:${type}`);
    if (matches.length > 1) block(`duplicate_core_event:${type}`);
    previousIndex = Math.max(previousIndex, index);
  }

  const authorized = first(events, 'WORK_AUTHORIZED');
  const proposed = first(events, 'ARCHITECTURE_PROPOSED');
  const executed = first(events, 'EXECUTION_STARTED');
  const reviewed = first(events, 'REVIEW_RECOMMENDED');
  const accepted = first(events, 'RESULT_ACCEPTED');
  const frozenDigest = envelope?.directive_digest;

  if (authorized?.authority_basis !== envelope?.authority_basis) {
    block('authorization_basis_not_bound');
  }
  if (accepted?.authority_basis !== envelope?.authority_basis) {
    block('acceptance_basis_not_bound');
  }
  if (executed?.envelope_digest !== envelope?.envelope_digest) {
    block('execution_envelope_not_bound');
  }
  if (proposed && envelope?.from) {
    const sender = envelope.from;
    const actor = actorOf(proposed);
    if (sender.actor_ref !== actor.ref
        || sender.runtime_identity !== actor.runtime_identity
        || sender.role !== proposed.role
        || sender.session_ref !== proposed.session_ref) {
      block('envelope_sender_not_bound');
    }
  }
  if (executed && envelope?.to_role !== executed.role) block('envelope_recipient_not_bound');

  const authorizationIndex = (events || []).indexOf(authorized);
  events.slice(Math.max(authorizationIndex, 0)).forEach((event) => {
    if (event.directive_digest !== frozenDigest) {
      block(`directive_digest_changed:${event.type}`);
    }
  });

  const architectSession = proposed?.session_ref;
  const executorSession = executed?.session_ref;
  const reviewerSession = reviewed?.session_ref;
  const acceptorSession = accepted?.session_ref;
  const architectActor = actorOf(proposed);
  const executorActor = actorOf(executed);
  const reviewerActor = actorOf(reviewed);
  const acceptorActor = actorOf(accepted);
  const sameIdentity = (left, right) => Boolean(left?.ref && right?.ref
    && (left.ref === right.ref || left.runtime_identity === right.runtime_identity));

  if (acceptorSession && ([architectSession, executorSession].includes(acceptorSession)
      || sameIdentity(acceptorActor, architectActor)
      || sameIdentity(acceptorActor, executorActor))) {
    block('self_acceptance');
  }
  if (mode === 'independent_multi_agent') {
    if (architectSession === executorSession) block('csa_cea_not_independent');
    if (sameIdentity(architectActor, executorActor)) block('csa_cea_same_identity');
    if ([architectSession, executorSession].includes(reviewerSession)) {
      block('reviewer_not_independent');
    }
    if (sameIdentity(reviewerActor, architectActor)
        || sameIdentity(reviewerActor, executorActor)) {
      block('reviewer_same_identity');
    }
  }

  if (mode === 'single_session_logical' && architectSession === executorSession) {
    limitations.push('accumulated_role:no_independent_review_claim');
    const executionIndex = events.indexOf(executed);
    const exitIndex = events.findIndex((event) => event.type === 'ROLE_EXITED'
      && event.session_ref === executorSession && event.role === 'csa'
      && sameIdentity(actorOf(event), architectActor));
    const enterIndex = events.findIndex((event) => event.type === 'ROLE_ENTERED'
      && event.session_ref === executorSession && event.role === 'cea'
      && sameIdentity(actorOf(event), executorActor));
    if (!(authorizationIndex < exitIndex && exitIndex < enterIndex && enterIndex < executionIndex)) {
      block('unregistered_or_invalid_role_transition');
    }
    if ((reviewerSession === executorSession
        || sameIdentity(reviewerActor, architectActor)
        || sameIdentity(reviewerActor, executorActor))
        && reviewed?.independence !== 'none') {
      block('false_independence_claim');
    }
  }
  if (mode === 'single_session_logical'
      && architectSession && executorSession && architectSession !== executorSession) {
    block('logical_mode_sessions_not_shared');
  }

  if (mode === 'manual_air_gap') {
    if (!hasExpectedPrevious) block('air_gap_chain_expectation_missing');
    if (!envelopeCheck.valid) block('air_gap_envelope_unverified');
    if (architectSession === executorSession
        || [architectSession, executorSession].includes(reviewerSession)) {
      block('air_gap_sessions_not_distinct');
    }
    if (sameIdentity(architectActor, executorActor)
        || sameIdentity(reviewerActor, architectActor)
        || sameIdentity(reviewerActor, executorActor)) {
      block('air_gap_identities_not_distinct');
    }
  }

  const acceptedIndex = events.indexOf(accepted);
  events.forEach((event, index) => {
    if (event.type === 'MEMORY_UPDATE_APPLIED' && (acceptedIndex === -1 || index < acceptedIndex)) {
      block('memory_applied_before_acceptance');
    }
    if (event.type === 'MEMORY_UPDATE_APPLIED'
        && event.authority_basis !== envelope?.authority_basis) {
      block('memory_authority_basis_not_bound');
    }
  });

  return {
    valid: blockers.length === 0,
    blockers,
    limitations,
    separation_claim: blockers.length > 0 ? 'unverified'
      : mode === 'single_session_logical' ? 'logical_only'
        : mode === 'manual_air_gap' ? 'declared_manual_transport'
          : 'declared_distinct_sessions',
  };
}

module.exports = { evaluateGovernance };

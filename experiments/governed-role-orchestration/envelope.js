const { createHash } = require('node:crypto');

function canonicalize(value) {
  if (Array.isArray(value)) return value.map(canonicalize);
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.keys(value).sort().map((key) => [key, canonicalize(value[key])]),
    );
  }
  return value;
}

function digest(value) {
  return createHash('sha256')
    .update(JSON.stringify(canonicalize(value)))
    .digest('hex');
}

function envelopePayload(envelope) {
  const { envelope_digest: ignored, ...payload } = envelope;
  return payload;
}

function createEnvelope(input) {
  const envelope = {
    work_id: input.work_id,
    envelope_id: input.envelope_id,
    from: input.from,
    to_role: input.to_role,
    separation_mode: input.separation_mode,
    authority_basis: input.authority_basis,
    directive_ref: input.directive_ref,
    directive_digest: input.directive_digest,
    base_head: input.base_head,
    artifact_refs: input.artifact_refs || [],
    artifact_hashes: input.artifact_hashes || {},
    evidence_refs: input.evidence_refs || [],
    limitations: input.limitations || [],
    previous_envelope_digest: input.previous_envelope_digest || null,
  };
  return { ...envelope, envelope_digest: digest(envelope) };
}

function verifyEnvelope(envelope, expectedPreviousDigest) {
  const required = [
    'work_id', 'envelope_id', 'from', 'to_role', 'separation_mode',
    'authority_basis', 'directive_ref', 'directive_digest', 'base_head',
    'artifact_refs', 'artifact_hashes', 'evidence_refs', 'limitations',
    'previous_envelope_digest', 'envelope_digest',
  ];
  const errors = required
    .filter((field) => envelope[field] === undefined || envelope[field] === '')
    .map((field) => `missing_envelope_field:${field}`);

  if (!envelope.from?.actor_ref || !envelope.from?.runtime_identity
      || !envelope.from?.role || !envelope.from?.session_ref) {
    errors.push('invalid_envelope_sender');
  }
  if (!/^[a-f0-9]{64}$/i.test(envelope.directive_digest || '')) {
    errors.push('invalid_directive_digest');
  }
  for (const ref of envelope.artifact_refs || []) {
    if (!/^[a-f0-9]{64}$/i.test(envelope.artifact_hashes?.[ref] || '')) {
      errors.push(`missing_or_invalid_artifact_hash:${ref}`);
    }
  }
  if (digest(envelopePayload(envelope)) !== envelope.envelope_digest) {
    errors.push('envelope_digest_mismatch');
  }
  if (expectedPreviousDigest !== undefined
      && envelope.previous_envelope_digest !== expectedPreviousDigest) {
    errors.push('envelope_chain_mismatch');
  }
  return { valid: errors.length === 0, errors };
}

module.exports = { canonicalize, createEnvelope, digest, verifyEnvelope };

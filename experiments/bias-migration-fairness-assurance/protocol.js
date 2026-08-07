'use strict';

const CLASSIFICATIONS = Object.freeze([
  'preserved',
  'reduced',
  'amplified',
  'displaced',
  'introduced',
  'obscured',
  'unknown',
]);

function observationKey(observation) {
  return `${observation.subject}::${observation.dimension}`;
}

function hasEvidence(observation) {
  return Array.isArray(observation.evidence_refs) && observation.evidence_refs.length > 0;
}

function indexObservations(observations = []) {
  return new Map(observations.map((observation) => [observationKey(observation), observation]));
}

function compareObservations(before = [], after = []) {
  const baseline = indexObservations(before);
  const changed = indexObservations(after);
  const keys = new Set([...baseline.keys(), ...changed.keys()]);
  const findings = [];

  for (const key of keys) {
    const previous = baseline.get(key);
    const current = changed.get(key);
    let classification;
    let reason;

    if (!previous && current) {
      classification = hasEvidence(current) ? 'introduced' : 'unknown';
      reason = hasEvidence(current)
        ? 'A harm surface appears only after the change.'
        : 'The new harm surface has no evidence reference.';
    } else if (previous && !current) {
      classification = 'obscured';
      reason = 'A baseline harm surface disappeared from measurement, not necessarily from reality.';
    } else if (!hasEvidence(previous) || !hasEvidence(current)) {
      classification = 'unknown';
      reason = 'Before/after comparison lacks evidence on at least one side.';
    } else if (!Number.isFinite(previous.harm_score) || !Number.isFinite(current.harm_score)) {
      classification = 'unknown';
      reason = 'Before/after comparison lacks a finite normalized harm score.';
    } else if (current.harm_score < previous.harm_score) {
      classification = 'reduced';
      reason = 'Observed harm decreased for the same subject and dimension.';
    } else if (current.harm_score > previous.harm_score) {
      classification = 'amplified';
      reason = 'Observed harm increased for the same subject and dimension.';
    } else {
      classification = 'preserved';
      reason = 'Observed harm did not change for the same subject and dimension.';
    }

    findings.push({
      key,
      subject: (current || previous).subject,
      dimension: (current || previous).dimension,
      before: previous ? previous.harm_score ?? null : null,
      after: current ? current.harm_score ?? null : null,
      classification,
      reason,
    });
  }

  const reduced = findings.filter((finding) => finding.classification === 'reduced');
  const worsened = findings.filter((finding) =>
    ['amplified', 'introduced'].includes(finding.classification),
  );

  if (reduced.length > 0 && worsened.length > 0) {
    findings.push({
      key: 'migration-summary',
      subject: 'cross-surface',
      dimension: 'net-displacement',
      before: null,
      after: null,
      classification: 'displaced',
      reason: 'At least one measured harm decreased while another was amplified or introduced.',
    });
  }

  return findings;
}

function assessChange(change) {
  const findings = compareObservations(change.before, change.after);
  const controls = [];

  if (!change.change_ref || !change.baseline_ref) {
    controls.push({ severity: 'blocker', code: 'missing-versioned-change', message: 'Change and baseline references are mandatory.' });
  }

  if (!change.roles || change.roles.proposer === change.roles.approver) {
    controls.push({ severity: 'blocker', code: 'self-approval', message: 'The proposer cannot approve the same assessment.' });
  }

  if (change.sensitive_attributes_used && !change.sensitive_data_authority_ref) {
    controls.push({ severity: 'blocker', code: 'unauthorized-sensitive-data', message: 'Sensitive attributes require explicit authority and purpose.' });
  }

  if (change.memory_effect && change.memory_effect !== 'proposal_only') {
    controls.push({ severity: 'blocker', code: 'automatic-memory-write', message: 'The experiment may only propose a Project Memory update.' });
  }

  const unsupportedFairnessClaim = change.claim === 'fairness_improved' && (
    findings.length === 0 ||
    findings.some((finding) => ['amplified', 'introduced', 'obscured', 'unknown', 'displaced'].includes(finding.classification)) ||
    !change.segmented_evaluation
  );

  if (unsupportedFairnessClaim) {
    controls.push({ severity: 'blocker', code: 'unsupported-fairness-claim', message: 'A fairness improvement claim requires segmented before/after evidence with no hidden regression.' });
  }

  if (findings.some((finding) => finding.classification === 'displaced')) {
    controls.push({ severity: 'material', code: 'bias-displacement', message: 'A local improvement displaced harm to another measured surface.' });
  }

  if (findings.some((finding) => ['obscured', 'unknown'].includes(finding.classification))) {
    controls.push({ severity: 'material', code: 'incomplete-observability', message: 'At least one harm surface is missing or lacks comparable evidence.' });
  }

  let recommendation = 'accept';
  if (controls.some((control) => control.severity === 'blocker')) recommendation = 'block';
  else if (controls.some((control) => control.severity === 'material')) recommendation = 'revise';
  else if (findings.some((finding) => ['amplified', 'introduced'].includes(finding.classification))) recommendation = 'revise';

  return {
    schema_version: '0.1.0-experimental',
    kind: 'bias_migration_assessment',
    canonicality: 'derived_experimental_evidence',
    change_ref: change.change_ref || null,
    baseline_ref: change.baseline_ref || null,
    classifications: [...new Set(findings.map((finding) => finding.classification))],
    findings,
    controls,
    recommendation,
    limitations: [
      'A normalized harm score is scenario evidence, not a universal definition of fairness.',
      'No automated result authorizes a normative or canonical decision.',
      'Unmeasured people, groups, dimensions and downstream effects remain unknown.',
    ],
  };
}

module.exports = { CLASSIFICATIONS, assessChange, compareObservations };

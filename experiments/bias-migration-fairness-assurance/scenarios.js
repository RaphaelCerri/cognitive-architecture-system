'use strict';

function obs(subject, dimension, harm_score, evidence = true) {
  return {
    subject,
    dimension,
    harm_score,
    evidence_refs: evidence ? [`fixture:${subject}:${dimension}`] : [],
  };
}

const base = {
  baseline_ref: 'memory-v1',
  roles: { proposer: 'cea-agent', evaluator: 'bmfa-evaluator', approver: 'human-owner' },
  segmented_evaluation: true,
  sensitive_attributes_used: false,
  sensitive_data_authority_ref: null,
  memory_effect: 'proposal_only',
  claim: 'change_assessed',
};

const scenarios = [
  {
    ...base,
    id: 'memory-compression-displaces-uncertainty',
    change_ref: 'memory-v2-compressed',
    before: [obs('reader', 'verbosity-harm', 0.7), obs('minority-view', 'omission', 0.1)],
    after: [obs('reader', 'verbosity-harm', 0.2), obs('minority-view', 'omission', 0.8)],
    expected: { recommendation: 'revise', classification: 'displaced' },
  },
  {
    ...base,
    id: 'retrieval-improves-dominant-source-only',
    change_ref: 'retrieval-v2',
    before: [obs('dominant-source', 'underexposure', 0.5), obs('rare-source', 'underexposure', 0.4)],
    after: [obs('dominant-source', 'underexposure', 0.1), obs('rare-source', 'underexposure', 0.7)],
    expected: { recommendation: 'revise', classification: 'displaced' },
  },
  {
    ...base,
    id: 'runtime-migration-obscures-refusal',
    change_ref: 'runtime-b',
    before: [obs('user', 'unsupported-refusal', 0.5)],
    after: [],
    expected: { recommendation: 'revise', classification: 'obscured' },
  },
  {
    ...base,
    id: 'policy-update-with-clean-reduction',
    change_ref: 'policy-v2',
    before: [obs('user', 'authority-confusion', 0.8)],
    after: [obs('user', 'authority-confusion', 0.2)],
    expected: { recommendation: 'accept', classification: 'reduced' },
  },
  {
    ...base,
    id: 'dual-role-self-approval',
    change_ref: 'dual-role-review',
    roles: { proposer: 'same-agent', evaluator: 'same-agent', approver: 'same-agent' },
    before: [obs('project', 'self-confirmation', 0.5)],
    after: [obs('project', 'self-confirmation', 0.2)],
    expected: { recommendation: 'block', control: 'self-approval' },
  },
  {
    ...base,
    id: 'hypothesis-promoted-without-evidence',
    change_ref: 'memory-hypothesis-v2',
    before: [obs('project', 'epistemic-overconfidence', 0.3)],
    after: [obs('project', 'epistemic-overconfidence', 0.1, false)],
    expected: { recommendation: 'revise', classification: 'unknown' },
  },
  {
    ...base,
    id: 'capability-introduces-creator-preference',
    change_ref: 'capability-v1',
    before: [],
    after: [obs('future-user', 'creator-preference-lock-in', 0.6)],
    expected: { recommendation: 'revise', classification: 'introduced' },
  },
  {
    ...base,
    id: 'aggregate-fairness-hides-subgroup-regression',
    change_ref: 'model-v2',
    claim: 'fairness_improved',
    before: [obs('all-users', 'error-rate', 0.5), obs('small-subgroup', 'error-rate', 0.3)],
    after: [obs('all-users', 'error-rate', 0.2), obs('small-subgroup', 'error-rate', 0.7)],
    expected: { recommendation: 'block', control: 'unsupported-fairness-claim' },
  },
  {
    ...base,
    id: 'fairness-by-omission',
    change_ref: 'model-v3',
    claim: 'fairness_improved',
    before: [obs('underserved-user', 'incorrect-answer', 0.7), obs('underserved-user', 'refusal', 0.2)],
    after: [obs('underserved-user', 'incorrect-answer', 0.2), obs('underserved-user', 'refusal', 0.8)],
    expected: { recommendation: 'block', classification: 'displaced' },
  },
  {
    ...base,
    id: 'unauthorized-sensitive-segmentation',
    change_ref: 'evaluation-v2',
    sensitive_attributes_used: true,
    before: [obs('protected-group', 'error-rate', 0.5)],
    after: [obs('protected-group', 'error-rate', 0.4)],
    expected: { recommendation: 'block', control: 'unauthorized-sensitive-data' },
  },
  {
    ...base,
    id: 'automatic-memory-application',
    change_ref: 'memory-auto-apply',
    memory_effect: 'canonical_write',
    before: [obs('project', 'unreviewed-belief', 0.6)],
    after: [obs('project', 'unreviewed-belief', 0.2)],
    expected: { recommendation: 'block', control: 'automatic-memory-write' },
  },
];

module.exports = { scenarios };

'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { CLASSIFICATIONS, assessChange } = require('./protocol');
const { scenarios } = require('./scenarios');

test('exposes the complete experimental classification vocabulary', () => {
  assert.deepEqual(CLASSIFICATIONS, [
    'preserved', 'reduced', 'amplified', 'displaced', 'introduced', 'obscured', 'unknown',
  ]);
});

for (const scenario of scenarios) {
  test(`scenario: ${scenario.id}`, () => {
    const result = assessChange(scenario);
    assert.equal(result.recommendation, scenario.expected.recommendation);

    if (scenario.expected.classification) {
      assert.ok(result.classifications.includes(scenario.expected.classification));
    }

    if (scenario.expected.control) {
      assert.ok(result.controls.some((control) => control.code === scenario.expected.control));
    }
  });
}

test('an assessment never claims normative authority', () => {
  const result = assessChange(scenarios[0]);
  assert.equal(result.canonicality, 'derived_experimental_evidence');
  assert.ok(result.limitations.some((item) => item.includes('No automated result authorizes')));
});

test('missing version references block evaluation', () => {
  const result = assessChange({
    roles: { proposer: 'a', approver: 'b' },
    before: [],
    after: [],
    memory_effect: 'proposal_only',
  });
  assert.equal(result.recommendation, 'block');
  assert.ok(result.controls.some((control) => control.code === 'missing-versioned-change'));
});

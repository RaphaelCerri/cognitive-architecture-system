'use strict';

const { assessChange } = require('./protocol');
const { scenarios } = require('./scenarios');

const summary = scenarios.map((scenario) => {
  const assessment = assessChange(scenario);
  return {
    scenario: scenario.id,
    classifications: assessment.classifications,
    recommendation: assessment.recommendation,
    controls: assessment.controls.map((control) => control.code),
  };
});

console.log(JSON.stringify({
  schema_version: '0.1.0-experimental',
  kind: 'bmfa_demo_report',
  scenarios: summary,
}, null, 2));

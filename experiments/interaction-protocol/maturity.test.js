'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { MATURITY_LEVELS, maturityQuestion, routeByMaturity } = require('./maturity');

test('asks maturity as the single first follow-up after intent', () => {
  const question = maturityQuestion();
  assert.equal(typeof question.prompt, 'string');
  assert.equal(question.options.length, 4);
  assert.ok(!question.prompt.includes(' e '), 'the first follow-up must contain one decision only');
});

test('classifies the initiative rather than the person', () => {
  assert.ok(MATURITY_LEVELS.every((level) => !/básico|médio|avançado|extremo/i.test(level.label)));
});

test('tangible work routes directly to inspection and refinement', () => {
  const route = routeByMaturity('tangible');
  assert.equal(route.route, 'inspect_refine_and_generate_insights');
  assert.match(route.next_question, /já existe/i);
  assert.doesNotMatch(route.next_question, /defina|o que é|significa/i);
});

test('operational work routes to evidence-based evolution', () => {
  const route = routeByMaturity('operational');
  assert.equal(route.route, 'audit_optimize_and_evolve');
  assert.match(route.next_question, /resultado|problema real/i);
});

test('unknown maturity cannot silently select a route', () => {
  assert.throws(() => routeByMaturity('extreme'), /Unknown maturity level/);
});

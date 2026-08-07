'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { validateEnvelopeFile } = require('./envelope');

const ROOT = path.resolve(__dirname, '..', '..');
const AREAS = ['foundation', 'knowledge', 'architecture', 'milestones', 'roadmap'];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function summarizeIssues(results, property) {
  const issues = results.flatMap((result) => result[property]);
  return Object.fromEntries([...new Set(issues.map((item) => item.code))].sort().map((code) => [
    code,
    issues.filter((item) => item.code === code).length,
  ]));
}

function summarizeIssueFields(results, property) {
  const issues = results.flatMap((result) => result[property]);
  const keys = issues.map((item) => `${item.code}:${item.field}`);
  return Object.fromEntries([...new Set(keys)].sort().map((key) => [
    key,
    keys.filter((item) => item === key).length,
  ]));
}

function evaluateEnvelope(root = ROOT) {
  const files = AREAS.flatMap((area) => walk(path.join(root, area))).filter((file) => file.endsWith('.md'));
  const results = files.map((file) => validateEnvelopeFile(file));
  const valid = results.filter((result) => result.valid);
  return {
    schema_version: '0.1.0-experimental',
    canonicality: 'derived_evaluation_not_source_of_truth',
    markdown_files: files.length,
    valid: valid.length,
    invalid: results.length - valid.length,
    valid_percent: Number(((valid.length / results.length) * 100).toFixed(1)),
    valid_with_warnings: valid.filter((result) => result.warnings.length > 0).length,
    error_counts: summarizeIssues(results, 'errors'),
    error_field_counts: summarizeIssueFields(results, 'errors'),
    warning_counts: summarizeIssues(results, 'warnings'),
    warning_field_counts: summarizeIssueFields(results, 'warnings'),
  };
}

if (require.main === module) console.log(JSON.stringify(evaluateEnvelope(), null, 2));

module.exports = { evaluateEnvelope };

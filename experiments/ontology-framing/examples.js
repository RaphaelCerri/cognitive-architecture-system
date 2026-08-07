'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { validateEnvelopeFile } = require('./envelope');

const directory = path.join(__dirname, 'fixtures');
const results = fs.readdirSync(directory).filter((name) => name.endsWith('.md')).sort().map((name) => {
  const result = validateEnvelopeFile(path.join(directory, name));
  return {
    example: name,
    valid: result.valid,
    errors: result.errors,
    warnings: result.warnings,
  };
});

console.log(JSON.stringify({
  schema_version: '0.1.0-experimental',
  kind: 'knowledge_object_envelope_examples',
  results,
}, null, 2));

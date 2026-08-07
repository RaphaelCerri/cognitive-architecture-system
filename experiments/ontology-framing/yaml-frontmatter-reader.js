'use strict';

const fs = require('node:fs');
const YAML = require('yaml');

const MAX_ALIAS_COUNT = 50;

function problem(code, sourceRef, message, suggestedFix) {
  return { code, source_ref: sourceRef, message, suggested_fix: suggestedFix };
}

function splitFrontmatter(content, sourceRef = 'in-memory') {
  const bomOffset = content.charCodeAt(0) === 0xfeff ? 1 : 0;
  const opening = content.slice(bomOffset).match(/^---[ \t]*(?:\r?\n|$)/);
  if (!opening) return { has_frontmatter: false, source_ref: sourceRef };

  const frontmatterStart = bomOffset + opening[0].length;
  const closingPattern = /^---[ \t]*\r?$/gm;
  closingPattern.lastIndex = frontmatterStart;
  const closing = closingPattern.exec(content);
  if (!closing) {
    return {
      has_frontmatter: true,
      valid: false,
      errors: [problem('missing-closing-delimiter', sourceRef, 'Frontmatter opening delimiter has no closing delimiter on its own line.', 'Add a closing --- line before the Markdown body.')],
    };
  }

  let bodyStart = closing.index + closing[0].length;
  if (content.slice(bodyStart, bodyStart + 2) === '\r\n') bodyStart += 2;
  else if (content[bodyStart] === '\n') bodyStart += 1;

  return {
    has_frontmatter: true,
    valid: true,
    source_ref: sourceRef,
    yaml: content.slice(frontmatterStart, closing.index),
    body: content.slice(bodyStart),
  };
}

function safeValue(value) {
  if (value instanceof Map) {
    const output = Object.create(null);
    for (const [key, nested] of value.entries()) {
      if (typeof key !== 'string') throw new Error('NON_STRING_MAPPING_KEY');
      Object.defineProperty(output, key, {
        value: safeValue(nested), enumerable: true, configurable: false, writable: false,
      });
    }
    return output;
  }
  if (Array.isArray(value)) return value.map(safeValue);
  return value;
}

function normalizeYamlError(error, sourceRef) {
  const yamlCode = error && error.code ? String(error.code) : 'YAML_PARSE_ERROR';
  const code = yamlCode === 'DUPLICATE_KEY' ? 'duplicate-key'
    : yamlCode === 'TAG_RESOLVE_FAILED' ? 'custom-tag-rejected'
      : yamlCode === 'ALIAS_COUNT_EXCEEDED' ? 'alias-expansion-limit'
        : 'invalid-yaml';
  return problem(code, sourceRef, String(error.message || error),
    code === 'duplicate-key' ? 'Keep each mapping key unique.'
      : code === 'custom-tag-rejected' ? 'Use YAML 1.2 core values without custom tags.'
        : code === 'alias-expansion-limit' ? `Reduce aliases below the safe expansion limit of ${MAX_ALIAS_COUNT}.`
          : 'Correct the YAML syntax without changing the Markdown body.');
}

function parseYamlFrontmatter(content, sourceRef = 'in-memory') {
  const split = splitFrontmatter(content, sourceRef);
  if (!split.has_frontmatter || split.valid === false) return split;

  const document = YAML.parseDocument(split.yaml, {
    version: '1.2',
    schema: 'core',
    customTags: [],
    merge: false,
    uniqueKeys: true,
    prettyErrors: false,
    strict: true,
  });
  const parserProblems = [...document.errors, ...document.warnings.filter((warning) => warning.code === 'TAG_RESOLVE_FAILED')];
  if (parserProblems.length > 0) {
    return {
      has_frontmatter: true,
      valid: false,
      source_ref: sourceRef,
      errors: parserProblems.map((error) => normalizeYamlError(error, sourceRef)),
    };
  }

  try {
    const mapped = document.toJS({ mapAsMap: true, maxAliasCount: MAX_ALIAS_COUNT });
    if (!(mapped instanceof Map)) {
      return {
        has_frontmatter: true,
        valid: false,
        source_ref: sourceRef,
        errors: [problem('frontmatter-root-not-mapping', sourceRef, 'Frontmatter root must be a YAML mapping.', 'Declare named fields at the frontmatter root.')],
      };
    }
    return {
      has_frontmatter: true,
      valid: true,
      source_ref: sourceRef,
      parser: { implementation: 'yaml', version: '2.8.1', yaml_version: '1.2', max_alias_count: MAX_ALIAS_COUNT },
      data: safeValue(mapped),
      body: split.body,
      warnings: document.warnings.map((warning) => normalizeYamlError(warning, sourceRef)),
      preservation: 'parsed_view_only_source_bytes_untouched',
    };
  } catch (error) {
    const aliasError = /Excessive alias count/i.test(String(error.message || error));
    if (aliasError) error.code = 'ALIAS_COUNT_EXCEEDED';
    return { has_frontmatter: true, valid: false, source_ref: sourceRef, errors: [normalizeYamlError(error, sourceRef)] };
  }
}

function readYamlFrontmatterFile(file) {
  return parseYamlFrontmatter(fs.readFileSync(file, 'utf8'), file);
}

module.exports = { MAX_ALIAS_COUNT, parseYamlFrontmatter, readYamlFrontmatterFile, splitFrontmatter };

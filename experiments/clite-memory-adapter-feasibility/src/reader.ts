/**
 * Reader — Markdown/YAML Project Memory → ValidatedMemoryDocument.
 * Uses the `yaml` package (single justified runtime dependency: no safe YAML
 * solution exists in the repository and hand-written YAML parsing is unsafe).
 * Never writes; never touches DOM/browser; errors are always explainable.
 */
import { readFileSync } from 'node:fs';
import { parse as parseYaml } from 'yaml';
import {
  MemoryValidationError, SUPPORTED_FORMAT_VERSION,
  type MemoryIssue, type ValidatedMemoryDocument,
} from './memory-types.ts';

const KNOWN_TOP_LEVEL_FIELDS = new Set([
  'memory_id', 'format_version', 'project_id', 'project_title', 'scenario_id',
  'scenario_fixture_version', 'created_from', 'last_accepted_checkpoint',
  'content_version', 'intent', 'governance', 'execution', 'result', 'continuity',
]);

const REQUIRED_TOP_LEVEL_FIELDS = [
  'memory_id', 'format_version', 'project_id', 'project_title', 'scenario_id',
  'scenario_fixture_version', 'content_version', 'intent', 'governance',
  'execution', 'result', 'continuity',
];

/** Split a Markdown document into YAML frontmatter and narrative body. */
export function splitFrontmatter(content: string): { yamlText: string; body: string } {
  const normalized = content.replace(/\r\n/g, '\n');
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(normalized);
  if (!match) {
    throw new MemoryValidationError('O documento não possui frontmatter YAML delimitado por "---".', [
      { severity: 'reject', code: 'missing_frontmatter', message: 'Frontmatter YAML ausente; a Memory canônica exige o bloco estruturado.' },
    ]);
  }
  return { yamlText: match[1]!, body: match[2]! };
}

/** Parse and validate the structural layer of a memory document (string input). */
export function parseMemoryDocument(content: string): ValidatedMemoryDocument {
  const { yamlText, body } = splitFrontmatter(content);

  let raw: unknown;
  try {
    raw = parseYaml(yamlText);
  } catch (err) {
    throw new MemoryValidationError('Frontmatter YAML ilegível.', [
      { severity: 'reject', code: 'yaml_parse_error', message: `YAML inválido: ${(err as Error).message}` },
    ]);
  }
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    throw new MemoryValidationError('Frontmatter não é um mapeamento YAML.', [
      { severity: 'reject', code: 'frontmatter_not_mapping', message: 'O bloco estruturado precisa ser um mapeamento chave→valor.' },
    ]);
  }
  const frontmatter = raw as Record<string, unknown>;

  const issues: MemoryIssue[] = [];
  for (const field of REQUIRED_TOP_LEVEL_FIELDS) {
    if (!(field in frontmatter) || frontmatter[field] === null || frontmatter[field] === undefined) {
      issues.push({ severity: 'reject', code: 'missing_required_field', message: `Campo crítico ausente: ${field}.` });
    }
  }
  if (issues.length > 0) {
    throw new MemoryValidationError('Campos críticos ausentes na Memory.', issues);
  }

  if (frontmatter['format_version'] !== SUPPORTED_FORMAT_VERSION) {
    throw new MemoryValidationError('Versão de formato incompatível.', [
      {
        severity: 'reject', code: 'unsupported_format_version',
        message: `format_version "${String(frontmatter['format_version'])}" não é suportada; esperado "${SUPPORTED_FORMAT_VERSION}".`,
      },
    ]);
  }

  // Unknown fields are surfaced explicitly, never silently dropped.
  const unknownTopLevelFields = Object.keys(frontmatter).filter((k) => !KNOWN_TOP_LEVEL_FIELDS.has(k));

  return { frontmatter, narrativeBody: body, unknownTopLevelFields };
}

/** Node file wrapper. The record never depends on the file's absolute path. */
export function readMemoryFile(path: string): ValidatedMemoryDocument {
  return parseMemoryDocument(readFileSync(path, 'utf-8'));
}

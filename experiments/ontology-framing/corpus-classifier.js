'use strict';

const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const { parseYamlFrontmatter } = require('./yaml-frontmatter-reader');
const { assignCandidateProfiles } = require('./contract-profile-candidates');

const CORPUS_ROOTS = Object.freeze(['foundation', 'knowledge', 'architecture', 'milestones', 'roadmap']);
const CATEGORIES = Object.freeze([
  'knowledge_object_candidate',
  'document_with_metadata_not_knowledge_object',
  'common_markdown',
  'unparseable_frontmatter',
]);

function hash(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

function within(parent, child) {
  const relative = path.relative(parent, child);
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
}

function walkReadOnly(directory, repositoryRoot) {
  if (!fs.existsSync(directory)) return [];
  const realRepository = fs.realpathSync(repositoryRoot);
  const realDirectory = fs.realpathSync(directory);
  if (!within(realRepository, realDirectory)) throw new Error(`corpus-root-outside-repository:${directory}`);
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) continue;
    if (entry.isDirectory()) files.push(...walkReadOnly(target, repositoryRoot));
    else if (entry.isFile() && /\.(md|ya?ml)$/i.test(entry.name)) files.push(target);
  }
  return files;
}

function classifyFile(file, repositoryRoot) {
  const bytes = fs.readFileSync(file);
  const relativePath = path.relative(repositoryRoot, file).replaceAll('\\', '/');
  const base = { relative_path: relativePath, sha256_before: hash(bytes) };
  if (!/\.md$/i.test(file)) {
    return { ...base, category: 'document_with_metadata_not_knowledge_object', reason: 'standalone_yaml_is_not_markdown_frontmatter_source' };
  }

  const parsed = parseYamlFrontmatter(bytes.toString('utf8'), relativePath);
  if (!parsed.has_frontmatter) return { ...base, category: 'common_markdown', reason: 'no_frontmatter_at_document_start' };
  if (!parsed.valid) return { ...base, category: 'unparseable_frontmatter', reason: 'yaml_frontmatter_invalid', errors: parsed.errors };

  const requiredIdentity = ['id', 'kind', 'knowledge_type'];
  if (!requiredIdentity.every((field) => typeof parsed.data[field] === 'string' && parsed.data[field].trim())) {
    return {
      ...base,
      category: 'document_with_metadata_not_knowledge_object',
      reason: 'frontmatter_without_knowledge_object_identity',
      declared_fields: Object.keys(parsed.data).sort(),
    };
  }

  return {
    ...base,
    category: 'knowledge_object_candidate',
    reason: 'declared_identity_fields_present',
    id: parsed.data.id,
    data: parsed.data,
    profile: assignCandidateProfiles(parsed.data),
    parser: parsed.parser,
  };
}

function classifyRepositoryCorpus(repositoryRoot = path.resolve(__dirname, '..', '..')) {
  const root = path.resolve(repositoryRoot);
  const files = CORPUS_ROOTS.flatMap((area) => walkReadOnly(path.join(root, area), root)).sort();
  const items = files.map((file) => classifyFile(file, root));
  const hashesAfter = new Map(files.map((file) => [path.relative(root, file).replaceAll('\\', '/'), hash(fs.readFileSync(file))]));
  const hashDrift = items.filter((item) => hashesAfter.get(item.relative_path) !== item.sha256_before).map((item) => item.relative_path);
  const counts = Object.fromEntries(CATEGORIES.map((category) => [category, items.filter((item) => item.category === category).length]));
  return {
    canonicality: 'diagnostic_experiment_not_schema',
    repository_root: root,
    corpus_roots: CORPUS_ROOTS,
    excluded_roots: ['.git', 'projects', '.obsidian', 'graphify-out'],
    total_files: items.length,
    category_counts: counts,
    category_total: Object.values(counts).reduce((total, value) => total + value, 0),
    hash_drift: hashDrift,
    source_mutated: hashDrift.length > 0,
    items,
  };
}

module.exports = { CATEGORIES, CORPUS_ROOTS, classifyFile, classifyRepositoryCorpus, walkReadOnly };

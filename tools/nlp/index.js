// Simple NLP transformation pipeline: NL -> structured task JSON
// Note: This is rule-based; can be swapped for LLM later.

function parseBullets(text) {
  return text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => l.replace(/^[-*]\s*/, ''));
}

function extractSections(text) {
  const sections = {};
  const lines = text.split(/\r?\n/);
  let current = 'general';
  for (const line of lines) {
    const h = line.match(/^\s*#{1,6}\s*(.+)$/);
    if (h) { current = h[1].toLowerCase(); sections[current] = sections[current] || []; continue; }
    (sections[current] = sections[current] || []).push(line);
  }
  for (const k of Object.keys(sections)) sections[k] = sections[k].join('\n').trim();
  return sections;
}

function toStructuredTask(input) {
  const text = String(input || '').trim();
  const sections = extractSections(text);

  let titleMatch = text.match(/^\s*[-*]\s*(.+)$/m);
  const title = (titleMatch ? titleMatch[1] : 'Untitled task').slice(0, 140);
  const description = sections.general || text.slice(0, 2000);

  const acceptance = parseBullets((sections['acceptance criteria'] || sections['acceptance'] || '').trim());
  const dependencies = parseBullets((sections['dependencies'] || '').trim());
  const risks = parseBullets((sections['risks'] || ''));
  const components = parseBullets((sections['components'] || sections['files'] || ''));

  const task = {
    title,
    description,
    components,
    acceptanceCriteria: acceptance,
    dependencies,
    risks,
    metadata: {
      createdAt: new Date().toISOString(),
      source: 'nlp-pipeline@local'
    }
  };
  return task;
}

function validate(task) {
  const errors = [];
  if (!task.title || task.title.length < 3) errors.push('title is required (>= 3 chars)');
  if (!task.description || task.description.length < 10) errors.push('description is required (>= 10 chars)');
  if (!task.acceptanceCriteria || task.acceptanceCriteria.length === 0) errors.push('acceptance criteria required (list at least 1)');
  return { ok: errors.length === 0, errors };
}

function makeChecklist(task) {
  return [
    { id: 1, item: 'Reviewed scope and acceptance criteria', done: false },
    { id: 2, item: 'Identified impacted components/files', done: (task.components||[]).length>0 },
    { id: 3, item: 'Checked dependencies and blockers', done: (task.dependencies||[]).length>0 },
    { id: 4, item: 'Risk mitigation in place', done: (task.risks||[]).length>0 },
    { id: 5, item: 'Rollback/backup plan prepared', done: false }
  ];
}

module.exports = { toStructuredTask, validate, makeChecklist };

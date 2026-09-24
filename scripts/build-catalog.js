#!/usr/bin/env node
// Writes the sha256 fingerprints into catalog.json. Dependency-free.
// Usage: node scripts/build-catalog.js [--dry-run]
//   --dry-run  show what would change, write nothing
//
// For every "ready" skill it adds (or refreshes) "sha256" right after "version": the fingerprint
// of skills/<id>/SKILL.md. For the guide it adds "sha256" right after "path". Nothing else in
// the catalog changes, and key order is kept. Run it after the last edit to any skill or the guide,
// then run scripts/check-release.js. Fingerprints are hashed with LF line endings (the only change
// made is CRLF to LF), which is exactly what git commits under .gitattributes ("* text eol=lf")
// and what raw.githubusercontent.com serves, so they match whatever the local line endings are.
// If anything is wrong, it stops before writing a single byte.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const CATALOG = path.join(ROOT, 'catalog.json');
const ID_RE = /^[a-z][a-z0-9-]*$/;
const dryRun = process.argv.includes('--dry-run');

function lfSha256(file) {
  // latin1 round trip is lossless for every byte, so only CRLF pairs are changed.
  const lf = Buffer.from(fs.readFileSync(file).toString('latin1').replace(/\r\n/g, '\n'), 'latin1');
  return crypto.createHash('sha256').update(lf).digest('hex');
}

// Objects one key per line, 2-space indent. Lists of plain values stay on one line.
function fmt(v, depth) {
  const pad = '  '.repeat(depth);
  const padIn = '  '.repeat(depth + 1);
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]';
    if (v.every((x) => x === null || typeof x !== 'object')) return '[' + v.map((x) => JSON.stringify(x)).join(', ') + ']';
    return '[\n' + v.map((x) => padIn + fmt(x, depth + 1)).join(',\n') + '\n' + pad + ']';
  }
  if (v !== null && typeof v === 'object') {
    const keys = Object.keys(v);
    if (!keys.length) return '{}';
    return '{\n' + keys.map((k) => padIn + JSON.stringify(k) + ': ' + fmt(v[k], depth + 1)).join(',\n') + '\n' + pad + '}';
  }
  return JSON.stringify(v);
}

// Same keys in the same order, with "sha256" placed right after `anchor` (or dropped when hash is null).
function withHash(entry, anchor, hash) {
  const out = {};
  let placed = false;
  for (const k of Object.keys(entry)) {
    if (k === 'sha256') continue;
    out[k] = entry[k];
    if (k === anchor && hash) { out.sha256 = hash; placed = true; }
  }
  if (hash && !placed) out.sha256 = hash;
  return out;
}

const problems = [];
const report = [];
let cat;
try {
  cat = JSON.parse(fs.readFileSync(CATALOG, 'utf8').replace(/^\uFEFF/, ''));
} catch (e) {
  console.error('catalog.json: ' + e.message);
  process.exit(1);
}

function hashFile(label, rel) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p) || !fs.statSync(p).isFile()) { problems.push(`${label}: ${rel} does not exist`); return null; }
  return lfSha256(p);
}

const out = {};
for (const key of Object.keys(cat)) {
  if (key === 'guide') {
    const g = cat.guide;
    if (!g || typeof g.path !== 'string' || !/^[A-Za-z0-9._-]+\.md$/.test(g.path)) {
      problems.push('guide: path must be a plain file name ending in .md');
      out.guide = g;
      continue;
    }
    const h = hashFile('guide', g.path);
    if (h) report.push(['guide', g.sha256 === h ? 'unchanged' : g.sha256 ? 'updated' : 'added', h]);
    out.guide = withHash(g, 'path', h);
  } else if (key === 'overview') {
    const o = cat.overview;
    if (!o || typeof o.path !== 'string' || !/^[A-Za-z0-9._-]+\.html$/.test(o.path)) {
      problems.push('overview: path must be a plain file name ending in .html');
      out.overview = o;
      continue;
    }
    const h = hashFile('overview', o.path);
    if (h) report.push(['overview', o.sha256 === h ? 'unchanged' : o.sha256 ? 'updated' : 'added', h]);
    out.overview = withHash(o, 'path', h);
  } else if (key === 'skills') {
    out.skills = cat.skills.map((s) => {
      if (!ID_RE.test(String(s.id))) { problems.push(`skill id "${s.id}" must match ^[a-z][a-z0-9-]*$`); return s; }
      if (s.status !== 'ready') return withHash(s, 'version', null);
      if (s.path !== 'skills/' + s.id + '/SKILL.md') { problems.push(`${s.id}: path must be exactly skills/${s.id}/SKILL.md, found ${JSON.stringify(s.path)}`); return s; }
      const h = hashFile(s.id, s.path);
      if (h) report.push([s.id, s.sha256 === h ? 'unchanged' : s.sha256 ? 'updated' : 'added', h]);
      return withHash(s, 'version', h);
    });
  } else {
    out[key] = cat[key];
  }
}

if (problems.length) {
  problems.forEach((p) => console.error('  PROBLEM ' + p));
  console.error('\ncatalog.json was NOT changed.');
  process.exit(1);
}

for (const [name, state, h] of report) console.log(`  ${state.padEnd(9)} ${name.padEnd(22)} ${h}`);
const text = fmt(out, 0) + '\n';
const current = fs.readFileSync(CATALOG, 'utf8').replace(/\r\n/g, '\n');
if (text === current) {
  console.log('\ncatalog.json already up to date. Nothing written.');
} else if (dryRun) {
  console.log('\n--dry-run: catalog.json would change. Nothing written.');
} else {
  fs.writeFileSync(CATALOG, text);
  console.log('\ncatalog.json written. Now run: node scripts/check-release.js');
}

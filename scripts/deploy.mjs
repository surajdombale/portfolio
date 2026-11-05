// Builds the site and publishes dist/ to the GitHub Pages repo
// https://github.com/surajdombale/profile (served at https://surajdombale.github.io/profile/).
//
// Usage:
//   npm run deploy              build + commit + push
//   npm run deploy -- --no-push build + commit locally only (inspect .deploy/ first)
import { execSync } from 'node:child_process';
import { cpSync, existsSync, readdirSync, rmSync } from 'node:fs';
import path from 'node:path';

const REPO = 'https://surajdombale@github.com/surajdombale/profile.git';
const BRANCH = 'main';
const BASE = '/profile/';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const work = path.join(root, '.deploy');
const push = !process.argv.includes('--no-push');

const run = (cmd, cwd = root) => execSync(cmd, { cwd, stdio: 'inherit' });
const out = (cmd, cwd) => execSync(cmd, { cwd, encoding: 'utf8' }).trim();

// 1. Build with the sub-path base GitHub Pages serves this repo under.
run(`npx vite build --base=${BASE}`);

// 2. Get a fresh copy of the profile repo (keeps its history).
rmSync(work, { recursive: true, force: true });
run(`git clone --depth 1 --branch ${BRANCH} ${REPO} .deploy`);

// 3. Replace everything except .git with the new build.
for (const entry of readdirSync(work)) {
  if (entry !== '.git') rmSync(path.join(work, entry), { recursive: true, force: true });
}
cpSync(dist, work, { recursive: true });

// 4. Commit and push if anything changed.
run('git add -A', work);
if (!out('git status --porcelain', work)) {
  console.log('\nNo changes to deploy.');
  process.exit(0);
}
const sha = out('git rev-parse --short HEAD', root);
run(`git commit -m "Deploy from portfolio@${sha}"`, work);

if (push) {
  run(`git push origin ${BRANCH}`, work);
  console.log('\nDeployed to https://surajdombale.github.io/profile/');
} else {
  console.log(`\nCommitted in ${work} but not pushed (--no-push).`);
}
if (!existsSync(path.join(work, 'index.html'))) console.warn('Warning: no index.html in build.');

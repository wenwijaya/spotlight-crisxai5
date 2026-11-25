// Spotlight @crisxai5 — make.fun program/v1 entry (Node 22, standard library only).
//
// The entry is the X post itself: an original spotlight graphic introducing
// @crisxai5 (https://x.com/crisxai5) as a must-follow AI & crypto expert,
// posted publicly on X with @crisxai5 and one of our make.fun play codes in
// the post text. POST.json at the repository root names that post.
//
// All this program has to do is copy POST.json from the repository root to
// /output/POST.json, where the gate reads it. Nothing this program writes
// about the post is scored — the house reads the post itself through
// FxTwitter and writes its counts to /output/post.counts.json afterwards.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { chmodSync, copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const dest = join(OUTPUT_DIR, 'POST.json');
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), dest);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The house collects /output as another user, so the file must be
// world-readable (mode 0644), not just written.
chmodSync(dest, 0o644);

// Sanity-check the shape the gate expects: a JSON object with a url string.
// A placeholder or malformed POST.json is refused at the gate (valid 0),
// so fail loudly here instead of silently shipping it.
import { readFileSync } from 'node:fs';
const post = JSON.parse(readFileSync(dest, 'utf8')) as { url?: unknown };
if (typeof post.url !== 'string' || !/^https?:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\//.test(post.url)) {
  console.error(`POST.json does not name a valid X post URL: ${JSON.stringify(post)}`);
  process.exit(1);
}
// The starter placeholder is fine at build time: the real post URL lands in
// POST.json after the user posts on X, before any submit. Warn, don't fail.
if (post.url.includes('<handle>') || post.url.includes('<id>')) {
  console.warn('POST.json still holds the starter placeholder URL — replace it with the real post URL before submitting.');
}

console.log(`POST.json copied to ${dest}`);

// One-Line Laugh-Off — entry program (Node 22, stdlib only).
// Writes one original one-line joke to /output/entry.txt.
// The joke: the AI assistant wrote the joke, then asked its human to
// explain why it is funny — the joke-teller does not get its own joke.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  "My AI assistant wrote this joke, then asked me to explain why it's funny.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// whitespace. Fail loudly here rather than shipping an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}
writeFileSync(join(outDir, 'entry.txt'), JOKE, 'utf8');

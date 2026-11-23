// Dad Joke Showdown — entry program.
//
// Writes one original dad joke (1-200 characters) to /output/entry.txt.
// The grader runs this with Node 22 (`node main.ts`); the output path can
// be overridden with an optional first argument for local testing.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke. Original, written for this competition: a Q&A dad joke whose
// punchline turns on "pop" — a dad — and the browser "pop-up blocker".
const JOKE =
  "What do you call a dad who works in IT? A pop-up blocker.";

function main(): void {
  const outPath = process.argv[2] ?? "/output/entry.txt";
  // The gate counts every character in the file, so the joke must fit
  // whole (no trailing newline, no line breaks) inside 1-200 characters.
  const MAX_CHARS = 200;
  if (JOKE.length < 1 || JOKE.length > MAX_CHARS) {
    throw new Error(
      `joke must be 1-200 characters, got ${JOKE.length}`,
    );
  }
  if (JOKE.trim().length === 0 || /[\r\n]/.test(JOKE)) {
    throw new Error("joke must be a single non-blank line");
  }
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JOKE, "utf8");
}

main();

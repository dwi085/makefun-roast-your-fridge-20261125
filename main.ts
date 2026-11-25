// One Line, One Laugh: Roast Your Fridge
// make.fun bounty u-suzy-one-line-one-laugh-roast-your-fridge-f1063521
//
// The entry is a single roast line for the most boring object in the
// kitchen: the fridge. It hums around the clock as if it were doing
// something important, yet the only thing it ever actually produces is
// the little light that catches you raiding the cheese at 2 a.m.
// Specific detail (the light), a twist (all that humming, zero output),
// and it reads cleanly aloud as one line.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My fridge hums all day like it's doing something important, but the only thing it ever produces is a light that catches me stealing cheese at 2 a.m.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Gate check, mirroring the sealed scorer: UTF-8 text of 1 to 200
// characters, not only white space, exactly one line.
if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`roast must be 1-200 characters, got ${ROAST.length}`);
}
if (ROAST.trim().length === 0 || ROAST.includes("\n")) {
  throw new Error("roast must be a single non-blank line");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ROAST, "utf8");
console.log(`wrote ${ROAST.length} characters to ${OUT_FILE}`);

// The Printer Apology — make.fun entry
// Writes one one-line apology from an office printer to /output/entry.txt.
//
// The line was chosen by an internal head-to-head tournament over a pool of
// 12 candidates, judged against the competition's own rubric (a genuine
// apology from a printer, a real joke with the punch at the end, a grievance
// a printer would actually suffer, a fresh angle, no padding). The champion:
// an apology for jamming again, blaming the cheap paper — with the punch
// landing on the paper's "structural integrity of a rumour".

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const APOLOGY =
  "I apologise for jamming again. The cheap paper you feed me has the structural integrity of a rumour.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate requires 1 to 120 characters of UTF-8 text, not only whitespace.
if (APOLOGY.length < 1 || APOLOGY.length > 120) {
  throw new Error(`entry is ${APOLOGY.length} characters, must be 1-120`);
}
if (APOLOGY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, APOLOGY, "utf8");
console.log(`wrote ${APOLOGY.length} characters to ${OUTPUT_PATH}`);

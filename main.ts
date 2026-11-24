// One-line office joke: the setup is the will, the punchline is the email.
// The entry is written verbatim, with no trailing newline, so the gate sees exactly 83 bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "I put 'per my last email' in my will, so my family knows I meant it the first time.");

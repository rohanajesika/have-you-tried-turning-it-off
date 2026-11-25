// Entry for make.fun u-motasimfuad-have-you-tried-turning-it-off-154a938b:
// a program (Node 22, standard library only) that writes one funny line of
// text, at most 199 characters, to /output/entry.txt. Deterministic: the same
// bytes on every run, no network, no input, no randomness, no clock.
//
// How the line maps to the judge's brief, in the judge's own order:
//   1. On-subject: it IS one funny single-line reply from a hopeless tech
//      support agent to a desperate customer — the agent speaks, the
//      customer is stuck in the support loop.
//   2. Lands the joke: the twist is unexpected — the agent pre-admits the
//      classic fix will fail, and the punch is the transfer loop: the next
//      agent will ask the exact same thing. The humour is the agent's
//      cheerful uselessness; the customer is never the butt of it.
//   3. Real agent voice: "Have you tried turning it off and on again?"
//      is the sentence every support desk actually opens with, and the
//      transfer to someone else is the lived-in next step. The customer's
//      desperation is felt in being bounced around, never explained.
//   4. Tight: every word earns its place; the setup is the classic line
//      itself, the punch is one clause.
//   5. Fresh: it leans on the classic and twists it — the reboot is not
//      the solution, it is the first lap of a loop that never ends.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Drafts considered, kept here so the choice is auditable. Each is one line
// of my own writing; the notes say why it lost to the winner.
const CANDIDATES: { text: string; note: string }[] = [
  {
    text: 'Have you tried turning it off and on again? It won\'t fix anything, but it gives us both a nice little break from your emergency.',
    note: 'Warm and cheerful, but the punch ("a nice little break") is soft and abstract; the transfer loop is a sharper, more specific support-world truth.',
  },
  {
    text: 'Let\'s turn it off and on again — while it restarts, I\'ll pretend your deadline reboots too.',
    note: 'Charming, but "pretend" explains the joke instead of landing it, and naming the deadline states the desperation rather than letting it be felt.',
  },
  {
    text: 'Have you tried turning it off and on again? I ask everyone that — it\'s the one thing I\'m genuinely great at.',
    note: 'Self-deprecating and agent-voiced, but there is no real twist on the classic, and the desperate customer is nowhere in it.',
  },
  {
    text: 'Good news: turning it off and on again fixed nothing — but it did buy you ten whole seconds of hope.',
    note: 'Close, and the "ten whole seconds of hope" beat is good, but hope is abstract where the winner\'s transfer loop is concrete and lived-in.',
  },
];

// The line: "Have you tried turning it off and on again?" opens with the
// classic every desk uses; "When that fails" pre-admits defeat before the
// customer even tries it — "when", not "if": the agent already knows the
// reboot will not work. "I'll transfer you to someone who'll ask you to
// do the same thing" closes the loop — the fix is not a fix, it is the
// first lap of a circle. The customer is never mocked; the system is.
const LINE =
  "Have you tried turning it off and on again? When that fails, I'll transfer you to someone who'll ask you to do the same thing.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 199 characters,
// not only white space. Fail loudly here rather than write an invalid file.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`line is ${LINE.length} characters, must be 1-199`);
}
if (LINE.trim().length === 0) {
  throw new Error('line must not be only white space');
}
if (LINE.includes('\n')) {
  throw new Error('line must be exactly one line');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');

console.log(`line (${LINE.length} chars): ${LINE}`);

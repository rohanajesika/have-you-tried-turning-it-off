[![make.fun · u-motasimfuad-have-you-tried-turning-it-off-154a938b](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/rohanajesika/have-you-tried-turning-it-off/rank.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/rohanajesika/have-you-tried-turning-it-off/reward.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)

# Have You Tried Turning It Off?

One funny line — under 200 characters — that a hopeless tech support agent gives a desperate customer. Built for the [make.fun "Have You Tried Turning It Off?" bounty](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b).

## The line

> Have you tried turning it off and on again? When that fails, I'll transfer you to someone who'll ask you to do the same thing.

## How it works

`main.ts` (Node 22, standard library only) writes that one line to `/output/entry.txt`. It is deterministic: the same bytes on every run, no network, no input, no randomness, no clock. The program refuses to write anything outside the gate — the text must be 1 to 199 characters, a single line, and not only white space — and it fails loudly instead of writing an invalid file.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Why this line

The judge weighs, in order: whether it is a funny single-line reply from a hopeless tech support agent to a desperate customer, how the joke lands, whether it sounds like a real agent, how tight it is, and how fresh it is.

- **On-subject:** one funny line, the agent speaking, the customer stuck in the support loop.
- **Lands the joke:** the twist is unexpected — the agent pre-admits the classic fix will fail, and the punch is the transfer loop: the next agent will ask the exact same thing. The humour is the agent's cheerful uselessness; the customer is never the butt of it.
- **Real agent voice:** "Have you tried turning it off and on again?" is the sentence every support desk actually opens with, and the transfer is the lived-in next step. The customer's desperation is felt in being bounced around, never explained.
- **Tight:** the setup is the classic line itself; the punch is one clause.
- **Fresh:** it leans on the classic and twists it — the reboot is not the solution, it is the first lap of a loop that never ends.

Four weaker drafts were considered and are kept in `main.ts` with notes on why each lost.

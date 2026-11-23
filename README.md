[![make.fun](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/c/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![Rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/Erwinsays12/makefun-dad-joke-showdown/rank.svg)](https://make.fun/c/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![Reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/Erwinsays12/makefun-dad-joke-showdown/reward.svg)](https://make.fun/c/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

# Dad Joke Showdown — entry

Entry for the [Dad Joke Showdown](https://make.fun/c/u-mfnakmal-dad-joke-showdown-1d2ce3e5) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes one original dad joke (57 characters, well inside the
200-character cap) to `/output/entry.txt`. The joke:

> What do you call a dad who works in IT? A pop-up blocker.

A classic Q&A dad joke: the setup primes "dad" and "IT", and the
punchline turns on "pop" — a dad — inside the browser "pop-up blocker".
It lands on the first read, stays inside the dad-joke tradition, and is
tight enough to tell across a dinner table.

## Run it

```sh
node main.ts            # writes /output/entry.txt
node main.ts out.txt    # write to a custom path (local testing)
```

Requires Node 22 or later. No dependencies, no network, deterministic:
every run writes the exact same 57 bytes.

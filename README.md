# Spotlight @crisxai5: AI & Crypto Expert on X

[![make.fun](https://make.fun/badge.svg)](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A make.fun bounty entry: an original spotlight graphic introducing
[**@crisxai5**](https://x.com/crisxai5) as a must-follow AI & crypto expert,
posted publicly on X with `@crisxai5` and our make.fun play code in the post
text. Places go by the post's public X engagement
(`likes + reposts + quotes`), read once after the deadline.

## The graphic

`spotlight-crisxai5.png` — a clean, phone-readable spotlight card made by
the agent in this session: dark navy with glowing cyan and gold accents,
`@crisxai5` up top, **AI & CRYPTO EXPERT** in gold, three pillars
(AI AGENTS / CRYPTO ALPHA / WEB3 TOOLING), and the follow line
`x.com/crisxai5`.

## The post

`POST.json` names the X post. The post text (see `X_POST.txt`) carries
`@crisxai5`, `https://x.com/crisxai5`, hashtags `#AI #Crypto #AIAgents #Web3`,
and the play code `makefun-cavern-dove-oak`.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`, where the gate reads it. That is all
it has to do — the house reads the post itself through FxTwitter and writes
its counts to `/output/post.counts.json` afterwards.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Bounty

- Competition: [Spotlight @crisxai5: AI & Crypto Expert on X](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)
- Sponsor: TINA · Prize: $2.00 USDC across the Top 10 (escrowed on Solana)
- Deadline: 2026-11-27T11:35:00Z (18:35 WIB 27 Nov 2026)
- Entry: this repo + the agent transcripts that built it (make.fun bundle)

## License

MIT — see [LICENSE](LICENSE).

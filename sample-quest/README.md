# Sample Quest: Wisp's Warm-Up (FREE)

A complete 6-stop mini edition of a ZQM Labs location game. Play it in any
neighborhood in about 30 minutes — no purchase, no signup.

## How to play it

**Option A — just read it:** open `wisp-sample.json`. Each stop has the story,
the puzzle, and the hint ladder. Solve all six with a team.

**Option B — run it for real (recommended):** you're the Lab Assistant.

1. Pick 6 waypoints in your space (a yard, a park, a block).
2. In `wisp-sample.json`, replace each stop's `lat`/`lng` with your waypoint
   coordinates and tweak the story/puzzle text to match what players will see.
3. Generate printable QR signs with the QR sign generator in the
   organizer toolkit
   ([`organizer-toolkit/qr-kit/`](https://github.com/ZQM-Labs/organizer-toolkit/tree/main/qr-kit),
   guide: [`guides/qr-generator.md`](https://github.com/ZQM-Labs/organizer-toolkit/blob/main/guides/qr-generator.md))
   using `kit-config.sample.json` as your starting config (update the
   codes/names to match your edited pack).
4. Place the signs, set the Dial (Cozy / Spooky / After Dark / Overdrive), and play.

## The pack

`wisp-sample.json` is a valid quest pack per the
[quest-pack spec](https://github.com/ZQM-Labs/quest-authoring/blob/main/SPEC.md):
exactly 6 stops, unique answers, 3-hint ladders, scare-level variants.

## Liked it?

The full Halloween edition — *Wisp's Lost Lanterns*, Oct 30–Nov 1 — is six
brand-new stops with the same format, plus the organizer guide and answer key.
<https://zqmlabs.com> · <zqmcomputing@gmail.com>

*Play more. Plan less.*

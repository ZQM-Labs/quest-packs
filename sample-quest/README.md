# Free sample: Wisp's Warm-Up — six-stop quest format

**Choose the right starting point.** This repository has a free example
JSON pack, not an automatically configured live neighborhood route.
The sample is for learning or for adaptation by an authorized organizer;
it is not an event booking, an entitlement, or an independently field-tested
route in every location.

## A. I want to play now, without setting up a venue

Try the [Wisp's Lost Lanterns browser demo](https://zqmlabs.com/games/hunt-for-wisps/play/?demo=1)
**where the current deployed version is confirmed working**. The demo is
a separate, embedded game experience; it does not load this public
Wisp's Warm-Up sample as a new paid or host-configured edition. A browser
game does not prove that every camera, GPS, QR or offline path works on
your particular device and location.

## B. I want to inspect or learn from a complete six-stop pack

Open [wisp-sample.json](wisp-sample.json) and read the six fictional
stories, puzzles, fallbacks and three-hint ladders. No account or
purchase is needed to inspect this public source file.

Clone the authoritative validator and this repository as sibling folders:

```bash
git clone https://github.com/ZQM-Labs/quest-authoring.git
git clone https://github.com/ZQM-Labs/quest-packs.git
python3 quest-authoring/validator/validate_pack.py \
  quest-packs/sample-quest/wisp-sample.json
```

This checks **content/schema**, not actual site access, permissions,
offline readiness or GPS reliability. The pack format requires exactly
six stops, unique normalized Cozy answers and all required hint fields.
See [SPEC v1](https://github.com/ZQM-Labs/quest-authoring/blob/main/SPEC.md).

## C. I want to host a real scavenger hunt

1. **Secure permission and plan an accessible route.** Choose six safe,
   lawful waypoints at your own venue, with a route suitable for
   participants' ages, mobility needs, weather, supervision and breaks.
   Do not use the published sample coordinates, mailboxes, private
   addresses, fences or example objects as an authorized route.
2. **Make a private working copy.** Adapt *every* stop's `lat`,
   `lng`, story, observed puzzle, answer, fallback and three hints
   to features that **actually exist at your permitted venue**.
   Validate all four advertised Dial variants and source/asset rights.
3. **Validate with the SPEC v1 command above**, pointing at your
   private edited JSON file. Resolve structural errors and manually
   review warnings such as too-close GPS stops.
4. **Prepare QR signs separately** using the
   [Organizer Toolkit QR kit](https://github.com/ZQM-Labs/organizer-toolkit/tree/main/qr-kit)
   and [kit-config.sample.json](kit-config.sample.json). Keep kit ID,
   access codes, stop codes, sign names and the actual supported player
   URL aligned. Do not publish paid access credentials in GitHub.
5. **Test the exact pack and player combination** before inviting
   groups: offline loss, GPS permission denied, manual/QR alternatives,
   all stop hints, accessible participation, venue signage permission,
   route walking, safety and device/age constraints. Use the
   [Playtests repo](https://github.com/ZQM-Labs/playtests) for a dated,
   versioned acceptance report.
6. **Confirm product support and commercialization.** A verified local
   activity still requires separate host arrangements, support, pricing,
   release artifacts and checkout/fulfillment checks before it becomes
   a bookable ZQM service.

For the complete start-to-finish tutorial, use
[Write your first six-stop quest](https://github.com/ZQM-Labs/quest-authoring/blob/main/guide/write-your-first-quest.md).
For event-day logistics, the
[Organizer Toolkit](https://github.com/ZQM-Labs/organizer-toolkit)
has print, weather and accessibility guidance. The
[Community Day planner](https://github.com/ZQM-Labs/organizer-toolkit/tree/main/event-kit)
produces static host sheets, **not** server-scheduled unlocks, live
multiplayer or a working private kit on its own.

## After learning the format

**Organizer / institution:** For a proposed museum, tourism, school,
neighborhood or workplace pilot, contact
[ZQM Labs](mailto:zqmcomputing@gmail.com) with your venue,
audience, approximate teams, desired date and accessibility needs.
The Lab can discuss feasibility; no particular city route, price,
turnaround, licensing option or event availability is guaranteed
by the public sample.

**Developer / creator:** Reuse original, rights-cleared work and
submit prospective formats through reviewed
[quest-packs contributions](../README.md). A proposed edition is
not a released, globally supported game.

**Status note (November 2026):** the Halloween 2026 dates were a
past-edition window. A downloadable public fixture and a browser demo
are not evidence of a currently scheduled event or paid purchase path.

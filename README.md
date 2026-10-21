<!-- markdownlint-disable MD033 MD012 -->

# Quest Packs — ZQM Labs

<!-- ZQM-START -->
<!-- markdownlint-disable MD033 -->
<p align="center">
  <strong>ZQM Labs — Z's Quests & Mischief</strong><br>
  <a href="https://zqmlabs.com">zqmlabs.com</a> •
  <a href="https://github.com/ZQM-Labs">GitHub</a>
</p>
<!-- markdownlint-enable MD033 -->
<!-- ZQM-END -->

Versioned quest packs for **ZQM Labs — Z's Quests & Mischief** location games.
*Games, gear & a little mischief.*

## Repository role and status

**Status:** Active, public. Edition catalog and distribution point for ZQM Labs quest packs.

**What this repository is:** The versioned catalog of quest-pack editions (`editions/`), the free 6-stop sample quest *Wisp's Warm-Up* (`sample-quest/`), and the example configuration for the quest-authoring generator.

**What it contributes:** This is where editions ship: each edition is published as a GitHub Release from this repo, and the sample quest is the public, playable demonstration of the pack format. Paid-edition answer keys and print sets are delivered privately and are never stored here. The pack format, validator, and generator live in quest-authoring, which this repo's documentation cross-references.

## What lives here

| Path | What it is |
|---|---|
| `sample-quest/` | **Free sample edition** — a 6-stop mini quest. |
| `sample-quest/example-quest.yaml` | Example YAML config for the quest pack generator. |
| `editions/` | The edition catalog — one folder per edition. |

## Generate your own quest pack

Use the [quest pack generator](https://github.com/ZQM-Labs/quest-authoring/blob/main/validator/gen_quest_pack.py) from the quest-authoring repo:

```bash
# Clone quest-authoring
git clone https://github.com/ZQM-Labs/quest-authoring.git
cd quest-authoring

# Generate from the example config
python validator/gen_quest_pack.py /path/to/example-quest.yaml
# Output: dist/missing-lanterns/index.html + manifest.json
```

## How editions ship

Each edition is published as a **GitHub Release** from this repo.
The release notes describe what's inside; the sample quest's full
pack JSON ships publicly. Full paid-edition kits (answer keys,
print-ready sign sets) are delivered privately to organizers — this
repo carries the catalog and the free sample, never the paid answer
keys.

## The editions

| Edition | Window | Status |
|---|---|---|
| *Wisp's Lost Lanterns* (Halloween) | Oct 30–Nov 1, 2026 | Pilot |
| *Wisp's Spring Festival* (Spring) | Mar 20–Apr 5, 2027 | Pilot |
| *Sample: Wisp's Warm-Up* | Anytime | **Free** — `sample-quest/` |

New here? Start with the sample quest — it plays in any
neighborhood in about 30 minutes.

## Pack format

Quest packs are JSON validated by the player (`validatePack`).
The format spec, authoring guide, validator, and generator live in
[ZQM-Labs/quest-authoring](https://github.com/ZQM-Labs/quest-authoring).

## Running a game

Organizers: the [Lab Assistant's
toolkit](https://github.com/ZQM-Labs/organizer-toolkit) has setup
checklists, print specs, and day-of troubleshooting.

## Community contribution workflow

The long-term direction is a shared Halloween game world shaped by the
communities that play it. Contributions should be reviewable, tested, and
credited with permission—not published automatically.

1. **Propose an idea.** Open an issue describing the intended audience, venue,
   story theme, and any local context.
2. **Build from the public format.** Follow the [quest-authoring
   specification](https://github.com/ZQM-Labs/quest-authoring) and validate
   the pack before submitting it.
3. **Check safety and inclusion.** Avoid stereotypes, unsafe routes, private
   locations without permission, and puzzles that require unnecessary personal
   data. Document any venue or language assumptions.
4. **Playtest.** Use the [playtest
   protocol](https://github.com/ZQM-Labs/playtests); record reproducible
   findings and remove personal information.
5. **Review and release.** Maintainers review content, validation results,
   rights to submitted assets, and any operational requirements before merging
   or releasing a pack.

Public sample packs and release metadata belong here. Private paid-edition
answer keys and customer materials must not be added to public commits. A
community proposal is not a promise that the edition is supported or
scheduled.

## More from ZQM Labs

- [organizer-toolkit][otk] — setup checklists, print specs, FAQ
- [quest-authoring][qa] — quest-pack spec, guide, validator, generator
- [playtests][pt] — playtest protocol and results
- [zqmlabs-site][site] — the public website

[otk]: https://github.com/ZQM-Labs/organizer-toolkit
[qa]: https://github.com/ZQM-Labs/quest-authoring
[pt]: https://github.com/ZQM-Labs/playtests
[site]: https://github.com/ZQM-Labs/zqmlabs-site

Questions? <zqmcomputing@gmail.com> · <https://zqmlabs.com>

*Play more. Plan less.*

<!-- ZQM-FOOTER-START -->
<!-- markdownlint-disable MD033 -->
---

<p align="center">
  <em>Play more. Plan less.</em><br>
  <a href="https://zqmlabs.com">zqmlabs.com</a> •
  <a href="https://github.com/ZQM-Labs">ZQM Labs</a> •
  <a href="https://github.com/ZQM-Computing">ZQM Computing</a>
</p>
<!-- markdownlint-enable MD033 -->
<!-- ZQM-FOOTER-END -->

## Release artifact contract

A GitHub Release is the versioned distribution record for an edition. Before publishing or updating a release, verify and record:

- The release tag points to the reviewed commit and the attached/public JSON is the exact tested artifact.
- The pack passes the [quest-authoring validator](https://github.com/ZQM-Labs/quest-authoring) and loads in the target [player](https://github.com/ZQM-Labs/quest-player) version.
- Release notes identify the edition, pack schema/version where applicable, intended play window, known limitations, and any required player version.
- The organizer-facing instructions match the released pack and print assets.
- The [playtest record](https://github.com/ZQM-Labs/playtests) identifies the same pack and player versions.
- Public artifacts contain no paid answer keys, private customer materials, credentials, participant data, or assets without documented rights.

Do not overwrite or silently replace a published release artifact. For a material correction, publish a new version and explain the compatibility or safety impact in the release notes.

## Current availability and checkout status

The edition table is a catalog/status summary, not proof that a date-specific event ran or that customers can place orders. Wisp's Lost Lanterns release, field-readiness, and checkout status must be confirmed from dated release and test evidence before public pages describe it as available.

For Wisp's Lost Lanterns, verify the exact GitHub Release/tag, tested pack artifact, compatible player version, playtest/field-validation record, and organizer materials. Separately verify the end-to-end checkout/payment/confirmation/fulfillment path. Keep these as separate gates: a published pack is not proof of working checkout, and working checkout is not proof of field approval. Until evidence is linked, label unresolved states **unverified** rather than assuming the scheduled window or the existing "Pilot" label proves completion.

## License

MIT — see [LICENSE](LICENSE).

## Validation

This repository uses GitHub Actions for continuous integration. See [CI workflow](.github/workflows/ci.yml) for details.

To validate locally:

```bash
# Run documentation checks
python scripts/check_docs.py
```

## Installation

Clone the repository — the packs are plain JSON and need no build step.
The one dependency (PyYAML) is used by the pack validation tooling:

```bash
git clone https://github.com/ZQM-Labs/quest-packs.git
cd quest-packs
pip install -r requirements.txt
```

## Usage

Pick an edition from [The editions](#the-editions), generate or download
its pack, and load it into the quest player to run a game. The free
sample quest is the quickest way to see the pack format in action.

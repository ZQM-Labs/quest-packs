"use strict";
// Pack content tests — assert the REAL quest-pack schema (quest-authoring
// SPEC v1: title / kit / stops) and the invariants the player relies on.
// Run with: npm test   (node --test tests/)
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync, readdirSync, existsSync } = require("node:fs");
const { join } = require("node:path");

const repoRoot = join(__dirname, "..");

function readJson(rel) {
  return JSON.parse(readFileSync(join(repoRoot, rel), "utf-8"));
}

function* walkJson(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walkJson(p);
    else if (entry.name.endsWith(".json")) yield p;
  }
}

test("all JSON files under editions/ are valid JSON", () => {
  const editionsDir = join(repoRoot, "editions");
  const editions = readdirSync(editionsDir).filter((e) =>
    e !== ".DS_Store"
  );
  assert.ok(editions.length > 0, "Must have at least one edition");
  for (const file of walkJson(editionsDir)) {
    assert.doesNotThrow(
      () => JSON.parse(readFileSync(file, "utf-8")),
      `Invalid JSON in ${file}`
    );
  }
});

test("public edition policy: every edition JSON is on the allowlist (issue #14 guard)", () => {
  const manifest = readFileSync(
    join(repoRoot, "PUBLIC_EDITION_PACKS.txt"),
    "utf-8"
  );
  const approved = new Set(
    manifest
      .split("\n")
      .map((l) => l.split("#")[0].trim())
      .filter(Boolean)
  );
  for (const entry of approved) {
    assert.ok(
      existsSync(join(repoRoot, entry)),
      `Allowlisted pack does not exist: ${entry}`
    );
  }
  for (const file of walkJson(join(repoRoot, "editions"))) {
    const rel = file.slice(repoRoot.length + 1).split("\\").join("/");
    assert.ok(
      approved.has(rel),
      `Unapproved public edition JSON: ${rel} — review its publication ` +
        `status, then add it to PUBLIC_EDITION_PACKS.txt only if public ` +
        `distribution is approved.`
    );
  }
});

test("sample quest pack matches the quest-pack schema", () => {
  const pack = readJson("sample-quest/wisp-sample.json");

  assert.equal(typeof pack.title, "string");
  assert.ok(pack.title.length > 0, "Pack must have a non-empty title");
  assert.equal(typeof pack.kit, "string");
  assert.ok(pack.kit.length > 0, "Pack must name its kit");
  assert.ok(Array.isArray(pack.stops), "Pack must have a stops array");
  assert.equal(pack.stops.length, 6, "A quest pack has exactly 6 stops");

  const ids = new Set();
  const cozyAnswers = [];
  for (const stop of pack.stops) {
    assert.ok(
      Number.isInteger(stop.id),
      `Stop id must be an integer, got ${stop.id}`
    );
    assert.ok(!ids.has(stop.id), `Duplicate stop id ${stop.id}`);
    ids.add(stop.id);

    assert.equal(typeof stop.name, "string");
    assert.ok(stop.name.length > 0, `Stop ${stop.id} needs a name`);
    assert.equal(typeof stop.code, "string");
    assert.ok(stop.code.length > 0, `Stop ${stop.id} needs a code`);

    assert.ok(
      Number.isFinite(stop.lat) && stop.lat >= -90 && stop.lat <= 90,
      `Stop ${stop.id} latitude out of bounds`
    );
    assert.ok(
      Number.isFinite(stop.lng) && stop.lng >= -180 && stop.lng <= 180,
      `Stop ${stop.id} longitude out of bounds`
    );

    assert.ok(stop.story && typeof stop.story.cozy === "string");
    assert.ok(
      stop.story.cozy.length > 0,
      `Stop ${stop.id} needs cozy story text`
    );

    const cozy = stop.puzzle && stop.puzzle.cozy;
    assert.ok(cozy, `Stop ${stop.id} needs a cozy puzzle`);
    assert.ok(cozy.q && cozy.a, `Stop ${stop.id} cozy puzzle needs {q, a}`);
    cozyAnswers.push(String(cozy.a).trim().toLowerCase());

    assert.ok(
      stop.fallback && stop.fallback.q && stop.fallback.a,
      `Stop ${stop.id} needs a fallback {q, a}`
    );

    // Hints: flat array of exactly 3, or per-level object with exactly 3
    // for each of the four Dial levels (SPEC v1 allows both).
    if (Array.isArray(stop.hints)) {
      assert.equal(
        stop.hints.length,
        3,
        `Stop ${stop.id} flat hints must be exactly 3`
      );
      for (const h of stop.hints)
        assert.ok(
          typeof h === "string" && h.length > 0,
          `Stop ${stop.id} hints must be non-empty strings`
        );
    } else {
      for (const level of ["cozy", "spooky", "afterdark", "overdrive"]) {
        assert.ok(
          Array.isArray(stop.hints[level]),
          `Stop ${stop.id} hint object missing level ${level}`
        );
        assert.equal(stop.hints[level].length, 3);
      }
    }
  }

  assert.deepEqual(
    [...ids].sort((a, b) => a - b),
    [1, 2, 3, 4, 5, 6],
    "Stop ids must be 1..6"
  );
  assert.equal(
    new Set(cozyAnswers).size,
    cozyAnswers.length,
    "Cozy answers must be unique (case-insensitive)"
  );
});

test("kit-config sample is valid and consistent with the sample pack", () => {
  const cfg = readJson("sample-quest/kit-config.sample.json");
  const pack = readJson("sample-quest/wisp-sample.json");

  assert.equal(cfg.kit_id, pack.kit, "kit-config kit_id must match pack kit");
  assert.ok(cfg.access_code, "kit-config needs an access_code");
  assert.equal(cfg.stops.length, pack.stops.length);
  const byOrder = new Map(pack.stops.map((s) => [s.id, s]));
  for (const s of cfg.stops) {
    const stop = byOrder.get(s.order);
    assert.ok(stop, `kit-config stop order ${s.order} not in pack`);
    assert.equal(
      s.code,
      stop.code,
      `kit-config code for stop ${s.order} must match pack code`
    );
    assert.equal(s.name, stop.name);
  }
});

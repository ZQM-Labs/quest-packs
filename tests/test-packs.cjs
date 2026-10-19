import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");

test("all edition JSON packs are valid JSON", () => {
  const editionsDir = join(repoRoot, "editions");
  const editions = readdirSync(editionsDir);
  
  assert.ok(editions.length > 0, "Must have at least one edition");
  
  for (const edition of editions) {
    const editionPath = join(editionsDir, edition);
    const files = readdirSync(editionPath);
    
    for (const file of files) {
      if (file.endsWith(".json")) {
        const content = readFileSync(join(editionPath, file), "utf-8");
        assert.doesNotThrow(() => JSON.parse(content), `Invalid JSON in ${edition}/${file}`);
      }
    }
  }
});

test("sample quest pack has required fields", () => {
  const samplePath = join(repoRoot, "sample-quest", "wisp-sample.json");
  const content = readFileSync(samplePath, "utf-8");
  const pack = JSON.parse(content);
  
  assert.ok(pack.name, "Pack must have a name");
  assert.ok(pack.version, "Pack must have a version");
  assert.ok(Array.isArray(pack.quests), "Pack must have quests array");
});

test("kit-config sample is valid JSON", () => {
  const configPath = join(repoRoot, "sample-quest", "kit-config.sample.json");
  const content = readFileSync(configPath, "utf-8");
  assert.doesNotThrow(() => JSON.parse(content), "kit-config.sample.json must be valid JSON");
});

// Verifies the hackathon requirements that can disqualify a submission.
// Run: npm run check:submission
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { spawnSync } from "node:child_process";

const failures = [];
const fail = (msg) => failures.push(msg);

// 1. License file present.
const licenseFile = ["LICENSE", "LICENSE.md", "LICENSE.txt"].find(existsSync);
if (!licenseFile) fail("No LICENSE file found. An open-source license is required.");

// 2. .kiro exists and has content.
if (!existsSync(".kiro")) {
  fail(".kiro/ directory is missing. It is required at the repo root.");
} else if (!existsSync(".kiro/steering") || readdirSync(".kiro/steering").length === 0) {
  fail(".kiro/steering has no files. Show your Kiro usage.");
}

// 3. .kiro must not be git-ignored.
if (existsSync(".git")) {
  const ignored = spawnSync("git", ["check-ignore", "-q", ".kiro/steering/product.md"]);
  if (ignored.status === 0) fail(".kiro is git-ignored. Remove it from .gitignore (disqualification risk).");
}
if (existsSync(".gitignore")) {
  const lines = readFileSync(".gitignore", "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"));
  if (lines.some((l) => /^\/?\.kiro(\/.*)?$/.test(l))) {
    fail(".gitignore contains a .kiro rule. Remove it.");
  }
}

// 4. README present.
if (!existsSync("README.md")) fail("README.md is missing.");

if (failures.length > 0) {
  console.error("Submission check FAILED:");
  for (const f of failures) console.error(` - ${f}`);
  process.exit(1);
}
console.log("Submission check passed.");

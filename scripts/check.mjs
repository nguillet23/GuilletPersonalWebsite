// Runs every quality gate in order and stops at the first failure.
// Usage: npm run check
import { spawnSync } from "node:child_process";

const steps = ["typecheck", "lint", "format:check", "test"];

for (const step of steps) {
  console.log(`\n> npm run ${step}`);
  const { status } = spawnSync(`npm run ${step}`, { stdio: "inherit", shell: true });
  if (status !== 0) {
    console.error(`\n✗ ${step} failed`);
    process.exit(status ?? 1);
  }
}

console.log("\n✓ all checks passed");

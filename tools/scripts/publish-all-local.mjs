#!/usr/bin/env node

/**
 * Publie tous les packages locaux (engine + skills) vers Verdaccio
 * Usage :
 *   node tools/scripts/publish-all-local.mjs [version] [tag]
 *
 * Exemple :
 *   node tools/scripts/publish-all-local.mjs 1.0.0-local next
 */

import { execSync } from "child_process";
import { readdirSync, statSync } from "fs";
import path from "path";

const ROOT = process.cwd();
const DEFAULT_VERSION = "1.0.0-local";
const DEFAULT_TAG = "next";

const [, , versionArg, tagArg] = process.argv;
const VERSION = versionArg || DEFAULT_VERSION;
const TAG = tagArg || DEFAULT_TAG;

// 🔧 Helper
function run(cmd, cwd = ROOT) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd });
}

// 📦 Détection des sous-projets libs/skill-*
function getSkillProjects() {
  const libsDir = path.join(ROOT, "libs");
  return readdirSync(libsDir)
    .filter((dir) => dir.startsWith("skill-"))
    .filter((dir) => statSync(path.join(libsDir, dir)).isDirectory());
}

(async () => {
  try {
    console.log("🚀 Publishing all Digipair local packages to Verdaccio...");
    console.log(`   Version: ${VERSION}`);
    console.log(`   Tag: ${TAG}\n`);

    // 1️⃣ Build & Publish Engine
    console.log("🧱 Building & publishing @digipair/engine...");
    run(`yarn nx build engine`);
    run(`node tools/scripts/publish-local.mjs engine ${VERSION} ${TAG}`);

    // 2️⃣ Build & Publish all skill-* libs
    const skills = getSkillProjects();
    if (skills.length === 0) {
      console.log("⚠️ Aucun skill-* trouvé dans ./libs");
      process.exit(0);
    }

    for (const skill of skills) {
      console.log(`\n🧩 Building & publishing ${skill}...`);
      run(`yarn nx build ${skill} --with-deps`);
      run(`node tools/scripts/publish-local.mjs ${skill} ${VERSION} ${TAG}`);
    }

    console.log("\n✅ Tous les packages ont été publiés avec succès !");
    console.log("📦 Verdaccio registry: http://localhost:4873\n");
  } catch (err) {
    console.error("❌ Erreur lors de la publication :", err);
    process.exit(1);
  }
})();

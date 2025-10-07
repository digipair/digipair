#!/usr/bin/env node
/**
 * Publie un package vers Verdaccio local
 * Usage:
 *   node tools/scripts/publish-local.mjs <projectName> <version> [tag]
 *
 * Exemple:
 *   node tools/scripts/publish-local.mjs engine 1.0.0-local next
 */

import { execSync } from "child_process";
import { readFileSync, writeFileSync, existsSync, copyFileSync, readdirSync } from "fs";
import path from "path";
import devkit from "@nx/devkit";
const { readCachedProjectGraph } = devkit;

function invariant(condition, message) {
  if (!condition) {
    console.error("❌ " + message);
    process.exit(1);
  }
}

// 🧩 Fonction utilitaire pour remplacer les dépendances "workspace:*"
function replaceWorkspaceDeps(deps, version) {
  if (!deps) return deps;
  const newDeps = {};
  for (const [dep, val] of Object.entries(deps)) {
    if (val.startsWith("workspace:")) {
      newDeps[dep] = version;
      console.log(`🔄 Replaced ${dep}: "workspace:*" → "${version}"`);
    } else if (dep.startsWith("@digipair/")) {
      // Par précaution, on force la même version pour tous les @digipair/*
      newDeps[dep] = version;
      console.log(`🔄 Normalized ${dep} to version ${version}`);
    } else {
      newDeps[dep] = val;
    }
  }
  return newDeps;
}

// Arguments
const [, , name, version, tag = "next"] = process.argv;
const validVersion = /^\d+\.\d+\.\d+(-[\w.]+)?$/;

invariant(name, "Project name is required");
invariant(version && validVersion.test(version), `Invalid version: ${version}`);

// Récupère le graph NX
const graph = readCachedProjectGraph();
const project = graph.nodes[name];
invariant(project, `Project "${name}" not found in workspace`);

// Détecte le dossier de sortie
let outputPath =
  project.data?.targets?.build?.options?.outputPath ||
  path.join("dist", "libs", name);

// Chemin alternatif pour builds “non standard”
const altPath = path.join(project.data.root, "dist");

if (!existsSync(outputPath) && existsSync(altPath)) {
  console.log(`⚙️ Using alternate output path: ${altPath}`);
  outputPath = altPath;
}

// Build automatique si nécessaire
if (!existsSync(outputPath)) {
  console.log(`⚠️ Output path not found for "${name}". Running build...`);
  execSync(`yarn nx build ${name} --with-deps`, { stdio: "inherit" });
  if (!existsSync(outputPath) && existsSync(altPath)) {
    console.log(`✅ Found build output after build: ${altPath}`);
    outputPath = altPath;
  }
  invariant(existsSync(outputPath), `❌ Build output not found for "${name}" even after build`);
}

// Copier le package.json original dans dist
const originalPkg = path.join(project.data.root, "package.json");
const builtPkg = path.join(outputPath, "package.json");

if (existsSync(originalPkg)) {
  console.log(`📄 Copying package.json from ${originalPkg} to ${builtPkg}`);
  copyFileSync(originalPkg, builtPkg);
} else {
  console.warn(`⚠️ Original package.json not found at ${originalPkg}`);
}

// Mise à jour du package.json
try {
  const pkgJson = JSON.parse(readFileSync(builtPkg, "utf-8"));
  pkgJson.version = version;
  pkgJson.private = false; // <- important pour npm publish
  if (!pkgJson.name?.startsWith("@digipair/")) {
    pkgJson.name = `@digipair/${name}`;
  }
  // Mise à jour des dépendances locales
  pkgJson.dependencies = replaceWorkspaceDeps(pkgJson.dependencies, version);
  pkgJson.peerDependencies = replaceWorkspaceDeps(pkgJson.peerDependencies, version);
  pkgJson.devDependencies = replaceWorkspaceDeps(pkgJson.devDependencies, version);

  writeFileSync(builtPkg, JSON.stringify(pkgJson, null, 2));
  console.log(`✅ Updated ${name} package.json to version ${version}`);
} catch (e) {
  console.error(`⚠️ Could not update package.json in ${builtPkg}`);
  console.error(e);
  process.exit(1);
}

// Vérification finale avant publication
console.log(`📦 Publishing from directory: ${outputPath}`);
console.log(readdirSync(outputPath));

// Publication vers Verdaccio
try {
  execSync(`npm publish --registry http://localhost:4873 --tag ${tag}`, {
    stdio: "inherit",
    cwd: outputPath
  });
  console.log(`✅ Successfully published ${name}@${version}`);
} catch (e) {
  console.error("❌ Publish failed");
  process.exit(1);
}

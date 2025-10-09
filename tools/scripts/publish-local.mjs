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
import { fileURLToPath } from 'url';
import devkit from "@nx/devkit";

const { readCachedProjectGraph } = devkit;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

const VERDACCIO_REGISTRY = "http://localhost:4873";

// 🗺️ Mapping des noms de projets Nx vers les noms de packages/dossiers
const PROJECT_MAPPINGS = {
  'factory': { packageName: 'digipair', outputFolder: 'digipair' }
};

function getProjectMapping(projectName) {
  return PROJECT_MAPPINGS[projectName] || {
    packageName: projectName,
    outputFolder: projectName
  };
}

function invariant(condition, message) {
  if (!condition) {
    console.error("❌ " + message);
    process.exit(1);
  }
}

// 🧩 Fonction utilitaire pour remplacer les dépendances internes
function replaceWorkspaceDeps(deps, version, projectName) {
  if (!deps) return deps;
  const newDeps = {};
  let hasChanges = false;

  for (const [dep, val] of Object.entries(deps)) {
    // Cas 1: Dépendances @digipair/* (skills, engine, etc.)
    if (dep.startsWith("@digipair/")) {
      // Remplace :latest, :next, ou toute version par la version cible
      // if (val === "latest" || val === "next" || val.includes(":")) {
      //   newDeps[dep] = version;
      //   console.log(`   🔄 ${dep}: "${val}" → "${version}"`);
      //   hasChanges = true;
      // } else {
        newDeps[dep] = version;
        console.log(`   🔄 ${dep}: "${val}" → "${version}"`);
        hasChanges = true;
      // }
    }
    // Cas 2: Dépendances apss/factory avec @digipair/skill-xxx
    // else if (dep.startsWith("@digipair/skill-")) {
    //   newDeps[dep] = version;
    //   console.log(`   🔄 ${dep}: "${val}" → "${version}"`);
    //   hasChanges = true;
    // }
    // Cas 3: Autres dépendances - on garde tel quel
    else {
      newDeps[dep] = val;
    }
  }

  if (!hasChanges) {
    console.log(`   ℹ️  No @digipair dependencies to update`);
  }

  return newDeps;
}

// 🔍 Trouver le bon outputPath
function findOutputPath(project, name) {
  const candidates = [
    // 1. Chemin configuré dans project.json
    project.data?.targets?.build?.options?.outputPath,

    // 2. Apps avec webpack custom (ex: factory → dist/digipair)
    path.join(ROOT, "dist", name),

    // 3. Cas spécifique factory
    name === 'factory' ? path.join(ROOT, "dist", "digipair") : null,

    // 4. Libs standard (ex: skill-xxx → dist/libs/skill-xxx)
    path.join(ROOT, "dist", "libs", name),

    // 5. Build dans le dossier du projet
    path.join(ROOT, project.data.root, "dist"),
  ];

  for (const candidate of candidates) {
    if (candidate && existsSync(candidate)) {
      console.log(`   📂 Found output: ${candidate}`);
      return candidate;
    }
  }

  return null;
}

// 🔨 Build le projet si nécessaire
function buildIfNeeded(name, outputPath) {
  if (existsSync(outputPath)) {
    console.log(`✅ Build output already exists: ${outputPath}`);
    return true;
  }

  console.log(`⚠️  Output path not found. Running build for "${name}"...`);
  try {
    execSync(`yarn nx build ${name}`, {
      stdio: "inherit",
      cwd: ROOT
    });
    return existsSync(outputPath);
  } catch (error) {
    console.error(`❌ Build failed for "${name}"`);
    return false;
  }
}

// 📝 Mise à jour du package.json
function updatePackageJson(pkgPath, projectName, version) {
  try {
    if (!existsSync(pkgPath)) {
      console.error(`❌ package.json not found at ${pkgPath}`);
      return false;
    }

    const mapping = getProjectMapping(projectName);
    const packageName = mapping.packageName;

    const pkgJson = JSON.parse(readFileSync(pkgPath, "utf-8"));

    // Mise à jour des champs principaux
    pkgJson.version = version;
    pkgJson.private = false; // Important pour npm publish

    // Utiliser le nom mappé
    // if (!pkgJson.name?.startsWith("@digipair/")) {
    //   pkgJson.name = `@digipair/${packageName}`;
    // }

    // Mise à jour des dépendances internes @digipair/*
    // Ceci normalise toutes les dépendances @digipair/* à la même version
    console.log(`\n   📦 Updating dependencies...`);
    pkgJson.dependencies = replaceWorkspaceDeps(pkgJson.dependencies, version, packageName);
    pkgJson.peerDependencies = replaceWorkspaceDeps(pkgJson.peerDependencies, version, packageName);
    pkgJson.devDependencies = replaceWorkspaceDeps(pkgJson.devDependencies, version, packageName);

    writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2));
    console.log(`✅ Updated package.json: ${pkgJson.name}@${version}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to update package.json at ${pkgPath}`);
    console.error(error.message);
    return false;
  }
}

// 📦 Publication vers Verdaccio
function publishToVerdaccio(outputPath, name, version, tag) {
  try {
    console.log(`📦 Publishing from: ${outputPath}`);
    console.log(`📄 Contents:`);
    const files = readdirSync(outputPath);
    files.forEach(f => console.log(`   - ${f}`));

    execSync(
      `npm publish --registry ${VERDACCIO_REGISTRY} --tag ${tag}`,
      {
        stdio: "inherit",
        cwd: outputPath
      }
    );

    console.log(`✅ Successfully published ${name}@${version}`);
    console.log(`🔗 ${VERDACCIO_REGISTRY}/-/web/detail/@digipair/${name}\n`);
    return true;
  } catch (error) {
    console.error(`❌ Publish failed for ${name}@${version}`);
    console.error(error.message);
    return false;
  }
}

// 🚀 Main
function main() {
  // Arguments
  const [, , name, version, tag = "next"] = process.argv;
  const validVersion = /^\d+\.\d+\.\d+(-[\w.]+)?$/;

  invariant(name, "Project name is required. Usage: publish-local.mjs <name> <version> [tag]");
  invariant(
    version && validVersion.test(version),
    `Invalid version format: ${version}. Expected: X.Y.Z or X.Y.Z-suffix`
  );

  console.log("\n" + "━".repeat(60));
  console.log(`📦 Publishing ${name}@${version} (tag: ${tag})`);
  console.log("━".repeat(60));

  // Récupère le graph NX
  let graph;
  try {
    graph = readCachedProjectGraph();
  } catch (error) {
    console.error("❌ Failed to read Nx project graph");
    console.error("   Make sure you're in the workspace root");
    process.exit(1);
  }

  const project = graph.nodes[name];
  invariant(project, `Project "${name}" not found in workspace`);

  console.log(`📁 Project root: ${project.data.root}`);

  // Trouve le chemin de sortie
  let outputPath = findOutputPath(project, name);

  if (!outputPath) {
    console.log("⚙️  No output path found, attempting build...");
    const defaultOutput = path.join(ROOT, "dist", "libs", name);

    // if (!buildIfNeeded(name, defaultOutput)) {
    //   console.error(`❌ Could not find or create build output for "${name}"`);
    //   process.exit(1);
    // }

    outputPath = findOutputPath(project, name);
    invariant(outputPath, `Build completed but output still not found for "${name}"`);
  }

  console.log(`📂 Output path: ${outputPath}`);

  // Mise à jour du package.json
  const pkgPath = path.join(outputPath, "package.json");
  if (!updatePackageJson(pkgPath, name, version)) {
    process.exit(1);
  }

  // Publication
  if (!publishToVerdaccio(outputPath, name, version, tag)) {
    process.exit(1);
  }
}

// Execute
main();

// tools/registry/clean-local-registry.js
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Supprimer le storage Verdaccio
execSync("rimraf tmp/local-registry/storage");

// Vider htpasswd
fs.writeFileSync(".verdaccio/htpasswd", "");

// Supprimer le .npmrc généré et restaurer backup si présent
const NPMRC_PATH = path.resolve(".npmrc");
const BACKUP_PATH = path.resolve(".npmrc.backup");

if (fs.existsSync(NPMRC_PATH)) {
  fs.unlinkSync(NPMRC_PATH);
  console.log("✅ .npmrc supprimé");
}

if (fs.existsSync(BACKUP_PATH)) {
  fs.renameSync(BACKUP_PATH, NPMRC_PATH);
  console.log("✅ .npmrc restauré depuis backup");
}

console.log("✅ Registry local nettoyé !");

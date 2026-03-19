const fs = require("fs");
const { execSync } = require("child_process");

// Supprimer le storage Verdaccio
fs.rmSync("tmp/local-registry/storage", { recursive: true, force: true });

// Vider htpasswd
fs.writeFileSync(".verdaccio/htpasswd", "");


console.log("✅ Registry local nettoyé !");

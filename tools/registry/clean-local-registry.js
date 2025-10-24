const fs = require("fs");
const { execSync } = require("child_process");

// Supprimer le storage Verdaccio
execSync("rimraf tmp/local-registry/storage");

// Vider htpasswd
fs.writeFileSync(".verdaccio/htpasswd", "");


console.log("✅ Registry local nettoyé !");

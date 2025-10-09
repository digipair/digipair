const fs = require('fs');
const path = require('path');

const libsDir = './libs';
let foundMissing = false;

console.log('Vérification des rollup.config.cjs dans libs/skill-*/');
console.log('=====================================================\n');

// Lire le contenu du répertoire libs
const entries = fs.readdirSync(libsDir, { withFileTypes: true });

// Filtrer les répertoires commençant par 'skill-'
const skillDirs = entries.filter(e =>
  e.isDirectory() && e.name.startsWith('skill-')
);

if (skillDirs.length === 0) {
  console.log('⚠️  Aucun répertoire skill-* trouvé dans libs/');
  process.exit(0);
}

skillDirs.forEach(dir => {
  const rollupPath = path.join(libsDir, dir.name, 'rollup.config.cjs');

  if (!fs.existsSync(rollupPath)) {
    console.log(`⚠️  Pas de rollup.config.cjs dans: libs/${dir.name}/`);
    return;
  }

  try {
    const content = fs.readFileSync(rollupPath, 'utf8');

    // Vérifier si "package.json" est présent (guillemets simples ou doubles)
    if (!content.includes('"package.json"') && !content.includes("'package.json'")) {
      console.log(`❌ MANQUANT: libs/${dir.name}/rollup.config.cjs`);
      foundMissing = true;
    } else {
      console.log(`✓ OK: libs/${dir.name}/rollup.config.cjs`);
    }
  } catch (err) {
    console.log(`❌ ERREUR lecture: libs/${dir.name}/rollup.config.cjs - ${err.message}`);
    foundMissing = true;
  }
});

console.log('');
if (foundMissing) {
  console.log("⚠️  Certains rollup.config.cjs ne contiennent pas 'package.json'");
  process.exit(1);
} else {
  console.log("✅ Tous les rollup.config.cjs contiennent 'package.json'");
  process.exit(0);
}

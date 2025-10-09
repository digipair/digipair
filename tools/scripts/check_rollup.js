const fs = require('fs');
const path = require('path');

const libsDir = './libs';
let foundMissing = false;

console.log('Vérification des package.json dans libs/skill-*/');
console.log('================================================\n');

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
  const pkgPath = path.join(libsDir, dir.name, 'package.json');

  if (!fs.existsSync(pkgPath)) {
    console.log(`⚠️  Pas de package.json dans: libs/${dir.name}/`);
    return;
  }

  try {
    const content = fs.readFileSync(pkgPath, 'utf8');

    // Vérifier si "./schema.json" est présent dans le contenu
    if (!content.includes('"./schema.json"')) {
      console.log(`❌ MANQUANT: libs/${dir.name}/package.json`);
      foundMissing = true;
    } else {
      console.log(`✓ OK: libs/${dir.name}/package.json`);
    }
  } catch (err) {
    console.log(`❌ ERREUR lecture: libs/${dir.name}/package.json - ${err.message}`);
    foundMissing = true;
  }
});

console.log('');
if (foundMissing) {
  console.log("⚠️  Certains package.json ne contiennent pas './schema.json'");
  process.exit(1);
} else {
  console.log("✅ Tous les package.json contiennent './schema.json'");
  process.exit(0);
}

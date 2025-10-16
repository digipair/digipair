const fs = require('fs');
const path = require('path');
const {withNxDigipair} = require("../rollup/with-nx");
const {withNx} = require("@nx/rollup/with-nx");
const {join} = require("path");

// Liste des skills à exclure
const EXCLUDED_SKILLS = [];

// Template de configuration rollup
const generateRollupConfig = (skillName) => `const { withNx } = require('@nx/rollup/with-nx');
const { join } = require('path');
const { withNxDigipair } = require('../../tools/rollup/with-nx');

module.exports = withNxDigipair(['esm', 'cjs'], config =>
  withNx(
    {
      main: './src/index.ts',
      outputPath: './dist',
      tsConfig: './tsconfig.lib.json',
      compiler: 'swc',
      format: [config.format],
      external: config.format === 'cjs' ? [] : [],
      assets: [
        {
          input: join(__dirname, 'src'),
          glob: '*.json',
          output: '.',
        },
      ],
    },
    {},
  ),
);
`;

// Fonction principale
function updateRollupConfigs() {
  const libsPath = path.join(process.cwd(), 'libs');

  if (!fs.existsSync(libsPath)) {
    console.error('❌ Le dossier libs/ n\'existe pas');
    return;
  }

  // Lire tous les dossiers dans libs/
  const folders = fs.readdirSync(libsPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  // Filtrer les skills et vérifier que c'est bien un projet (présence de src/ ou package.json)
  const skillFolders = folders.filter(folder => {
    if (!folder.startsWith('skill-')) return false;
    if (EXCLUDED_SKILLS.includes(folder)) return false;

    // Vérifier que c'est bien un projet valide
    const folderPath = path.join(libsPath, folder);
    const hasSrc = fs.existsSync(path.join(folderPath, 'src'));
    const hasPackageJson = fs.existsSync(path.join(folderPath, 'package.json'));

    return hasSrc || hasPackageJson;
  });

  console.log(`📦 ${skillFolders.length} projet(s) skill trouvé(s) à mettre à jour`);
  console.log(`🚫 Exclus: ${EXCLUDED_SKILLS.join(', ')}\n`);

  let updatedCount = 0;
  let errorCount = 0;

  skillFolders.forEach(skillName => {
    const rollupConfigPath = path.join(libsPath, skillName, 'rollup.config.cjs');

    try {
      const newConfig = generateRollupConfig(skillName);

      // Créer ou mettre à jour le fichier
      fs.writeFileSync(rollupConfigPath, newConfig, 'utf8');
      console.log(`✅ ${skillName}/rollup.config.cjs mis à jour`);
      updatedCount++;
    } catch (error) {
      console.error(`❌ Erreur lors de la mise à jour de ${skillName}:`, error.message);
      errorCount++;
    }
  });

  console.log(`\n📊 Résumé:`);
  console.log(`   ✅ ${updatedCount} fichier(s) mis à jour`);
  console.log(`   ❌ ${errorCount} erreur(s)`);
}

// Exécution
updateRollupConfigs();

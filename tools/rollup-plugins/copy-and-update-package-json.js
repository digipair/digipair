const fs = require('fs');
const path = require('path');

module.exports = function copyAndUpdatePackageJson() {
  return {
    name: 'copy-and-update-package-json',
    writeBundle() {
      // Lire package.json source
      const pkgPath = path.resolve(__dirname, 'package.json');
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

      // ✅ Modifier les chemins pour le dist local
      pkg.main = './index.cjs.js';
      pkg.module = './index.esm.js';
      pkg.types = './index.d.ts';

      if (pkg.exports && pkg.exports['.']) {
        pkg.exports['.'].types = './index.d.ts';
        pkg.exports['.'].import = './index.esm.js';
        pkg.exports['.'].default = './index.cjs.js';
      }

      // Écrire dans dist local
      const distPkgPath = path.resolve(__dirname, 'dist/package.json');
      fs.mkdirSync(path.dirname(distPkgPath), { recursive: true });
      fs.writeFileSync(distPkgPath, JSON.stringify(pkg, null, 2));

      console.log('✅ package.json copié et modifié dans ./dist/');
    }
  };
};

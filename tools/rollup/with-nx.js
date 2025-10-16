exports.withNxDigipair = (formats, callbackOptions) => {
  return formats.map(format => {
    const result = callbackOptions({ format });

    if (format !== formats[0]) {
      result.plugins = result.plugins.filter(
        p => p.name !== 'rollup-plugin-nx-delete-output',
      );
    }

    return result;
  });
};

// const {withNx} = require("@nx/rollup/with-nx");
//
// exports.withNxDigipair = (formats, callbackOptions) => {
//   return formats.map((format, idx) => {
//     const baseConfig = callbackOptions({ format }) || {};
//     const result = { ...baseConfig };
//
//     result.plugins = result?.plugins || [];
//     if (idx > 0) {
//       result.plugins = result.plugins.filter(
//         p => !p || p.name !== 'rollup-plugin-nx-delete-output',
//       );
//     }
//
//     // const customExternal = baseConfig.external;
//     // const originalExternal = result.external;
//     //
//     // // ⚙️ Construction d'une fonction external fusionnée et maîtrisée
//     // result.external = (id, ...args) => {
//     //   // -- Cas 1 : certains packages DOIVENT être BUNDLÉS (ex. cel-js)
//     //   const alwaysBundle = ['cel-js', 'feelin', 'handlebars', '@microsoft/fetch-event-source'];
//     //   if (alwaysBundle.some(pkg => id === pkg || id.startsWith(pkg))) {
//     //     return false;
//     //   }
//     //
//     //   // -- Cas 2 : si un external spécifique est défini (tableau ou fonction)
//     //   if (Array.isArray(customExternal) && customExternal.includes(id)) {
//     //     return true;
//     //   }
//     //   if (typeof customExternal === 'function' && customExternal(id, ...args)) {
//     //     return true;
//     //   }
//     //
//     //   // -- Cas 3 : laisser Nx décider pour le reste
//     //   if (typeof originalExternal === 'function') {
//     //     return originalExternal(id, ...args);
//     //   }
//     //
//     //   // -- Par défaut : on bundle
//     //   return false;
//     // };
//
//     console.log(`✅ Rollup config générée pour format ${format}`);
//     console.log('result:',result)
//     return result;
//   });
// };

// exports.withNxDigipairNext = (formats, callbackOptions) => {
//   return formats.map((format, idx) => {
//     // Config utilisateur
//     const userConfig = callbackOptions({ format }) || {};
//     const userExternal = userConfig.external;
//     console.log(`🛠 Build format ${format}`);
//     if (Array.isArray(userExternal)) {
//       console.log(`   ↳ externals forcés: [${userExternal.join(', ')}]`);
//     }
//     // Génère la config Nx interne
//     const baseConfig = withNx(userConfig, {});
//
//     // Fusion propre de l'external :
//     // 1️⃣ On garde la fonction Nx
//     // 2️⃣ On ajoute notre array d'externals custom
//     const nxExternal = baseConfig.external;
//     baseConfig.external = (id, parent, isResolved) => {
//
//       // Si Nx le considère externe → reste externe
//       if (typeof nxExternal === 'function' && nxExternal(id, parent, isResolved)) {
//         return true;
//       }
//       // Si notre liste custom contient l'id → externe aussi
//       if (Array.isArray(userExternal) && userExternal.some(e => id === e || id.startsWith(e))) {
//         return true;
//       }
//       return false;
//     };
//
//     // Supprime le plugin de nettoyage si build multiple
//     if (idx > 0 && baseConfig.plugins) {
//       baseConfig.plugins = baseConfig.plugins.filter(
//         p => !p || p.name !== 'rollup-plugin-nx-delete-output'
//       );
//     }
//
//     console.log(`🛠 Build format ${format}`);
//     if (Array.isArray(userExternal)) {
//       console.log(`   ↳ externals forcés: [${userExternal.join(', ')}]`);
//     }
//
//     return baseConfig;
//   });
// };

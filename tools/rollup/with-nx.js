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

// exports.withNxDigipair = (formats, callbackOptions) => {
//   return formats.map((format, idx) => {
//     const result = callbackOptions({ format });
//     result.plugins = result?.plugins || [];
//     if (idx > 0) {
//       result.plugins = result.plugins.filter(
//         p => !p || p.name !== 'rollup-plugin-nx-delete-output',
//       );
//     }
//
//     return result;
//   });
// };
//
// exports.withNxDigipairNext = (formats, callbackOptions) => {
//   return formats.map((format, idx) => {
//     const result = callbackOptions({ format });
//
//     result.plugins = result?.plugins ?? [];
//     if (idx > 0) {
//       result.plugins = result.plugins.filter(
//         (p) => !p || p.name !== 'rollup-plugin-nx-delete-output'
//       );
//     }
//
//     const DEBUG_EXTERNALS = true; // ou process.env.DEBUG_EXTERNALS === 'true';
//
//     const nxExternal = result.external;
//     const bundleList = Array.isArray(result.bundleList) ? result.bundleList : [];
//     const externalizeList = Array.isArray(result.externalizeList) ? result.externalizeList : [];
//
//     result.external = (id, parent, isResolved) => {
//       if (bundleList.some(e => id === e || id.startsWith(e))) {
//         if (DEBUG_EXTERNALS) console.log(`✅ FORCE BUNDLED FROM CONFIG: ${id}`);
//         return false;
//       }
//       if (externalizeList.some(e => id === e || id.startsWith(e))) {
//         if (DEBUG_EXTERNALS) console.log(`🔸 FORCE EXTERNAL FROM CONFIG: ${id}`);
//         return true;
//       }
//       if (typeof nxExternal === 'function' && nxExternal(id, parent, isResolved)) {
//         if (DEBUG_EXTERNALS) console.log(`🔸 EXTERNAL (Nx): ${id}`);
//         return true;
//       }
//
//       // else bundle
//       if (DEBUG_EXTERNALS) console.log(`✅ BUNDLED: ${id}`);
//       return false;
//     };
//
//     delete result.bundleList;
//     delete result.externalizeList;
//
//     return result;
//   });
// };

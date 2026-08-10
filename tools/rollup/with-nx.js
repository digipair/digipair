const fs = require('fs');
const path = require('path');

/**
 * Nx's `@nx/js:node` serve executor requires workspace libs directly by
 * their dist directory (not by package name), bypassing the lib's own
 * package.json "main" field. Since there is no package.json inside dist,
 * Node's directory-require falls through to looking for an "index.js" -
 * this plugin writes that shim so `require('.../libs/<x>/dist')` resolves.
 */
function addDistIndexShimPlugin() {
  return {
    name: 'add-dist-index-shim',
    writeBundle(outputOptions) {
      const dir = outputOptions.dir || path.dirname(outputOptions.file);
      const projectRoot = path.dirname(dir);
      const pkgPath = path.join(projectRoot, 'package.json');
      if (!fs.existsSync(pkgPath)) return;
      const { main } = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      if (!main) return;
      const entryFile = path.relative(dir, path.join(projectRoot, main));
      fs.writeFileSync(
        path.join(dir, 'index.js'),
        `module.exports = require('./${entryFile}');\n`,
      );
    },
  };
}

exports.withNxDigipair = (formats, callbackOptions) => {
  return formats.map(format => {
    const result = callbackOptions({ format });

    if (result.plugins && format !== formats[0]) {
      result.plugins = result.plugins.filter(
        p => p.name !== 'rollup-plugin-nx-delete-output',
      );
    }

    if (result.plugins) {
      result.plugins.push(addDistIndexShimPlugin());
    }

    return result;
  });
};

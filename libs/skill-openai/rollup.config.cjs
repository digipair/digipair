const terser = require('@rollup/plugin-terser');
const tsconfig = require('../../tsconfig.base.json');
const alias = require('@rollup/plugin-alias');

function getRollupOptions(options) {
  const extraGlobals = {};
  const externals = ['@digipair/engine'];

  const value = {
    ...options,
    external: (name) => {
      return externals.includes(name);
    },
    plugins: [
      ...options.plugins,
      alias({
        entries: Object.getOwnPropertyNames(tsconfig.compilerOptions.paths).map(
          (property) => ({
            find: property,
            replacement: tsconfig.compilerOptions.paths[property][0],
          })
        ),
      }),
    ],
    output: {
      ...options.output,
      globals: extraGlobals,
      plugins: [], //[terser()],
    },
  };

  return value;
}

module.exports = getRollupOptions;

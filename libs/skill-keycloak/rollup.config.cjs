const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-keycloak/src/index.ts',
    outputPath: 'dist/libs/skill-keycloak',
    tsConfig: 'libs/skill-keycloak/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-keycloak/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-keycloak/src/',
        glob: '*.json',
        output: '.'
      }
    ]
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    // e.g.
    // output: { sourcemap: true },
  }
);

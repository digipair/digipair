const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-web-keycloak/src/index.ts',
    outputPath: 'dist/libs/skill-web-keycloak',
    tsConfig: 'libs/skill-web-keycloak/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-web-keycloak/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-web-keycloak/src/',
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

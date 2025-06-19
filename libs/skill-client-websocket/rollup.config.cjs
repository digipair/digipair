const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-client-websocket/src/index.ts',
    outputPath: 'dist/libs/skill-client-websocket',
    tsConfig: 'libs/skill-client-websocket/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-client-websocket/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-client-websocket/src/',
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

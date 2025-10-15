const {withNx} = require('@nx/rollup/with-nx');
const {join} = require('path');
const cleanupPlugin = require('../../tools/rollup-plugins/cleanup');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: './dist',
    tsConfig: './tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', 'cjs'],
    output: [
      {
        format: 'esm',
        entryFileNames: 'index.esm.js',
        external: ['node-webcam']
      },
      {
        format: 'cjs',
        entryFileNames: 'index.cjs.js',
        external: ['node-webcam'],
      },
    ],
    assets: [
      {
        input: join(__dirname, 'src'),
        glob: '*.json',
        output: '.',
      },
    ],
  },
  {
    plugins: [cleanupPlugin()],
  },
);

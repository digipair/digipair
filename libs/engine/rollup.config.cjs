const { withNx } = require('@nx/rollup/with-nx');
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
      external: config.format === 'cjs' ? ["feelin","cel-js","handlebars/dist/handlebars.min.js"] : [],
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

// const { join } = require('path');
// const { withNxDigipairNext } = require('../../tools/rollup/with-nx');
//
// module.exports = withNxDigipairNext(['esm', 'cjs'], (config) => ({
//   main: './src/index.ts',
//   outputPath: './dist',
//   tsConfig: './tsconfig.lib.json',
//   compiler: 'swc',
//   format: [config.format],
//   useLegacyTypescriptPlugin: false,
//   external:
//     config.format === 'cjs'
//       ? ['feelin', 'cel-js', 'handlebars/dist/handlebars.min.js']
//       : [],
//   assets: [
//     {
//       input: join(__dirname, 'src'),
//       glob: '*.json',
//       output: '.',
//     },
//   ],
// }));

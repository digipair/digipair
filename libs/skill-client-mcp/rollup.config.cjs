const {withNx} = require('@nx/rollup/with-nx');
const {join} = require('path');
const {withNxDigipair} = require('../../tools/rollup/with-nx');

module.exports = withNxDigipair(['esm', 'cjs'], config =>
  withNx(
    {
      main: './src/index.ts',
      outputPath: './dist',
      tsConfig: './tsconfig.lib.json',
      compiler: 'swc',
      format: [config.format],
      assets: [
        {
          input: join(__dirname, 'src'),
          glob: '*.json',
          output: '.',
        },
      ],
    },
    {      
      external: (id) => {
        const deps = config.format === 'cjs'
          ? ["@digipair/engine","@modelcontextprotocol/sdk/client/index.js","@modelcontextprotocol/sdk/client/streamableHttp.js","@modelcontextprotocol/sdk/client/stdio.js"]
          : [];
        return deps.some(dep => id === dep || id.startsWith(dep + "/"));
      }
    }
  )
);

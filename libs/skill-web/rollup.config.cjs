 const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx({
  main: './src/index.ts',
  outputPath: './dist',
  tsConfig: './tsconfig.lib.json',
  compiler: 'swc',
  format: ['esm', 'cjs'],
  assets: [
    {
      input: 'libs/skill-web/src/',
      glob: '*.json',
      output: '.',
    },
  ],
  external: [
    'fs', 'path', 'vm', 'url', 'jsdom',
    '@digipair/engine',
    '@digipair/skill-basic',
    '@digipair/skill-service',
    '@digipair/skill-chatbot',
    '@digipair/skill-dsp',
    '@digipair/skill-sse',
    '@digipair/skill-common',
    '@digipair/skill-debug',
    '@digipair/skill-web',
    '@digipair/skill-web-chatbot',
    '@digipair/skill-web-inputs',
  ],
  },

  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    // e.g.
    // output: { sourcemap: true },
  }
);

// eslint.config.mjs
import nxEslintPlugin from '@nx/eslint-plugin';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  // Configuration de base pour tous les projets
  {
    plugins: {
      '@nx': nxEslintPlugin,
    },
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  // Intègre les configurations TypeScript
  ...compat.config({
    extends: ['plugin:@nx/typescript'],
  }),
  // Règles spécifiques pour les tests
  {
    files: ['**/*.spec.ts', '**/*.spec.tsx'],
    ...compat.env({ jest: true }),
  },
];

import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import { version } from 'react';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
    settings: { react: { version: 'detect' } },
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
]);

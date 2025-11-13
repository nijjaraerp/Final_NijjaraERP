// ESLint flat config (CommonJS) mirror for editors that auto-pick *.js
const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        ...globals.browser,
        Logger: 'readonly',
        SpreadsheetApp: 'readonly',
        ScriptApp: 'readonly',
        PropertiesService: 'readonly',
        HtmlService: 'readonly',
        Utilities: 'readonly',
        UrlFetchApp: 'readonly',
        DriveApp: 'readonly',
        Session: 'readonly',
        CacheService: 'readonly',
        GmailApp: 'readonly',
      },
    },
    rules: {
      'no-undef': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-prototype-builtins': 'off',
      'no-case-declarations': 'off',
      'no-useless-escape': 'warn',
    },
  },
  {
    files: ['scripts/**/*.js', 'tools/**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
  },
];

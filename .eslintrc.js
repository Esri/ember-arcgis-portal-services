/*
 * Copyright (c) 2016-2018 Esri
 * Apache-2.0
*/
/* eslint no-undef: "error" */
/* eslint-env node */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'semistandard',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'comma-dangle': [2, 'only-multiline'],
    'no-console': 0,
    'indent': [2, 2, { 'SwitchCase': 1, 'MemberExpression': 'off' }],
    'ember/no-jquery': 2,
    // don't allow use of the global fetch
    'no-restricted-globals': [2, {
      name: 'fetch',
      message: "Use ember-fetch (import fetch from 'fetch') instead of the global."
    }]
  },
  overrides: [
    // node files
    {
      files: [
        '.template-lintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js'
      ],
      excludedFiles: [
        'addon/**',
        'addon-test-support/**',
        'app/**',
        'tests/dummy/app/**'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here
      })
    }
  ]
};

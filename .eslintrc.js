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
    "comma-dangle": [2, "only-multiline"],
    "no-console": 0,
    "indent": [2, 2, { "SwitchCase": 1, "MemberExpression": "off" }],
    "ember/no-jquery": 2,
    // don't allow use of the global fetch
    "no-restricted-globals": [2, {
      name: "fetch",
      message: "Use ember-fetch (import fetch from 'fetch') instead of the global."
    }]
  },
  overrides: [
    // node files
    {
      files: [
        'index.js',
        'testem.js',
        'ember-cli-build.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js'
      ],
      excludedFiles: [
        'app/**',
        'addon/**'
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
    },

    // test files
    {
      files: ['tests/**/*.js'],
      excludedFiles: ['tests/dummy/**/*.js'],
      env: {
        embertest: true
      }
    }
  ]
};

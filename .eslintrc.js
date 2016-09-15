module.exports = {
  extends: [
    require.resolve('ember-cli-eslint/coding-standard/ember-application.js'),
    require.resolve('eslint-config-semistandard/eslintrc.json')
  ],
  rules: {
    "comma-dangle": [2, "only-multiline"],
    "no-console": 0,
  }
};

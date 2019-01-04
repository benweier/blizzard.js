module.exports = {
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'plugin:import/errors', 'airbnb-base', 'prettier'],
  env: {
    es6: true,
    browser: false,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  plugins: ['jest', 'import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
  },
};

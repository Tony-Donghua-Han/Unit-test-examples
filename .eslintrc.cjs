// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  env: { node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: "./tsconfig.json"
  },
  plugins: ['@typescript-eslint'],
  root: true,
};
module.exports = config;

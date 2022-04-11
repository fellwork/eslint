import type { Linter } from 'eslint'

export const env: Linter.BaseConfig = {
  parserOptions: { sourceType: 'module' },
  env: {
    browser: true,
    es6: true,
    es2021: true,
    node: true,
  },
  overrides: [
    {
      files: ['**/**.[jt]sx'],
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  ],
}

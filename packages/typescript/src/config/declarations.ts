import type { Linter } from 'eslint'

export const typescriptDeclarations: Linter.BaseConfig = {
  rules: {
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'multiline-comment-style': 'off',
    'spaced-comment': 'off',
  },
}

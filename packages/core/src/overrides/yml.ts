import type { Linter } from 'eslint'

export const ymlOverride: Linter.Config = {
  rules: {
    'spaced-comment': 'off',
    'yml/quotes': ['error', { prefer: 'single', avoidEscape: false }],
    'yml/no-empty-document': 'off',
  }
}

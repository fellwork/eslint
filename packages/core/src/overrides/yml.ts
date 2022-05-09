import type { Linter } from 'eslint'

export const ymlOverride: Linter.BaseConfig = {
  parser: 'yaml-eslint-parser',
  rules: {
    'spaced-comment': 'off',
    'yml/quotes': ['error', { prefer: 'single', avoidEscape: false }],
    'yml/no-empty-document': 'off',
  },
}

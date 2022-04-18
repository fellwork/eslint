import type { Linter } from 'eslint'

import { fromEslint } from './from-eslint'
import { fromStd } from './from-std'
// Import { splat } from './splat'

export const core: Linter.BaseConfig = {
  extends: [
    require.resolve('@fellwork/eslint-config-env'),
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:markdown/recommended',
  ],
  rules: {
    // ...splat,
    ...fromEslint,
    ...fromStd,
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'quotes': ['error', 'double'],
        'quote-props': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        'spaced-comment': 'off',
      },
    },
  ],
}

import type { Linter } from 'eslint'

export const reactBase: Linter.BaseConfig = {
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/react-in-jsx-scope': 'off',
  },
}

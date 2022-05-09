import type { Linter } from 'eslint'

export const importDeclarations: Linter.BaseConfig = {
  rules: {
    'import/unambiguous': 'off',
    'import/named': 'off',
    'import/no-duplicates': 'off',
  },
}

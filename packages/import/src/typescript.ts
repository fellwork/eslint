import type { Linter } from 'eslint'
import { Ext } from '@fellwork/eslint-shared'

export const importTypescript: Linter.BaseConfig = {
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [Ext.TS, Ext.TSX, Ext.DTS, Ext.DTSX],
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-typescript')]: {
        project: ['**/tsconfig.json', '**/tsconfig.*.json'],
      },
    },
  },
  rules: {
    'import/no-commonjs': 'warn',
    'import/unambiguous': 'warn',
    'import/named': 'off',
  },
}

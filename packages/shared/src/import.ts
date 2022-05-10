import type { Linter } from 'eslint'
import { Ext } from './extensions'

export const importSettings: Linter.Config['settings'] = {
  'import/extensions': [Ext.JS, Ext.MJS],
  'import/resolver': {
    node: {
      extensions: [Ext.JS, Ext.MJS],
    },
  },
  'import/core-modules': [],
  'import/ignore': ['\\.(coffee|scss|css|less|hbs|svg|json)$'],
  'import/internal-regex': '^@types/',
}

export const importRules: Linter.Config['rules'] = {
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
  'import/no-anonymous-default-export': [
    'error',
    {
      allowCallExpression: false,
    },
  ],
  'import/no-mutable-exports': 'error',
  'import/no-amd': 'error',
  'import/first': 'error',
  'import/no-duplicates': 'error',
  'import/extensions': [
    'warn',
    'ignorePackages',
    {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    },
  ],
  'import/newline-after-import': 'warn',
  'import/no-webpack-loader-syntax': 'error',
  'import/no-self-import': 'error',
  'import/no-cycle': ['error', { maxDepth: Number.POSITIVE_INFINITY }],
  'import/no-useless-path-segments': ['warn', { commonjs: true }],
}

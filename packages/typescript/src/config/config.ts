import type { Linter } from 'eslint'
import { Ext } from '@fellwork/eslint-shared'
import core from '@fellwork/eslint-config-core'
import { typescriptBase } from './base'

export const typescriptConfig: Linter.Config = {
  extends: [
    require.resolve('@fellwork/eslint-config-core'),
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',

  overrides: core.overrides,
  rules: {
    ...typescriptBase,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [Ext.JS, Ext.JSX, Ext.TS, Ext.TSX, Ext.DTS, Ext.MJS],
      },
    },
  },
}

import type { Linter } from 'eslint'
import { Ext } from '@fellwork/eslint-shared'
import { importDeclarations } from './declarations'
import { importBase } from './base'
import { importTypescript } from './typescript'

export const importConfig: Linter.BaseConfig = {
  extends: [
    'plugin:import/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [Ext.JS, Ext.JSX, Ext.MJS],
      },
    },
  },
  plugins: ['import'],
  rules: {
    ...importBase.rules,
  },
  overrides: [
    {
      files: ['*.ts?(x)'],
      ...importTypescript,
    },
    {
      files: ['*.d.ts?(x)'],
      ...importDeclarations,
    },
  ],
}

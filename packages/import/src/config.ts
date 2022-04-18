import type { Linter } from 'eslint';
import { Ext } from '@fellwork/eslint-shared';
import { importDeclarations } from './declarations';
import { importBase } from './base';
import { importTypescript } from './typescript';

export const importConfig: Linter.BaseConfig = {
  extends: [require.resolve('@fellwork/eslint-config-env')],
  settings: {
    'import/resolver': {
      node: {
        extensions: [Ext.JS, Ext.JSX],
      },
    },
  },
  plugins: ['import'],
  rules: {
    ...importBase.rules,
  },
  overrides: [
    {
      files: ['**/**.ts?(x)'],
      ...importTypescript,
    },
    {
      files: ['**/**.d.ts?(x)'],
      ...importDeclarations,
    },
  ],
};

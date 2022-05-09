import type { Linter } from 'eslint'
import { reactBase } from './base'
// import { Ext } from '@fellwork/eslint-shared';

export const reactConfig: Linter.BaseConfig = {
  extends: [
    require.resolve('@fellwork/eslint-config-env'),
    'plugin:react/recommended',
    require.resolve('@fellwork/eslint-config-typescript'),
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    ...reactBase.rules,
  },
}

import type { Linter } from 'eslint'
import { reactBase } from './base'
// import { Ext } from '@fellwork/eslint-shared';

export const reactConfig: Linter.BaseConfig = {
  extends: [
    'plugin:react/recommended',
    "plugin:react-hooks/recommended"
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...reactBase.rules,
  },
}

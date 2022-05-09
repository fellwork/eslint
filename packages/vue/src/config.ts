import type { Linter } from 'eslint'
import { FileExt } from '@fellwork/eslint-shared'
import { vueBase } from './base'

export const vueConfig: Linter.BaseConfig = {
  extends: [
    require.resolve('@fellwork/eslint-config-typescript'),
  ],
  rules: {
    ...vueBase.rules,
  },
  overrides: [
    {
      files: [FileExt.VUE],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: [
        'plugin:vue/vue3-recommended'],
      rules: {
        ...vueBase.rules,
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
}

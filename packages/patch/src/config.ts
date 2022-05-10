import type { Linter } from 'eslint'
require('@rushstack/eslint-patch/modern-module-resolution')

export const patchConfig: Linter.Config = {
  env: {
    es6: true,
  },
}

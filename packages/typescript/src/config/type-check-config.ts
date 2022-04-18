import type { Linter } from 'eslint'

import { typeCheckBase } from './type-check-base'
import { typescriptDeclarations } from './declarations'

export const typeCheckConfig: Linter.BaseConfig = {
  extends: [require.resolve('@fellwork/eslint-config-env')],
  overrides: [
    {
      files: ['**/**.ts?(x)'],
      ...typeCheckBase,
    },
    {
      files: ['**/**.d.ts?(x)'],
      ...typescriptDeclarations,
    },
  ],
}

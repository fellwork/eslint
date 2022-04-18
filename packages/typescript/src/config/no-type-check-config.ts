import type { Linter } from 'eslint'

import { noTypeCheckBase } from './no-type-check-base'
import { typescriptDeclarations } from './declarations'

export const noTypeCheckConfig: Linter.BaseConfig = {
  extends: [require.resolve('@fellwork/eslint-config-env')],
  overrides: [
    {
      files: ['**/**.ts?(x)'],
      ...noTypeCheckBase,
    },
    {
      files: ['**/**.d.ts?(x)'],
      ...typescriptDeclarations,
    },
  ],
}

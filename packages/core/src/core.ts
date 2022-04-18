import type { Linter } from 'eslint'
import { splat } from './splat'

export const core: Linter.BaseConfig = {
  extends: [require.resolve('@fellwork/eslint-config-env')],
  rules: {
    ...splat,
  },
}

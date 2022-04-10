import type { Linter } from 'eslint'
import { fromStd } from './from-std'
import { fromEslint } from './from-eslint'

export const core: Linter.BaseConfig = {
  rules: {
    ...fromEslint,
    ...fromStd,
  },
}

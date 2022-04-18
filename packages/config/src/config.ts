import type { Linter } from 'eslint'

export const config: Linter.Config = {
  root: true,
  extends: [
    require.resolve('@fellwork/eslint-config-core'),
    require.resolve('@fellwork/eslint-config-typescript'),
    require.resolve('@fellwork/eslint-config-import'),
    require.resolve('@fellwork/eslint-config-prettier'),
  ],
}

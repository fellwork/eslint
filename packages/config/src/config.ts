import type { Linter } from 'eslint'

require('@fellwork/eslint-config-patch')

export const config: Linter.Config = {
  root: true,
  extends: [
    require.resolve('@fellwork/eslint-config-core'),
    require.resolve('@fellwork/eslint-config-typescript'),
    require.resolve('@fellwork/eslint-config-vue'),
    require.resolve('@fellwork/eslint-config-react'),
  ],
}

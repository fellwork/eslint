import type { Linter } from 'eslint'

export const config: Linter.Config = {
  root: true,
  extends: [
    require.resolve('@fellwork/eslint-config-react'),
    require.resolve('@fellwork/eslint-config-vue'),
  ],
}

import type { Linter } from 'eslint'
import { fromEslint, fromPractices, fromUnicorn, fromStd } from './rules'
import { jsonOverride, ymlOverride, pkgOverride } from './overrides'

export const core: Linter.Config = {
  extends: [
    require.resolve('@fellwork/eslint-config-env'),
    require.resolve('@fellwork/eslint-config-import'),
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:markdown/recommended',
  ],
  ignorePatterns: [
    '*.min.*',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode',
  ],
  plugins: [
    'html',
    'n',
    'promise',
    'unicorn',
  ],
  rules: {
    ...fromEslint,
    ...fromStd,
    ...fromPractices,
    ...fromUnicorn,
    'n/handle-callback-err': ['error', '^(err|error)$'],
    'n/no-callback-literal': 'error',
    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/process-exit-as-throw': 'error',

    'promise/param-names': 'error',
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      ...jsonOverride,
    },
    {
      files: ['*.yaml', '*.yml'],
      ...ymlOverride,
    },
    {
      files: ['package.json'],
      ...pkgOverride,
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs'],
      },
    },
  },
}

import type { Linter } from 'eslint'
import { importRules, importSettings } from '@fellwork/eslint-shared'
import { fromEslint, fromPractices, fromUnicorn, fromStd } from './rules'
import { jsonOverride, ymlOverride, pkgOverride } from './overrides'

export const core: Linter.Config = {
  extends: [
    require.resolve('@fellwork/eslint-config-env'),
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
    'import',
    'promise',
    'unicorn',
  ],
  settings: {
    ...importSettings,
  },
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      rules: {
        ...importRules,
        ...fromEslint,
        ...fromStd,
        ...fromPractices,
        ...fromUnicorn,
      },
    },
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      ...jsonOverride,
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      ...ymlOverride,
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      ...pkgOverride,
    },
  ],
}

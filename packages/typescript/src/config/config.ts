import type { Linter } from 'eslint'
import { Ext, ExtensionGroups } from '@fellwork/eslint-shared'
import { typescriptDeclarations } from './declarations'
import { typescriptBase } from './base'

export const typescriptConfig: Linter.Config = {
  extends: [
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    project: 'tsconfig.json',
    createDefaultProgram: true,
    tsconfigRootDir: './',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      ...typescriptBase
    },
    {
      files: ['*.d.ts', '*.d.tsx'],
      ...typescriptDeclarations,
    },
  ],
  settings: {
    'import/extensions': ExtensionGroups.jsAndTs,
    'import/resolver': {
      node: {
        extensions: ExtensionGroups.jsAndTs,
      },
    },
    'import/ignore': ['\\.(coffee|scss|css|less|hbs|svg|json)$'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': [ExtensionGroups.typescript],
    },
  },
}

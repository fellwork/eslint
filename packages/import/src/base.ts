import type { Linter } from 'eslint'

export const importBase: Linter.BaseConfig = {
  rules: {
    'import/no-restricted-paths': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-unused-modules': 'off',
    'import/no-commonjs': 'off',
    'import/no-nodejs-modules': 'off',
    'import/exports-last': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/group-exports': 'off',
    'import/dynamic-import-chunkname': 'off',
    'import/unambiguous': 'off',
    'import/no-internal-modules': 'off',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/no-named-as-default': 'off',

    'import/named': 'warn',
    'import/order': 'warn',
    'import/default': 'warn',
    'import/namespace': 'warn',
    'import/no-dynamic-require': 'warn',
    'import/no-useless-path-segments': [
      'warn',
      {
        noUselessIndex: true,
      },
    ],
    'import/export': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-mutable-exports': 'warn',
    'import/first': 'warn',
    'import/no-duplicates': 'warn',
    'import/extensions': [
      'warn',
      'never',
      {
        pattern: {
          json: 'always',
          css: 'always',
          scss: 'always',
          sass: 'always',
        },
      },
    ],
    'import/newline-after-import': 'warn',
    'import/max-dependencies': [
      'warn',
      {
        max: 50,
      },
    ],
    'import/no-unassigned-import': [
      'warn',
      {
        allow: ['**/*.css', '**/*.scss', '**/*.sass'],
      },
    ],
    'import/no-named-default': 'warn',
    'import/no-anonymous-default-export': 'warn',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-amd': 'error',
    'import/no-namespace': 'error',
  },
}

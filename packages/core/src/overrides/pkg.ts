import type { Linter } from 'eslint'

export const pkgOverride: Linter.Config = {
  rules: {
    'jsonc/sort-keys': [
      'error',
      {
        pathPattern: '^$',
        order: [
          'name',
          'type',
          'version',
          'private',
          'packageManager',
          'description',
          'keywords',
          'license',
          'author',
          'repository',
          'funding',
          'main',
          'module',
          'types',
          'unpkg',
          'jsdelivr',
          'exports',
          'files',
          'bin',
          'sideEffects',
          'scripts',
          'peerDependencies',
          'peerDependenciesMeta',
          'dependencies',
          'optionalDependencies',
          'devDependencies',
          'husky',
          'lint-staged',
          'eslintConfig',
          'publishConfig',
          'unbuild',
        ],
      },
      {
        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
        order: { type: 'asc' },
      },
    ],
  },
}

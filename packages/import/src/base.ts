import type { Linter } from 'eslint';

export const importBase: Linter.BaseConfig = {
  rules: {
    'import/no-restricted-paths': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-unused-modules': 'off',
    'import/no-commonjs': 'off',
    'import/no-nodejs-modules': 'off',
    'import/exports-last': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/group-exports': 'off',
    'import/dynamic-import-chunkname': 'off',
    'import/unambiguous': 'off',
    'import/no-internal-modules': 'off',
    'import/no-unresolved': 'warn',

    'import/named': 'warn',
    'import/default': 'warn',
    'import/namespace': 'warn',
    'import/no-dynamic-require': 'warn',
    'import/no-useless-path-segments': [
      'warn',
      {
        noUselessIndex: true,
      },
    ],
    // Report any invalid exports, i.e. re-export of the same name.
    'import/export': 'warn',
    // Report use of exported name as identifier of default export.
    'import/no-named-as-default': 'warn',
    // Report use of exported name as property of default export.
    'import/no-named-as-default-member': 'warn',
    // Report imported names marked with @deprecated documentation tag.
    'import/no-deprecated': 'warn',
    // Forbid the use of extraneous packages.
    'import/no-extraneous-dependencies': 'warn',
    // Forbid the use of mutable exports with var or let.
    'import/no-mutable-exports': 'warn',
    // Ensure all imports appear before other statements.
    'import/first': 'warn',
    // Report repeated import of the same module in multiple places.
    'import/no-duplicates': 'warn',
    // Ensure consistent use of file extension within the import path.
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
    // Enforce a newline after import statements.
    'import/newline-after-import': 'warn',
    // Limit the maximum number of dependencies a module can have.
    'import/max-dependencies': [
      'warn',
      {
        max: 50,
      },
    ],
    // Forbid unassigned imports.
    'import/no-unassigned-import': [
      'warn',
      {
        allow: ['**/*.css', '**/*.scss', '**/*.sass'],
      },
    ],
    // Forbid named default exports.
    'import/no-named-default': 'warn',
    // Forbid anonymous values as default exports.
    'import/no-anonymous-default-export': 'warn',
    // Forbid import of modules using absolute paths.
    'import/no-absolute-path': 'error',
    // Forbid webpack loader syntax in imports.
    'import/no-webpack-loader-syntax': 'error',
    // Forbid a module from importing itself.
    'import/no-self-import': 'error',
    // Forbid a module from importing a module with a dependency path back to itself.
    'import/no-cycle': 'error',
    // Report AMD require and define calls.
    'import/no-amd': 'error',
    // Forbid namespace (a.k.a. "wildcard" *) imports.
    'import/no-namespace': 'error',
  },
};

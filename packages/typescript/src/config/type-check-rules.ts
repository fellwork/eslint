import type { Linter } from 'eslint'

export const typeCheckRules: Linter.BaseConfig = {
  rules: {
    '@typescript-eslint/prefer-return-this-type': 'warn',
    '@typescript-eslint/no-meaningless-void-operator': 'warn',
    '@typescript-eslint/no-base-to-string': 'warn',
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    '@typescript-eslint/no-floating-promises': [
      'warn',
      {
        ignoreVoid: true,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ignoreIIFE: true,
      },
    ],
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/promise-function-async': 'warn',
    '@typescript-eslint/require-array-sort-compare': 'warn',
    '@typescript-eslint/restrict-plus-operands': 'warn',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/unbound-method': 'warn',
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'warn',
    'require-await': 'off',
    '@typescript-eslint/require-await': 'warn',
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'warn',
    'camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['strictCamelCase'],
      },
      {
        selector: 'parameter',
        modifiers: ['unused'],
        format: ['strictCamelCase'],
        leadingUnderscore: 'require',
      },
      {
        selector: 'typeLike',
        format: ['StrictPascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['StrictPascalCase'],
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      /**
       * For React components.
       * @example
       * export const Button: FC<ButtonProps> = () => {...}
       * ...or
       * export function Button(props: RaisedButtonProps): ReactNode;
       * export function Button(props: FlatButtonProps): ReactNode;
       * export function Button(props: RaisedButtonProps | FlatButtonProps): ReactNode {
       *   ...
       * }
       */
      {
        selector: 'function',
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      /**
       * Disable formatting for fields that require quotes.
       * @example 'Accept-Language'
       */
      {
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
        format: null,
        modifiers: ['requiresQuotes'],
      },
    ],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': 'error',
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',
  },
}

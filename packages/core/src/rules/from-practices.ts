import type { Linter } from 'eslint'

export const fromPractices: Linter.Config['rules'] = {
  'no-param-reassign': 'off',
  'no-restricted-syntax': [
    'error',
    'DebuggerStatement',
    'LabeledStatement',
    'WithStatement',
  ],
  'no-return-await': 'off',
  'prefer-arrow-callback': [
    'error',
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
  'block-scoped-var': 'error',
  'consistent-return': 'off',
  'complexity': ['off', 11],
  'no-alert': 'warn',
  'no-useless-escape': 'off',
  'vars-on-top': 'error',
  'require-await': 'off',
  'no-return-assign': 'off',
  'operator-linebreak': ['error', 'before'],
  'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
  'eslint-comments/disable-enable-pair': 'off',
  'n/no-callback-literal': 'off',
}

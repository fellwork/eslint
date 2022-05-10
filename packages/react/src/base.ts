import type { Linter } from 'eslint'

export const reactBase: Linter.BaseConfig = {
  rules: {
    'jsx-quotes': [
      2,
      'prefer-double',
    ],
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/destructuring-assignment': 1,
    'react/no-access-state-in-setstate': 1,
    'react/no-deprecated': 2,
    'react/no-typos': 2,
    'react/no-unsafe': 2,
    'react/no-unknown-property': 2,
    'react/self-closing-comp': 1,
    'react/sort-comp': 1,
    'react/state-in-constructor': [1, 'never'],
    'react/style-prop-object': 2,
    'react/jsx-key': 1,
    'react/no-array-index-key': 1,
    'react/jsx-no-bind': [
      1,
      {
        allowArrowFunctions: true,
      },
    ],
    'react/jsx-props-no-spreading': [
      2,
      {
        html: 'ignore',
      },
    ],
    'react/jsx-curly-brace-presence': 1,
    'react/jsx-pascal-case': 1,
    'react/jsx-no-undef': 2,
  },
}

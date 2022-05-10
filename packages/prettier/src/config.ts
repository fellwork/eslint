import type { Linter } from 'eslint'
import { SharedEditorConfig } from '@fellwork/eslint-shared'

const defaultTabWidth = 2
const defaultLineLength = 100

export const prettierConfig: Linter.BaseConfig = {
  extends: [
    require.resolve('@fellwork/eslint-config-env'),
    require.resolve('eslint-config-prettier'),
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        quoteProps: 'consistent',
        endOfLine: SharedEditorConfig.end_of_line ?? 'lf',
        tabWidth: SharedEditorConfig.tab_width ?? defaultTabWidth,
        printWidth: SharedEditorConfig.max_line_length ?? defaultLineLength,
        semi: false,
      },
    ],
  },
}

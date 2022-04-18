import type { Linter } from 'eslint';
import { SharedEditorConfig } from '@fellwork/eslint-shared';

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
        tabWidth: SharedEditorConfig.tab_width ?? 2,
        printWidth: SharedEditorConfig.max_line_length ?? 100,
        semi: false,
      },
    ],
  },
};

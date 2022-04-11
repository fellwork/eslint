import type { Linter } from 'eslint'

export const ignore: Linter.Config['ignorePatterns'] = [
  '!.*/**/*',
  '!.*',
  '!src/**/*',
  '!**/*',

]

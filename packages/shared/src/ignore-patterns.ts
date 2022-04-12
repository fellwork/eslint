import type { Linter } from 'eslint'
import { ignoreGroups } from 'types/ignore'

const notIgnored = {
  notDotDir: '!.*/**/*',
  notDotFile: '!.*',
  notSource: '!src/**/*',
  notRoot: '!**/*',
}

export const ignore: Linter.Config['ignorePatterns'] = [
  ...Object.values(notIgnored),
  ...Object.values(ignoreGroups.packageManagers),
  ...Object.values(ignoreGroups.build),
]

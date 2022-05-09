import type { Linter } from 'eslint'
import { Files } from './extensions'

export const IgnoreGroups = {
  packageManagers: [
    Files.npm_lock,
    Files.yarn_lock,
    Files.pnpm_lock,
    Files.yarn_cache,
    Files.npm_cache,
    Files.pnpm_cache,
    Files.npm_debug,
    Files.yarn_debug,
    Files.pnpm_debug,
    Files.yarn_error,
  ],
  build: [
    Files.build_dir,
    Files.dist_dir,
    Files.out_dir,
    Files.temp_dir,
    Files.map_files,
  ],
}

const notIgnored = {
  notDotDir: '!.*/**/*',
  notDotFile: '!.*',
  notSource: '!src/**/*',
  notRoot: '!**/*',
  notGithub: '!.github',
  notVitepress: '!.vitepress',
  notVscode: '!.vscode',
}

export const ignorePatterns: Linter.Config['ignorePatterns'] = [
  ...Object.values(notIgnored),
  ...Object.values(IgnoreGroups.packageManagers),
  ...Object.values(IgnoreGroups.build),
]

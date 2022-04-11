// import type { Linter } from 'eslint'
import type { Dictionary, DictionaryValues } from 'ts-essentials'

export const dict: Dictionary<string> = {}

export type IgnoreValues = DictionaryValues<Dictionary<string>>

export const ignoreGroups = () => {
  return {
    base: {},
    build: {},
    dx: {},
    test: {},
  }
}

const ignoreBaseDict: Dictionary<string> = {
  changeLog: '**/CHANGELOG.md',
  eslintCache: '**/.eslintcache',
  license: '**/LICENSE*',
  npmLock: '**/packages-lock.json',
  pnpmLock: '**/pnpm-lock.yaml',
  yarnLock: '**/yarn.lock',
} as const

// eslint-disable-next-line no-console
console.log(ignoreBaseDict)

export const ignoreBuildDict = {
  build: '/build/**',
  dist: '/dist/**',
  map: '**/*.map',
  min: '**/*.min.*',
  out: '/out/**',
  public: '**/public/**',
  temp: '/temp/**',
}

export const ignoreDxDict = {
  git: '/.git/**',
  history: '/.history/**',
  idea: '/.idea/**',
  vscode: '/.vscode/**',
}

export const ignoreTestTypes = {
  coverage: '/coverage/**',
  nyc: '/.nyc_output/**',
  test: '**/test/**',
  tests: '**/tests/**',
  underscoreFixtures: '**/__fixtures__/**',
  underscoreMocks: '**/__mocks__/**',
  underscoreSnapshots: '**/__snapshots__/**',
  underscoreTests: '**/__tests__/**',
}

/**
 * Preferred ESLint ignore patterns to ensure that the project is linted at the root.
 */
export const notIgnore = {
  notDotDir: '!.*/**/*',
  notDotFile: '!.*',
  notSource: '!src/**/*',
  notRoot: '!**/*',
}

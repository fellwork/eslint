/* eslint-disable no-undef */
module.exports = {
  extends: ['semantic-release-monorepo'],
  branches: 'main',
  repositoryUrl: 'https://github.com/fellwork/eslint',
  debug: 'true',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md'
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'pnpm-lock.yaml', 'CHANGELOG.md'],
        message: `chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}`
      }
    ]
  ]
}

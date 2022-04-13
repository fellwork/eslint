/* eslint-disable no-undef */
module.exports = {
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
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
        message: `chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}`,
      },
    ],
  ],
}

require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['@antfu'],
  parserOptions: { tsconfigRootDir: __dirname },
}

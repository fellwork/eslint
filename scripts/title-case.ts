import { ALPHANUMERIC_PATTERN, IS_MANUAL_CASE, SMALL_WORDS, TOKENS, WHITESPACE } from './constants'

export function titleCase(input: string) {
  let result = ''
  let m: RegExpExecArray | null

  // eslint-disable-next-line no-cond-assign
  while ((m = TOKENS.exec(input)) !== null) {
    const { 0: token, index } = m

    if (
      !IS_MANUAL_CASE.test(token)
      && (!SMALL_WORDS.test(token)
        || index === 0
        || index + token.length === input.length)
      && (input.charAt(index + token.length) !== ':'
        || WHITESPACE.test(input.charAt(index + token.length + 1)))
    ) {
      result += token.replace(ALPHANUMERIC_PATTERN, m => m.toUpperCase())
      continue
    }

    result += token
  }

  return result
}

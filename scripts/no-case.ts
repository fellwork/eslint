import { lowerCase } from './lower-case'
import { DEFAULT_SPLIT_REGEXP, DEFAULT_STRIP_REGEXP } from './constants'
import type { CaseOptions } from './types'

export function noCase(input: string, options: CaseOptions = {}) {
  const {
    splitRegexp = DEFAULT_SPLIT_REGEXP,
    stripRegexp = DEFAULT_STRIP_REGEXP,
    transform = lowerCase,
    delimiter = ' ',
  } = options

  const result = replace(
    replace(input, splitRegexp, '$1\0$2'),
    stripRegexp,
    '\0',
  )
  let start = 0
  let end = result.length

  // Trim the delimiter from around the output string.
  while (result.charAt(start) === '\0') start++
  while (result.charAt(end - 1) === '\0') end--

  // Transform each token independently.
  return result.slice(start, end).split('\0').map(transform).join(delimiter)
}

function replace(input: string, re: RegExp | RegExp[], value: string) {
  if (re instanceof RegExp)
    return input.replace(re, value)
  return re.reduce((input, re) => input.replace(re, value), input)
}

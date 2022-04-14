import { noCase } from './no-case'
import type { CaseOptions } from './types'

export function paramCase(input: string, options: CaseOptions = {}) {
  return noCase(input, {
    delimiter: '-',
    ...options,
  })
}

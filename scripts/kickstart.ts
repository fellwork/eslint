import assert from 'node:assert'
import { ReadStream, WriteStream } from 'node:fs'
import { NOOP } from './constants'

export function maxStream(args: any) {
  args = args || {}
  assert.equal(typeof args, 'object')
}

export const pipe = (from: { pipe: (arg0: any) => any }, to: any) => from.pipe(to)

export const call = (fn: () => any) => fn()

const isFn = (fn: ((callback?: ((err?: NodeJS.ErrnoException | null | undefined) => void) | undefined) => void) | ((callback?: ((err?: NodeJS.ErrnoException | null | undefined) => void) | undefined) => void)) => typeof fn === 'function'

export const isFs = (stream: any) => {
  return (
    stream instanceof (ReadStream || NOOP) || stream instanceof (WriteStream || NOOP)
  )
    && isFn(stream.close)
}

export function parseToken(ctx: Record<string, any>) {
  return (token: string, index: number) => {
    if (index % 2 === 0)
      return token
    return ctx[token]
  }
}

/**
 * Use with array.filter() to filter out null or undefined values
 * @example
 * ```ts
 * const arr = ['a', 1, null, undefined]
 * const b: string[] = arr.filter(notNull)
 * const c: (string | null)[] = arr.filter(Boolean)
 * ```
 */
/* eslint-disable  @typescript-eslint/no-explicit-any */
export const notNull = <T>(value: T): value is NonNullable<T> =>
  value !== null

export type Maybe<T> = T | null | undefined

export type Func = (...args: any[]) => any

export type ExpandType<T> = T extends object
  ? T extends infer O ? { [K in keyof O]: ExpandType<O[K]> } : never
  : T

export type InferArgs<T> = T extends (...t: [...infer Arg]) => any ? Arg : never

export type InferReturn<T> = T extends (...t: [...infer Arg]) => infer Res ? Res : never

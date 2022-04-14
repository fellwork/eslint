type InferArgs<T> = T extends (...t: [...infer Arg]) => any ? Arg : never

type InferReturn<T> = T extends (...t: [...infer Arg]) => infer Res ? Res : never

export function wrapper<TFunc extends(...args: any[]) => any>(func: TFunc): (...args: InferArgs<TFunc>) => InferReturn<TFunc> {
  return (...args: InferArgs<TFunc>) => {
    // something before

    try {
      return func(...args)
    }
    finally {
      // something after;
    }
  }
}

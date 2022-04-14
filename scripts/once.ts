export class Only {
  private static instance: Only
  private constructor() { }
}

export const proto = only()

function only(fn: Function) {
  const f = function() {
    if (f.called)
      return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

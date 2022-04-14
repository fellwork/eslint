export interface CaseOptions {
  splitRegexp?: RegExp | RegExp[]
  stripRegexp?: RegExp | RegExp[]
  delimiter?: string
  transform?: (part: string, index: number, parts: string[]) => string
}

export interface CaseLocale {
  regexp: RegExp
  map: Record<string, string>
}

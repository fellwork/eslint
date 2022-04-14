import type { CaseLocale } from './types'

export const NOOP = () => { }

export const SMALL_WORDS = /\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i

export const TOKENS = /[^\s:–—-]+|./g

export const WHITESPACE = /\s/

export const IS_MANUAL_CASE = /.(?=[A-Z]|\..)/

export const ALPHANUMERIC_PATTERN = /[A-Za-z0-9\u00C0-\u00FF]/

export const DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g]

export const DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi

export const SUPPORTED_LOCALE: Record<string, CaseLocale> = {
  tr: {
    regexp: /\u0130|\u0049|\u0049\u0307/g,
    map: {
      İ: '\u0069',
      I: '\u0131',
      İ: '\u0069',
    },
  },
  az: {
    regexp: /\u0130/g,
    map: {
      İ: '\u0069',
      I: '\u0131',
      İ: '\u0069',
    },
  },
  lt: {
    regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
    map: {
      I: '\u0069\u0307',
      J: '\u006A\u0307',
      Į: '\u012F\u0307',
      Ì: '\u0069\u0307\u0300',
      Í: '\u0069\u0307\u0301',
      Ĩ: '\u0069\u0307\u0303',
    },
  },
}

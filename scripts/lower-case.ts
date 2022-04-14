import { SUPPORTED_LOCALE } from './constants'

export function localeLowerCase(str: string, locale: string) {
  const lang = SUPPORTED_LOCALE[locale.toLowerCase()]
  if (lang)
    return lowerCase(str.replace(lang.regexp, m => lang.map[m]))
  return lowerCase(str)
}

export function lowerCase(str: string) {
  return str.toLowerCase()
}

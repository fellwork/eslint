export interface ImportRules {
  [rule: string]: unknown
  'import/extensions': [string, string, Record<string, 'never'>]
}

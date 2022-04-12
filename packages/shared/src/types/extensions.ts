export const Ext = {
  TS: '.ts',
  TSX: '.tsx',
  TSD: '.d.ts',
  TSXD: '.d.tsx',
  JS: '.js',
  JSON: '.json',
  JSONC: '.jsonc',
  JSX: '.jsx',
  VUE: '.vue',
  YAML: '.yaml',
  YML: '.yml',
}

export const extensionGroups = {
  typescript: [Ext.TS, Ext.TSX, Ext.TSD, Ext.TSXD],
  javascript: [Ext.JS, Ext.JSX],
  jsAndTs: [Ext.JS, Ext.JSX, Ext.TS, Ext.TSX, Ext.TSD, Ext.TSXD],
  json: [Ext.JSON, Ext.JSONC],
  vue: [Ext.VUE],
  yaml: [Ext.YAML, Ext.YML],
}

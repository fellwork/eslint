import { resolve } from 'node:path'
import { parseSync } from 'editorconfig'
import type { EditorConfig } from './types'

export const SharedEditorConfig = parseSync(
  resolve(
    __dirname, '../.editorconfig',
  ),
) as EditorConfig

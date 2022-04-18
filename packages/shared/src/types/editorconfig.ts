import type { KnownProps } from 'editorconfig'

export interface EditorConfig extends KnownProps {
  readonly max_line_length?: number
}

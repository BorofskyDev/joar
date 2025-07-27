// components/editor-toolbar/marks/MarksTB.tsx
'use client'

import { Editor } from '@tiptap/react'
import { BoldMark } from './marks-components'

interface MarksTBProps {
  editor: Editor | null
}

export function MarksTB({ editor }: MarksTBProps) {
  if (!editor) return null

  return (
    <>
      <BoldMark editor={editor} />
      {/* Add ItalicMark, CodeMark, etc. here later */}
    </>
  )
}

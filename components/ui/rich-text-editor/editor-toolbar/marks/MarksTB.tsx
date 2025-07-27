
'use client'

import { Editor } from '@tiptap/react'
import { BoldMark, ItalicMark, LinkMark, StrikeMark, SuperScriptMark } from './marks-components'

interface MarksTBProps {
  editor: Editor | null
}

export function MarksTB({ editor }: MarksTBProps) {
  if (!editor) return null

  return (
    <>
      <BoldMark editor={editor} />
      <ItalicMark editor={editor} />
      <StrikeMark editor={editor} />
      <LinkMark editor={editor} />
      <SuperScriptMark editor={editor} />
    </>
  )
}

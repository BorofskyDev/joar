'use client'

import { Editor } from '@tiptap/react'
import { ToolbarButton } from '@/components/ui/common'

interface ItalicMarkProps {
  editor: Editor
}

export function ItalicMark({ editor }: ItalicMarkProps) {
  if (!editor) return null

  return (
    <ToolbarButton
      onClick={() => editor.chain().focus().toggleItalic().run()}
      isActive={editor.isActive('italic')}
      title='Italic (Ctrl+I)'
    >
      <em>I</em>
    </ToolbarButton>
  )
}

// components/editor-toolbar/marks/BoldMark.tsx
'use client'

import { Editor } from '@tiptap/react'
import { ToolbarButton } from '@/components/ui/common'

interface BoldMarkProps {
  editor: Editor
}

export function BoldMark({ editor }: BoldMarkProps) {
  if (!editor) return null

  return (
    <ToolbarButton
      onClick={() => editor.chain().focus().toggleBold().run()}
      isActive={editor.isActive('bold')}
      title='Bold (Ctrl+B)'
    >
      <strong>B</strong>
    </ToolbarButton>
  )
}

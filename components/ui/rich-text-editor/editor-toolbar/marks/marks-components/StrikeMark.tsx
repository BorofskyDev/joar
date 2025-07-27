'use client'

import { Editor } from '@tiptap/react'
import { ToolbarButton } from '@/components/ui/common'

interface StrikeMarkProps {
  editor: Editor
}

export function StrikeMark({ editor }: StrikeMarkProps) {
  if (!editor) return null

  return (
    <ToolbarButton
      onClick={() => editor.chain().focus().toggleStrike().run()}
      isActive={editor.isActive('strike')}
      title='Strike (Ctrl+D)'
    >
      <s>S</s>
    </ToolbarButton>
  )
}

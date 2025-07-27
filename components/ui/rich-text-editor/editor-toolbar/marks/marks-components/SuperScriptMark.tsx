'use client'

import { Editor } from '@tiptap/react'
import { ToolbarButton } from '@/components/ui/common'

interface SuperScriptMarkProps {
  editor: Editor
}

export function SuperScriptMark({ editor }: SuperScriptMarkProps) {
  if (!editor) return null

  return (
    <ToolbarButton
      onClick={() => editor.chain().focus().toggleSuperscript().run()}
      isActive={editor.isActive('superscript')}
      title='Superscript (Ctrl+Shift+Plus)'
    >
      <span>
        a<sup>1</sup>
      </span>
    </ToolbarButton>
  )
}

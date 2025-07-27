// components/editor-toolbar/nodes/BQNode.tsx
'use client'

import { Editor } from '@tiptap/react'
import { ToolbarButton } from '@/components/ui'

interface BQNodeProps {
  editor: Editor
}

export function BQNode({ editor }: BQNodeProps) {
  if (!editor) return null

  return (
    <ToolbarButton
      onClick={() => editor.chain().focus().toggleBlockquote().run()}
      isActive={editor.isActive('blockquote')}
      title='Blockquote'
    >
      <span>&ldquo;BQ&rdquo;</span>
    </ToolbarButton>
  )
}

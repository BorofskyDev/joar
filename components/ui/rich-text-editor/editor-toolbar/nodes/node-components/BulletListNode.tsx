// components/editor-toolbar/nodes/BulletListNode.tsx
'use client'

import { Editor } from '@tiptap/react'
import { ToolbarButton } from '@/components/ui'

interface BulletListNodeProps {
  editor: Editor
}

export function BulletListNode({ editor }: BulletListNodeProps) {
  if (!editor) return null

  return (
    <ToolbarButton
      onClick={() => editor.chain().focus().toggleBulletList().run()}
      isActive={editor.isActive('bulletList')}
      title='Bullet List (Ctrl+Shift+8)'
    >
      • List
    </ToolbarButton>
  )
}

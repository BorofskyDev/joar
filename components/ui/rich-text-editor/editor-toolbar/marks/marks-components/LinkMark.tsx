// components/editor-toolbar/marks/LinkMark.tsx
'use client'

import { Editor } from '@tiptap/react'
import { ToolbarButton } from '@/components/ui'

interface LinkMarkProps {
  editor: Editor
}

export function LinkMark({ editor }: LinkMarkProps) {
  if (!editor) return null

  function handleLink() {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('Enter URL', previousUrl)

    if (url === null) return

    if (url === '') {
      editor.chain().focus().unsetLink().run()
      return
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }

  return (
    <ToolbarButton
      onClick={handleLink}
      isActive={editor.isActive('link')}
      title='Add or remove link'
    >
     Link
    </ToolbarButton>
  )
}

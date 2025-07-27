// components/editor-toolbar/EditorToolbar.tsx
'use client'

import { Editor } from '@tiptap/react'
import { MarksTB } from './marks/MarksTB'
import { NodesTB } from './nodes/NodesTB'
import styles from './EditorToolbar.module.scss'

interface EditorToolbarProps {
  editor: Editor | null
}

export function EditorToolbar({ editor }: EditorToolbarProps) {
  if (!editor) return null

  return (
    <div className={styles.toolbar}>
      <MarksTB editor={editor} />
      <NodesTB editor={editor} />
      {/* <CustomTB editor={editor} /> */}
    </div>
  )
}

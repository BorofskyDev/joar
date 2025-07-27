// components/editor-toolbar/marks/BoldMark.tsx
'use client'

import { Editor } from '@tiptap/react'
import styles from '../EditorToolbar.module.scss' // adjust if using per-group styles

interface BoldMarkProps {
  editor: Editor
}

export function BoldMark({ editor }: BoldMarkProps) {
  if (!editor) return null

  return (
    <button
      type='button'
      onClick={() => editor.chain().focus().toggleBold().run()}
      className={editor.isActive('bold') ? styles.active : ''}
    >
      <strong>B</strong>
    </button>
  )
}

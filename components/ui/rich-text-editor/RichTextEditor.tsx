'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import styles from './RichTextEditor.module.scss'

interface RichTextEditorProps {
  value: string | object
  onChange: (content: object) => void
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getJSON())
    },
  })

  return (
    <div className={styles.editorWrapper}>
      {editor && <EditorContent editor={editor} />}
    </div>
  )
}

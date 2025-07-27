'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Superscript from '@tiptap/extension-superscript'
import styles from './RichTextEditor.module.scss'
import { EditorCanvas } from './editor-canvas/EditorCanvas'
import { EditorToolbar } from './editor-toolbar/EditorToolbar'
import Blockquote from '@tiptap/extension-blockquote'

interface RichTextEditorProps {
  value: string | object
  onChange: (content: object) => void
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit, Superscript, Blockquote],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getJSON())
    },
  })

  return (
    <div className={styles.editorWrapper}>
      <EditorToolbar editor={editor} />
      {editor && <EditorCanvas editor={editor} />}
    </div>
  )
}

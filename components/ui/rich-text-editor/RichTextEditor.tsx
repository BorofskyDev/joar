'use client'

import {  useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Superscript from '@tiptap/extension-superscript'
import styles from './RichTextEditor.module.scss'
import { EditorCanvas } from './editor-canvas/EditorCanvas'
import { EditorToolbar } from './editor-toolbar/EditorToolbar'
import Blockquote from '@tiptap/extension-blockquote'
import Heading from '@tiptap/extension-heading'
import { FigureImage } from '@/lib'

interface RichTextEditorProps {
  value: string | object
  onChange: (content: object) => void
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: false,
        blockquote: false,
        codeBlock: false,
      }),
      Heading.configure({ levels: [2, 3, 4, 5, 6] }),
      Superscript,
      Blockquote,
      FigureImage
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getJSON())
    },
  })

  return (
    <div className={styles.editorWrapper}>
      <div id='toolbar-sentinel' />
      <EditorToolbar editor={editor} />
      {editor && <EditorCanvas editor={editor} />}
    </div>
  )
}

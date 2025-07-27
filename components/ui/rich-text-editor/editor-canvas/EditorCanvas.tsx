import { EditorContent, type Editor } from '@tiptap/react'
import styles from './EditorCanvas.module.scss'

interface EditorCanvasProps {
  editor: Editor | null
}

export function EditorCanvas({ editor }: EditorCanvasProps) {
  if (!editor) return null

  return <EditorContent editor={editor} className={styles.editorCanvas} />
}

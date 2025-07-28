// components/editor-toolbar/EditorToolbar.tsx
'use client'

import { Editor } from '@tiptap/react'
import { MarksTB } from './marks/MarksTB'
import { NodesTB } from './nodes/NodesTB'
import { CustomTB } from './custom/CustomTB'
import { useSticky } from '@/lib'
import styles from './EditorToolbar.module.scss'

interface EditorToolbarProps {
  editor: Editor | null
}

export function EditorToolbar({ editor }: EditorToolbarProps) {
    const isSticky = useSticky('toolbar-sentinel')
  if (!editor) return null

  return (
    <>
    
   
    <div className={`${styles.toolbar} ${isSticky ? styles.sticky : ''}`}>
      <MarksTB editor={editor} />
      <NodesTB editor={editor} />
      <CustomTB editor={editor} />
    </div>
    </>
  )
}

'use client'

import { Editor } from '@tiptap/react'
import { ImageInsert } from './ImageInsert'


interface CustomTBProps {
  editor: Editor | null
}

export function CustomTB({ editor }: CustomTBProps) {
  if (!editor) return null

  return (
    <>
     <ImageInsert editor={editor} />
    </>
  )
}

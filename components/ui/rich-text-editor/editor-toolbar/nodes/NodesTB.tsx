'use client'

import { Editor } from '@tiptap/react'
import { BQNode, BulletListNode, HeadingNode } from './node-components'

interface NodesTBProps {
  editor: Editor | null
}

export function NodesTB({ editor }: NodesTBProps) {
  if (!editor) return null

  return (
    <>
     <BQNode editor={editor} />
     <BulletListNode editor={editor} />
     <HeadingNode editor={editor} />
    </>
  )
}

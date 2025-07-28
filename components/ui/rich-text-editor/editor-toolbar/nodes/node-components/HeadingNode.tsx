// components/editor-toolbar/nodes/HeadingNode.tsx
'use client'

import { Editor } from '@tiptap/react'
import { ToolbarButton } from '@/components/ui'

interface HeadingNodeProps {
  editor: Editor
}

export function HeadingNode({ editor }: HeadingNodeProps) {
  if (!editor) return null

  const levels = [2, 3, 4, 5, 6]

  return (
    <>
      {levels.map((level) => (
        <ToolbarButton
          key={level}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({ level: level as 2 | 3 | 4 | 5 | 6 })
              .run()
          }
          isActive={editor.isActive('heading', { level })}
          title={`Heading ${level}`}
        >
          H{level}
        </ToolbarButton>
      ))}
    </>
  )
}

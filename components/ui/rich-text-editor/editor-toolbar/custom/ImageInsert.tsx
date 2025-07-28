'use client'

import { useState } from 'react'
import { Editor } from '@tiptap/react'
import { ToolbarButton } from '@/components/ui/common'
import { uploadImageToStorage } from '@/lib' // ← build this or stub it

interface ImageInsertProps {
  editor: Editor
}

export function ImageInsert({ editor }: ImageInsertProps) {
  const [loading, setLoading] = useState(false)

  async function handleSelectFile() {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'

    input.onchange = async () => {
      const file = input.files?.[0]
      if (!file) return

      const alt = prompt('Enter alt text (required):')
      if (!alt) return alert('Alt text is required.')

      const caption = prompt('Optional caption:')

      setLoading(true)
      try {
        const url = await uploadImageToStorage(file) // ← this should return the uploaded image URL

        editor
          .chain()
          .focus()
          .insertContent({
            type: 'figureImage',
            attrs: { src: url, alt, caption },
          })
          .run()
      } catch (err) {
        console.error(err)
        alert('Upload failed.')
      } finally {
        setLoading(false)
      }
    }

    input.click()
  }

  return (
    <ToolbarButton
      onClick={handleSelectFile}
      isActive={editor.isActive('figureImage')}
      title='Insert image with caption'
    >
      {loading ? '⏳' : '🖼️'}
    </ToolbarButton>
  )
}

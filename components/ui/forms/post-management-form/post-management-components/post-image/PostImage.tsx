'use client'

import { useEffect, useState } from 'react'
import { FormGroup } from '@/components/ui'
import Image from 'next/image'
import styles from './PostImage.module.scss'

interface PostImageProps {
  image: File | null
  alt: string
  onFileChange: (file: File | null) => void
  onAltChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

export function PostImage({
  image,
  alt,
  onFileChange,
  onAltChange,
}: PostImageProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  /** build / revoke the object URL whenever the file changes */
  useEffect(() => {
    if (!image) {
      setPreviewUrl(null)
      return
    }
    const url = URL.createObjectURL(image)
    setPreviewUrl(url)
    return () => URL.revokeObjectURL(url)
  }, [image])

  function handleFileInput(e: React.ChangeEvent<HTMLInputElement>): void {
    const file = e.target.files?.[0] ?? null
    onFileChange(file)
  }

  return (
    <div className={styles.postImage}>
      {/* ----- File picker ----- */}
      <input
        id='post-image'
        type='file'
        accept='image/*'
        onChange={handleFileInput}
        required
        className={styles.fileInput}
      />

      {/* ----- Live preview ----- */}
      {previewUrl && (
        <figure className={styles.preview}>
          <Image
            width={1690}
            height={960}
            layout='responsive'
            objectFit='cover'
            src={previewUrl}
            alt='Selected post image preview'
            className={styles.image}
          />
        </figure>
      )}

      {/* ----- Alt-text (required) ----- */}
      <FormGroup
        id='imageAlt'
        name='imageAlt'
        label='Image alt text'
        value={alt}
        onChange={onAltChange}
        required
      />
    </div>
  )
}

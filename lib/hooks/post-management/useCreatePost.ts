'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { generateSlug } from '@/lib/utils'
import type { TipTapContent } from '@/lib/types'

interface PostFields {
  title: string
  summary: string
  slug: string
  imageAlt: string
}

export function useCreatePost() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fields, setFields] = useState<PostFields>({
    title: '',
    summary: '',
    slug: '',
    imageAlt: '',
  })

  const [content, setContent] = useState<TipTapContent>({ type: 'doc', content: [] }) // TipTap JSON
  const [image, setImage] = useState<File | null>(null)

 const handleInputChange = (
   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 ) => {
   const { name, value } = e.target

   setFields((prev) => {
     const updated = { ...prev, [name]: value }
     if (name === 'title') {
       updated.slug = generateSlug(value)
     }
     return updated
   })
 }

  const handleImageChange = (file: File | null) => {
    setImage(file)
  }

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
  setLoading(true)
  setError(null)

  try {
    const fd = new FormData()
    fd.append('title', fields.title)
    fd.append('slug', fields.slug)
    fd.append('summary', fields.summary)
    fd.append('imageAlt', fields.imageAlt)
    fd.append('content', JSON.stringify(content))
    if (image) fd.append('image', image)

    const res = await fetch('/api/posts', { method: 'POST', body: fd })
    if (!res.ok) throw new Error('Something went wrong')

    const { slug } = await res.json()
    router.push(`/admin/posts/${slug}`)
  } catch (err) {
    setError(err instanceof Error ? err.message : 'An error occurred')
  } finally {
    setLoading(false)
  }
}

  return {
    ...fields,
    image,
    content,
    handleInputChange,
    handleImageChange,
    setContent,
    handleSubmit,
    error,
    loading,
  }
}

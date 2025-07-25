'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { generateSlug } from '@/lib/utils'

interface PostFields {
  title: string
  summary: string
  slug: string
}

export function useCreatePost() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fields, setFields] = useState<PostFields>({
    title: '',
    summary: '',
    slug: '',
  })

  const [content, setContent] = useState({ type: 'doc', content: [] }) // TipTap JSON

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, content }),
      })

      if (!res.ok) throw new Error('Something went wrong')
      const data = await res.json()
      router.push(`/admin/posts/${data.slug}`)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return {
    ...fields,
    content,
    handleInputChange,
    setContent,
    handleSubmit,
    error,
    loading,
  }
}

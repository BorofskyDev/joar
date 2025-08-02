'use client'
import { useState } from 'react'
import { Category } from '@prisma/client'



export function useCreateCategory() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function create(name: string): Promise<Category | null> {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      })

      if (!res.ok) {
        const { error } = await res.json()
        throw new Error(error ?? 'Unknown error')
      }

      const data: Category = await res.json()
      return data
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      return null
    } finally {
      setLoading(false)
    }
  }

  return { create, loading, error }
}

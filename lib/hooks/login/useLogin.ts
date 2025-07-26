'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { loginWithEmail, loginWithGoogle } from '@/lib/server/auth'
import { auth } from '@/lib/server/firebase'
import { setTokenCookie } from '@/lib/server/setTokenCookie'

export function useLogin() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleEmailLogin = async (email: string, password: string) => {
    setLoading(true)
    setError(null)
    try {
      await loginWithEmail(email, password)
      const user = auth.currentUser
      if (user) await setTokenCookie(user)
        
      router.push('/admin')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setLoading(true)
    setError(null)
    try {
      await loginWithGoogle()
      const user = auth.currentUser
      if (user) await setTokenCookie(user)

      router.push('/admin')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return {
    handleEmailLogin,
    handleGoogleLogin,
    error,
    loading,
  }
}

'use client'
import { useState } from 'react'
import { useLogin } from '@/lib'
import { Button, FormGroup } from '@/components/ui'
import styles from './LoginForm.module.scss'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { handleEmailLogin, handleGoogleLogin, error, loading } = useLogin()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await handleEmailLogin(email, password)
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <FormGroup
        type='email'
        id='email'
        name='email'
        label='Email'
        required
        placeholder='Enter your email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormGroup
        type='password'
        id='password'
        name='password'
        label='Password'
        required
        placeholder='Enter your password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type='submit' variant='primary' disabled={loading}>
        {loading ? 'Logging in...' : 'Login With Email'}
      </Button>
      <Button
        type='button'
        variant='secondary'
        onClick={handleGoogleLogin}
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Login With Google'}
      </Button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  )
}

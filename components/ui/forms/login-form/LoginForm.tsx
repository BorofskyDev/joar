import { Button, FormGroup } from '@/components/ui'
import styles from './LoginForm.module.scss'

export function LoginForm() {
  return (
    <form className={styles.loginForm}>
      <FormGroup
        type='email'
        id='email'
        name='email'
        label='Email'
        required
        placeholder='Enter your email'
      />
      <FormGroup
        type='password'
        id='password'
        name='password'
        label='Password'
        required
        placeholder='Enter your password'
      />
      <Button type='submit' variant='primary'>
        Login
      </Button>
    </form>
  )
}

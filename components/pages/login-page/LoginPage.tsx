import { PageContainer } from '@/components/layout'
import { Heading, LoginForm, TextLink } from '@/components/ui'
import styles from './LoginPage.module.scss'

export function LoginPage() {
  return (
    <PageContainer className={styles.loginPage}>
      <Heading element='h1' variant='page'>
        Login
      </Heading>
      <LoginForm />
      <TextLink href='/reset-password'>Forgot Password</TextLink>
    </PageContainer>
  )
}

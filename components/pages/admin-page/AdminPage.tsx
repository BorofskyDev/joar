import { Heading, TextLink } from '@/components/ui'
import styles from './AdminPage.module.scss'

export function AdminPage() {
  return (
    <div className={styles.adminPage}>
      <Heading element='h1' variant='page'>
        Admin
      </Heading>
      <TextLink href='/admin/create-post'>Create Post</TextLink>
    </div>
  )
}

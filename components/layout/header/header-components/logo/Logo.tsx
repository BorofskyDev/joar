import Link from 'next/link'
import styles from './Logo.module.scss'

export function Logo() {
  return (
    <>
      <Link href='/' className={`${styles.logo} ${styles.mobile}`}>
        JoaR
      </Link>
      <Link href='/' className={`${styles.logo} ${styles.desktop}`}>
        Journal of a Recalcitrant
      </Link>
    </>
  )
}

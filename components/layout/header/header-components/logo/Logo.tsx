import Link from 'next/link'
import styles from './Logo.module.scss'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <>
      <Link href='/' className={`${styles.logo} ${styles.mobile} ${className}`}>
        JoaR
      </Link>
      <Link href='/' className={`${styles.logo} ${styles.desktop} ${className}`}>
        Journal of a Recalcitrant
      </Link>
    </>
  )
}

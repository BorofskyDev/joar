import { TextLink } from '@/components/ui'
import { navLinks } from '../navLinks'
import styles from './DesktopNav.module.scss'

interface DesktopNavProps {
  className?: string
}

export function DesktopNav({ className }: DesktopNavProps) {
  return (
    <nav className={`${styles.desktopNav} ${className}`}>
      {navLinks.map((link) => (
        <TextLink key={link.href} href={link.href} className={styles.link}>
          {link.label}
        </TextLink>
      ))}
    </nav>
  )
}

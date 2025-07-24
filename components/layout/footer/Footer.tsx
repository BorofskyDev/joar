import { navLinks } from './navLinks'
import { TextLink } from '@/components/ui/'
import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map((link, index) => (
            <li key={index} className={styles.navItem}>
              <TextLink href={link.href}>{link.label}</TextLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

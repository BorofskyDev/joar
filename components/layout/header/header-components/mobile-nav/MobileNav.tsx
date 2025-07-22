'use client'

import { motion } from 'framer-motion'
import { TextLink } from '@/components/ui'
import { navLinks } from '../navLinks'
import styles from './MobileNav.module.scss'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
  exit: { opacity: 0 },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

const MotionTextLink = motion(TextLink)

interface MobileNavProps {
  onLinkClick: () => void
  className?: string
}

export function MobileNav({ onLinkClick, className }: MobileNavProps) {
  return (
    <motion.nav
      variants={container}
      initial='hidden'
      animate='show'
      exit='exit'
      className={`${styles.mobileNav} ${className ?? ''}`}
    >
      <ul className={styles.links}>
        {navLinks.map(({ href, label }) => (
          <motion.li key={href} variants={item}>
            <MotionTextLink href={href} onClick={onLinkClick}>
              {label}
            </MotionTextLink>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}

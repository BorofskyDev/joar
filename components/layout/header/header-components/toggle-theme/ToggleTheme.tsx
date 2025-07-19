'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Icon, icons, PText } from '@/components/ui/'
import styles from './ToggleTheme.module.scss'

export function ToggleTheme() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      className={styles.toggleTheme}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Icon
        className={styles.icon}
        path={icons[theme === 'dark' ? 'sun' : 'moon']}
      />
      <PText variant='label-sm' className={styles.label}>
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </PText>
    </button>
  )
}

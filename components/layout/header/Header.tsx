'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import styles from './Header.module.scss'
import {
  HamburgerBtn,
  Logo,
  SearchButton,
  ToggleTheme,
} from './header-components'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleToggleMenu() {
    setMenuOpen((prev) => !prev)
  }

  function handleLinkClick() {
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <SearchButton />
        <ToggleTheme />
      </div>
      <Logo />
      <div className={styles.right}>
        <HamburgerBtn isOpen={menuOpen} onClick={handleToggleMenu} />
      </div>
    </header>
  )
}

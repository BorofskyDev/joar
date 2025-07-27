// components/editor-toolbar/ToolbarButton.tsx
'use client'

import { ReactNode } from 'react'
import styles from './ToolbarBtn.module.scss'

interface ToolbarButtonProps {
  onClick: () => void
  isActive?: boolean
  children: ReactNode
  title?: string
}

export function ToolbarButton({
  onClick,
  isActive = false,
  children,
  title,
}: ToolbarButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`${styles.toolbarBtn} ${isActive ? styles.active : ''}`}
      title={title}
    >
      {children}
    </button>
  )
}

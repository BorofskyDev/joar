'use client'

import {  UserProvider } from '@/lib'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider >
      <ThemeProvider
        attribute='data-theme'
        defaultTheme='light'
        themes={['light', 'dark']}
      >
        {children}
      </ThemeProvider>
    </UserProvider>
  )
}

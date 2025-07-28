'use client'

import { useEffect, useState } from 'react'

export function useSticky(thresholdId: string) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const el = document.getElementById(thresholdId)
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [thresholdId])

  return isSticky
}

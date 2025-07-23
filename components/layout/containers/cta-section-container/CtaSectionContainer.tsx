import styles from './CtaSectionContainer.module.scss'

interface CtaSectionContainerProps {
  children: React.ReactNode
  id: string
  className?: string
}

export function CtaSectionContainer({
  children,
  id,
  className,
}: CtaSectionContainerProps) {
  return (
    <section
      id={id}
      className={`${styles.ctaSectionContainer} ${className || ''}`}
    >
      {children}
    </section>
  )
}

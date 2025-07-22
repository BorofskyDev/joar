import styles from './PageContainer.module.scss'

interface PageContainerProps {
  children: React.ReactNode
  className?: string
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <main className={`${styles.pageContainer} ${className}`}>{children}</main>
  )
}

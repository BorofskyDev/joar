import styles from './ContentContainer.module.scss'

interface ContentContainerProps {
  children: React.ReactNode
  className?: string
}

export function ContentContainer({
    children,
    className = '',
    }: ContentContainerProps) {
    return (
        <div className={`${styles.contentContainer} ${className}`}>
        {children}
        </div>
    )
    }
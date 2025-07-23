import { Heading } from '@/components/ui'
import styles from './WrapSectionContainer.module.scss'

interface WrapSectionContainerProps {
  children: React.ReactNode
  id: string
  className?: string
  title?: string
}

export function WrapSectionContainer({
  children,
  id,
  title,
  className = '',
}: WrapSectionContainerProps) {
  return (
    <section id={id} className={`${styles.wrapSectionContainer} ${className}`}>
      <Heading element='h2' variant='section'>
        {title}
      </Heading>
      <div className={styles.wrapSection}>{children}</div>
    </section>
  )
}

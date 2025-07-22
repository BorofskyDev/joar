import Link from 'next/link'
import styles from './LinkHeading.module.scss'

interface LinkHeadingProps {
    children: React.ReactNode
    href: string
    className?: string
}

export function LinkHeading({ children, href, className }: LinkHeadingProps) {
    return (
        <Link href={href} className={`${styles.linkHeading} ${className}`}>
           <h1>{children}</h1>
        </Link>
    )
}

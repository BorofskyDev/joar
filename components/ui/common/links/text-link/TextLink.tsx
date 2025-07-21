import { AnchorHTMLAttributes } from 'react'
import { Icon, icons } from '@/components/ui/'
import Link from 'next/link'
import styles from './TextLink.module.scss'

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>

interface TextLinkProps extends AnchorProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

const isClearlyExternal = (url: string) => /^(https?:\/\/|mailto:)/i.test(url)

export function TextLink({
  href,
  external,
  children,
  className = '',
  ...rest
}: TextLinkProps) {
  const isExternal = external ?? isClearlyExternal(href)

  if (isExternal) {
    return (
      <a
        href={href}
        className={`${styles.textLink} ${className}`}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={
          rest['aria-label'] ??
          (typeof children === 'string'
            ? `${children} (opens in a new tab)`
            : undefined)
        }
        {...rest}
      >
        {children}
        <Icon
          path={icons.external}
          aria-hidden='true'
          className={styles.externalIcon}
        />
      </a>
    )
  }

  return (
    <Link href={href} className={`${styles.textLink} ${className}`} {...rest}>
      {children}
    </Link>
  )
}

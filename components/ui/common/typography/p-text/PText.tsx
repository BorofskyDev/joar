import { ReactNode } from 'react'
import styles from './PText.module.scss'

export type TextVariant =
  | 'body'
  | 'body-sm'
  | 'body-lg'
  | 'label'
  | 'label-sm'
  | 'label-lg'
  | 'emphasis'
  | 'caption'

interface PTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant
  children: ReactNode
  className?: string
}

export const PText: React.FC<PTextProps> = ({
  variant = 'body',
  children,
  className = '',
  ...rest
}) => {
  return (
    <p
      className={`${styles.text} ${styles[`text__${variant}`]} ${className}`}
      {...rest}
    >
      {children}
    </p>
  )
}

import clsx from 'clsx'
import { HeadingElement, HeadingVariant } from './headingTypes'
import styles from './Heading.module.scss'

interface HeadingProps {
  element: HeadingElement
  variant: HeadingVariant
  className?: string
  children: React.ReactNode
}

export const Heading: React.FC<HeadingProps> = ({
  element: Element,
  variant,
  className,
  children,
}) => {
  return (
    <Element
      className={clsx(styles.heading, styles[`heading--${variant}`], className)}
    >
      {children}
    </Element>
  )
}

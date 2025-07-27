export type ButtonProps = {
  variant: 'primary' | 'secondary' | 'tertiary' | 'small'
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
  disabled?: boolean
  ariaLabel?: string
}

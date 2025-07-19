export interface IconProps {
  path: string
  size?: number
  className?: string
  viewBox?: string
  title?: string
  description?: string
  role?: 'img' | 'presentation'
  strokeColor?: string
  backgroundColor?: string
}

export function Icon({
  path,
  className = '',
  viewBox = '0 0 50 50',
  title,
  description,
  role = 'presentation',
  strokeColor,
  backgroundColor,
}: IconProps) {
  const titleId = title
    ? `icon-title-${Math.random().toString(36).slice(2, 11)}`
    : undefined
  const descId = description
    ? `icon-desc-${Math.random().toString(36).slice(2, 11)}`
    : undefined

  const ariaLabelledBy =
    [titleId, descId].filter(Boolean).join(' ') || undefined

  return (
    <svg
      viewBox={viewBox}
      fill='currentColor'
      className={`${className} ${backgroundColor}`}
      role={role}
      aria-labelledby={ariaLabelledBy}
      aria-hidden={role === 'presentation' ? 'true' : undefined}
    >
      {title && <title id={titleId}>{title}</title>}
      {description && <desc id={descId}>{description}</desc>}
      <path d={path} className={strokeColor} />
    </svg>
  )
}

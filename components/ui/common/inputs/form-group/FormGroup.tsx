import styles from './FormGroup.module.scss'

interface FormGroupProps {
  type?: string
  id: string
  name: string
  label: string
  required?: boolean
  as?: 'input' | 'textarea'
  placeholder?: string
  value?: string
  className?: string
  maxLength?: number
  rows?: number

  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function FormGroup({
  type = 'text',
  id,
  name,
  label,
  required,
  placeholder,
  value,
  maxLength,
  as = 'input',
  rows = 3,
  onChange,
  className = '',
}: FormGroupProps) {
  const SharedProps = {
    id, 
    name, 
    placeholder,
    value,
    onChange,
    required,
    maxLength,
    className: styles.input
  }
  return (
    <div className={`${styles.formGroup} ${className}`}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>

      {as === 'textarea' ? (
        <textarea {...SharedProps} rows={rows} />
      ) : (
        <input {...SharedProps} type={type} />
      )}
    </div>
  )
}

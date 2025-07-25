import styles from './FormGroup.module.scss'

interface FormGroupProps {
  type: string
  id: string
  name: string
  label: string
  required?: boolean
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function FormGroup({
  type,
  id,
  name,
  label,
  required,
  placeholder,
  value,
  onChange,
}: FormGroupProps) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={styles.input}
      />
    </div>
  )
}

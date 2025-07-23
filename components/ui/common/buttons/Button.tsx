import { ButtonProps } from "./buttonTypes";
import styles from './Button.module.scss'

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  type = 'button',
  onClick,
  className,
  disabled = false,
  ariaLabel
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[`button--${variant}`]} ${className}`}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
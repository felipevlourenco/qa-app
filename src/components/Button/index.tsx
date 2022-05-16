import { ButtonProp } from 'components/Button/types'
import styles from 'components/Button/styles.module.css'

const Button = ({ children, onClick, variant = 'primary', type = 'button', ...rest }: ButtonProp) => {
  return (
    <button type={type} onClick={onClick} className={`${styles.button} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  )
}

export default Button

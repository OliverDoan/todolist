import React from 'react'
import styles from '../styles/modules/button.module.scss'
import { getClasses } from '../utils/getClasses'

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary'
}
interface ButtonProps {
  type?: 'submit' | 'button'
  variant?: keyof typeof buttonTypes
  children: React.ReactNode
  onClick?: () => void
}

interface SelectButtonProps {
  id: string
  children: React.ReactNode
}
function Button({ type, variant = 'primary', children, onClick, ...rest }: ButtonProps) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={getClasses([styles.button, styles[`button--${buttonTypes[variant]}`]])}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

function SelectButton({ children, id, ...rest }: SelectButtonProps) {
  return (
    <select id={id} className={getClasses([styles.button, styles.button__select])} {...rest}>
      {children}
    </select>
  )
}

export { SelectButton }
export default Button

import { ReactNode } from 'react'

export interface ButtonProp {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
}

import { FieldError, UseFormRegister } from 'react-hook-form'
import { AddQuestionAction } from 'store/questions/types'

export interface InputProp {
  id: 'question' | 'answer'
  label: string
  defaultValue?: string
  register: UseFormRegister<AddQuestionAction>
  errors: {
    question?: FieldError | undefined
    answer?: FieldError | undefined
  }
}

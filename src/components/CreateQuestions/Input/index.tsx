import React from 'react'
import { InputProp } from 'components/CreateQuestions/Input/types'
import styles from 'components/CreateQuestions/Input/styles.module.css'

const Input = ({ id, label, errors, register }: InputProp) => {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input id={id} {...register(id, { required: true })} className={styles.input} />
      {errors[id] && <span className={styles.error}>This field is required</span>}
    </div>
  )
}

export default Input

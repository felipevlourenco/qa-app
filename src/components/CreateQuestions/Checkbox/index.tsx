import React from 'react'
import { CheckboxProp } from 'components/CreateQuestions/Checkbox/types'
import styles from 'components/CreateQuestions/Checkbox/styles.module.css'

const Checkbox = ({ checked, onChange }: CheckboxProp) => {
  return (
    <label className={styles.label} htmlFor="delay">
      <input id="delay" type="checkbox" checked={checked} onChange={onChange} className={styles.checkbox} />
      <span className={styles.span}>Add question with delay</span>
    </label>
  )
}

export default Checkbox

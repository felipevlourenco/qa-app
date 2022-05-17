import React from 'react'
import styles from 'components/Questions/AlertMessage/styles.module.css'

const AlertMessage = () => {
  return (
    <div className={styles.alert}>
      <span>No questions in the list</span>
    </div>
  )
}

export default AlertMessage

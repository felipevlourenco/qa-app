import React from 'react'
import { IconButtonProp } from 'components/IconButton/types'
import styles from 'components/IconButton/styles.module.css'

const IconButton = ({ icon, onClick, alt }: IconButtonProp) => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      <img src={icon} alt={alt} className={styles.img} />
    </button>
  )
}

export default IconButton

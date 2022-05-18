import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styles from 'components/CreateQuestions/Loader/styles.module.css'

export const Loader = ({ className = 'root-portal', element = 'div' }) => {
  const [container] = useState(() => {
    const el = document.createElement(element)
    el.classList.add(className)
    return el
  })

  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader} />
      <span className={styles.text}>Adding question...</span>
    </div>,
    container
  )
}

export default Loader

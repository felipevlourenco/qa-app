import ReactDOM from 'react-dom'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import React, { useEffect, useState } from 'react'
import { toggleToast } from 'store/global'
import { TOAST_TIMEOUT } from 'store/global/types'
import styles from 'components/Toast/styles.module.css'

const Toast = () => {
  const { showToast, message } = useAppSelector((state) => state.global)
  const dispatch = useAppDispatch()

  const [container] = useState(() => {
    const el = document.createElement('div')
    el.setAttribute('id', 'toast')
    el.classList.add(styles.toast)
    return el
  })

  useEffect(() => {
    if (showToast && container) {
      document.body.appendChild(container)
      setTimeout(() => container.classList.add(styles.show), 0)

      setTimeout(() => {
        container.classList.remove(styles.show)

        setTimeout(() => {
          dispatch(toggleToast(''))
          document.body.removeChild(container)
        }, 500)
      }, TOAST_TIMEOUT)
    }
  }, [showToast])

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return ReactDOM.createPortal(<>{message}</>, container)
}

export default Toast

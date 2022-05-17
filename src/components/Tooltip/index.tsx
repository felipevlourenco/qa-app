import { TooltipProp } from 'components/Tooltip/types'
import useToggle from 'hooks/useToggle'
import styles from 'components/Tooltip/styles.module.css'
import { useMemo, useRef } from 'react'

const Tooltip = ({ children, content }: TooltipProp) => {
  const { isToggled, toggleOn, toggleOff } = useToggle()
  const childRef = useRef<HTMLDivElement>(null)

  const offsetX = useMemo(() => {
    return childRef.current ? childRef.current.offsetWidth / 3 : 0
  }, [childRef.current])

  const offsetY = useMemo(() => {
    return childRef.current ? childRef.current.offsetHeight * 2 : 0
  }, [childRef.current])

  return (
    <div className={styles.tooltip} onMouseEnter={toggleOn} onMouseLeave={toggleOff}>
      <div className={styles.child} ref={childRef}>
        {children}
      </div>
      {isToggled && (
        <span className={styles.content} style={{ left: offsetX, top: offsetY }}>
          {content}
        </span>
      )}
    </div>
  )
}

export default Tooltip

import { useState } from 'react'

export default (initialValue: boolean = false) => {
  const [isToggled, setIsToggled] = useState(initialValue)
  const toggle = () => setIsToggled(!isToggled)
  const toggleOn = () => setIsToggled(true)
  const toggleOff = () => setIsToggled(false)

  return { isToggled, toggle, toggleOn, toggleOff }
}

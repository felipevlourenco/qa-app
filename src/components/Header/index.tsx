import { HeaderProp } from 'components/Header/types'
import styles from 'components/Header/styles.module.css'

const Header = ({ children }: HeaderProp) => {
  return <header className={styles.header}>{children}</header>
}

export default Header

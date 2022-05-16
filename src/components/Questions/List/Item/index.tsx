import { QuestionItemProp } from 'components/Questions/List/Item/types'
import useToggle from 'hooks/useToggle'
import styles from 'components/Questions/List/Item/styles.module.css'

const Item = ({ question }: QuestionItemProp) => {
  const { isToggled, toggle } = useToggle()

  return (
    <li className={styles.item}>
      <button type="button" onClick={toggle} className={styles.button}>
        <span className={styles.question}>{question.question}</span>
        {isToggled && <span className={styles.awnser}>{question.awnser}</span>}
      </button>
    </li>
  )
}

export default Item

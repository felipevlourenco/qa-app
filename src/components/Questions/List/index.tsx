import QuestionItem from 'components/Questions/List/Item'
import styles from 'components/Questions/List/styles.module.css'
import { ListProp } from 'components/Questions/List/types'

const List = ({ questions }: ListProp) => {
  return (
    <ul className={styles.list}>
      {questions.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </ul>
  )
}

export default List

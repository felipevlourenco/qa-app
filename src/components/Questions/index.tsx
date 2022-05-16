import { useMemo } from 'react'
import { useAppSelector, useAppDispatch } from 'hooks/useRedux'
import Button from 'components/Button'
import List from 'components/Questions/List'
import styles from 'components/Questions/styles.module.css'
import useToggle from 'hooks/useToggle'
import sortQuestion from 'components/Questions/util'
import { deleteAllQuestions } from 'store/questions'

const Questions = () => {
  const dispatch = useAppDispatch()
  const { isToggled, toggle } = useToggle()
  const { data: questions } = useAppSelector((questionState) => questionState.questions)

  const list = useMemo(() => {
    return isToggled ? [...questions].sort(sortQuestion) : questions
  }, [isToggled, questions])

  const deleteAllHandler = () => {
    dispatch(deleteAllQuestions())
  }

  return (
    <>
      <h2>Created questions</h2>
      <List questions={list} />
      <div className={styles.row}>
        <Button onClick={toggle}>Sort questions</Button>
        <Button onClick={deleteAllHandler} variant="secondary">
          Delete all questions
        </Button>
      </div>
    </>
  )
}

export default Questions

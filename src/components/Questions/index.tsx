import { useMemo } from 'react'
import { useAppSelector, useAppDispatch } from 'hooks/useRedux'
import Button from 'components/Button'
import List from 'components/Questions/List'
import styles from 'components/Questions/styles.module.css'
import useToggle from 'hooks/useToggle'
import sortQuestion from 'components/Questions/util'
import { deleteAllQuestions } from 'store/questions'
import AlertMessage from 'components/Questions/AlertMessage'
import Tooltip from 'components/Tooltip'
import { toggleToast } from 'store/global'

const Questions = () => {
  const dispatch = useAppDispatch()
  const { isToggled, toggle } = useToggle()
  const { data: questions } = useAppSelector((questionState) => questionState.questions)

  const list = useMemo(() => {
    return isToggled ? [...questions].sort(sortQuestion) : questions
  }, [isToggled, questions])

  const deleteAllHandler = () => {
    if (questions.length) {
      dispatch(deleteAllQuestions())
      dispatch(toggleToast('Deleted all questions!'))
    } else {
      dispatch(toggleToast('No questions to delete!'))
    }
  }

  return (
    <>
      <Tooltip content="Here you can find the created questions and their answer">
        <span className={styles.header}>Created questions</span>
      </Tooltip>
      {list.length ? <List questions={list} /> : <AlertMessage />}
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

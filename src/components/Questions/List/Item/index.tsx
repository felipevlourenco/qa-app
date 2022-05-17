import { QuestionItemProp } from 'components/Questions/List/Item/types'
import useToggle from 'hooks/useToggle'
import styles from 'components/Questions/List/Item/styles.module.css'
import editIcon from 'assets/edit.svg'
import deleteIcon from 'assets/delete.svg'
import { useAppDispatch } from 'hooks/useRedux'
import { deleteQuestion, editQuestion } from 'store/questions'
import IconButton from 'components/IconButton'
import { useForm } from 'react-hook-form'
import { AddQuestionAction } from 'store/questions/types'
import Input from 'components/CreateQuestions/Input'
import Button from 'components/Button'

const Item = ({ question }: QuestionItemProp) => {
  const dispatch = useAppDispatch()
  const { isToggled: isCollapsed, toggle } = useToggle()
  const { isToggled: isHovered, toggleOn, toggleOff } = useToggle()
  const { isToggled: isEditing, toggleOn: editOn, toggleOff: editOff } = useToggle()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AddQuestionAction>()

  const deleteHandler = () => {
    dispatch(deleteQuestion({ id: question.id }))
  }

  const onSubmit = handleSubmit((data) => {
    dispatch(editQuestion({ ...data, id: question.id }))
    editOff()
  })

  return (
    <li className={styles.item} onClick={toggle} onMouseEnter={toggleOn} onMouseLeave={toggleOff}>
      <div className={styles.button}>
        {isEditing ? (
          <form className={styles.form} onSubmit={onSubmit}>
            <Input
              id="question"
              label="Question"
              defaultValue={question.question}
              register={register}
              errors={errors}
            />
            <Input id="answer" label="answer" defaultValue={question.answer} register={register} errors={errors} />
            <div className={styles.submit}>
              <Button type="submit">Edit question</Button>
              <Button type="button" variant="secondary" onClick={editOff}>
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <>
            <span className={styles.question}>{question.question}</span>
            {isCollapsed && <span className={styles.answer}>{question.answer}</span>}
          </>
        )}
      </div>

      {isHovered && (
        <>
          <IconButton icon={editIcon} alt="edit" onClick={editOn} />
          <IconButton icon={deleteIcon} alt="delete" onClick={deleteHandler} />
        </>
      )}
    </li>
  )
}

export default Item

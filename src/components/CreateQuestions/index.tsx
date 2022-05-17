import React from 'react'
import { useForm } from 'react-hook-form'
import styles from 'components/CreateQuestions/styles.module.css'
import Button from 'components/Button'
import { AddQuestionAction } from 'store/questions/types'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { addQuestion, addQuestionAsyncAction } from 'store/questions'
import Input from 'components/CreateQuestions/Input'
import Checkbox from 'components/CreateQuestions/Checkbox'
import Loader from 'components/CreateQuestions/Loader'
import useToggle from 'hooks/useToggle'
import Tooltip from 'components/Tooltip'

const CreateQuestions = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<AddQuestionAction>()
  const { toggle, isToggled } = useToggle()
  const { state } = useAppSelector((questionState) => questionState.questions)

  const onSubmit = handleSubmit((data) => {
    dispatch(isToggled ? addQuestionAsyncAction(data) : addQuestion(data))
    setValue('question', '')
    setValue('answer', '')
  })

  return (
    <div className={styles.create}>
      <Tooltip content="Here you can create new questions and their answers">
        <span className={styles.header}>Create a new question</span>
      </Tooltip>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input id="question" label="Question" register={register} errors={errors} />
        <Input id="answer" label="answer" register={register} errors={errors} />
        <Checkbox checked={isToggled} onChange={toggle} />
        <Button type="submit">Create question</Button>
      </form>

      {state === 'PENDING' && <Loader />}
    </div>
  )
}

export default CreateQuestions

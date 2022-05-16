import React from 'react'
import { useForm } from 'react-hook-form'
import styles from 'components/CreateQuestions/styles.module.css'
import Button from 'components/Button'
import { AddQuestionAction } from 'store/questions/types'
import { useAppDispatch } from 'hooks/useRedux'
import { addQuestion } from 'store/questions'

const CreateQuestions = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<AddQuestionAction>()

  const onSubmit = handleSubmit((data) => {
    dispatch(addQuestion(data))
    setValue('question', '')
    setValue('awnser', '')
  })

  return (
    <div className={styles.create}>
      <h2>Create a new question</h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <input {...register('question', { required: true })} />
        {errors.question && <span>This field is required</span>}
        <input {...register('awnser', { required: true })} />
        {errors.awnser && <span>This field is required</span>}

        <Button type="submit">Create question</Button>
      </form>
    </div>
  )
}

export default CreateQuestions

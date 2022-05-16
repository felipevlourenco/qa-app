import { AnyAction } from '@reduxjs/toolkit'
import reducer, {
  initialState,
  addQuestion,
  editQuestion,
  deleteQuestion,
  deleteAllQuestions,
  addQuestionAsyncAction
} from 'store/questions'
import { AddQuestionAction, DeleteQuestionAction, EditQuestionAction } from 'store/questions/types'

describe('store/questions', () => {
  describe('reducer', () => {
    it('should return initialState by default', () => {
      const state = reducer(undefined, {} as AnyAction)
      expect(state).toEqual(initialState)
    })
  })

  describe('addQuestion', () => {
    it('should add new question to state', () => {
      const question: AddQuestionAction = {
        question: 'Is this a new question?',
        awnser: 'Yes, it is a new question!'
      }
      const newState = reducer(initialState, addQuestion(question))
      expect(newState).toEqual({
        state: 'COMPLETED',
        data: [...initialState.data, { ...question, id: 2 }]
      })
    })
  })

  describe('editQuestion', () => {
    it('should edit selected question', () => {
      const questionToEdit: EditQuestionAction = {
        id: 1,
        question: 'Should edit this question?',
        awnser: 'Yes, this questions was edited'
      }

      const newState = reducer(initialState, editQuestion(questionToEdit))
      expect(newState).toEqual({ data: [questionToEdit], state: 'COMPLETED' })
    })
  })

  describe('deleteQuestion', () => {
    it('should delete selected question', () => {
      const questionToDelete: DeleteQuestionAction = { id: 1 }

      const newState = reducer(initialState, deleteQuestion({ id: 10 }))
      expect(newState).toEqual({ ...initialState, state: 'COMPLETED' })

      const endState = reducer(newState, deleteQuestion(questionToDelete))
      expect(endState).toEqual({ data: [], state: 'COMPLETED' })
    })
  })

  describe('deleteAllQuestions', () => {
    it('should delete all questions', () => {
      const newState = reducer(initialState, deleteAllQuestions())
      expect(newState).toEqual({ data: [], state: 'COMPLETED' })
    })
  })

  describe('addQuestionAsyncAction', () => {
    it('should add a question async', async () => {
      const question: AddQuestionAction = {
        question: 'Is this a new question?',
        awnser: 'Yes, it is a new question!'
      }
      const newState = reducer(initialState, {
        type: addQuestionAsyncAction.fulfilled.type,
        payload: question
      })

      expect(newState).toEqual({ state: 'COMPLETED', data: [...initialState.data, { ...question, id: 2 }] })
    })

    it('should set state to PENDING when adding question async', () => {
      const newState = reducer(initialState, {
        type: addQuestionAsyncAction.pending.type
      })

      expect(newState).toEqual({ ...initialState, state: 'PENDING' })
    })
  })
})

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuestionsState, Question, AddQuestionAction, EditQuestionAction, ASYNC_TIMEOUT } from 'store/questions/types'
import { DeleteQuestionAction } from './types'

export const initialQuestion: Question = {
  id: 1,
  question: 'How to add a question?',
  awnser: 'Just use the form below'
}

export const initialState: QuestionsState = {
  data: [initialQuestion]
}

const addQuestionAsync = async (question: AddQuestionAction) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(question)
    }, ASYNC_TIMEOUT)
  })

export const addQuestionAsyncAction = createAsyncThunk('QUESTIONS/ADD_QUESTION_ASYNC', addQuestionAsync)

const questionsSlice = createSlice({
  name: 'questionsSlice',
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<AddQuestionAction>) => {
      const nextId = state.data.length ? state.data[state.data.length - 1].id + 1 : 1
      state.data.push({
        ...action.payload,
        id: nextId
      })
    },
    editQuestion: (state, action: PayloadAction<EditQuestionAction>) => {
      const newData = state.data.map((question) => (question.id === action.payload.id ? action.payload : question))
      state.data = newData
    },
    deleteQuestion: (state, action: PayloadAction<DeleteQuestionAction>) => {
      const newData = state.data.filter(({ id }) => id !== action.payload.id)
      state.data = newData
    },
    deleteAllQuestions: (state) => {
      state.data = []
    }
  },
  extraReducers: {
    [addQuestionAsyncAction.fulfilled.type]: (state, action: PayloadAction<AddQuestionAction>) => {
      const nextId = state.data.length ? state.data[state.data.length - 1].id + 1 : 1
      state.data.push({
        ...action.payload,
        id: nextId
      })
    }
  }
})

export const { addQuestion, editQuestion, deleteQuestion, deleteAllQuestions } = questionsSlice.actions

export default questionsSlice.reducer

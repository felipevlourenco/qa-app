import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  QuestionsState,
  initialQuestion,
  AddQuestionAction,
  EditQuestionAction,
  ASYNC_TIMEOUT
} from 'store/questions/types'
import { DeleteQuestionAction } from './types'

export const initialState: QuestionsState = {
  state: 'IDLE',
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
      state.state = 'COMPLETED'
    },
    editQuestion: (state, action: PayloadAction<EditQuestionAction>) => {
      const newData = state.data.map((question) => (question.id === action.payload.id ? action.payload : question))
      state.data = newData
      state.state = 'COMPLETED'
    },
    deleteQuestion: (state, action: PayloadAction<DeleteQuestionAction>) => {
      const newData = state.data.filter(({ id }) => id !== action.payload.id)
      state.data = newData
      state.state = 'COMPLETED'
    },
    deleteAllQuestions: (state) => {
      state.data = []
      state.state = 'COMPLETED'
    }
  },
  extraReducers: {
    [addQuestionAsyncAction.pending.type]: (state) => {
      state.state = 'PENDING'
    },
    [addQuestionAsyncAction.fulfilled.type]: (state, action: PayloadAction<AddQuestionAction>) => {
      const nextId = state.data.length ? state.data[state.data.length - 1].id + 1 : 1
      state.data.push({
        ...action.payload,
        id: nextId
      })
      state.state = 'COMPLETED'
    }
  }
})

export const { addQuestion, editQuestion, deleteQuestion, deleteAllQuestions } = questionsSlice.actions

export default questionsSlice.reducer

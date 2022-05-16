import { configureStore } from '@reduxjs/toolkit'
import questionsReducer from 'store/questions'

const store = configureStore({
  reducer: {
    questions: questionsReducer
  }
})

export default store

import { configureStore } from '@reduxjs/toolkit'
import questionsReducer from 'store/questions'

const store = configureStore({
  reducer: {
    questions: questionsReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {questions: questionsState}
export type AppDispatch = typeof store.dispatch

export default store

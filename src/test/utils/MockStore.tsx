import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import questionsReducer from 'store/questions'

const MockStore = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider
      store={configureStore({
        reducer: {
          questions: questionsReducer
        }
      })}>
      {children}
    </Provider>
  )
}

export default MockStore

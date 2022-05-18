import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import questionsReducer from 'store/questions'
import globalReducer from 'store/global'

const MockStore = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider
      store={configureStore({
        reducer: {
          questions: questionsReducer,
          global: globalReducer
        }
      })}>
      {children}
    </Provider>
  )
}

export default MockStore

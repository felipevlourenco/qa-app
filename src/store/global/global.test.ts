import { AnyAction } from '@reduxjs/toolkit'
import reducer, { initialState, toggleToast } from 'store/global'

describe('store/global', () => {
  describe('reducer', () => {
    it('should return initialState by default', () => {
      const state = reducer(undefined, {} as AnyAction)
      expect(state).toEqual(initialState)
    })
  })

  describe('toggleToast', () => {
    it('should toogle showToast state', () => {
      const newState = reducer(initialState, toggleToast(''))
      expect(newState).toEqual({
        showToast: !initialState.showToast,
        message: ''
      })
    })

    it('should toogle on showToast state with message', () => {
      const newState = reducer({ ...initialState, showToast: false }, toggleToast('test message'))
      expect(newState).toEqual({
        showToast: true,
        message: 'test message'
      })
    })
  })
})

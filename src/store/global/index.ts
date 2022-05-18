import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GlobalState } from 'store/global/types'

export const initialState: GlobalState = {
  showToast: false,
  message: ''
}

const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    toggleToast: (state, action: PayloadAction<string>) => {
      state.showToast = !state.showToast
      state.message = action?.payload ?? ''
    }
  }
})

export const { toggleToast } = globalSlice.actions

export default globalSlice.reducer

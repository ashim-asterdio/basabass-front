import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProgessState {
  value: boolean
}

const initialState: ProgessState = {
  value: false,
}

export const payPopSlice = createSlice({
  name: 'payPop',
  initialState,
  reducers: {
    change: (state) => {
      state.value=!state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const {change} =payPopSlice.actions

export default payPopSlice.reducer
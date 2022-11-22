import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PopUpState {
  value: boolean,
  information:string
  popUpBg:boolean
}

const initialState: PopUpState = {
  value: false,
  information:"",
  popUpBg:false
}

export const payPopSlice = createSlice({
  name: 'payPop',
  initialState,
  reducers: {
    change: (state) => {
      state.value=!state.value
    },
    changeInfo:(state, action: PayloadAction<string>)=>{
      state.information=action.payload
    },
    changepopUpBg:(state)=>{
      state.popUpBg=!state.popUpBg
    }
  },
})

// Action creators are generated for each case reducer function
export const {change,changeInfo,changepopUpBg} =payPopSlice.actions

export default payPopSlice.reducer
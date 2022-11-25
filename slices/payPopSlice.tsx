import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PopUpState {
  value: boolean,
  information:string,
  popUpBg:boolean,
  popUpPage:number,
  packageInfo:{name:string,price:any},
  paymentStatus:boolean,
  registrationStatus:boolean
}

const initialState: PopUpState = {
  value: false,
  information:"",
  popUpBg:false,
  popUpPage:1,
  packageInfo:{name:"",price:0},
  paymentStatus:false,
  registrationStatus:false
}

export const payPopSlice = createSlice({
  name: 'payPop',
  initialState,
  reducers: {
    change: (state) => {
      state.value=!state.value
      state.popUpBg=!state.popUpBg
    },
    changeInfo:(state, action: PayloadAction<string>)=>{
      state.information=action.payload
    },
    changepopUpBg:(state)=>{
      state.popUpBg=!state.popUpBg
    },
    changePopUpPage:(state, action: PayloadAction<number>)=>{
      state.popUpPage=action.payload
    },
    changePackageInfo:(state, action: PayloadAction<{name:string,price:any}>)=>{
      state.packageInfo=action.payload
    },
    changeRegistrationStatus:(state,action: PayloadAction<boolean>)=>{
      state.registrationStatus=action.payload
    },
    changePaymentStatus:(state,action: PayloadAction<boolean>)=>{
      state.paymentStatus=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {change,changeInfo,changepopUpBg,changePopUpPage,changePackageInfo,changeRegistrationStatus,changePaymentStatus} =payPopSlice.actions

export default payPopSlice.reducer
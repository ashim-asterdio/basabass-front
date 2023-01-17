import { combineReducers, configureStore } from '@reduxjs/toolkit'
import progressReducer from "./slices/progressBarSlice"
import payPopReducer from "./slices/payPopSlice"

const reducers=combineReducers({progressBar:progressReducer,payPop:payPopReducer})
export const store = configureStore({
  reducer: {
    progressBar:progressReducer,
    payPop:payPopReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
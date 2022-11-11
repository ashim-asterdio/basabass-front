import { configureStore } from '@reduxjs/toolkit'
import progressReducer from "./slices/progressBarSlice"
import payPopReducer from "./slices/payPopSlice"


export const store = configureStore({
  reducer: {
    progressBar:progressReducer,
    payPop:payPopReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
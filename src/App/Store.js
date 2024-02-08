import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Counter/CounterSlice'

export const store = configureStore({
  reducer: {
    cart : counterSlice,
  },
})
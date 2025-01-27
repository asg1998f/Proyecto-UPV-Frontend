import { configureStore } from '@reduxjs/toolkit'
import  auth  from '../features/auth/authService'

export const store = configureStore({
  reducer: {
    auth
  },
})
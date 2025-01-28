import { configureStore } from '@reduxjs/toolkit'

import  auth  from '../features/auth/authSlice'
import  lotes  from '../features/lote/loteSlice'

export const store = configureStore({
  reducer: {
    auth,
    lotes
  },
})
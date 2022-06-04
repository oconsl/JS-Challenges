import { configureStore } from '@reduxjs/toolkit'
import conditions from '../features/conditions'

const store = configureStore({
  reducer: {
    conditions
  }
})

export default store

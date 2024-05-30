import { configureStore } from '@reduxjs/toolkit'
import favoritiesReducer from '../slices/favoritiesSlice'

export const store = configureStore({
  reducer: {
        favorities:favoritiesReducer,  
  },        
})
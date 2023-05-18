import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from './slices/articleSlice'

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
})
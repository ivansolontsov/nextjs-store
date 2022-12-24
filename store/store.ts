import { configureStore } from '@reduxjs/toolkit'
import { ProductApi } from './products/ProductApi'



export const store = configureStore({
  reducer: { [ProductApi.reducerPath]: ProductApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>
import { configureStore } from '@reduxjs/toolkit'
import { ProductApi } from './products/ProductApi'
import { cartReducer } from './cart/cartSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
    [ProductApi.reducerPath]: ProductApi.reducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
})

setupListeners(store.dispatch)
export type TypeRootState = ReturnType<typeof store.getState>
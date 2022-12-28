import { configureStore } from '@reduxjs/toolkit'
import { ProductApi } from './products/ProductApi'
import { CategoryApi } from './categories/categoryApi'
import { cartReducer } from './cart/cartSlice'
import { cartModalReducer } from './cart/cartModal'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import { favReducer } from './favorites/favoritesSlice'
import { catReducer } from './categories/categorySlice'

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['apiProductSlice'], // need to fix
}

const reducer = combineReducers({
  cart: cartReducer,
  cartModal: cartModalReducer,
  favorites: favReducer,
  category: catReducer,
  [ProductApi.reducerPath]: ProductApi.reducer,
  [CategoryApi.reducerPath]: CategoryApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(ProductApi.middleware, CategoryApi.middleware),
})

setupListeners(store.dispatch)
export type TypeRootState = ReturnType<typeof store.getState>
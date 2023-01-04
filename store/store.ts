import { configureStore } from '@reduxjs/toolkit'
import { ProductApi } from './products/ProductApi'
import { CategoryApi } from './categories/categoryApi'
import { cartReducer } from './cart/cartSlice'
import { cartModalReducer } from './cart/cartModal'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { UsersApi } from './users/UsersApi'
import { combineReducers } from '@reduxjs/toolkit'
import { favReducer } from './favorites/favoritesSlice'
import { catReducer } from './categories/categorySlice'
import { searchOpenReducer } from './search/searchOpen'
import { SearchApi } from './search/searchApi'
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


const persistConfig = {
  key: 'root1',
  storage: storage,
  blacklist: ['productApi', 'categoryApi', 'searchOpen', 'searchApi'],
}

const reducer = combineReducers({
  cart: cartReducer,
  cartModal: cartModalReducer,
  favorites: favReducer,
  category: catReducer,
  searchOpen: searchOpenReducer,
  [ProductApi.reducerPath]: ProductApi.reducer,
  [CategoryApi.reducerPath]: CategoryApi.reducer,
  [SearchApi.reducerPath]: SearchApi.reducer,
  [UsersApi.reducerPath]: UsersApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(ProductApi.middleware, CategoryApi.middleware, SearchApi.middleware, UsersApi.middleware),
})

setupListeners(store.dispatch)

export type TypeRootState = ReturnType<typeof store.getState>





// NEW STORE FOR SSG
// SSG
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () =>
  configureStore({
    reducer: {
      [ProductApi.reducerPath]: ProductApi.reducer,
      [CategoryApi.reducerPath]: CategoryApi.reducer,
    },
    middleware: (gDM) => gDM().concat(ProductApi.middleware, CategoryApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart } from "./cartType";

const initialState: ICart[] = []


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ICart>) => {
            state.push(action.payload)
        },
        removeItem: (state, action: PayloadAction<{ id: number }>) => {
            return state.filter(element => element.product.id !== action.payload.id)
        },
        incrementCount: (state, action: PayloadAction<{ id: number }>) => {
            return state.forEach((e) => {
                if (e.product.id === action.payload.id) {
                    e.amount++
                }
            })
        },
        decrementCount: (state, action: PayloadAction<{ id: number }>) => {
            return state.forEach((e) => {
                if (e.product.id === action.payload.id) {
                    e.amount--
                }
            })
        },
    }
})


export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
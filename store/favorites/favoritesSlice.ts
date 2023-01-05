import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../products/productTypes";
import { IFavorites } from "./favoritesTypes";

const initialState: IFavorites[] = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<IProduct>) => {
            state.push({ product: action.payload })
        },
        removeFromFavorites: (state, action: PayloadAction<{ id: number }>) => {
            return state.filter(element => element.product.id !== action.payload.id)
        },
    }
})


export const favReducer = favoritesSlice.reducer
export const favActions = favoritesSlice.actions
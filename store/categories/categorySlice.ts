import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISelectedCategory } from "./categoryTypes";

const initialState: ISelectedCategory = {
    category: ''
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        selectCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload
            console.log(state.category);
        },
    }
})


export const catReducer = categorySlice.reducer
export const catActions = categorySlice.actions
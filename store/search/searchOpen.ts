import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
}

export const searchOpen = createSlice({
    name: 'searchOpen',
    initialState,
    reducers: {
        openSearch: (state, action: PayloadAction) => {
            state.isOpen = true;
        },
        closeSearch: (state, action: PayloadAction) => {
            state.isOpen = false;
        },
    }
})


export const searchOpenReducer = searchOpen.reducer
export const searchOpenActions = searchOpen.actions
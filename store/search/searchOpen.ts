import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
}

export const searchOpen = createSlice({
    name: 'searchOpen',
    initialState,
    reducers: {
        openSearch: (state) => {
            state.isOpen = true;
        },
        closeSearch: (state) => {
            state.isOpen = false;
        },
    }
})


export const searchOpenReducer = searchOpen.reducer
export const searchOpenActions = searchOpen.actions
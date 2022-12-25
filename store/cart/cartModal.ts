import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
}

export const cartModal = createSlice({
    name: 'cartModal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
        },
        closeModal: (state, action) => {
            state.isOpen = false;
        }
    }
})


export const cartModalReducer = cartModal.reducer
export const cartModalActions = cartModal.actions
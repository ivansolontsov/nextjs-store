import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
      localStorage.setItem('state', `${state.value}`);
    },
    decrement: (state) => {
      state.value -= 1
      localStorage.setItem('state', `${state.value}`);
    },
  },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
	},
	reducers: {
		increment: state => {
			state.value = state.value + 1;
		},
		decrement: state => {
			state.value = state.value - 1;
		},
		multiply: state => {
			state.value = state.value * 10;
		},
	},
});

export const { increment, decrement, multiply } = counterSlice.actions;

export default counterSlice.reducer;

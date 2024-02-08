import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addcart: (state, action) => {
            action.payload.qty = 1;
            state.value.push(action.payload)
            console.log(state.value);
        },
    },
})

export const { addcart } = counterSlice.actions

export default counterSlice.reducer
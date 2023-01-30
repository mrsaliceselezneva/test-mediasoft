import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 10000,
    items: [1, 2, 3],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setPrice(state, action) {
            state.totalPrice = action.payload;
        },
        addItem(state, action) {
            state.items.push(action.payload);
        },
        deleteItem(state, action) {
            state.items.filter((obj) => obj.id !== action.payload);
        },
        clearItems(state) {
            state.items = [];
        },
    },
});

export const { setPrice, addItem, deleteItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    totalCount: 0,
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);

            state.totalCount++;
            if (findItem) {
                findItem.count++;
                state.totalPrice += action.payload.price;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
                state.totalPrice += action.payload.price;
            }
        },
        deleteItem(state, action) {
            state.items.filter((obj) => obj.id !== action.payload.id);
            state.totalPrice -= action.payload.price;
            state.totalCount--;
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
            state.totalCount = 0;
        },
    },
});

export const { addItem, deleteItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;

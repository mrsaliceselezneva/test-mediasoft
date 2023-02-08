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
                state.totalPrice += findItem.price;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
                state.totalPrice += action.payload.price;
            }
        },
        deleteItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);

            state.totalPrice -= action.payload.price;
            state.totalCount--;

            if (findItem.count > 1) {
                findItem.count--;
            } else {
                state.items = state.items.filter((obj) => obj.id !== action.payload.id);
            }
        },
        clearItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);
            state.totalPrice -= findItem.price * findItem.count;
            state.totalCount -= findItem.count;
            state.items = state.items.filter((obj) => obj.id !== action.payload.id);
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
            state.totalCount = 0;
            localStorage.clear();
        },
    },
});

export const { addItem, deleteItem, clearItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nameSort: '-------------------',
    typeSort: 'id',
    orderSort: 'asc',
};

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setNameSort(state, action) {
            state.nameSort = action.payload;
        },
        setTypeSort(state, action) {
            state.typeSort = action.payload;
        },
        setOrderSort(state, action) {
            state.orderSort = action.payload;
        },
    },
});

export const { setNameSort, setTypeSort, setOrderSort } = sortSlice.actions;

export default sortSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectFilter: 'Все',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter(state, action) {
            state.selectFilter = action.payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;

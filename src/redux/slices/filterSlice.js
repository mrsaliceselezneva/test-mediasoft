import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectFilter: localStorage.getItem('selectFilter') || 'Все',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter(state, action) {
            state.selectFilter = action.payload;
        },
    },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;

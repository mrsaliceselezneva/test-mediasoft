import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectPage: 1,
    numPages: 1,
    showPages: 3,
    prevPages: 0,
    subsPages: 2,
};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        changePage(state, action) {
            state.selectPage = action.payload;
        },
        changeNumPages(state, action) {
            state.numPages = action.payload;
        },
        changePrevPages(state, action) {
            state.prevPages = action.payload;
        },
        changeSubsPages(state, action) {
            state.subsPages = action.payload;
        },
    },
});

export const { changePage, changeNumPages, changePrevPages, changeSubsPages } =
    paginationSlice.actions;

export default paginationSlice.reducer;

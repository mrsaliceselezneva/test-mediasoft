import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectPage: 1,
    numPages: 1,
    showPages: 5,
    firstPage: 1,
    mediumPage: 3,
    lastPage: 5,
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
        changeFirstPage(state, action) {
            state.firstPage = action.payload;
        },
        changeMediumPage(state, action) {
            state.mediumPage = action.payload;
        },
        changeLastPage(state, action) {
            state.lastPage = action.payload;
        },
    },
});

export const { changePage, changeNumPages, changeFirstPage, changeMediumPage, changeLastPage } =
    paginationSlice.actions;

export default paginationSlice.reducer;

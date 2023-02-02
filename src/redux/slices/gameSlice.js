import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openGame: {},
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setOpenGame(state, action) {
            state.openGame = action.payload;
        },
    },
});

export const { setOpenGame } = gameSlice.actions;

export default gameSlice.reducer;

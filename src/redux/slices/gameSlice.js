import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    img: '',
    description: '',
    category: [],
    id: '',
    price: '',
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setName(state, action) {
            state.name = action.payload;
        },
        setImg(state, action) {
            state.img = action.payload;
        },
        setDescription(state, action) {
            state.description = action.payload;
        },
        setCategory(state, action) {
            state.category = action.payload;
        },
        setId(state, action) {
            state.id = action.payload;
        },
        setPrice(state, action) {
            state.price = action.payload;
        },
    },
});

export const { setName, setImg, setDescription, setCategory, setId, setPrice } = gameSlice.actions;

export default gameSlice.reducer;

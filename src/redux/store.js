import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './slices/paginationSlice';
import filterReducer from './slices/filterSlice';
import sortReducer from './slices/sortSlice';
import gameReducer from './slices/gameSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
    reducer: { paginationReducer, filterReducer, sortReducer, gameReducer, cartReducer },
});

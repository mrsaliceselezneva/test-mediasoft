import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './slices/paginationSlice';
import filterReducer from './slices/filterSlice';
import sortReducer from './slices/sortSlice';

export const store = configureStore({ reducer: { paginationReducer, filterReducer, sortReducer } });

import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './slices/paginationSlice';

export const store = configureStore({ reducer: { paginationReducer } });

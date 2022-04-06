import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../modals/AddItemModal';
import listReducer from './listSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
    modals: modalReducer,
  },
});

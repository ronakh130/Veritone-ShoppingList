import { configureStore } from '@reduxjs/toolkit';
import listReducer from './listSlice';
import modalReducer from './modalSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
    modals: modalReducer,
  },
});

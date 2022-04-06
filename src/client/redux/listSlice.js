import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shoppingList: [
    {
      name: 'Tomatoes',
      desc: 'Red',
      isChecked: true,
    },
    {
      name: 'Potatoes',
      desc: 'Blue',
      isChecked: false,
    },
  ],
  addModalOpen: false,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.shoppingList.push(action.payload);
    },
    removeItem: (state, action) => {

    },
    openAddModal: (state) => {
      state.addModalOpen = !state.addModalOpen;
    },
    crossItem: (state, action) => {
      const item = state.shoppingList[action.payload];
      item.isChecked = !item.isChecked;
    }
  },
});

export const { addItem, removeItem, openAddModal, crossItem } = listSlice.actions;

export default listSlice.reducer;

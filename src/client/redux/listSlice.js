import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shoppingList: [
    {
      name: 'test1',
      desc: 'desc1',
      isChecked: true,
    },
    {
      name: 'test2',
      desc: 'desc2',
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
    }
  },
});

export const { addItem, removeItem, openAddModal } = listSlice.actions;

export default listSlice.reducer;

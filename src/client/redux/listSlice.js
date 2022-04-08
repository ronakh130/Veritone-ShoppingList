import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shoppingList: [],
  itemCount: {},
  addModalOpen: false,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, desc, num } = action.payload;
      let counter = num;
      while (counter > 0) {
        state.shoppingList.push({ name, desc, isChecked: false, num: 1 });
        counter--;
      }
    },
    removeItem: (state, action) => {
      state.shoppingList.splice(action.payload, 1);
    },
    crossItem: (state, action) => {
      const item = state.shoppingList[action.payload];
      item.isChecked = !item.isChecked;
    },
    updateItem: (state, action) => {
      const { ind, name, desc, isChecked, count } = action.payload;
      state.shoppingList[ind].name = name;
      state.shoppingList[ind].desc = desc;
      state.shoppingList[ind].isChecked = isChecked;
      state.shoppingList[ind].count = count;
    },
  },
});

export const { addItem, removeItem, crossItem, updateItem } = listSlice.actions;

export default listSlice.reducer;

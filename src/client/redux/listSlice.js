import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shoppingList: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, desc, num } = action.payload;
      let counter = num;
      while (counter > 0) {
        state.shoppingList.push({ name, desc, isChecked: false, count: 1 });
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
      const { ind, item } = action.payload;
      Object.assign(state.shoppingList[ind], item);
    },
  },
});

export const { addItem, removeItem, crossItem, updateItem } = listSlice.actions;

export default listSlice.reducer;

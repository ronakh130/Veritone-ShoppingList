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
      const {name, desc, num} = action.payload;
      let counter = num;
      while(counter > 0){
        state.shoppingList.push({name, desc, isChecked: false});
        counter--;
      }
    },
    removeItem: (state, action) => {
      console.log('payload: ', action.payload);
      state.shoppingList.splice(action.payload, 1);
    },
    crossItem: (state, action) => {
      const item = state.shoppingList[action.payload];
      item.isChecked = !item.isChecked;
    }
  },
});

export const { addItem, removeItem, crossItem } = listSlice.actions;

export default listSlice.reducer;

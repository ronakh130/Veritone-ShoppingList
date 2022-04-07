import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shoppingList: [],
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
        counter--; //num free to mutate here since it gets cleared after submit
      }
    },
    removeItem: (state, action) => {

    },
    crossItem: (state, action) => {
      const item = state.shoppingList[action.payload];
      item.isChecked = !item.isChecked;
    }
  },
});

export const { addItem, removeItem, crossItem } = listSlice.actions;

export default listSlice.reducer;

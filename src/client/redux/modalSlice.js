import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  anyModalOpen: false,
  addModalOpen: false,
  editModalOpen: false,
  deleteModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openAddModal: (state) => {
      state.addModalOpen = !state.addModalOpen;
    },
  },
});

export const { openAddModal } = modalSlice.actions;

export default modalSlice.reducer;

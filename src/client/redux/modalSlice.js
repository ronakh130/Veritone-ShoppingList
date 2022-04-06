import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalOpen: false,
  add: false,
  edit: false,
  delete: false,
};

export const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openAddModal: (state) => {
      state.add = true;
      state.modalOpen = true;
    },
    openEditModal: (state) => {
      state.edit = true;
      state.modalOpen = true;
    },
    openDeleteModal: (state) => {
      state.delete = true;
      state.modalOpen = true;
    },
    closeModal: (state, action) => {
      state[action.payload] = false;
      state.modalOpen = false;
    },
  },
});

export const { openAddModal, openEditModal, openDeleteModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;

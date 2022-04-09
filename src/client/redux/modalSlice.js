import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalOpen: false,
  add: false,
  edit: false,
  del: false,
  currItem: {
    name: '',
    desc: '',
    count: 1,
    ind: 0,
    isChecked: false,
  },
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
      state.del = true;
      state.modalOpen = true;
    },
    closeModal: (state, action) => {
      state[action.payload] = false;
      state.modalOpen = false;
    },
    setItem: (state, action) => {
      Object.assign(state.currItem, action.payload);
    },
  },
});

export const { openAddModal, openEditModal, openDeleteModal, closeModal, setItem } = modalSlice.actions;

export default modalSlice.reducer;

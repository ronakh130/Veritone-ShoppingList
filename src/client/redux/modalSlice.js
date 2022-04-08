import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalOpen: false,
  add: false,
  edit: false,
  del: false,
  name: '',
  desc: '',
  num: 1,
  ind: 0,
  isChecked: false,
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
      const {name, desc, isChecked, ind} = action.payload;
      state.name = name;
      state.desc = desc;
      state.isChecked = isChecked;
      state.ind = ind;
    }
  },
});

export const { openAddModal, openEditModal, openDeleteModal, closeModal, setItem } = modalSlice.actions;

export default modalSlice.reducer;

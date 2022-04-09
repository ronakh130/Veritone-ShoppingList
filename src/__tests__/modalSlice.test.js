import reducer, { openAddModal, openEditModal, openDeleteModal, closeModal, setItem } from '../client/redux/modalSlice';

describe('modalSlice reducers', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
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
  });

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('openAddModal', () => {
    it('should update add and modalOpen keys to true', () => {
      expect(reducer(initialState, openAddModal())).toEqual({ ...initialState, add: true, modalOpen: true });
    });
  });

  describe('openEditModal', () => {
    it('should update edit and modalOpen keys to true', () => {
      expect(reducer(initialState, openEditModal())).toEqual({ ...initialState, edit: true, modalOpen: true });
    });
  });

  describe('openDeleteModal', () => {
    it('should update del and modalOpen keys to true', () => {
      expect(reducer(initialState, openDeleteModal())).toEqual({ ...initialState, del: true, modalOpen: true });
    });
  });

  describe('closeModal', () => {
    it('should set add and modalOpen keys to false ', () => {
      expect(reducer({ ...initialState, add: true, modalOpen: true }, closeModal('add'))).toEqual(initialState);
    });

    it('should set edit and modalOpen keys to false ', () => {
      expect(reducer({ ...initialState, edit: true, modalOpen: true }, closeModal('edit'))).toEqual(initialState);
    });

    it('should set del and modalOpen keys to false ', () => {
      expect(reducer({ ...initialState, del: true, modalOpen: true }, closeModal('del'))).toEqual(initialState);
    });
  });

  describe('setItem', () => {
    it('should update all item keys with action payload keys', () => {
      const action = {
        name: 'Tomato',
        desc: 'Red',
        isChecked: true,
        count: 2,
        ind: 4,
      };

      const expectedOutput = Object.assign(initialState.currItem, action);
      // expectedOutput.num = 2; //since state uses num but action uses count

      expect(reducer(initialState, setItem(action)).currItem).toEqual(expectedOutput);
    });
  });
});

import reducer, { addItem, removeItem, crossItem, updateItem } from '../client/redux/listSlice';

describe('listSlice reducers', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      shoppingList: [
        {
          name: 'Potato',
          desc: 'Brown',
          isChecked: true,
          count: 2,
        },
      ],
    };
  });

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({ ...initialState, shoppingList: [] });
  });

  describe('addItem', () => {
    
    it('should add x amount of the same item to shoppingList', () => {
      const action = {
        name: 'Tomato',
        desc: 'Red',
        isChecked: false,
        num: 3,
      };
      const { shoppingList } = reducer(initialState, addItem(action));

      expect(shoppingList.length).toEqual(4);
      expect(shoppingList[1].name).toEqual(shoppingList[3].name);
      expect(shoppingList[1].desc).toEqual(shoppingList[3].desc);
      expect(shoppingList[1].isChecked).toEqual(shoppingList[3].isChecked);
      expect(shoppingList[1].count).toEqual(shoppingList[3].count);
    });
  });

  describe('removeItem', () => {
    it('should remove element from specified location', () => {
      const { shoppingList } = reducer(initialState, removeItem(0));

      expect(shoppingList.length).toEqual(0);
    })
  })

  describe('crossItem', () => {
    it('should toggle isChecked property of specified item', () => {
      const { shoppingList } = reducer(initialState, crossItem(0));

      expect(shoppingList[0].isChecked).toEqual(false);
    })
  })

  describe('updateItem', () => {
    it('should update current item with action payload', () => {
      const action = {
        ind: 0,
        item: {
          name: 'Eggs',
          desc: 'Organic',
          isChecked: false,
          count: 4,
        }
      }

      const newItem = {
        name: 'Eggs',
        desc: 'Organic',
        isChecked: false,
        count: 4,
      };

      const { shoppingList } = reducer(initialState, updateItem(action));

      expect(shoppingList[0]).toEqual(newItem);
    })
  })
});

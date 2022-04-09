import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import listReducer from '../src/client/redux/listSlice';
import modalReducer from '../src/client/redux/modalSlice';

function render(
  ui,
  { 
    preloadedState, 
    store = configureStore({ 
      reducer: { list: listReducer, modals: modalReducer }, 
      preloadedState 
    }), 
    ...renderOptions 
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };

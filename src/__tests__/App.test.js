import React from 'react';
import { render } from '../../utils/test-utils';
import '@testing-library/jest-dom/extend-expect';

import App from '../client/App';

describe('App', () => {
  it('should render and contain Header and Body', () => {
    const { getByText } = render(<App />);
    const text = getByText('SHOPPING LIST');
    const emptyCart = getByText('Your shopping list is empty :(');
    const button = getByText('Add your first item');

    expect(text).toBeInTheDocument();
    expect(emptyCart).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

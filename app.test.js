import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders App component', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
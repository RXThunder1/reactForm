import React from 'react';
import { render } from '@testing-library/react';
import Todo from '../components/Todo';

test('renders Todo component', () => {
  const { asFragment } = render(<Todo task="Test Task" />);
  expect(asFragment()).toMatchSnapshot();
});
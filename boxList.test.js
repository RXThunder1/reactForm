import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from '../components/BoxList';

test('adds a new box', () => {
  const { getByPlaceholderText, getByText } = render(<BoxList />);

  fireEvent.change(getByPlaceholderText('Width'), { target: { value: '100' } });
  fireEvent.change(getByPlaceholderText('Height'), { target: { value: '100' } });
  fireEvent.change(getByPlaceholderText('Color'), { target: { value: 'blue' } });
  fireEvent.click(getByText('Add Box'));

  expect(getByText('X')).toBeInTheDocument();
});
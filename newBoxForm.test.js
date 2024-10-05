import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from '../components/NewBoxForm';

test('submits form data', () => {
  const addBox = jest.fn();
  const { getByPlaceholderText, getByText } = render(<NewBoxForm addBox={addBox} />);

  fireEvent.change(getByPlaceholderText('Width'), { target: { value: '100' } });
  fireEvent.change(getByPlaceholderText('Height'), { target: { value: '100' } });
  fireEvent.change(getByPlaceholderText('Color'), { target: { value: 'blue' } });
  fireEvent.click(getByText('Add Box'));

  expect(addBox).toHaveBeenCalledWith({
    width: '100',
    height: '100',
    backgroundColor: 'blue',
  });
});
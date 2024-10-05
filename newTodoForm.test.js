import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from '../components/NewTodoForm';

test('submits form data', () => {
  const addTodo = jest.fn();
  const { getByPlaceholderText, getByText } = render(<NewTodoForm addTodo={addTodo} />);

  fireEvent.change(getByPlaceholderText('New Todo'), { target: { value: 'New Task' } });
  fireEvent.click(getByText('Add Todo'));

  expect(addTodo).toHaveBeenCalledWith('New Task');
});
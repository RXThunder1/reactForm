import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('adds a new todo', () => {
  const { getByPlaceholderText, getByText } = render(<TodoList />);

  fireEvent.change(getByPlaceholderText('New Todo'), { target: { value: 'New Task' } });
  fireEvent.click(getByText('Add Todo'));

  expect(getByText('New Task')).toBeInTheDocument();
});
import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos((prevTodos) => [...prevTodos, task]);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((_, index) => index !== id));
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} task={todo} removeTodo={() => removeTodo(index)} />
      ))}
      <NewTodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoList;
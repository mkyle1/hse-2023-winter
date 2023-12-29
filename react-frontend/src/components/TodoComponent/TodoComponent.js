// Example React component using the todoService

import React, { useState, useEffect } from 'react';
import todoService from '../../services/TodoService';

const TodoComponent = () => {
  const [todos, setTodos] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');

  useEffect(() => {
    // Fetch all todos when the component mounts
    todoService.getAllTodos().then((data) => setTodos(data));
  }, []);

  const handleCreateTodo = async () => {
    try {
      const newTodo = await todoService.createTodo(newTaskName, false);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTaskName(''); // Clear the input after creating a new todo
    } catch (error) {
      // Handle error
    }
  };

  const handleUpdateTodo = async (id, newStatus) => {
    try {
      await todoService.updateTodo(id, newStatus);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, status: newStatus } : todo
        )
      );
    } catch (error) {
      // Handle error
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await todoService.deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task name"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button onClick={handleCreateTodo}>Create Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} - {todo.status ? 'Completed' : 'Incomplete'}
            <button onClick={() => handleUpdateTodo(todo.id, !todo.status)}>
              Toggle Status
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;

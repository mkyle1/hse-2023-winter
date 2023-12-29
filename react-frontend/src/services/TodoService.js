// src/services/todoService.js

import axios from 'axios';

const API_URL = 'http://localhost:3001/todos'; // Update with your NestJS server URL

const todoService = {
  createTodo: async (task, status) => {
    try {
      const response = await axios.post(API_URL, { task, status });
      return response.data;
    } catch (error) {
      console.error('Error creating todo:', error);
      throw error;
    }
  },

  getAllTodos: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error getting todos:', error);
      throw error;
    }
  },

  updateTodo: async (id, status) => {
    try {
      const response = await axios.put(API_URL, { id, status });
      return response.data;
    } catch (error) {
      console.error('Error updating todo:', error);
      throw error;
    }
  },

  deleteTodo: async (id) => {
    try {
      const response = await axios.delete(API_URL, { data: { id } });
      return response.data;
    } catch (error) {
      console.error('Error deleting todo:', error);
      throw error;
    }
  },
};

export default todoService;

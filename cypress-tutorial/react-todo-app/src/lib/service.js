import axios from './axios';

export const saveTodo = todo => axios.post('/todos', todo);

export const loadTodos = () => axios.get('/todos');

export const destroyTodo = id => axios.delete(`/todos/${id}`);

export const updateTodo = todo => axios.put(`/todos/${todo.id}`, todo);

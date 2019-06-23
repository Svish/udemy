import React, { useState, useCallback } from 'react';

interface Todo {
  text: string;
  complete: boolean;
}

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback(
    (text: string) => setTodos([...todos, { text, complete: false }]),
    [todos, setTodos]
  );

  const removeTodo = useCallback(
    (index: number) => setTodos(todos.filter((_, i) => i !== index)),
    [todos, setTodos]
  );

  const completeTodo = useCallback(
    (index: number) =>
      setTodos(
        todos.map((todo, i) => {
          if (i === index) todo.complete = !todo.complete;
          return todo;
        })
      ),
    [todos, setTodos]
  );

  const handleSubmit: React.FormEventHandler = useCallback(
    e => {
      e.preventDefault();
      addTodo(value);
      setValue('');
    },
    [value, setValue, addTodo]
  );

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
      <section>
        {todos.map((todo, i) => (
          <div key={i} style={{ opacity: todo.complete ? 0.5 : 1 }}>
            <button
              onClick={() => completeTodo(i)}
              aria-label="Toggle complete"
            >
              ✔
            </button>{' '}
            <button onClick={() => removeTodo(i)} aria-label="Remove">
              -
            </button>{' '}
            <span
              style={{ textDecoration: todo.complete ? 'line-through' : '' }}
            >
              {todo.text}
            </span>
          </div>
        ))}
      </section>
    </>
  );
};

export default App;

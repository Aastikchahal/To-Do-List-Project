import { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, addTodo, toggleComplete, deleteTodo, editTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button className='add' type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;


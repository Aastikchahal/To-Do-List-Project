import { useState } from 'react';
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import './index.css';

function App() {
 
  const [todos, setTodos] = useState([]);

 
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false, id: Date.now() }]);
  };

  // Function to toggle completion status of a to-do
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to delete a to-do
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to edit an existing to-do
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div>
      <Header />
      <ToDoList 
        todos={todos} 

        addTodo={addTodo}

        toggleComplete={toggleComplete}

        deleteTodo={deleteTodo} 
        
        editTodo={editTodo} 
      />
    </div>
  );
}

export default App;


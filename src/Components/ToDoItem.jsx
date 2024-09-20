import { useState } from 'react';

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={todo.completed ? 'completed' : ''}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className='save' onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{ flex: 1 }}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.completed ? '✓ ' : ''}{todo.text}
          </span>
          <button className="edit" onClick={handleEdit}>Edit</button>
          <button className='delete' onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default ToDoItem;


import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);
    const [descriptionValue, setDescriptionValue] = useState(task.description || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, descriptionValue, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" 
    value={value} 
    onChange={(e) => setValue(e.target.value)}
     className="todo-input"
      placeholder='Update task' />

    <input
        type="text"
        value={descriptionValue}
        onChange={(e) => setDescriptionValue(e.target.value)}
        className="todo-input"
        placeholder="Update description"
      />

    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}
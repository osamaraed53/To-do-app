import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, addNewTasks } from "../redux/TodoSlice";

const TodoForm = () => {
 
 
const dispatch = useDispatch();
  // const tasks = useSelector((state) => state.tasks);

  // useEffect(()=>{
  //     dispatch(fetchTasks());
  // },[dispatch]);

  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "low",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim() === "") {
      return;
    }
    // Create an object with the new post data
    const newTaskData = {
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
    };

    dispatch(addNewTasks(newTaskData));
    setTask({ title: "", description: "", dueDate: "", priority: "low" });
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        className="todo-input"
        placeholder="What is the task today?"
      />
      <input
        type="text"
        name="description"
        value={task.description}
        onChange={handleChange}
        className="todo-input"
        placeholder="Description"
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="todo-input"
        placeholder="date"
      />
      <label>
        Priority:
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};


export default TodoForm;
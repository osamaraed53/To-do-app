// const editTodo = (id) => {
//   setTodos(
//     todos.map((todo) =>
//       todo.id === id ?  : todo
//     )
//   );
// };

import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, deleteTaskData, updateTaskData } from "../redux/TodoSlice";
import { current } from "@reduxjs/toolkit";

const TodoList = () => {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);

  const [isEdit, setIsEdit] = useState(true);
  const [id_toEdit, setId_toEdit] = useState(0);
  const tasks = useSelector((state) => state.tasks.tasks);
  console.log("zzzzzzzzzzzzzzzzzzzzzzz", tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const deleteTodo = (id) => {
    dispatch(deleteTaskData(id));
  };

  const formData = useRef(undefined);

  const handleChange = (e) => {
    const { name, value } = e.target;
    formData.current = { ...formData.current, [name]: value };
    // console.log("osama raed alnobani", data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Title:", formData.title);
    console.log("Updated Description:", formData.description);
    console.log("soskoakskosa0", formData.current);
    dispatch(
      updateTaskData(id_toEdit, {
        title: formData.current.title,
        description: formData.current.description,
        dueDate: "275760-06-05",
        priority: "higt",
        id: id_toEdit,
      })
    );
    
    setIsEdit(false);
    setId_toEdit(undefined)
  };

  return (
    <div>
      {tasks.map((task) => (
        <div className="Todo" key={task.id}>
          <p className={`${task.completed ? "completed" : "incompleted"}`}>
            {/* onClick={() => toggleComplete(task.id)}> */}
            {task.title}
          </p>
          <p className="description">{task.description}</p>
          <div>
            <FontAwesomeIcon
              className="edit-icon"
              icon={faPenToSquare}
              onClick={() => {
                setId_toEdit(task.id);
                setIsEdit(true);
              }}
            />

            {isEdit && task.id == id_toEdit && (
              <>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                  <button type="submit">Update</button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEdit(false);
                    }}
                  >
                    Cancel
                  </button>
                </form>
              </>
            )}

            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrash}
              onClick={() => {
                deleteTodo(task.id);
                setFlag(!flag);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

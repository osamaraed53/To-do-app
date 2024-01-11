import React, { useState } from "react";
import TodoList from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import { useDispatch } from "react-redux";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  // const dispatch = useDispatch();

  // const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <>
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm task={todo} />
        ) : (
          <TodoList key={todo.id} task={todo} />
        )
      )}
    </>
  );
};
// import React, { useState, useEffect } from 'react';
// import { TodoForm } from './TodoForm';
// import { Todo } from './Todo';
// import { EditTodoForm } from './EditTodoForm';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
// uuidv4();

// export const TodoWrapperAxios = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const response = await axios.get('https://your-api-endpoint/todos');
//       setTodos(response.data);
//     } catch (error) {
//       console.error('Error fetching todos:', error);
//     }
//   };

//   const addTodo = async (todo) => {
//     try {
//       const response = await axios.post('https://your-api-endpoint/todos', {
//         task: todo,
//         completed: false,
//         isEditing: false,
//       });

//       setTodos([...todos, response.data]);
//     } catch (error) {
//       console.error('Error adding todo:', error);
//     }
//   };

//   const toggleComplete = async (id) => {
//     try {
//       const updatedTodo = await axios.put(`https://your-api-endpoint/todos/${id}`, {
//         completed: !todos.find((todo) => todo.id === id).completed,
//       });

//       setTodos((prevTodos) =>
//         prevTodos.map((todo) => (todo.id === id ? updatedTodo.data : todo))
//       );
//     } catch (error) {
//       console.error('Error updating todo:', error);
//     }
//   };

//   const deleteTodo = async (id) => {
//     try {
//       await axios.delete(`https://your-api-endpoint/todos/${id}`);
//       setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//     } catch (error) {
//       console.error('Error deleting todo:', error);
//     }
//   };

//   const editTodo = (id) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
//       )
//     );
//   };

//   const editTask = async (task, id) => {
//     try {
//       const updatedTodo = await axios.put(`https://your-api-endpoint/todos/${id}`, {
//         task,
//         isEditing: !todos.find((todo) => todo.id === id).isEditing,
//       });

//       setTodos((prevTodos) =>
//         prevTodos.map((todo) => (todo.id === id ? updatedTodo.data : todo))
//       );
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   return (
//     <div className='TodoWrapper'>
//       <h1>Get Things Done!</h1>
//       <TodoForm addTodo={addTodo} />
//       {todos.map((todo, index) =>
//         todo.isEditing ? (
//           <EditTodoForm key={index} editTodo={editTask} task={todo} />
//         ) : (
//           <Todo
//             key={index}
//             task={todo}
//             toggleComplete={toggleComplete}
//             deleteTodo={deleteTodo}
//             editTodo={editTodo}
//           />
//         )
//       )}
//     </div>
//   );
// };

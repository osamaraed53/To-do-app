import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// task reducers
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    setTask: (state, action) => {
      state.tasks = action.payload;
    },
    addNewTask: (state, action) => {
      state.status = "succeeded";
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.data = state.data.filter((task) => task.id !== action.payload.id);
    },
    updateTask: (state, action) => {
      const { id, title, description } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.title = title;
        taskToUpdate.description = description;
      }
    },
  },
});

export const { addNewTask, setTask, deleteTask, updateTask } =
  tasksSlice.actions;

// Async thunk to fetch tasks from the API
export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/task");
    const tasks = response.data;
    dispatch(setTask(tasks));
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

// Async thunk to add a task to the API
export const addNewTasks = createAsyncThunk(
  "tasks/addNewTask",
  async (newTask, { dispatch }) => {
    try {
      const response = await axios.post("http://localhost:3001/task", newTask);
      const newTaskData = response.data;
      dispatch(addNewTask(newTaskData));
    } catch (error) {
      console.error("Error adding new task:", error);
    }
  }
);

// Async thunk to delete a task to the API
export const deleteTaskData = createAsyncThunk(
  "tasks/deleteTask",
  async (id, { dispatch }) => {
    try {
      await axios.delete(`http://localhost:3001/task/${id}`);
      dispatch(deleteTask(id));
    } catch (error) {
      console.error("Error deleting  task:", error);
    }
  }
);

export const updateTaskData = (id, new_data) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://localhost:3001/task/${id}`,
      new_data
    );
    dispatch(updateTask(response.data));
  } catch (error) {
    console.error("Error update task:", error);
  }
};



export default tasksSlice.reducer;

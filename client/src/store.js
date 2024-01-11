import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./redux/TodoSlice";

const rootReducer = {
  tasks: tasksSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

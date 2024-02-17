import { configureStore } from "@reduxjs/toolkit";
import salesReducer from "./salesSlice";
import tasksReducer from "./tasksSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    sales: salesReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import todoSlice from "./domain/Todo/todoSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoSlice,
  },
});

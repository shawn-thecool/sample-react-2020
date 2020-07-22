import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        id: "todo0",
        category: 0,
        txt: "categroy0-todo0",
      },
      {
        id: "todo1",
        category: 1,
        txt: "categroy1-todo1",
      },
      {
        id: "todo2",
        category: 2,
        txt: "categroy2-todo2",
      },
    ],
  },
  reducers: {
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id !== action.payload.id ? todo : { ...todo, ...action.payload }
      );
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { updateTodo, deleteTodo } = todoSlice.actions;

export const selectTodos = (state) => state.todo.todos;

export default todoSlice.reducer;

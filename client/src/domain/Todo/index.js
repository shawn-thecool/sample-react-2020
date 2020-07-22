import React from "react";
import { useSelector } from 'react-redux';
import TodoSearchBar from "./TodoSearchBar";
import TodoList from "./TodoList";
import { selectTodos } from "./todoSlice";

export default function Todo() {
  const todos = useSelector(selectTodos);

  return (
    <div className="wrap_todo">
      <TodoSearchBar />
      <TodoList todos={todos} />
    </div>
  );
}

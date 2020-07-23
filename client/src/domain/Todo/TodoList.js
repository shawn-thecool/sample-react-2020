import React from "react";
import TodoItemCategory from "./TodoItemCategory";
import TodoItemDefault from "./TodoItemDefault";

export default function TodoList({ todos }) {
  return (
    <ul className="list_todo">
      {todos.map((todo) => {
        switch (todo.category) {
          case 0:
            return <TodoItemDefault key={todo.id} todo={todo} />;
          case 1:
            return <TodoItemCategory key={todo.id} todo={todo} />;
          default:
            return <TodoItemDefault key={todo.id} todo={todo} />;
        }
      })}
    </ul>
  );
}

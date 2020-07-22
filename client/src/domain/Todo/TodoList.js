import React from "react";
import TodoItemCategory from "./TodoItemCategory";
import TodoItemDefault from "./TodoItemDefault";

export default function TodoList({ todos }) {
  return (
    <ul className="list_todo">
      {todos.map((todo) => {
        if (todo.category === 0)
          return <TodoItemDefault key={todo.id} todo={todo} />;
        if (todo.category === 1)
          return <TodoItemCategory key={todo.id} todo={todo} />;
        return <TodoItemDefault key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}

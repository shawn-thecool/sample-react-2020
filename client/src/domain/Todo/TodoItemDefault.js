import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "./todoSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  // handlers
  const updateHndr = (e) => {
    return dispatch(updateTodo({ ...todo, ...{ txt: "updated" } }));
  };

  const deleteHndr = (e) => {
    return dispatch(deleteTodo(todo));
  };

  return (
    <li>
      <span>{todo.txt}</span>
      <button type="button" onClick={updateHndr}>
        update
      </button>
      <button type="button" onClick={deleteHndr}>
        delete
      </button>
    </li>
  );
}

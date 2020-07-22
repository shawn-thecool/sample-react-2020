import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todo from "./domain/Todo";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Todo />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


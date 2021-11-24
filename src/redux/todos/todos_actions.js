//import types from "./todos_types";
import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

// const addTodo = (text) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     text: text,
//     completed: false,
//   },
// });

const addTodo = createAction("todos/add", (text) => ({
  payload: {
    id: shortid.generate(),
    text: text,
    completed: false,
  },
}));
console.log(addTodo);

// const deleteTodo = (todoId) => ({
//   type: types.DELETE,
//   payload: todoId,
// });
const deleteTodo = createAction("todos/delete");

// const filteredTodo = (value) => ({
//   type: types.FILTERED,
//   payload: value,
// });

const filteredTodo = createAction("todos/filtered");

const toggleCompleted = createAction("todos/completed");

export default { addTodo, deleteTodo, filteredTodo, toggleCompleted };

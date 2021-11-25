//import types from "./todos_types";
import { createAction } from "@reduxjs/toolkit";
//import shortid from "shortid";




export const addTodoRequest = createAction("todos/addTodoRequest");
export const addTodoSuccess = createAction("todos/addTodoSuccess");
export const addTodoError = createAction("todos/addTodoError");

// const addTodo = createAction("todos/add", (text) => ({
//   payload: {
//     id: shortid.generate(),
//     text: text,
//     completed: false,
//   },
// }));
// console.log(addTodo);

// const deleteTodo = (todoId) => ({
//   type: types.DELETE,
//   payload: todoId,
// });
export const deleteTodo = createAction("todos/delete");

// const filteredTodo = (value) => ({
//   type: types.FILTERED,
//   payload: value,
// });

export const filteredTodo = createAction("todos/filtered");

export const toggleCompleted = createAction("todos/completed");



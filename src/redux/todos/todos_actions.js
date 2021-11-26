//import types from "./todos_types";
import { createAction } from "@reduxjs/toolkit";
//import shortid from "shortid";




export const addTodoRequest = createAction("todos/addTodoRequest");
export const addTodoSuccess = createAction("todos/addTodoSuccess");
export const addTodoError = createAction("todos/addTodoError");




export const deleteTodoRequest = createAction("todos/deleteTodoRequest");
export const deleteTodoSuccess = createAction("todos/deleteTodoSuccess");
export const deleteTodoError = createAction("todos/deleteTodoError");


export const toggleCompletedRequest = createAction("todos/toggleCompletedRequest");
export const toggleCompletedSuccess = createAction("todos/toggleCompletedSuccess");
export const toggleCompletedError = createAction("todos/toggleCompletedError");

export const filteredTodo = createAction("todos/filtered");





import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
//import types from "./todos_types";
import {addTodoRequest, addTodoSuccess, addTodoError, deleteTodoRequest, deleteTodoSuccess, deleteTodoError, filteredTodo, toggleCompletedRequest, toggleCompletedError, toggleCompletedSuccess } from "./todos_actions";

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter((todo) => todo.id !== payload);

//     default:
//       return state;
//   }
// };

const items = createReducer([], {
  [addTodoSuccess] : (state, action) => [...state, action.payload],
  [deleteTodoSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
  [toggleCompletedSuccess]: (state, action) => 
    state.map((todo) =>
      todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo
    ),
});

const loading = createReducer(false, {
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
  [deleteTodoSuccess]: () => false,
  [deleteTodoError]: ()=> false,
  [deleteTodoRequest]: () => true,
  [toggleCompletedSuccess]: () => false,
  [toggleCompletedError]: ()=> false,
  [toggleCompletedRequest]: () => true,
  
});
const filter = createReducer("", {
  [filteredTodo]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});

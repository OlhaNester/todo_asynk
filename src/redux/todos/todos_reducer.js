import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
//import types from "./todos_types";
import actions from "./todos_actions";

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
  [actions.addTodo]: (state, action) => [...state, action.payload],
  [actions.deleteTodo]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
  [actions.toggleCompleted]: (state, action) =>
    state.map((todo) =>
      todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo
    ),
});

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case 'todos/filtered':
//       return payload;

//     default:
//       return state;
//   }
// };
const filter = createReducer("", {
  [actions.filteredTodo]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

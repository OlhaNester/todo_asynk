import React from "react";
import "./TodoList.js";
import "./TodoList.css";
import classNames from "classnames";
import { connect } from "react-redux";
//import * as todosActions from "../redux/todos/todos_actions";
import todosOperation from "../redux/todos/todos-operation.js";

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames("TodoList_item", {
          TodoList_item_completed: completed,
        })}
      >
        <input
          type="checkbox"
          className="TodoList_checkbox"
          checked={completed}
          onChange={() => onToggleCompleted({id, completed: !completed})}
        />

        <p className="TodoList_text">{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

const getVisibleTodos = (allTodos, filter) => {
  const normalizedFiltered = filter.toLowerCase();
  return allTodos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFiltered)
  );
};

// const mapStateToProps = (state) => {
//   const { filter, items } = state.todos;
//   const visibleTodos = getVisibleTodos(items, filter);
//   return {
//     todos: visibleTodos,
//   };
// };

const mapStateToProps = ({ todos: { items, filter } }) => ({
  todos: getVisibleTodos(items, filter),
});
const mapDispatchToProps = {
  onToggleCompleted: todosOperation.toggleCompleted,
  onDeleteTodo: todosOperation.deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

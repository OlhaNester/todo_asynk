import React from "react";
import { connect } from "react-redux";
import todosActions from "../redux/todos/todos_actions";

const Filter = ({ value, onChange }) => (
  <label>
    Фильтр по имени
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);
const mapStateToProps = (state) => ({
  value: state.todos.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(todosActions.filteredTodo(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

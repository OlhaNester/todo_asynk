import React from "react";
import { connect } from "react-redux";

const Stat = ({ totalTodo, complitedTodo }) => {
  return (
    <div>
      <p>Общее кол-во {totalTodo}</p>
      <p> Кол-во выполненных {complitedTodo}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  totalTodo: state.todos.items.length,
  complitedTodo: state.todos.items.reduce(
    (acc, todo) => (todo.completed ? acc + 1 : acc),
    0
  ),
});

export default connect(mapStateToProps)(Stat);

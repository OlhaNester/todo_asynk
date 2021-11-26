import axios from 'axios';
import {
  addTodoRequest, addTodoError, addTodoSuccess,
  deleteTodoRequest, deleteTodoError, deleteTodoSuccess,
  toggleCompletedRequest, toggleCompletedError, toggleCompletedSuccess
} from './todos_actions'

axios.defaults.baseURL = 'http://localhost:4040';

const addTodo = (text) => dispatch => {
  const todo = {
    text: text,
    completed: false,
  };

  dispatch(addTodoRequest());

  axios.post(`http://localhost:4040/todos`, todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error =>dispatch(addTodoError(error)));
};

const deleteTodo = id => dispatch => {
  dispatch(deleteTodoRequest());

  axios.delete(`http://localhost:4040/todos/${id}`)
    .then(() => dispatch(deleteTodoSuccess(id)))
    .catch(error => dispatch(deleteTodoError(error)));
};

const toggleCompleted = ({ id, complited }) => dispatch => {
  const update = {complited};
  dispatch(toggleCompletedRequest());
  
  axios.patch(`http://localhost:4040/todos/${id}`, update).then(({ data }) => data);
}

export default {
    addTodo, deleteTodo, toggleCompleted,
};
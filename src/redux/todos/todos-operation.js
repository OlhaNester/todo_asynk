import axios from 'axios';
import {addTodoRequest, addTodoError, addTodoSuccess} from './todos_actions'

axios.defaults.baseURL = 'http://localhost:4040';

const addTodo = (text) => dispatch => {
  const todo = {
    text: text,
    completed: false,
  };

  dispatch(addTodoRequest);

  axios.post('http://localhost:4040/todos', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error =>dispatch(addTodoError(error)));
};

export default {
    addTodo
};
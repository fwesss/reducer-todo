import React from 'react';
import { Paper } from '@material-ui/core';

import Todo from '../components/Todo';

const TodoList = ({ state, dispatch }) => {
  return (
    <Paper>
      {state.todos.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </Paper>
  );
};

export default TodoList;

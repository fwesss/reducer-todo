import React, { FunctionComponent } from 'react';
import { Paper } from '@material-ui/core';

import Todo from '../components/Todo';
import State from '../interfaces/State';

type TodoListProps = {
  readonly state: State;
  readonly dispatch: React.Dispatch<{ readonly type: string }>;
};

const TodoList: FunctionComponent<TodoListProps> = ({ state, dispatch }) => {
  return (
    <Paper>
      {state.todos.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </Paper>
  );
};

export default TodoList;

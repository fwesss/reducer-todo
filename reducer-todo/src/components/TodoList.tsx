// React
import React, { FunctionComponent } from 'react';
// UI
import { Paper } from '@material-ui/core';
// Interfaces
import State from '../interfaces/State';
// Containers
import TodoContainer from '../containers/TodoContainer';

// Prop types
type TodoListProps = {
  readonly state: State;
  readonly dispatch: React.Dispatch<{ readonly type: string }>;
};

const TodoList: FunctionComponent<TodoListProps> = ({ state, dispatch }) => (
  <Paper>
    {state.todos.map(todo => (
      <TodoContainer key={todo.id} todo={todo} dispatch={dispatch} />
    ))}
  </Paper>
);

export default TodoList;

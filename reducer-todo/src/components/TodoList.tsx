// React
import React, { FunctionComponent } from 'react';
// UI
import { Paper, Box, Typography, List } from '@material-ui/core';
// Types
import { State } from '../types';
// Containers
import TodoContainer from '../containers/TodoContainer';

// Prop types
type TodoListProps = {
  readonly state: State;
  readonly dispatch: React.Dispatch<{ readonly type: string }>;
};

const TodoList: FunctionComponent<TodoListProps> = ({ state, dispatch }) => (
  <Paper elevation={2}>
    <Box p={2} m={2}>
      {state.todos.length > 0 ? (
        <List>
          {state.todos.map(todo => (
            <TodoContainer key={todo.id} todo={todo} dispatch={dispatch} />
          ))}
        </List>
      ) : (
        <Typography variant="h5">Everything is done! Congrats!</Typography>
      )}
    </Box>
  </Paper>
);

export default TodoList;

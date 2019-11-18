import React, { useReducer } from 'react';
import { Container } from '@material-ui/core';

import { appReducer, initialState } from '../reducers/todos';

import TodoList from './TodoList';
import TodoForm from '../components/TodoForm';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <Container>
      <TodoList state={state} dispatch={dispatch} />
      <TodoForm dispatch={dispatch} />
    </Container>
  );
};

export default App;

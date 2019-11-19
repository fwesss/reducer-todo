// React
import React, { useReducer } from 'react';
// UI
import { Container } from '@material-ui/core';
// Reducers
import { appReducer, initialState } from '../reducers/todos';
// Containers
import TodoFormContainer from './TodoFormContainer';
// Components
import TodoList from '../components/TodoList';

const AppContainer: React.FC = () => {
  // Container state
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <Container>
      <TodoList state={state} dispatch={dispatch} />
      <TodoFormContainer dispatch={dispatch} />
    </Container>
  );
};

export default AppContainer;

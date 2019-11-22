/**
 * This is a comment on the file
 */

/** imports */
// React
import React, { useReducer } from 'react';
// UI
import { Container } from '@material-ui/core';
// Reducers
import { appReducer, initialState } from '../reducers/todos';
// Containers
import TodoFormContainer from './TodoFormContainer';
// Components
import NavBar from '../components/NavBar';
import TodoList from '../components/TodoList';

/**
 * This is a comment for the AppContainer function
 */
const AppContainer: React.FC = () => {
  // Container state
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <Container>
      <NavBar />
      <TodoList state={state} dispatch={dispatch} />
      <TodoFormContainer dispatch={dispatch} />
    </Container>
  );
};

export default AppContainer;

// React
import React, { FunctionComponent } from 'react';
// Components
import Todo from '../components/Todo';
// Actions
import { TOGGLE_TODO } from '../actions/todos';

// Prop types
type TodoContainerProps = {
  readonly todo: {
    readonly completed: boolean;
    readonly item: string;
    readonly id: number;
  };
  readonly dispatch: React.Dispatch<{ readonly type: string; readonly id: number }>;
};

const TodoContainer: FunctionComponent<TodoContainerProps> = ({ todo, dispatch }) => {
  // Container functions
  const handleClick = (): void => dispatch({ type: TOGGLE_TODO, id: todo.id });

  return <Todo handleClick={handleClick} todo={todo} />;
};

export default TodoContainer;

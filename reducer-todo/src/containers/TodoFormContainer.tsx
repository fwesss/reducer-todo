// React
import React, { FunctionComponent, SyntheticEvent, useState } from 'react';
// Components
import TodoForm from '../components/TodoForm';
// Actions
import { ADD_TODO, CLEAR_COMPLETED } from '../actions/todos';

// Prop types
type TodoFormContainerProps = {
  readonly dispatch: React.Dispatch<{
    readonly type: string;
    readonly id?: number;
    readonly item?: string;
  }>;
};

const TodoFormContainer: FunctionComponent<TodoFormContainerProps> = ({ dispatch }) => {
  // Container state
  const [value, setValue] = useState('');

  // Container functions
  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, id: new Date().getTime(), item: value });
    setValue('');
  };

  const handleChange = (e: {
    readonly target: { readonly value: React.SetStateAction<string> };
  }): void => setValue(e.target.value);

  const handleClear = (): void => dispatch({ type: CLEAR_COMPLETED });

  return (
    <TodoForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      value={value}
      handleClear={handleClear}
    />
  );
};

export default TodoFormContainer;

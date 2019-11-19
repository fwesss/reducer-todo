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
  const [open, setOpen] = useState(false);
  const [valid, setValid] = useState(true);

  const handleOpen = (): void => setOpen(true);

  const handleClose = (): void => {
    setOpen(false);
    setValid(true);
  };

  // Container functions
  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    if (value === '') {
      setValid(false);
    } else {
      setValid(true);
      dispatch({ type: ADD_TODO, id: new Date().getTime(), item: value });
      setValue('');
    }
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
      open={open}
      valid={valid}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  );
};

export default TodoFormContainer;

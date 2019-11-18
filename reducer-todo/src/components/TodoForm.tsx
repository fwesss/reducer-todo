import React, { FunctionComponent, SyntheticEvent, useState } from 'react';
import { Button, TextField } from '@material-ui/core';

type TodoFormProps = {
  readonly dispatch: React.Dispatch<{
    readonly type: string;
    readonly id?: number;
    readonly item?: string;
  }>;
};

const TodoForm: FunctionComponent<TodoFormProps> = ({ dispatch }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', id: new Date().getTime(), item: value });
    setValue('');
  };

  const handleChange = (e: {
    readonly target: { readonly value: React.SetStateAction<string> };
  }): void => {
    return setValue(e.target.value);
  };

  const handleClear = (): void => {
    return dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Add todo"
          variant="filled"
          onChange={handleChange}
          value={value}
          fullWidth
        />
      </form>
      <Button onClick={handleClear}>Clear Completed</Button>
    </>
  );
};

export default TodoForm;

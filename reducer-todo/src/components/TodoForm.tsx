// React
import React, { FunctionComponent, SyntheticEvent } from 'react';
// UI
import { Box, Button, TextField } from '@material-ui/core';

// Prop types
type TodoFormProps = {
  readonly handleSubmit: { (e: SyntheticEvent): void };
  readonly handleChange: {
    (e: { readonly target: { readonly value: React.SetStateAction<string> } }): void;
  };
  readonly value: string;
  readonly handleClear: { (): void };
};

const TodoForm: FunctionComponent<TodoFormProps> = ({
  handleSubmit,
  handleChange,
  value,
  handleClear
}) => (
  <Box>
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
  </Box>
);

export default TodoForm;

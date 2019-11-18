import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const TodoForm = ({ state, dispatch }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', id: new Date(), item: value });
    setValue('');
  };

  const handleChange = e => {
    return setValue(e.target.value);
  };

  const handleClear = () => {
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

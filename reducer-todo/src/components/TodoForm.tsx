// React
import React, { FunctionComponent, SyntheticEvent } from 'react';
// UI
/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  FormHelperText,
  TextField
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

// Prop types
type TodoFormProps = {
  readonly handleSubmit: { (e: SyntheticEvent): void };
  readonly handleChange: {
    (e: { readonly target: { readonly value: React.SetStateAction<string> } }): void;
  };
  readonly value: string;
  readonly handleClear: { (): void };
  readonly open: boolean;
  readonly valid: boolean;
  readonly handleOpen: { (): void };
  readonly handleClose: { (): void };
};

const TodoForm: FunctionComponent<TodoFormProps> = ({
  handleSubmit,
  handleChange,
  value,
  handleClear,
  open,
  valid,
  handleOpen,
  handleClose
}) => (
  <Box>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Todo</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            error={!valid}
            label="Add todo"
            variant="filled"
            onChange={handleChange}
            value={value}
            fullWidth
            helperText={valid ? '' : 'Please enter a todo'}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>

    <Fab
      css={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
      color="primary"
      aria-label="add"
      onClick={handleOpen}
    >
      <AddIcon />
    </Fab>
    <Button css={{ margin: '2rem 0' }} color="secondary" variant="outlined" onClick={handleClear}>
      Clear Completed
    </Button>
  </Box>
);

export default TodoForm;

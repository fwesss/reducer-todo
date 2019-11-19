// React
import React, { FunctionComponent } from 'react';
// UI
import { Fade, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

// Prop types
type TodoProps = {
  readonly handleClick: { (): void };
  readonly todo: {
    readonly completed: boolean;
    readonly item: string;
    readonly id: number;
  };
};

const Todo: FunctionComponent<TodoProps> = ({ handleClick, todo }) => (
  <Fade in>
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
        {todo.completed ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />}
      </ListItemIcon>
      <ListItemText>{todo.item}</ListItemText>
    </ListItem>
  </Fade>
);

export default Todo;

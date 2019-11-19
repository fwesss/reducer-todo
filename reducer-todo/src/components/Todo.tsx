// React
import React, { FunctionComponent } from 'react';
// UI
import { Card, CardActionArea, CardHeader } from '@material-ui/core';

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
  <Card raised={!todo.completed}>
    <CardActionArea onClick={handleClick}>
      <CardHeader title={todo.item} />
    </CardActionArea>
  </Card>
);

export default Todo;

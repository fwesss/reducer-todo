import React, { FunctionComponent } from 'react';
import { Card, CardActionArea, CardHeader } from '@material-ui/core';

type TodoProps = {
  readonly todo: {
    readonly completed: boolean;
    readonly item: string;
    readonly id: number;
  };
  readonly dispatch: React.Dispatch<{ readonly type: string; readonly id: number }>;
};

const Todo: FunctionComponent<TodoProps> = ({ todo, dispatch }) => {
  const handleClick = (): void => {
    return dispatch({ type: 'TOGGLE_TODO', id: todo.id });
  };

  return (
    <Card raised={!todo.completed}>
      <CardActionArea onClick={handleClick}>
        <CardHeader title={todo.item} />
      </CardActionArea>
    </Card>
  );
};

export default Todo;

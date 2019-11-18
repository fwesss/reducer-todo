import React from 'react';
import { Card, CardActionArea, CardHeader } from '@material-ui/core';

const Todo = ({ todo, dispatch }) => {
  const handleClick = () => {
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

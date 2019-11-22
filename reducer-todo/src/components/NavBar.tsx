import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const NavBar: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h5">Todo List</Typography>
    </Toolbar>
  </AppBar>
);

export default NavBar;

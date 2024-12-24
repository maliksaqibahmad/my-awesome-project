import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Navigation: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Diary
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/diary">
          Diary
        </Button>
        <Button color="inherit" component={Link} to="/budget">
          Budget
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
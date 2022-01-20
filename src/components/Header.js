import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


const Header = ({todos}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>          
        <Avatar alt="Remy Sharp" src="/iekalogo.png" variant="square" sx={{ width: 160, height: 66 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping List
          </Typography>
            {(todos.filter(todo => todo.completed === false)).length} items remain to buy
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default  Header;
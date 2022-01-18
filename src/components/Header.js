import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';


export default function Header({todos}) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
        <Avatar alt="Remy Sharp" src="/iekalogo.png" variant="square" sx={{ width: 76, height: 66 }}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping List
          </Typography>
            {(todos.filter(todo => todo.completed === false)).length} items to be done
        </Toolbar>
      </AppBar>
    </Box>
  );
}

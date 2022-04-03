import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default  function Header() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>          
        <img alt="Remy Sharp" src="https://monir2022.github.io/Ikea-shopping-list/iekalogo.png" style={{ width: 160, height: 66 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <h2> Welcome to Ikea</h2>
          <h3> Here you can creat a todo list for the items you wish to buy. Also, you can delete and mark the product when you have bought it</h3>
          </Typography>           
        </Toolbar>
      </AppBar>
    </Box>
  );
}


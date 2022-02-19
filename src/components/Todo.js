import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import Delete from "@mui/icons-material/Delete";
import React from "react";

const Todo= ({ todo, toggleComplete, removeTodo })=> {  

    
  return (
    <ListItem >
      <Checkbox checked={todo.completed} onClick={()=>{toggleComplete(todo.id)}} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
         {todo.task}:{todo.price} SEK        
      </Typography>
      <IconButton onClick={()=>{removeTodo(todo.id)}}>
        <Delete/>
      </IconButton>
      <img src={imageURL} alt="Thumbnail of the product" />
    </ListItem>
  );
}
export default Todo;
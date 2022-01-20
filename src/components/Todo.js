import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import Delete from "@mui/icons-material/Delete";
import React from "react";

const Todo= ({ todo, toggleComplete, removeTodo })=> {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  }

  const handleRemoveClick = ()=> {
    removeTodo(todo.id);
  }
  
  return (
    <ListItem >
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
         {todo.task}:{todo.price} SEK        
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <Delete/>
      </IconButton>
    </ListItem>
  );
}
export default Todo;
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import Delete from "@mui/icons-material/Delete";
import React from "react";
/*
import Image from 'mui-image'
import readFile from "../scripts/readFile";
import resizeImage from "../scripts/resizeImage";
import { uploadFile } from "../scripts/cloudStorage"; */

export default function Todo({ todo, toggleComplete, removeTodo }) {
  /*
  async function onAddImage(event) {
    // Step 1: Get file
    const file = event.target.files[0]; // instant

    // Step 2: Generate unique filename
    const uniqueId = new Date().getTime(); // instant
    const filename = `thumbnail-${uniqueId}.png`; // instant

    // Step 3: Resize image
    const image = await readFile(file); // either 0.5 or 1 seconds or more???
    const resizedImage = await resizeImage(image, 88, 88);

    // Step 4: Upload the image AND return the URL
    const imageURL = await uploadFile(resizedImage, filename);

    // Step 5: Store the imageURL
    const clonedItem = { ...todo };

    clonedItem.imageURL = imageURL;
   setTodo{...todo, clonedItem}; */

  return (
    <ListItem>
      <Checkbox
        checked={todo.completed}
        onClick={() => {
          toggleComplete(todo.id);
        }}
      />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}:{todo.price} SEK
      </Typography>
      <IconButton
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        <Delete />
      </IconButton>
    </ListItem>
  );
}

import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v1 as uuid } from "uuid";

export default function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    price: "",
    imageURL: " ",
    completed: false,
  });

  function handleTaskInputChange(event) {
    setTodo({ ...todo, task: event.target.value });
  }

  function handlePriceInputChange(event) {
    setTodo({ ...todo, price: event.target.value });
  }
  

  function handleSubmit(event){
    event.preventDefault();   
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: " ", price: " " });
    } 

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Ex: chair"
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <TextField
        label="Ex: 500:-"
        type="number"
        name="price"
        value={todo.price}
        onChange={handlePriceInputChange}
      />
      <Button type="submit">Add to the list</Button>
    </form>
  );
}

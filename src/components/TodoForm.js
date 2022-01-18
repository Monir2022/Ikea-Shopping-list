import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import {v1 as uuid} from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    price: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: e.target.value });
  }

  function handlePriceInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, price: e.target.value });
  }


  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "", price: "" });
      
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Name"
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <TextField
        label="price"
        type="number"
        min={11}
        max={20}
        name="price"
        value={todo.price}
        onChange={handlePriceInputChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default TodoForm;
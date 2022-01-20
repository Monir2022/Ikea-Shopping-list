import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import {v1 as uuid} from "uuid";

const TodoForm =({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    price: "",
    completed: false,
  });

  const handleTaskInputChange=(e) => {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: e.target.value });
  }

  const handlePriceInputChange = (e)=> {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, price: e.target.value });
  }


  const handleSubmit=(e) => {
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
        name="price"
        value={todo.price}
        onChange={handlePriceInputChange}
      />
      <Button type="submit">Add to the list</Button>
    </form>
  );
}

export default TodoForm;
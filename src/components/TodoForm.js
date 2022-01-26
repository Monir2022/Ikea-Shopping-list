import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v1 as uuid } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    price: "",
    completed: false,
  });

  // Bad abbreviations -1 (use the full word event not e, e alone can mean Eduardo, event, emitter, error, Ecuador, empadada 🥟, equation, etc, etc)
  // Comments -1
  // If you need only the event.target.value then pass that avoiding the need of an explanation
  // This method will be refactor to reflect the change.
  // But because you are material design you cannot fully controll what the component sends you, showcasing the limitations of pre made templates.
  const handleTaskInputChange = (newValue) => {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: newValue });
  };

  const handlePriceInputChange = (e) => {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, price: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "", price: "" });
    }
  };

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
};

export default TodoForm;

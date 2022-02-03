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
    setTodo({ ...todo, task: e.target.value });    
  }

  const handlePriceInputChange = (e)=> {

    if(e.target.value > 0){
      setTodo({ ...todo, price: e.target.value });
    } else 
         alert("Price need to be a positive number")     
          
  }


  const handleSubmit=(e) => {
    e.preventDefault(); 
    if (todo.task.trim() && todo.price.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: " ", price: "" });      
    }
    else
        alert("You need to fillup both the fields")
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
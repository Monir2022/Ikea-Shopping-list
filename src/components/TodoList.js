import { List } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleComplete, title }) {
  // If the title is always empty then why is needed, meaning you can remove the <h1> entirely.
  // And if you dont need the H1, then you can return the List directly.
  return (
    <div className="ourcenter">
      <h1>{title}</h1>
      <List>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </List>
    </div>
  );
}

export default TodoList;

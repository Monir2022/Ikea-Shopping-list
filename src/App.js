import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Button from "@mui/material/Button";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const App = () => {
  // Too many local states in a single file is a code smell of this component doing too much
  // And thus needs to be broken down into smaller components
  const [todos, setTodos] = useState([]);
  const [view, setview] = useState(false);
  const [viewForm, setViewForm] = useState(false);
  const [buttonText, setButtonText] = useState("View Form to Add Item");
  const [buttonComplete, setButtonComplete] = useState("Show");

  /**
   * If you need to add comments to explain the difference between the first and second useEffect(),
   * then you need to extract the logic inside each to separate functions and the function name alone
   * should explain what each one does.
   */

  useEffect(() => {
    // No need to add unncesary comments -1
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // No need to add unncesary comments -1
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    // No need to add unncesary comments -1
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  };

  const showHide = () => {
    setview(!view);
    !view ? setButtonComplete("Hide") : setButtonComplete("Show");
  };

  const formShowHide = () => {
    setViewForm(!viewForm);

    !viewForm
      ? setButtonText("Hide Form")
      : setButtonText("View Form to Add Item");
  };

  /**
   * Nesting -1
   * You have a function calling other function
   * A loop passed as an argument
   * And if statement inside
   */
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // This return JSX is too long -1
  // The reason is that you are setting up to much stuff here
  // You can group elements into sub components to fix it

  return (
    <div className="App">
      <Header todos={todos} />

      <Button
        style={{ marginTop: "40px", borderRadius: "20px" }}
        variant="contained"
        onClick={formShowHide}
      >
        {/* Use CSS for handling space -1 */} {buttonText}{" "}
      </Button>
      {viewForm && <TodoForm addTodo={addTodo} />}

      {/* Number of arguments -1 */}
      {/* If title is empty here and on the TodoList below then why does it exist?  */}
      {todos.length > 0 ? (
        <TodoList
          title=" "
          todos={todos.filter((todo) => todo.completed === false)}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ) : (
        <h1>Please Add Item</h1>
      )}

      <Button
        style={{ marginTop: "40px", borderRadius: "20px" }}
        variant="contained"
        onClick={showHide}
      >
        {" "}
        {buttonComplete} Completed task{" "}
      </Button>

      {view && (
        <TodoList
          title=" "
          todos={todos.filter((todo) => todo.completed === true)}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      )}
    </div>
  );
};

export default App;


import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Button from '@mui/material/Button';


const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [view, setview] = useState(false);
  const [viewForm, setViewForm] = useState(false);
  const [buttonText, setButtonText] = useState("View Form to Add Item");
  const [buttonComplete, setButtonComplete] = useState("Show");

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    
  }, [todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }
  function showHide() {
    setview(!view);
    !view ? setButtonComplete("Hide") : setButtonComplete("Show");
    
  }

  function formShowHide() {
    setViewForm(!viewForm);
     !viewForm ? setButtonText("Hide Form") : setButtonText("View Form to Add Item");
     
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <Header todos={todos}/>
        
        <Button style={{marginTop:"10px"}} variant="contained" onClick={formShowHide} > {buttonText} </Button>
      
        {viewForm && <TodoForm addTodo={addTodo} />}



      {todos.length>0 ? (<TodoList
        title = "Yet to Done"
        todos={todos.filter(todo => todo.completed === false)}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />): <h1>Please Add Item</h1>}




     <Button variant="contained" onClick={showHide}> {buttonComplete} completed Task</Button>

     {view && (<TodoList
        title = "Completed Task"
        todos={todos.filter(todo => todo.completed === true)}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />)}



    </div>
  );
}

export default App;


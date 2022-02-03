
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Button from '@mui/material/Button';
import SortProducts from "./components/SortProducts";
const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [viewForm, setViewForm] = useState(false);
  const [buttonText, setButtonText] = useState("View Form to Add Item on the list");  
  const [view, setview] = useState(false);
  const [buttonComplete, setButtonComplete] = useState("Show");
  

  useEffect(() => {    
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {   
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));       
  },[todos]);

/* 
const addTodo = (todo) => {
  const updatedTodo = [...todos, todo];
  setTodos(updatedTodo)
}

*/


  const addTodo =(todo) => { 
    let checked= true;
    todos.forEach(td=>{
       if(td.task===todo.task){
        checked= false;
        alert("This item is already on the list")
       }
    })
    if(checked){
      const updatedTodos = [...todos, todo];
      setTodos(updatedTodos);
    }
  
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos);
  };

  const toggleComplete = (id)=> {
    const updatedTodos = todos.map(todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
     setTodos(updatedTodos);
    };
    

 
  const showHide = () => {
    setview(!view);
    !view ? setButtonComplete("Hide") : setButtonComplete("Show");
    
  };

  const formShowHide = () => {
    setViewForm(!viewForm);
     !viewForm ? setButtonText("Hide Form") : setButtonText("View Form to Add Item");     
  };

  return (
    <div className="App">
      <Header/>             
      <Button style={{marginTop:"40px", borderRadius: "20px"}} variant="contained" onClick={formShowHide} > {buttonText} </Button>      
      {viewForm && <TodoForm addTodo={addTodo} />}

      { todos.length > 0 ? (<TodoList        
        todos={todos.filter(todo => todo.completed === false)}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />) : (<h1>No item to show</h1>)}


      
      <Button style={{marginTop:"40px", borderRadius: "20px"}} variant="contained" onClick={showHide}> {buttonComplete} Completed task </Button>

      {view && (<TodoList        
        todos={todos.filter(todo => todo.completed === true)}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
                />)}
                     
                           
      <SortProducts todos ={todos} setTodos={setTodos}/>


     
    </div>
  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import { CreateTodo } from "../src/Components/create-todo.component";
import { EditTodo } from "../src/Components/edit-todo.component";
import { TodosList } from "../src/Components/todo-list.component";

function App() {
  return (
    <Router>
    <div className="container">
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <a className="navbar-brand" href="https://www.google.com" target="_blank">
<img src={logo} width="30" height="30" alt="google.com"/>
</a>
<Link to ="/" className="navbar-brand">MERN-Stack Todo App</Link>
  <ul className="navbar-nav mr-auto">
    <li className="navbar-item">
    <Link to ="/" className="nav-link">Todos</Link>
    </li>
    <li className="navbar-item">
    <Link to ="/create" className="nav-link">Create Todo</Link>
    </li>
  </ul>
</nav>
    <Route path="/" exact component={TodosList}/>
    <Route path="/edit/:id" exact component={EditTodo}/>
    <Route path="/create" exact component={CreateTodo}/>
    </div>

    </Router>
  );
}

export default App;

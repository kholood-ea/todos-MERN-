import React, { Component,useState,useEffect } from 'react'
import { Link  } from "react-router-dom";
import axios from "axios";
import {  EditTodo} from "./edit-todo.component";
// export const Todo = (params) => {
//     console.log(params)
//     return(
//         <tr>
//             <td>{params.todo_description}</td>
//             <td>{params.todo.todo_responsible}</td>
//             <td>{params.todo.todo_priority}</td>
//             <td>{params.todo.todo_completed}</td>
// <td><Link to={"/edit/"+params.todo._id}>Edit</Link></td>
//         </tr>
//     )
// }


export const TodosList = () => {
    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:4000/todos')
        .then(res=>setTodos(res.data))
            // console.log(res.data))
       .catch(err => console.log(err))
    }, [todos])
    return(
        <div>
            <h3>Todos List</h3>
            <table className="table table-striped" style={{marginTop:20}}>
<thead>
    <tr>
     <th>Description</th>   
     <th>Responsible</th> 
     <th>Priority</th>
      <th>Action</th>   
    </tr>
</thead>
<tbody>
    {todos.map(todo=>(
        <tr>
         <td className={todo.todo_completed ?'completed':''}>{todo.todo_description}</td>   
         <td className={todo.todo_completed ?'completed':''}>{todo.todo_responsible}</td>   
         <td className={todo.todo_completed ?'completed':''}>{todo.todo_priority}</td>
         <td><Link to={"/edit/"+todo._id}>Edit</Link></td>         
        </tr>
        ))}
</tbody>
            </table>
        </div>
    )
    
}

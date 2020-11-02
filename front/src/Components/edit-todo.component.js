import React, { Componen,useState,useEffect } from 'react'
import axios  from "axios";
import { useHistory } from "react-router";
export const EditTodo = (props) => {

    const [todo,setTodo] = useState({
        todo_description:'',
    todo_responsible:'',
    todo_priority:'',
    todo_completed:false
    })
    const history = useHistory();

useEffect(() => {
    axios.get('http://localhost:4000/todos/'+ props.match.params.id)
    .then(res=>{
        setTodo({
             todo_description:res.data.todo_description,
             todo_responsible:res.data.todo_responsible,
             todo_priority:res.data.todo_priority,
             todo_completed:res.data.todo_completed
            });
    })
    .catch(err=>console.log(err))
   
}, [])

const onChangeTodoDescription=(e)=>{
    setTodo((prevState) => ({
        ...prevState, todo_description:e.target.value}));
}
const onChangeTodoResponsible=(e)=>{
    setTodo((prevState) => ({
        ...prevState, todo_responsible:e.target.value}));
}
const onChangeTodoPriority=(e)=>{
    setTodo((prevState) => ({
        ...prevState, todo_priority:e.target.value}));
}
const onChangeTodoCompleted=(e)=>{
    setTodo((prevState) => ({
        ...prevState, todo_completed:!todo.todo_completed}));
}


const onSubmit=(e)=>{
    e.preventDefault();
    const obj={
        todo_description:todo.todo_description,
        todo_responsible:todo.todo_responsible,
        todo_priority:todo.todo_priority,
        todo_completed:todo.todo_completed 
    }
        axios.post('http://localhost:4000/todos/update/'+ props.match.params.id,obj)
        .then(res=>console.log(res.data))

history.push('/');
}
const deleteTodo=()=>{
    axios.delete('http://localhost:4000/todos/delete/'+ props.match.params.id)
    .then(res=>console.log(res.data))

history.push('/');
}

    return(
        <div>
<h3> Update Todo</h3>  
<form onSubmit={onSubmit}>
<div className="form-group"> 
<label>Description</label>
<input type="text"
className="form-control"
value={todo.todo_description}
onChange={onChangeTodoDescription}
/>
</div>
<div className="form-group"> 
<label>Responsible</label>
<input type="text"
className="form-control"
value={todo.todo_responsible}
onChange={onChangeTodoResponsible}
/>
</div>
<div className="form-group">
                    <div className="form-check from-check-inline">
                    <input type="radio" 
                    className="form-check-input"
                    name="priorityOptions"
                    id="priorityLow"
                    value="Low"
                    checked={todo.todo_priority==='Low'}
                    onChange={onChangeTodoPriority}/>
                    <label className="form-check-label">Low</label>
                   </div>
                 <div className="form-check from-check-inline">
                    <input type="radio" 
                    className="form-check-input"
                    name="priorityOptions"
                    id="priorityMedium"
                    value="Medium"
                    checked={todo.todo_priority==='Medium'}
                    onChange={onChangeTodoPriority}/>
                    <label className="form-check-label">Medium</label>
                </div>
                 <div className="form-check from-check-inline">
                    <input type="radio" 
                    className="form-check-input"
                    name="priorityOptions"
                    id="priorityHigh"
                    value="High"
                    checked={todo.todo_priority==='High'}
                    onChange={onChangeTodoPriority}/>
                    <label className="form-check-label">High</label>
                </div>
                <div className="form-check">
      </div>
      <div>              
                    <input type="checkbox"
                     className="form-check-input"
                      id="completedCheckbox" 
                      onChange={onChangeTodoCompleted} 
                      checked={todo.todo_completed}
               value={todo.todo_completed}/>
               <label className="form-check-label" htmlFor="completedCheckbox">Completed</label>
               </div>
               <br/>

               <div className="form-group">
                   <input type="submit" value="Update Todo" className="btn btn-primary"/>
               </div>
               <div className="form-group">
                   <button className="btn btn-danger" onClick={deleteTodo}> Delete Todo</button>
               </div>
                </div>

                

</form>
          </div>
    )
    
}
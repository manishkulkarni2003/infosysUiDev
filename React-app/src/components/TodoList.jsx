import { useState } from "react";

const TodoList=()=>{
    const[todo,setTodo]=useState([]);
    const [inputValue,setInputValue] =useState("");

    const handleTodo=()=>{
        if(inputValue.trim()!==""){
            setTodo([...todo,{id:Date.now(),text:inputValue}]);
            setInputValue("")
        }
    }
    const handleDelete=(id)=>{
        setTodo(todo.filter((item)=>item.id!==id));
    }

    return(
        <div className="todo">
            <label htmlFor="Input">
                <input type="text" id="Input" placeholder="Enter your task" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            </label>
            <div>
            <button onClick={handleTodo}>Add</button>
            <ul>
            {todo.map((item)=>{
                 return (
                 <li key={item.id}>{item.text}
                 <button onClick={()=>handleDelete(item.id)}>Delete</button>
                 </li>)
                 
                 
            })}
            
            </ul>
            </div>
        </div>
    )
}

export default TodoList;
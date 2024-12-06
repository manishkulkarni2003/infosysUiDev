import { useState } from "react";

const TodoList=()=>{
    const[todo,setTodo]=useState([]);
    const [inputValue,setInputValue] =useState("");

    const handleTodo=()=>{
        if(inputValue.trim()!==""){
            setTodo([...todo,{text:inputValue}]);
            setInputValue("")
        }
    }
    const handleDelete=()=>{
        setTodo([]);
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
                 <li>{item.text}</li>
            })}
            <button onClick={handleDelete}>Delete</button>
            </ul>
            </div>
        </div>
    )
}

export default TodoList;
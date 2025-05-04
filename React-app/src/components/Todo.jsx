import {useState} from 'react'
const Todo=()=>{

    const [todo,setTodo]=useState([])
    const[input,setInput]=useState("")

    const handleTodo=()=>{
        if(input.trim()!==""){
             const newTodo = { id: Date.now(), text: input };
      const updatedTodos = [...todo, newTodo];
      setTodo(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setInput("");
        }
    }
    return(
        <div>
            <input placeholder="Write Something" value={input}  onChange={(e)=>{
            setInput(e.target.value)
            }}/>
            <button onClick={handleTodo}>Add</button>
            <ul>
                {
                todo.map((item)=>(
                    <li key={item.id}>{item.text}</li>
                ))

                    
                }</ul>
            </div>
    )
        
}

export default Todo;

import { useState } from "react";

const Todo=()=>{

    const [inputvalue,setInputvalue]=useState("");

    
    return(
        <>
        <div>
            <form onSubmit={handleTodo}></form>
            <input type="text" name="" id="" value={inputvalue} onChange={(e)=>{
                setInputvalue(e.target.value)
                
            }} />
            <button type='submit' >
                Add Todo
            </button>
        </div>

        </>
    )
}

export default Todo;
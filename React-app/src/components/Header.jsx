import { useState } from "react"
import ChildComponentHeader from "./ChildComponentHeader"



const Header=()=>{
    const[count,setCount]=useState(0)

    const hanldeIncrement=()=>{
        setCount(count+1)
    }
    const handleDecrement=()=>{
        setCount(count-1)
    }


    return(
        
        <>
        <p>Count:{count}</p>
        <ChildComponentHeader handleIncrement={hanldeIncrement} 
        handleDecrement={handleDecrement}/>
        </>
        
    )
}

export default Header;
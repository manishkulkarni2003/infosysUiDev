import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
  const Menu =["Roti","Naan","Paneer","dal","biryani","Aloo","Puri"];
  let name ="Manish"
  const [count,setCount] =useState(0);

  const handleChangeINcrement=()=>{
    setCount(count+1);
  }
  const handleChangeDecrement=()=>{
    setCount(count-1);
  }
  return (
    <>
    <Navbar name={name}/> {/*Sending Props to Child */}
    <div className='app'>
      <div>Menu:</div>
    
    <div className='Menu'>
    {Menu.map((menu,index)=>
      <li key={index}>{menu}</li>
    )}
    </div>
    
    </div>
    <div className='btn'>
      <button onClick={handleChangeDecrement}>-</button>
      <div>{count}</div>
    <button onClick={handleChangeINcrement} >+</button>
    <button onClick={()=>{
      setCount(0);
    }}>Reset</button>
    </div>
    <TodoList/>
    </>
  )
}

export default App

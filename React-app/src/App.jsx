import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';

function App() {
  const Menu =["Roti","Naan","Paneer","dal","biryani","Aloo","Puri"];
  let name ="Manish"
  const [count,setCount] =useState(0);

  const handleChange=()=>{
    setCount(count+1);
  }
  return (
    <>
    <Navbar name={name}/> {/*Sending Props to Child */}
    <div className='app'>
      <div>Menu:</div>
    
    <div className='Menu'>
    {Menu.map((menu)=>
      <li>{menu}</li>
    )}
    </div>
    
    </div>
    <div className='btn'>
    <button onClick={handleChange} >Add Quantity</button>
    <div>{count}</div>
    </div>
    </>
  )
}

export default App

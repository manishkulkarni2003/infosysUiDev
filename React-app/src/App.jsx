import { useEffect, useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import Search from './components/Search';
import Api from './components/Api';
import Header from './components/Header';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Tictactoe from './components/Tictactoe';
import Classcomponent from './components/Classcomponent';



function App() {
  const Menu = ["Roti", "Naan", "Paneer", "Dal", "Biryani", "Aloo", "Puri"];
  const name = "Manish";
  const [count, setCount] = useState(0);

  const handleChangeIncrement = () => {
    setCount(count + 1);
  };
  const handleChangeDecrement = () => {
    setCount(count - 1);
  };

  // const getAllRest = async () => {
  //   try {
  //     const response = await fetch("https://tiny-blue-vulture-shoe.cyclic.app/burgers", {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     const res = await response.json();
  //     console.log(res);
  //   } catch (error) {
  //     console.error("Error fetching data:", error.message);
  //   }
  // };

  // useEffect(() => {
  //   getAllRest();
  // }, []);

  
  const [isDarkMode,setIsDarkMode]=useState(false)
  

    const toggleTheme=()=>{
      setIsDarkMode(!isDarkMode)
    }
  
  return (
    <div className={isDarkMode?"dark-mode":"light-mode"}>
      <button className='theme' onClick={toggleTheme}>{isDarkMode?"Switch To Light-Mode":"Switch To Dark MOde"}</button>
      <h1>{isDarkMode?"Dark Mode Enabled":"Light MOde is Enabled"}</h1>
      <Navbar name={name} /> {/* Sending Props to Child */}
      

      <div className="app">
        <div>Menu:</div>
        <div className="Menu">
          {Menu.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </div>
      </div>
      <div className="btn">
        <button onClick={handleChangeDecrement}>-</button>
        <div>{count}</div>
        <button onClick={handleChangeIncrement}>+</button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
      <Routes>
        <Route path="/tictactoe" element={<Tictactoe/>} />
        <Route path="/todo" element={<TodoList/>} />
        <Route path="/api" element={<Api/>} />
        <Route path='/class' element={<Classcomponent/>} />

        </Routes>
     
      
      
      
    </div>
  );
}

export default App;

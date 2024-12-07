import { useEffect, useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import Search from './components/Search';
import Api from './components/Api';

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

  return (
    <>
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
      <TodoList />
      <Search/>
      <Api/>
    </>
  );
}

export default App;

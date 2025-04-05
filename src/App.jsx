import { useState } from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  function addCart(idt, cnt = 1){
    const item = {
      id: idt,
      count: cnt
    };

    setCart((prev) => [...prev, item]);
  }

  function handleCart(id, newCount){
    setCart(prev => 
      prev.map(item => item.id === id ? {...item, count: newCount} : item)
     );
  }

  return(
    <>
      <Header />
      <Outlet context={{cart, addCart, handleCart}} />
    </>
  )
}

export default App;

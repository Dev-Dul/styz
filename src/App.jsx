import { useState, useEffect } from 'react'
import Header from './Components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import getData from './Components/Handlers'
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

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

 useEffect(() => {
  async function fetchdata() {
    try{
      const result = await getData();
      if(result instanceof Error){
        setError(result);
      }else{
        setItems(result);
      }
    }catch(err){
      setError(err);
    }finally{
      console.log("done fetching!");
      setLoading(false);
    }
  }

   if(location.pathname === "/shop" && items.length === 0){
    console.log("inside effect")
    fetchdata();
  }
    
 }, [location.pathname]);

  return(
    <>
      <Header />
      <Outlet context={{cart, addCart, handleCart, items, loading, error }} />
    </>
  )
}

export default App;

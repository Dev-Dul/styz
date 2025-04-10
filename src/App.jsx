import { useState, useEffect } from 'react'
import Header from './Components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import getData from './Components/Handlers'
import './App.css';

function App() {
  const [cart, setCart] = useState(() => {
    // Load cart from sessionStorage on mount
    const savedCart = sessionStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

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
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

 useEffect(() => {
  async function fetchdata() {
    try{
      const result = await getData();
      if(result instanceof Error){
        setError(result);
        setItems([]);
      }else{
        setItems(result || []);
      }
    }catch(err){
      setError(err);
      setItems([]);
    }finally{
      setLoading(false);
    }
  }

   if(location.pathname === "/shop" && items.length === 0){
    fetchdata();
  }
    
 }, [location.pathname]);

  return(
    <>
      <Header cart={cart} />
      <Outlet context={{cart, addCart, setCart, handleCart, items, loading, error, location }} />
    </>
  )
}

export default App;

import styles from '../Styles/Header.module.css'
import { useNavigate } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from 'react';
function Header(){
  const [delay, setDelay] = useState("7s");
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setDelay("3s");
    }, 2000);
  }, []);

    return (
      <div className={styles.header} style={{animationDelay: delay}}>
        <div className={styles.title}>
          <h2>Styz</h2>
        </div>
        <div className={styles.icons}>
          <FaHome title="Home" size={20} onClick={() => navigate('/')}/>
          <FaShoppingBag title="Shop" size={20} onClick={() => navigate('shop')}/>
          <FaShoppingCart title="Cart" size={20} onClick={() => navigate('cart')}/>
        </div>
      </div>
    );
}

export default Header;
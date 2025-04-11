import styles from '../Styles/Header.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

function Header({cart}){
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const navigate = useNavigate();
  const check = cart.length !== 0;

  useEffect(() => {
    const root = document.getElementById("root");
    
    
    if(darkMode){
      root.style.setProperty("--bg-color", "#080808");
      root.style.setProperty("--text-color", "#f7fafc");
      root.style.setProperty("--shadow", "#f7fafc80");
      localStorage.setItem("theme", "dark");
    }else{
      root.style.setProperty("--bg-color", "#ffffff");
      root.style.setProperty("--text-color", "#000");
      root.style.setProperty("--shadow", "#08080880");
      localStorage.setItem("theme", "light");
    }

  }, [darkMode]);

    return (
      <div className={styles.header}>
        <button className={styles.toggle} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FiSun title="sun" size={20} /> : <FiMoon title="sun" size={20} />}
        </button>
        <div className={styles.title}>
          <h2>Styz</h2>
        </div>
        <div className={styles.icons}>
          <FaHome title="Home" size={20} onClick={() => navigate("/")} />
          <FaShoppingBag
            title="Shop"
            size={20}
            onClick={() => navigate("shop")}
          />
          <span className={styles.cart}>
            <FaShoppingCart
              title="Cart"
              size={20}
              onClick={() => navigate("cart")}
            />
            {check && <span className={styles.num}>{cart.length}</span>}
          </span>
        </div>
      </div>
    );
}

export default Header;
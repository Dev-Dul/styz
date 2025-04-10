import styles from '../Styles/Header.module.css'
import { useNavigate } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { span } from 'framer-motion/client';
function Header({cart}){
  const navigate = useNavigate();
  const check = cart.length !== 0;

    return (
      <div className={styles.header} >
        <div className={styles.title}>
          <h2>Styz</h2>
        </div>
        <div className={styles.icons}>
          <FaHome title="Home" size={20} onClick={() => navigate('/')}/>
          <FaShoppingBag title="Shop" size={20} onClick={() => navigate('shop')}/>
          <span className={styles.cart}> 
            <FaShoppingCart title="Cart" size={20} onClick={() => navigate('cart')}/>
            {check && <span className={styles.num}>{cart.length}</span>}
          </span>
        </div>
      </div>
    );
}

export default Header;
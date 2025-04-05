import styles from '../Styles/Header.module.css'
import { useNavigate } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
function Header( {header} ){
  const navigate = useNavigate();

    return (
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>Styz</h2>
        </div>
        <div className={styles.icons}>
          <FaHome title="Home" size={20} onClick={() => navigate('/')}/>
          <FaShoppingBag title="Shop" size={20} onClick={() => navigate('shop')}/>
          <FaShoppingCart title="Cart" size={20} onClick={() => navigate('checkout')}/>
        </div>
      </div>
    );
}

export default Header;
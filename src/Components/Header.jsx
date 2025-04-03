import styles from '../Styles/Header.module.css'
import { FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
function Header( {header} ){
    return (
      <div className={`${styles.header} ${header ? styles.active : ""}`}>
        <div className={styles.title}>
          <h2>Styz</h2>
        </div>
        <div className={styles.icons}>
          <FaHome title="Home" size={20}/>
          <FaShoppingBag title="Shop" size={20}/>
          <FaShoppingCart title="Cart" size={20}/>
        </div>
      </div>
    );
}

export default Header;
import { useState } from 'react';
import styles from '../Styles/Card.module.css'
function Card(){
    const [flipped, setFlipped] = useState(false);
    const [quantity, setQuantity] = useState(0);
    function handleFlip(){
        setFlipped(true);
        handleAdd();
    }
    const handleAdd = () => setQuantity(quantity + 1);
    function handleDecrease(){
        if(quantity > 0){
            setQuantity(quantity - 1);
        }
    }

    return (
      <div className={styles.card}>
        <div className={styles.img}>
            <img src={null} />
        </div>
        <div className={styles.info}>
            <h2>Title</h2>
            <div className={styles.flip}>
                <button onClick={handleFlip}>Add to Cart</button>
                <div className={`${styles.add} ${flipped ? styles.front : styles.back}`}>
                    <button className={styles.btns} onClick={handleAdd}>+</button>
                    <input type="text" className={styles.input} value={quantity} />
                    <button className={styles.btns} onClick={handleDecrease}>-</button>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Card;
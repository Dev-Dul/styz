import { useState } from 'react';
import styles from '../Styles/Card.module.css'
function Card(props){
    const [flipped, setFlipped] = useState(false);
    const [quantity, setQuantity] = useState(0);
    function handleFlip(){
        setFlipped(true);
        handleAdd();
    }

    function handleAdd(){
        if(quantity === 0) props.context.addCart(props.id);
        const newQtt = quantity + 1;
        setQuantity(newQtt);
        props.context.handleCart(props.id, newQtt);
    }

    function handleDecrease(){
        if(quantity > 0){
            const qtt = quantity - 1;
            setQuantity(qtt);
            props.context.handleCart(props.id, qtt);
        }
    }

    return (
      <div className={styles.card}>
        <div className={styles.img}>
            <img src={props.img} className={styles.image}/>
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
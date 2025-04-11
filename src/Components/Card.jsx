import { useState, useEffect } from 'react';
import styles from '../Styles/Card.module.css';
function Card(props){
    const storedQuantity = sessionStorage.getItem(`quantity-${props.id}`);
    const storedFlipped = sessionStorage.getItem(`flipped-${props.id}`);

    const [flipped, setFlipped] = useState(storedFlipped === "true");
    const [quantity, setQuantity] = useState(storedQuantity ? parseInt(storedQuantity) : 0);

    useEffect(() => {
      sessionStorage.setItem(`quantity-${props.id}`, quantity);
    }, [quantity, props.id]);

    useEffect(() => {
      sessionStorage.setItem(`flipped-${props.id}`, flipped);
    }, [flipped, props.id]);

    
    function handleFlip(){
        setFlipped(true);
        handleAdd();
    }

    function handleAdd(){
        if(quantity === 0) props.context.addCart(props.id);
        console.log(quantity);
        console.log(flipped);
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

    function handleChange(e){
        const val = parseInt(e.target.value);
        if(val !== 0){
            setQuantity(val);
            props.context.handleCart(props.id, val);
        }
    }

    const name = props.title.slice(0, 18) + "...";
    return (
      <div className={styles.card}>
        <div className={styles.img}>
            <img src={props.img} className={styles.image}/>
        </div>
        <div className={styles.info}>
            <h2>{name}</h2>
            <div className={styles.flip}>
                <button onClick={handleFlip}>Add to Cart</button>
                <div className={`${styles.add} ${flipped ? styles.front : styles.back}`}>
                    <button className={styles.btns} onClick={handleDecrease}>-</button>
                    <input type="number" className={styles.input} value={quantity} min={1} onChange={handleChange} />
                    <button className={styles.btns} onClick={handleAdd}>+</button>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Card;
import styles from '../Styles/Card.module.css'
function Card(){
    return (
      <div className={styles.card}>
        <div className={styles.img}>
            <img src={null} />
        </div>
        <div className={styles.info}>
            <h2>Title</h2>
            <button>Add to Cart</button>
            <div className={styles.add}>
                <button className={styles.btns} >+</button>
                <input type="text" className={styles.input} />
                <button className={styles.btns} >-</button>
            </div>
        </div>
      </div>
    );
}

export default Card;
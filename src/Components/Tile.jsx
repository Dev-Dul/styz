import styles from '../Styles/Tile.module.css';
function Tile( {image, price, title, count} ){
    const name = title.slice(0, 20) + "...";
    return(
        <div className={styles.tile}>
            <div className={styles.im}>
                <img src={image} alt="product" className={styles.img} />
            </div>
            <div className={styles.deets}>
                <h2>Product: {name}</h2>
                <p>Unit Price: ${price}</p>
                <p>Quantity: {count} </p>
                <p>Total: ${price * count}</p>
            </div>
        </div>
    )
}

export default Tile;
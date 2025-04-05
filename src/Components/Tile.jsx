import styles from '../Styles/Tile.module.css';
function Tile( {image, price, title, count} ){
    // console.log(count);
    return(
        <div>
            <div>
                <img src={image} alt="product" />
            </div>
            <div className={styles.deets}>
                <h2>Product: {title}</h2>
                <p>Unit Price: {price}</p>
                <p>Total: `${price * count}`</p>
            </div>
        </div>
    )
}

export default Tile;
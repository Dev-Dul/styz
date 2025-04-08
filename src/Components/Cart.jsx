import useData from "./Handlers";
import { Link } from "react-router-dom";
import styles from '../Styles/Cart.module.css';
import Tile from '../Components/Tile';
import { useOutletContext } from "react-router-dom";

function Cart(){
    const context = useOutletContext();
    console.log(context);
    
    if(context.cart.length === 0){
        return (
            <div className={styles.oops}>
                <h2>Your Cart's Empty!</h2>
                <p>Seems like you have'nt added anything yet.</p>
                <p>Let's fix that!, find something to level up your swag &nbsp;
                     <Link to="/shop">Here.</Link>
                </p>
            </div>
        )
    }

    const ids = context.cart.map(dt => dt.id);
    const filtered = context.items.filter(elem => ids.includes(elem.id));

    return(
        <div className={styles.cart}>
            {filtered.map((tile, index) => {
                const obj = context.cart.find(item => item.id === tile.id);
                const count = obj.count;
                return <Tile image={tile.image} price={tile.price} title={tile.title} key={index} count={count} />
            })}
        </div>
    )

}

export default Cart;
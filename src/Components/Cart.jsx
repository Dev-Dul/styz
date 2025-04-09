import useData from "./Handlers";
import { Link } from "react-router-dom";
import styles from '../Styles/Cart.module.css';
import Tile from '../Components/Tile';
import { useOutletContext, useNavigate, useLocation, Outlet } from "react-router-dom";

function Cart(){
    const context = useOutletContext();
    const navigate = useNavigate();
    const location = useLocation();

    function handleRemove(id){
        context.setCart((prev) => prev.filter(prod => prod.id !== id));
        sessionStorage.setItem(`quantity-${id}`, 0);
        sessionStorage.setItem(`flipped-${id}`, false);
    }

    function clearCart(){
        sessionStorage.clear();
        context.setCart([]);
    }
    
    if(context.cart.length === 0 || !context.items){
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
    // const filtered = context.items.filter(elem => ids.includes(elem.id));
    const filtered = context.items
      .filter((elem) => ids.includes(elem.id))
      .map((elem) => ({
        ...elem,
        count: context.cart.find((cartItem) => cartItem.id === elem.id)?.count || 0,
      }));
    const total = filtered.reduce((accumulator, item) => accumulator + (item.price * item.count) , 0);

    return(
        <div className={styles.cart}>
            {location.pathname !== "/cart/checkout" && (
                <>
                    <div className={styles.header}>
                        <h2>Total items: {filtered.length}</h2>
                        <h2>Total price: ${total}</h2>
                        <button onClick={clearCart}>Clear Cart</button>
                        <button onClick={() => navigate('/cart/checkout')}>Checkout</button>
                    </div>
                    {filtered.map((tile, index) => {
                        const obj = context.cart.find(item => item.id === tile.id);
                        const count = obj.count;
                        return <Tile image={tile.image} price={tile.price} title={tile.title} key={index} count={count} id={tile.id} handleRemove={handleRemove} />
                    })}
                </>

            )}
            
            <Outlet />
        </div>
    )

}

export default Cart;
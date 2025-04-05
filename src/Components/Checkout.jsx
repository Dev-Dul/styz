import useData from "./Handlers";
import { Link } from "react-router-dom";
import styles from '../Styles/Checkout.module.css';

function Checkout(){
    const { data, loading, error } = useData();
    if(data.length === 0){
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
}

export default Checkout;
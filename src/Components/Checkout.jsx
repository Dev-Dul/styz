import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import styles from "../Styles/Checkout.module.css";
import { Link } from "react-router-dom";

function Checkout(){
    const { width, height } = useWindowSize();
    return (
        <div className={styles.checkout}>
            <Confetti width={width} height={height} />
            <h2>Your Order been successfully processed.</h2>
            <p>Thanks for Shopping with us!</p>
            <p>Time to Own the Look.</p>
            <Link to="/">Return Home</Link>
        </div>
    )
}

export default Checkout;
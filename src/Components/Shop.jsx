import { useState } from "react"
import Card from "./Card";
import styles from '../Styles/Shop.module.css'

function Shop(){
    const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    return(
        <div className={styles.shop}>
            {cards.map((card, index) => {
                return <Card key={index} id={index} />
            })}
        </div>
    )
}

export default Shop;
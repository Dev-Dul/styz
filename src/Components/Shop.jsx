import { useState, useEffect } from "react"
import useData from "./Handlers";
import Loader from "./Loader";
import ErrorPage from "./Error";
import Card from "./Card";
import styles from '../Styles/Shop.module.css'
import { useOutletContext } from "react-router-dom";

function Shop(){
    const {data, loading, error} = useData();
    const context = useOutletContext();
    
    if(loading) return <Loader />
    if(error) return <ErrorPage error={error}/>
    
    return(
        <div className={styles.shop}>
            <div className={styles.header}>
                <button>Go to Cart</button>
            </div>
            {data.map((card, index) => {
                return <Card key={index} id={card.id} img={card.image} title={card.tiltle} price={card.price} context={context}/>
            })}
        </div>
    )
}

export default Shop;
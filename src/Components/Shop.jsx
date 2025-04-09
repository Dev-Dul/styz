import { useState, useEffect } from "react"
import useData from "./Handlers";
import Loader from "./Loader";
import ErrorPage from "./Error";
import Card from "./Card";
import styles from '../Styles/Shop.module.css'
import { useOutletContext } from "react-router-dom";

function Shop(){
    const context = useOutletContext();
    const check = context.location.pathname === '/shop';
    const [animClass, setAnimClass] = useState(false);

     useEffect(() => {
        if(check && !context.loading){
            const timer = setTimeout(() => {
              setAnimClass(true);
            }, 50); 
            return () => clearTimeout(timer); 
        }
    
      }, [location.pathname, check, context.loading]); 
    
    if(context.loading) return <Loader />
    if(context.error) return <ErrorPage error={error}/>
    if(!context.items) return <ErrorPage />
    
    return(
        <div className={`${styles.shop} ${animClass ? styles.anim : ''}`}>
            <div className={styles.header}>
                <button>Go to Cart</button>
            </div>
            {context.items.map((card, index) => {
                return <Card key={index} id={card.id} img={card.image} title={card.title} price={card.price} context={context} />
            })}
        </div>
    )
}

export default Shop;
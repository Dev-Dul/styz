import { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import styles from '../Styles/Section.module.css'
import model from '../assets/Img/model-two.png'
function Section({ sect, handleHeader}){
    if(sect === "first"){
        const text = ["Elegance", "Steeze", "Flair", "We own it!", "Styz"];
        const [index, setIndex] = useState(0);
        const [scroll, setScroll] = useState(false);
        useEffect(() => {
            console.log("first index", index);
            if(index >= text.length - 1){
                setScroll(true);
                handleHeader();                    
                return;
            }

            const timeout = setTimeout(() => {
                console.log(index);
                setIndex((prev) => prev + 1);
            }, 1000);

            return () => {
                console.log("last index", index);
                clearTimeout(timeout);                
            }
        }, [index]);

        return(
            <div className={`${styles.section} ${styles.abs} ${scroll ? styles.scroll: ''}`}>
                <h1 key={index}>{text[index]}</h1>
            </div>
        )
    }

    return (
      <div className={`${styles.section} ${styles.impress}`}>
        <div className={styles.text}>
          <div>
            <h2>When You Shop At Styz,</h2>
            <h2>You Never Fail to Impress.</h2>
            <button className={styles.btn}>
              Shop Now <FaArrowRight size={20} />{" "}
            </button>
          </div>
        </div>
        <div className={styles.wrapper}>
          <img src={model} alt="model" className={styles.img} />
        </div>
      </div>
    );
}

export default Section;
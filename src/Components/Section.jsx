import { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import styles from '../Styles/Section.module.css'
import model from '../assets/Img/model-two.png'
import { useNavigate } from 'react-router-dom';
function Section({ sect }){
    if(sect === "first"){
        const text = ["Elegance", "Steeze", "Flair", "We own it!", "Styz"];
        const [index, setIndex] = useState(0);
        const [scroll, setScroll] = useState(false);
        useEffect(() => {
            console.log("first index", index);
            if(index >= text.length - 1){
                setScroll(true);
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
        }, [index, scroll]);

        return(
            <div className={`${styles.section} ${styles.abs} ${scroll ? styles.scroll: ''}`}>
                <h1 key={index}>{text[index]}</h1>
            </div>
        )
    }

    const navigate = useNavigate();
    return (
      <div className={`${styles.section} ${styles.impress}`}>
        <div className={styles.text}>
          <div>
            <h2>When You Shop At Styz,</h2>
            <h2>You Never Fail to Impress.</h2>
            <button className={styles.btn} onClick={() => navigate("shop")}>
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